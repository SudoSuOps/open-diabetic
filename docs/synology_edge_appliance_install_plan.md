# OpenDiabetic LocalDiabetic Edge Appliance: Synology NAS Install Plan

Status: research-backed implementation plan  
Audience: founding engineering, pilot installers, privacy reviewers  
Scope: Synology NAS as the first LocalDiabetic personal vault and lifestyle planning appliance

## Executive Thesis

OpenDiabetic should treat a Synology NAS as the first practical LocalDiabetic edge appliance: a local-first diabetic records vault that organizes the real life around diabetes without harvesting diabetic data.

The NAS should not diagnose, dose medication, or provide emergency triage. It should store, organize, remind, summarize, and coordinate. Phones and watches remain the real-time notification layer. Optional edge AI can be added later as a local document organizer and appointment-prep assistant.

The first install should be boring, reliable, and caregiver-friendly:

1. Synology DSM as the local operating base.
2. Synology Drive as the private sync and document capture layer.
3. A strict folder/schema convention for diabetic life records.
4. Hyper Backup for encrypted versioned backup.
5. Optional Container Manager for OpenDiabetic local services.
6. iPhone/Apple Watch for notifications, Health export/import workflows, and medication logs.
7. No cloud dependency for core records access inside the home.
8. No OpenDiabetic harvesting of health data.

## Source-Grounded Capabilities

### Synology DSM

Synology describes DSM as the operating system powering Synology NAS and positions it around organizing/protecting data. DSM includes file management, data protection, virtualization/container support, user management, security, Drive, Calendar, Contacts, Hyper Backup, Snapshot Replication, Container/VM-style capabilities, and Secure SignIn in the DSM package ecosystem.

Source: https://www.synology.com/en-global/dsm

### Synology Drive

Synology Drive supports private cloud file management, personal/team folders, desktop/mobile access, cross-platform sync, file sharing, request links, version restore, client backup, mobile apps, admin auditing, and remote wipe of synchronized files on lost devices. Synology states Drive can be installed from Package Center and has clients for web, Windows, macOS, Ubuntu, iOS/iPadOS, and Android.

Source: https://www.synology.com/en-global/dsm/feature/drive

### Hyper Backup

Hyper Backup can back up folders, system settings, and packages to local volumes, external devices, other Synology systems, rsync servers, and public cloud destinations. It supports scheduling, multi-versioning, rotation policies, deduplication, AES-256 encryption, compression, and integrity checks.

Source: https://www.synology.com/en-global/dsm/feature/hyper_backup

### Apple Health, iPhone, and Watch

Apple Health can collect Health data from iPhone, Apple Watch, compatible apps, Bluetooth devices, and manual entries. Apple states Health data is encrypted with the device passcode when the iPhone is locked, and Health data in iCloud is encrypted in transit and at rest, with end-to-end encryption requiring iOS 12+ and two-factor authentication.

Source: https://support.apple.com/en-us/108779

Apple Health supports sharing with contacts and providers, review/change/stop-sharing controls, app/device permissions, and exporting all Health and fitness data in XML format.

Source: https://support.apple.com/guide/iphone/share-your-health-data-iph5ede58c3d/ios

Apple Health medications can remind users to log medications based on schedules created in Health, and users can log scheduled or unscheduled medication as taken or skipped.

Source: https://support.apple.com/guide/iphone/track-your-medications-iph811670c81/ios

## Design Doctrine

OpenDiabetic LocalDiabetic NAS installs must obey these rules:

- User owns the vault.
- No data harvesting.
- Local-first storage by default.
- Explicit caregiver permissions.
- Research export is opt-in only.
- Cloud backup is optional, encrypted, and user-controlled.
- Emergency access is narrow and documented.
- Agents summarize and organize; they do not diagnose or prescribe.
- Every automation should be explainable and reversible.

## Product Definition

### What This Appliance Is

A home/community diabetic life vault that helps a person and support circle manage:

