# OpenDiabetic Medical Dataset DevOps Flow

Status: operational workflow  
Purpose: prepare medical datasets for ML training, fine-tuning, evaluation, and AI agent development without leaking private health data.

## Operating Principle

OpenDiabetic can provide a serious medical dataset workflow without becoming a medical-data harvesting platform. The dataset system must separate discovery, dedupe, review, staging, training, evaluation, and release.

No dataset is usable for model training until it has a dataset card, source record, PHI/PII review, license review, allowed-use decision, and receipt.

## Current Catalog

Primary catalog file:

```text
datasets/medical_catalog.json
```

Confirmed medical record state:

| Category | Records |
|---|---:|
| Local Synology canonical medical records | 791,807 |
| Remote dedicated medical records | 420,963 |
| Remote exact duplicate medical records | 791,807 |
| Dedicated medical records after exact-file dedupe | 1,212,770 |
| Local mixed/general dataset records | 362,100 |

Exact duplicate groups found:

- `MASTER_GOLD.jsonl` on Synology duplicates `/data2/datasets/swarm-honey/medical/MASTER_GOLD.jsonl` on worker.
- `MASTER_PLATINUM.jsonl` on Synology duplicates `/data2/datasets/swarm-honey/medical/MASTER_PLATINUM.jsonl` on worker.

## Best-in-Class Pattern Inspired By MONAI

MONAI is a useful model for discipline, not a direct replacement for this text-agent dataset stack. The OpenDiabetic flow should borrow these ideas:

- dataset cards and reproducible bundles
- transforms/preprocessing as code
- train/eval separation
- metrics and receipts
- deployment boundaries
- no clinical claims without validation

Official reference: https://monai.io/

## Dataset Lifecycle

### 1. Discover

Commands:

```bash
npm run datasets -- audit /mnt/swarm --out /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-YYYYMMDD --shard-size 10000
npm run datasets -- profile-records /mnt/swarm/swarm-and-bee-datasets/medical --out /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-medical-YYYYMMDD
```

Output:

- file manifest shards
- record profiles
- risk flags
- audit receipts

### 2. Dedupe

Current dedupe method:

- exact SHA-256 by file
- record-count verification
- canonical path selection

Rules:

- Do not delete duplicates automatically.
- Mark duplicates as non-canonical.
- Train from canonical paths only.
- Deduplicate again at row/example level before final training.

### 3. Review

Required review fields:

- source/provenance
- license
- PHI/PII scan
- de-identification status
- intended use
- blocked use
- retention rule
- export rule
- reviewer
- receipt ID

### 4. Stage

Approved datasets go to:

```text
/mnt/swarm/opendiabetic-datasets/07_DEVELOPER_ACCESS_PACKS/
```

Each access pack must include:

```text
dataset_card.md
manifest.json
schema_profile.json
split_plan.json
safety_boundaries.md
receipt.json
```

Raw data can stay in place. Access packs can point to canonical local paths.

### 5. Train

Training jobs must declare:

- dataset IDs
- exact file hashes
- train/eval split
- model family
- hardware target
- max runtime
- output path
- blocked capabilities
- safety eval plan

Training outputs must not include raw record leakage.

### 6. Evaluate

Required eval tracks:

- medical safety refusal tests
- no diagnosis/dosing/triage tests
- source citation behavior
- hallucination tests
- PHI leakage tests
- caregiver/lifestyle support usefulness
- dataset contamination checks

### 7. Release

Release requires:

- model card
- dataset card references
- eval report
- safety boundary
- known limitations
- no raw data in weights release if license/privacy review blocks it

## Compute Grants

OpenDiabetic can offer compute grants after dataset approval.

Hardware pool:

- NVIDIA RTX PRO 6000 Blackwell 96GB systems
- NVIDIA RTX 5090 32GB systems

Grant application needs:

- project name
- intended model/agent
- dataset IDs requested
- exact training objective
- privacy plan
- expected GPU hours
- output license
- safety eval plan
- commitment not to exfiltrate raw data

Preferred jobs:

- local diabetic lifestyle agents
- medical-document organization models
- caregiver update agents
- non-diagnostic education retrieval/evaluation
- synthetic/de-identified dataset generation
- PHI leakage detectors
- safety judges and refusal evaluators

Blocked jobs:

- direct diagnosis systems
- medication dosing systems
- emergency triage systems
- external raw-data uploads
- opaque model releases without dataset/eval cards

## Developer Quick Start

```bash
npm install
npm run datasets -- list
npm run datasets -- show opendiabetic-local-nas-inventory
npm run datasets -- profile-records /mnt/swarm/swarm-and-bee-datasets/medical --out /mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-medical
```

Then request an access pack. Do not train directly from raw paths until approval.
