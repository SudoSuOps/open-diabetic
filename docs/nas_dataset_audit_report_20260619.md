# OpenDiabetic NAS Dataset Audit Report - 2026-06-19

Scope: mounted Synology/NFS root `/mnt/swarm`  
Audit output: `/mnt/swarm/opendiabetic-datasets/00_AUDIT_SUMMARIES/full-20260619-v2`  
Mode: metadata-only file scan; raw data not copied  
Verdict: `REVIEW_REQUIRED`

## Summary

| Metric | Count |
|---|---:|
| Scanned files | 26,479 |
| Matched dataset-like / medically sensitive files | 6,179 |
| Dataset-like files | 6,094 |
| Diabetes-relevant file-path hits | 90 |
| Review-required files | 183 |
| Manifest shards | 1 |

## Top Extensions

| Extension | Count |
|---|---:|
| `.json` | 4,410 |
| `.jsonl` | 1,036 |
| `.md` | 376 |
| `.txt` | 143 |
| `.pyc` | 57 |
| `.csv` | 54 |
| `.py` | 20 |
| `.parquet` | 16 |
| `.pdf` | 15 |
| `.gz` | 14 |
| `.tsv` | 9 |
| `.arrow` | 8 |
| `.db` | 7 |

## Interpretation

This is a file-level audit, not a row-level or archive-deep audit. The reported 400,000+ local medical datasets may be represented as records inside JSONL, parquet, SQLite, archives, or downstream dataset registries. The next step is controlled profiling of approved matched files, not blind extraction.

## Required Follow-Up

1. Review `manifest-shard-00000.jsonl` under the NAS audit output.
2. Identify high-value diabetes-relevant candidates from the 90 path hits.
3. Identify all 183 review-required files and assign source/license/PHI review.
4. For JSONL/parquet/SQLite candidates, run record-level profiling only after approval.
5. Create dataset cards for approved datasets.
6. Create developer access packs only under `/mnt/swarm/opendiabetic-datasets/07_DEVELOPER_ACCESS_PACKS`.
7. Convert approved examples into Honey/Jelly/Propolis datasets with receipts.

## Safety Boundary

This audit does not grant permission to share, fine-tune, upload, or train on any dataset. Every dataset still requires source, license, consent, PHI/PII, retention, and allowed-use review.