- medical records
- insurance files
- lab PDFs
- appointment prep
- medication/supply checklists
- food/recipe routines
- foot-care and wound-care notes
- emergency sheets
- care pack inventory
- caregiver updates
- Apple Health exports
- device logs when user-provided
- local resource contacts

### What This Appliance Is Not

- Not an EHR replacement.
- Not a medical device by default.
- Not a diagnostic AI.
- Not a medication dosing engine.
- Not emergency triage.
- Not a cloud data-harvesting platform.

## Recommended System Architecture

```text
Apple Watch / iPhone
  - reminders, alerts, Health, medication logs
  - user-triggered exports and file uploads
          |
          v
Synology NAS / LocalDiabetic Vault
  - Synology Drive private sync
  - DiabeticOS folder schema
  - encrypted backups
  - local dashboard / static toolkit
  - optional containers for local services
          |
          v
Optional Edge AI Service
  - local OCR / document labeling
  - appointment prep summaries
  - supply checklist generation
  - caregiver update drafts
          |
          v
Optional Foundation Compute
  - updates, templates, public docs
  - opt-in de-identified research exports only
  - no automatic health data harvesting
```

## Synology Package Baseline

Required:

- DSM 7.x current stable release.
- Synology Drive Server.
- Synology Drive mobile app and desktop client where needed.
- Hyper Backup.
- Security Advisor.
- Secure SignIn / 2FA.

Recommended:

- Snapshot Replication if model/volume supports it.
- Synology Photos only if users want photo-based wound-care or receipt organization; isolate it from general family photos.
- Synology Calendar for local appointment calendars if the user wants NAS-hosted calendar workflows.
- Synology Contacts for medical/vendor/emergency contact lists if the user wants NAS-hosted contacts.

Optional builder tier:

- Container Manager for OpenDiabetic local services, only on supported models.
- Web Station or reverse proxy only if exposing an internal local dashboard.
- Tailscale or Synology VPN for remote access, preferred over open public DSM exposure.

## Hardware Selection Rules

Do not hard-code one model as universal. Choose a Synology NAS that meets the pilot’s needs and verify package compatibility before purchase.

Minimum pilot profile:

- 2-bay or larger NAS.
- Btrfs-capable volume for snapshots/versioning where supported.
- 4 GB RAM minimum; 8 GB+ preferred for containers/OCR/local agents.
- UPS support.
- Two mirrored drives or SHR equivalent.
- External USB drive or second NAS/cloud target for encrypted Hyper Backup.

Builder profile:

- x86_64 Synology model that supports Container Manager.
- 8-16 GB RAM.
- SSD cache only if workload justifies it; not required for first pilot.
- Dedicated LAN IP.
- Optional VLAN/firewall separation for healthcare vault devices.

## Vault Folder Schema

Create one shared folder: `OpenDiabeticVault`.

Recommended top-level layout:

```text
OpenDiabeticVault/
  00_README_START_HERE/
  01_Emergency_Sheet/
  02_Care_Plan/
  03_Medications/
  04_Supplies_Inventory/
  05_Appointments/
  06_Labs_and_Reports/
  07_Insurance_and_Billing/
  08_Foot_Care_and_Wound_Notes/
  09_Food_and_Recipes/
  10_Device_Exports/
  11_Apple_Health_Exports/
  12_Caregiver_Updates/
  13_Care_Packs/
  14_Local_Resources/
  15_Research_Opt_In_Exports/
  90_Inbox_To_Process/
  99_Archive/
```

Use plain files first:

- Markdown for checklists and notes.
- PDF for official records.
- CSV for inventories and logs.
- Images only when useful.
- JSON only for machine-readable agent outputs.

## Starter Files

Create these documents during install:

```text
01_Emergency_Sheet/emergency_sheet.md
02_Care_Plan/care_plan_overview.md
03_Medications/medication_list.md
04_Supplies_Inventory/supplies_inventory.csv
05_Appointments/appointment_prep.md
08_Foot_Care_and_Wound_Notes/foot_care_routine.md
09_Food_and_Recipes/steady_meals.md
12_Caregiver_Updates/caregiver_update_template.md
13_Care_Packs/care_pack_checklist.md
14_Local_Resources/local_resources.md
```

