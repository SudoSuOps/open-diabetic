# OpenDiabetic NAS Medical Dataset Audit and Developer Access Plan

Status: implementation guide  
Detected NAS mount: `/mnt/swarm` from `192.168.0.102:/volume1/swarm`  
Scale assumption: 400,000+ local medical datasets/files  
Doctrine: local-first, no harvesting, explicit review before training

## Goal

Create a defensible way for developers to discover, request, and use diabetes/medical datasets for fine-tunes, AI agents, LLM evaluation, and local OpenDiabetic workflows without copying raw medical data into git or leaking protected/private data.

The system has three layers:

1. **Dataset catalog**: `datasets/catalog.json` documents source, access level, privacy risk, and use boundaries.
2. **NAS audit CLI**: `npm run datasets -- audit <path>` stream-scans a mounted NAS path and writes manifest shards plus an audit summary.
3. **Developer staging/access packs**: `npm run datasets -- stage <dataset_id>` creates local folders and review files for approved datasets.

## Source-Grounded External Dataset Families

| Dataset | Use | Access | Notes |
|---|---|---:|---|
| CDC NHANES | population health, nutrition, labs, questionnaire variables | public/user agreement | CDC provides questionnaires, datasets, documentation, methods, variables, and limited-access categories. Source: https://wwwn.cdc.gov/nchs/nhanes/Default.aspx |
| CDC BRFSS | lifestyle/risk/chronic condition survey modeling | public | CDC states BRFSS collects state data on health-related risk behaviors, chronic conditions, and preventive service use. Source: https://www.cdc.gov/brfss/index.html |
| UCI Diabetes 130-US Hospitals | tabular ML/readmission benchmark | public CC BY 4.0 | UCI lists 101,766 instances, 47 features, sensitive fields including age/gender/race, and CC BY 4.0. Source: https://archive.ics.uci.edu/dataset/296/diabetes+130-us+hospitals+for+years+1999-2008 |
| PhysioNet MIMIC-IV | credentialed EHR research | credentialed restricted | PhysioNet states MIMIC-IV is credentialed access and derived datasets/models should be treated as sensitive. Source: https://physionet.org/content/mimiciv/ |
| OpenDiabetic local vault-derived | local agent examples, care workflows | private opt-in only | User-owned records; no external use without explicit consent, de-identification, and receipts. |

## Local NAS Dataset Roots Found

Initial discovery found likely dataset/medical roots under `/mnt/swarm`, including:

- `/mnt/swarm/datasets`
- `/mnt/swarm/datasets/swarmchain-datasets`
- `/mnt/swarm/swarmchain-datasets`
- `/mnt/swarm/swarmdeed-finality/medical`
- `/mnt/swarm/swarm-and-bee-datasets/medical`
- `/mnt/swarm/swarm-and-bee-datasets/datasets`
- `/mnt/swarm/operations/medical`
- `/mnt/swarm/cook-source/medical`
- `/mnt/swarm/swarm-dataset-audit`
- `/mnt/swarm/defendable-datasets/datasets`
- `/mnt/swarm/dataset-graph`

Treat all raw local medical datasets as restricted until audited.

## NAS Folder Model For Dataset Operations

Initialize a governed dataset root:

```bash
npm run datasets -- init-nas /mnt/swarm/opendiabetic-datasets
```

This creates:

```text
opendiabetic-datasets/
  00_AUDIT_SUMMARIES/
  01_CATALOG/
  02_STAGED_PUBLIC_DATASETS/
  03_CREDENTIALED_RESTRICTED/
  04_LOCAL_PRIVATE_DATASETS/
  05_DERIVED_DEIDENTIFIED/
  06_SYNTHETIC/
  07_DEVELOPER_ACCESS_PACKS/
  08_RECEIPTS/
  09_DO_NOT_SHARE_RAW/
  90_INBOX_TO_CLASSIFY/
```

## CLI Commands

List cataloged datasets:

```bash
npm run datasets -- list
```

Show one dataset:

```bash
npm run datasets -- show nhanes
npm run datasets -- show mimic-iv
```

Stage a dataset access folder:

```bash
npm run datasets -- stage nhanes /mnt/swarm/opendiabetic-datasets/02_STAGED_PUBLIC_DATASETS
```

Run a sample audit:

```bash
npm run datasets -- audit /mnt/swarm --out data/dataset-audits/sample --limit 1000
```

Run a full NAS audit to the NAS, not local disk:

```bash
npm run datasets -- audit /mnt/swarm --out /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-$(date +%Y%m%d) --shard-size 10000
```

Add sample hashes for fingerprinting without hashing entire large files:

```bash
npm run datasets -- audit /mnt/swarm --out /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-$(date +%Y%m%d)-hash --shard-size 10000 --hash
```

Summarize an audit:

```bash
npm run datasets -- summarize /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-YYYYMMDD
```

## Audit Output

The CLI writes:

```text
audit-summary.json
README.md
manifest-shard-00000.jsonl
manifest-shard-00001.jsonl
...
```

Each manifest row includes:

- relative path
- extension
- size
- modified timestamp
- dataset-like flag
- diabetes keyword hits
- sensitive keyword hits
- risk flag
- optional sample SHA-256 hash

Raw files are not copied.

## Risk Flags

- `unknown`: dataset-like but no keyword signal.
- `diabetes_relevant_review`: diabetes-related signal found.
- `review_required`: sensitive term signal found.
- `high_review_required`: stronger sensitive/clinical signal found.

Risk flags are triage hints, not legal/compliance decisions.

## Developer Access Rule

No developer receives a raw dataset path until these fields are documented:

- source owner
- license/access terms
- PHI/PII status
- allowed use
- blocked use
- retention period
- export/sharing rule
- model training permission
- citation requirement
- receipt ID

## Fine-Tune / Agent Dataset Tiers

### Honey

Clean factual records:

- dataset cards
- variable dictionaries
- non-private public-source facts
- normalized metadata
- source/citation QA

### Jelly

Reasoning examples:

- lifestyle planning decisions
- supply planning workflows
- caregiver update reasoning
- appointment-prep reasoning
- dataset selection rationale

### Propolis

Failure intelligence:

- PHI leakage examples
- invalid sharing attempts
- unsupported medical claims
- diagnosis/dosing boundary violations
- license misuse
- de-identification failures

## Non-Negotiables

- Do not commit raw medical data.
- Do not upload private datasets to external model providers by default.
- Do not train on credentialed/private data without documented permission.
- Do not treat de-identified data as risk-free.
- Do not build diagnosis, dosing, or emergency triage models under OpenDiabetic without a separate regulated-product review.
- Do not use caregiver or patient records for research unless explicitly opted in.

## Immediate Action Plan

1. Initialize `/mnt/swarm/opendiabetic-datasets`.
2. Run a limited audit of `/mnt/swarm` with `--limit 10000` to validate speed and output.
3. Run targeted audits of known medical roots.
4. Review top extension and risk summary.
5. Create dataset cards for top diabetes-relevant candidates.
6. Separate public, credentialed, private, derived, and synthetic data.
7. Create developer access packs only for approved datasets.
8. Convert approved datasets into Honey/Jelly/Propolis examples with receipts.
