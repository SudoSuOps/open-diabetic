# OpenDiabetic NAS Dataset Audit Report - 2026-06-19

Scope: mounted Synology/NFS root `/mnt/swarm` plus targeted record profiles for trustcat/minechain/swarm-and-bee related roots  
Detected NAS mount: `192.168.0.102:/volume1/swarm` -> `/mnt/swarm`  
Remote worker requested: `swarm@192.168.0.100`  
Remote status: SSH blocked by authentication (`Permission denied (publickey,password)`)  
Mode: metadata and record-count audit; raw data not copied  
Verdict: `REVIEW_REQUIRED`

## Executive Result

The first generic `/mnt/swarm` metadata scan found thousands of candidate dataset files, but the real scale is record-level inside JSONL datasets. Targeted profiling of the called-out Synology dataset roots confirmed more than one million JSONL records in the audited local roots.

## File-Level Metadata Audit

Output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-20260619-v2`

| Metric | Count |
|---|---:|
| Scanned files | 26,479 |
| Matched dataset-like / medically sensitive files | 6,179 |
| Dataset-like files | 6,094 |
| Diabetes-relevant file-path hits | 90 |
| Review-required files | 183 |
| Manifest shards | 1 |

Top extensions:

| Extension | Count |
|---|---:|
| `.json` | 4,410 |
| `.jsonl` | 1,036 |
| `.md` | 376 |
| `.txt` | 143 |
| `.csv` | 54 |
| `.parquet` | 16 |
| `.pdf` | 15 |
| `.db` | 7 |

## Targeted Record Profiles

### Swarm-and-Bee Medical Root

Root: `/mnt/swarm/swarm-and-bee-datasets/medical`  
Output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-swarm-and-bee-medical-20260619`

| File | Records | Size |
|---|---:|---:|
| `MASTER_PLATINUM.jsonl` | 406,181 | 1,003,619,478 bytes |
| `MASTER_GOLD.jsonl` | 385,626 | 837,134,357 bytes |
| **Total** | **791,807** |  |

### Swarm-and-Bee Datasets Root

Root: `/mnt/swarm/swarm-and-bee-datasets/datasets`  
Output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-swarm-and-bee-datasets-20260619`

| File | Records |
|---|---:|
| `bee_hive_v1_katniss_train_v1.jsonl` | 100,000 |
| `creditsniper_train_clean.jsonl` | 79,910 |
| `receipts_paths/datasets/swarm-honey/grants/validated/receipts.jsonl` | 77,591 |
| `receipts_paths/datasets/swarm-honey/grants-deeds/receipts.jsonl` | 39,435 |
| `receipts_paths/datasets/swarm-honey/finance/validated/receipts.jsonl` | 17,700 |
| `receipts_paths/datasets/swarm-honey/finance-deeds/receipts.jsonl` | 14,364 |
| `swarmjunior_honey.jsonl` | 8,571 |
| `receipts_paths/datasets/swarm-honey/aviation/validated/receipts.jsonl` | 8,536 |
| `failure_intelligence.jsonl` | 5,278 |
| `receipts_paths/datasets/swarm-honey/failure/validated/receipts.jsonl` | 5,274 |
| `receipts_paths/datasets/swarm-honey/failure-deeds/receipts.jsonl` | 5,260 |
| other profiled files | 181 |
| **Total** | **362,100** |

### Trustcat Medical Folder

Root: `/mnt/swarm/defendable-datasets/datasets/medical/trustcat_medical_spine_sft_v1`  
Output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-trustcat-20260619`

The named trustcat medical folder exists, but this pass found `0` files under that exact path. It may be a placeholder, moved dataset, or a path that needs a deeper NAS/source check.

### Minechain Folder

Root: `/mnt/swarm/defendable-datasets/datasets/general/minechain_master_inventory_v1`  
Output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-minechain-20260619`

Profiled one sample JSONL record under `samples/sample.jsonl`.

### Defendable Datasets Root

Root: `/mnt/swarm/defendable-datasets/datasets`  
Output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/records-defendable-datasets-20260619`

| Metric | Count |
|---|---:|
| Scanned files | 56 |
| Profiled files | 11 |
| Total sample records | 11 |

## Confirmed Record Count

| Root | Records |
|---|---:|
| `/mnt/swarm/swarm-and-bee-datasets/medical` | 791,807 |
| `/mnt/swarm/swarm-and-bee-datasets/datasets` | 362,100 |
| `/mnt/swarm/defendable-datasets/datasets` | 11 |
| **Confirmed total** | **1,153,918** |

A direct `wc -l` on the primary medical/swarm JSONL files also confirmed `985,582` records across the first seven high-value JSONL files plus two sample files. The CLI profile is broader because it includes receipt JSONL files under the datasets tree.

## Called-Out Roots Located

- trustcat: `/mnt/swarm/defendable-datasets/datasets/medical/trustcat_medical_spine_sft_v1`
- minechain: `/mnt/swarm/defendable-datasets/datasets/general/minechain_master_inventory_v1`
- swarm-and-bee: `/mnt/swarm/swarm-and-bee-datasets`
- medical: `/mnt/swarm/swarm-and-bee-datasets/medical`, `/mnt/swarm/defendable-datasets/datasets/medical`, `/mnt/swarm/swarmchain/pairs/medical`, `/mnt/swarm/swarmdeed-finality/medical`

## Interpretation

The NAS does contain far more than 400,000 records/examples in the called-out dataset roots. The high-value local dataset mass is concentrated in large JSONL files, not in hundreds of thousands of individual files.

The audit remains `REVIEW_REQUIRED` because record counts do not establish source rights, PHI/PII status, license, de-identification sufficiency, or model-training permission.

## Remote Worker Gap

The requested host `swarm@192.168.0.100` could not be audited from this session because SSH authentication failed. Required next action:

```bash
ssh-copy-id swarm@192.168.0.100
# or provide the password/key and rerun the remote dataset discovery command
```

Once access works, run:

```bash
ssh swarm@192.168.0.100 'find /mnt /home/swarm -maxdepth 4 -type d \( -iname "*trustcat*" -o -iname "*minechain*" -o -iname "*swarm*bee*" -o -iname "*medical*" -o -iname "*dataset*" -o -iname "*datasets*" \) 2>/dev/null | sort'
```

## Required Follow-Up

1. Review `MASTER_GOLD.jsonl` and `MASTER_PLATINUM.jsonl` dataset cards/source metadata before any developer use.
2. Separate medical examples from general finance/grants/aviation/failure receipt examples.
3. Create dataset cards for trustcat, minechain, MASTER_GOLD, MASTER_PLATINUM, and high-value Honey/Jelly/Propolis files.
4. Run schema profiling on approved JSONL files only.
5. Create developer access packs under `/mnt/swarm/opendiabetic-datasets/07_DEVELOPER_ACCESS_PACKS`.
6. Do not upload or fine-tune against these records until source, license, consent, PHI/PII, and allowed-use review are complete.

## Safety Boundary

This audit does not grant permission to share, fine-tune, upload, or train on any dataset. Every dataset still requires source, license, consent, PHI/PII, retention, and allowed-use review.