Every file should include:

- `owner`
- `last_reviewed`
- `source`
- `review_needed`
- `not_medical_advice` where appropriate

## Permissions Model

DSM users/groups:

- `vault_owner`: full control.
- `caregiver_admin`: read/write selected folders.
- `caregiver_readonly`: read selected folders only.
- `emergency_readonly`: read `01_Emergency_Sheet` only.
- `builder_service`: limited access to `90_Inbox_To_Process`, generated output folders, and logs.
- `research_export`: disabled by default; only gets `15_Research_Opt_In_Exports` when explicitly enabled.

Rules:

- Disable default guest access.
- No shared admin account.
- Every caregiver has their own account.
- Use 2FA for owner and caregiver admin.
- Separate emergency access from normal caregiver access.
- Audit quarterly.

## Data Flow Design

### Record Capture

1. User scans/upload PDFs into `90_Inbox_To_Process` using Synology Drive mobile.
2. Human or local agent labels file type.
3. File moves into correct folder.
4. Index entry is appended to `00_README_START_HERE/vault_index.csv`.
5. Generated summaries go beside the source with `_summary.md` suffix.

### Apple Health Export

Manual first:

1. iPhone Health app.
2. Export All Health Data.
3. Save ZIP/XML export to Synology Drive folder `11_Apple_Health_Exports/YYYY-MM-DD/`.
4. Optional parser extracts only user-approved fields into local summaries.
5. No automatic external upload.

### Medication Reminders

First version:

- Use Apple Health medication reminders for real-time alerting.
- Mirror the non-clinical medication list in the vault for organization and appointment prep.
- Do not generate dosing recommendations.
- Include “verify with clinician/pharmacy” on medication documents.

### Supply Planning

Use `04_Supplies_Inventory/supplies_inventory.csv`:

```csv
item,category,on_hand_count,reorder_threshold,preferred_vendor,last_checked,notes
```

OpenDiabetic agent can produce:

- low-supply list
- care pack needs
- shopping list
- caregiver update draft

It must not infer medical necessity beyond user-entered thresholds.

## Local Dashboard Concept

First dashboard should be static/local and simple:

- Today checklist.
- Next appointments.
- Supply warnings.
- Emergency sheet link.
- Inbox files needing review.
- Caregiver update draft.
- Care pack checklist.
- Last backup status.

Do not require internet for dashboard use inside the home LAN.

## Optional Container Services

Only if Synology model supports Container Manager:

- `opendiabetic-local-dashboard`: local web dashboard.
- `opendiabetic-indexer`: scans vault metadata, never leaves NAS.
- `opendiabetic-doc-agent`: local-only document organizer/summarizer.
- `opendiabetic-receipts`: writes audit receipts for generated summaries/actions.

Container rules:

- Read-only mounts by default.
- Write only to `generated/` and `receipts/` folders.
- No outbound network unless explicitly enabled.
- No secrets in images.
- Logs must avoid private medical details.

## Backup and Recovery

Baseline:

- Enable Synology Drive versioning where appropriate.
- Enable snapshots if supported.
- Configure Hyper Backup with encryption.
- Backup to external USB or second NAS first.
- Optional encrypted cloud backup if user consents.
- Test restore monthly in pilot phase.

Recovery target:

- Emergency sheet recoverable in under 5 minutes.
- Full vault recoverable from encrypted backup.
- Caregiver can retrieve emergency sheet if owner grants emergency access.

## Security Baseline

Install defaults:

- Update DSM before onboarding health records.
- Use strong unique owner password.
- Enable 2FA/Secure SignIn.
- Disable guest account.
- Disable unused services.
- Do not expose DSM directly to the public internet.
- Prefer VPN/Tailscale-style remote access.
- Use firewall allow rules for local subnet and approved VPN only.
- Use HTTPS certificate for local dashboard where practical.
- Enable login alerts.
- Review shared links monthly.

