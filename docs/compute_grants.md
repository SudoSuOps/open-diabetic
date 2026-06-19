# OpenDiabetic Compute Grants

OpenDiabetic can provide controlled compute grants for approved privacy-first diabetic AI work.

## Hardware Pool

- NVIDIA RTX PRO 6000 Blackwell 96GB systems for large fine-tunes, safety judges, model merging, synthetic/de-identified generation, and long-context evals.
- NVIDIA RTX 5090 32GB systems for LoRA/adapters, dataset profiling, RAG experiments, and agent prototypes.

## Eligible Projects

- Diabetic lifestyle support agents.
- Medical document organization and appointment-prep agents.
- Caregiver update and supply-planning agents.
- PHI leakage detectors.
- Non-diagnostic education retrieval/evaluation systems.
- Dataset cards, schema profilers, and safety eval harnesses.

## Blocked Projects

- Diagnosis systems.
- Medication dosing systems.
- Emergency triage systems.
- Raw health-data exfiltration.
- Training on unreviewed private/credentialed datasets.
- Opaque model releases without dataset and eval cards.

## Application Requirements

- project name
- developer/team
- dataset IDs requested
- training objective
- GPU type requested
- estimated GPU hours
- privacy plan
- output license
- safety evaluation plan
- no-egress commitment
- model card and dataset card commitment

## Grant Receipt

Every grant should produce a receipt with:

- grant ID
- approved datasets and hashes
- approved compute node
- run command
- start/end time
- output path
- evaluation artifacts
- reviewer
- verdict