## Research Export Boundary

`15_Research_Opt_In_Exports` is empty by default.

Research export requires:

- explicit user consent
- stated purpose
- included fields list
- date range
- de-identification method
- recipient
- revocation instructions
- generated receipt

No OpenDiabetic service should silently collect vault data.

## Pilot Install Checklist

### Phase 0: Preflight

- Confirm user understands this is not medical advice or emergency triage.
- Choose NAS model and verify DSM/package compatibility.
- Buy NAS, drives, UPS, and backup target.
- Decide local-only versus optional remote access.
- Identify caregiver accounts and permissions.

### Phase 1: NAS Foundation

- Install drives.
- Install DSM.
- Create storage pool/volume.
- Apply DSM updates.
- Set static DHCP lease.
- Create owner admin account; disable default admin where applicable.
- Enable 2FA.
- Install Security Advisor and run baseline scan.

### Phase 2: Vault Setup

- Install Synology Drive Server.
- Create `OpenDiabeticVault` shared folder.
- Apply permissions groups.
- Create folder schema.
- Add starter Markdown/CSV files.
- Install Drive clients on owner phone/computer.
- Test upload from phone into `90_Inbox_To_Process`.

### Phase 3: Lifestyle Setup

- Fill emergency sheet.
- Fill medication list from user/pharmacy/clinician-verified sources.
- Fill supplies inventory and thresholds.
- Add upcoming appointments.
- Add care pack checklist.
- Add local resources and vendor contacts.
- Configure Apple Health medication reminders separately on iPhone if desired.
- Export Apple Health XML manually into the vault if user consents.

### Phase 4: Backup Setup

- Install Hyper Backup.
- Configure encrypted backup.
- Set schedule.
- Run first backup.
- Run restore test for emergency sheet and one PDF.
- Document recovery steps in `00_README_START_HERE/recovery.md`.

### Phase 5: Optional Local Services

- Verify Container Manager support.
- Install local dashboard container.
- Mount vault read-only.
- Write generated output to `generated/`.
- Add receipts to `receipts/`.
- Confirm no outbound network by default.

## First 30-Day Pilot Plan

Week 1:

- Install NAS and vault.
- Onboard one user and one caregiver.
- Capture emergency sheet, medication list, supplies inventory, and appointment prep.
- Prove phone upload and backup restore.

Week 2:

- Add care pack workflow.
- Add local resource list.
- Add caregiver update template.
- Add Apple Health export storage if user wants it.

Week 3:

- Add local dashboard prototype.
- Add audit receipts for generated lists/summaries.
- Test permission boundaries.

Week 4:

- Run recovery drill.
- Run caregiver usability review.
- Document friction.
- Decide whether to add local agent/OCR.

## Success Metrics

- Emergency sheet can be found by owner/caregiver in under 60 seconds.
- User can upload a new record from phone in under 2 minutes.
- Backup restore succeeds.
- Caregiver understands what changed this week.
- Supply list catches low inventory before crisis.
- No data leaves vault without explicit action.
- User reports reduced chaos, not more admin burden.

## Open Engineering Work

- Build `opendiabetic-vault-init` script to create folder schema and starter files.
- Build local dashboard static app.
- Build vault indexer that outputs `vault_index.csv` and `vault_index.json`.
- Build receipt writer for every generated summary/checklist.
- Build Apple Health export parser with explicit allowlist.
- Build caregiver permission audit report.
- Build no-network container profile.

## Final Recommendation

Build the first LocalDiabetic appliance as a Synology NAS vault, not an AI-first product. The trusted wedge is organization, reminders, backups, emergency access, and caregiver coordination. Add local agents only after the vault, permissions, backups, and human workflows are stable.

The first install should prove one thing clearly: diabetic life records can live under the user’s control, stay useful every day, and support the family without turning health data into the business model.
