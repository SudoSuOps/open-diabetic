# OpenDiabetic Synology NAS Install Guide

Status: practical setup guide  
Audience: people setting up OpenDiabetic on an existing Synology NAS  
Contact: build@opendiabetic.com

## Safety Boundary

OpenDiabetic does not provide medical advice, diagnosis, treatment, medication dosing, or emergency triage. This guide helps organize records, reminders, emergency sheets, supplies, care packs, and support workflows. Always consult licensed medical professionals for medical decisions and seek emergency care when needed.

## Goal

Set up a Synology NAS as a local-first OpenDiabetic personal vault:

- diabetic records stay under user control
- family/caregiver access is explicit
- records are organized into a predictable folder system
- backups are encrypted and tested
- iPhone/Apple Watch remain the reminder layer
- optional local services can be added later
- no OpenDiabetic data harvesting

## What You Need

Minimum:

- Synology NAS already online and reachable on your local network
- DSM 7.x installed and updated
- two-drive mirrored storage or SHR-style redundancy
- owner/admin account
- phone or computer for uploading files
- external USB drive, second NAS, or encrypted cloud target for backup

Recommended:

- UPS battery backup
- Btrfs volume if your model supports it
- Synology Drive Server
- Synology Drive mobile app
- Hyper Backup
- Security Advisor
- Secure SignIn / 2FA
- Snapshot Replication if your model supports it
- Container Manager only for builder/local-agent installs

## Source-Grounded Notes

Synology DSM is the NAS operating system and includes file management, data protection, Drive, Calendar, Contacts, Hyper Backup, Snapshot Replication, and Secure SignIn in the DSM ecosystem.

Source: https://www.synology.com/en-global/dsm

Synology Drive supports private cloud file management, desktop/mobile access, sync, backup, version restore, mobile apps, file sharing, request links, auditing, and remote wipe for synchronized files on lost devices.

Source: https://www.synology.com/en-global/dsm/feature/drive

Hyper Backup supports scheduled backups, multi-versioning, retention rotation, deduplication, compression, AES-256 encryption, and integrity checks.

Source: https://www.synology.com/en-global/dsm/feature/hyper_backup

Apple Health can collect data from iPhone, Apple Watch, compatible apps, devices, and manual entries. Apple documents Health export in XML format and medication logging/reminder workflows.

Sources:

- https://support.apple.com/en-us/108779
- https://support.apple.com/guide/iphone/share-your-health-data-iph5ede58c3d/ios
- https://support.apple.com/guide/iphone/track-your-medications-iph811670c81/ios

## Install Architecture

```text
iPhone / Apple Watch
  reminders, Health, medication logs, scan/upload
        |
        v
Synology NAS / OpenDiabeticVault
  Drive sync, records, emergency sheet, supplies, care packs
        |
        v
Encrypted Backup
  external drive, second NAS, or user-controlled cloud target
        |
        v
Optional Local Services
  dashboard, indexer, document organizer, receipts
```

## Step 1: Secure DSM First

Before adding diabetic records:

1. Sign in to DSM as the owner/admin.
2. Update DSM and installed packages.
3. Create a named owner account. Do not rely on a shared generic admin account.
4. Disable guest access.
5. Enable 2FA / Secure SignIn for the owner account.
6. Install and run Security Advisor.
7. Disable services you do not use.
8. Avoid exposing DSM directly to the public internet.
9. Prefer VPN or a private remote-access tool over open DSM ports.
10. Confirm you can still access the NAS from the local network.

Best practice: treat DSM like the front door to the user’s health vault. Lock it down before uploading sensitive records.

## Step 2: Install Core Packages

Install from DSM Package Center:

1. Synology Drive Server
2. Hyper Backup
3. Security Advisor
4. Secure SignIn if not already enabled
5. Snapshot Replication if available on your model and volume

Optional later:

- Synology Calendar for appointments
- Synology Contacts for medical/vendor/emergency contacts
- Container Manager for local OpenDiabetic services
- Web Station only if hosting a local dashboard

## Step 3: Create The OpenDiabetic Vault

Create a shared folder:

```text
OpenDiabeticVault
```

Recommended folder structure:

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

Rule: if a document arrives and you do not know where it goes, put it in `90_Inbox_To_Process` first. Do not scatter files around the NAS.

## Step 4: Create Starter Files

Create these files first:

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
00_README_START_HERE/recovery.md
```

Each file should start with:

```text
Owner:
Last reviewed:
Source:
Review needed:
Medical safety note: This file is for organization and support, not medical advice.
```

## Step 5: Set Permissions

Create DSM groups:

```text
vault_owner
caregiver_admin
caregiver_readonly
emergency_readonly
builder_service
research_export
```

Recommended permissions:

- `vault_owner`: full control.
- `caregiver_admin`: read/write selected support folders.
- `caregiver_readonly`: read selected folders only.
- `emergency_readonly`: read `01_Emergency_Sheet` only.
- `builder_service`: limited access for future local services.
- `research_export`: disabled by default; only `15_Research_Opt_In_Exports` when explicitly enabled.

Best practice: every caregiver gets their own account. Do not share passwords.

## Step 6: Configure Synology Drive

1. Enable Synology Drive for `OpenDiabeticVault` or a dedicated team folder.
2. Install Synology Drive mobile app on the owner’s phone.
3. Install Synology Drive Client on the owner’s computer if needed.
4. Test upload from phone into `90_Inbox_To_Process`.
5. Test file rename and move from desktop or DSM File Station.
6. Enable versioning where appropriate.
7. Review shared links and disable public sharing by default.

Best practice: use Drive for capture and sync, not as a public file-sharing portal.

## Step 7: Build The Emergency Sheet

The emergency sheet should be easy to find and print.

Include:

- name
- preferred emergency contact
- allergies if user chooses to include them
- current medication list source location
- clinician/pharmacy contact locations
- insurance card location
- key diagnoses only if user chooses to include them
- “call emergency services when needed” line
- last reviewed date

Do not overfill it. A caregiver should understand it in under one minute.

## Step 8: Add Supplies Inventory

Create `04_Supplies_Inventory/supplies_inventory.csv`:

```csv
item,category,on_hand_count,reorder_threshold,preferred_vendor,last_checked,notes
```

Examples of categories:

- medication support
- testing supplies
- foot care
- wound care support
- food pantry
- travel pack
- emergency pack

Do not infer medical necessity from inventory. Use user-entered thresholds.

## Step 9: Connect iPhone / Apple Watch Workflows

Use Apple Health and Apple Watch for reminders and logging where useful.

Recommended flow:

1. Use Apple Health medication reminders for real-time medication logging if the user wants that.
2. Keep a vault copy of the medication list for appointment prep and family coordination.
3. Export Apple Health data manually only when the user chooses.
4. Store exports in:

```text
11_Apple_Health_Exports/YYYY-MM-DD/
```

5. Do not auto-upload health data to OpenDiabetic cloud services.
6. Do not parse Health exports without explicit local consent.

Best practice: iPhone/Watch handle real-time notifications. The NAS handles records, history, organization, and support workflows.

## Step 10: Configure Backup

Use Hyper Backup:

1. Choose destination: external USB, second NAS, rsync server, or user-controlled encrypted cloud target.
2. Enable encryption.
3. Set schedule.
4. Enable version rotation.
5. Enable integrity checks.
6. Run first backup.
7. Restore-test these files:
   - `01_Emergency_Sheet/emergency_sheet.md`
   - one PDF from `06_Labs_and_Reports`
   - `04_Supplies_Inventory/supplies_inventory.csv`
8. Document restore steps in:

```text
00_README_START_HERE/recovery.md
```

Best practice: backup is not real until restore is tested.

## Step 11: Optional Local Dashboard

First dashboard should show only support information:

- today checklist
- upcoming appointments
- low supplies
- emergency sheet link
- inbox files needing review
- last backup status
- caregiver update draft
- care pack checklist

Do not add diagnosis, medication dosing, or emergency triage.

If Container Manager is available, future local containers should follow:

- read-only vault mount by default
- write only to `generated/` and `receipts/`
- no outbound network unless explicitly enabled
- no private medical details in logs
- receipt for every generated summary or export

## Step 12: Research Opt-In Boundary

Keep this folder empty by default:

```text
15_Research_Opt_In_Exports/
```

Any research export must include:

- user consent
- purpose
- field list
- date range
- recipient
- de-identification method
- revocation instructions
- receipt

No silent collection. No automatic harvesting.

## First-Day Setup Checklist

- [ ] DSM updated
- [ ] owner account created
- [ ] 2FA enabled
- [ ] guest disabled
- [ ] Security Advisor run
- [ ] Synology Drive Server installed
- [ ] Hyper Backup installed
- [ ] `OpenDiabeticVault` created
- [ ] folder schema created
- [ ] permissions groups created
- [ ] emergency sheet started
- [ ] supplies inventory started
- [ ] Drive phone upload tested
- [ ] encrypted backup configured
- [ ] restore test completed
- [ ] caregiver access reviewed

## First-Week Operating Rhythm

Daily:

- check Today list
- check medication reminders on iPhone/Watch if enabled
- add new files to inbox
- check low supplies

Weekly:

- process inbox
- update supplies inventory
- prepare caregiver update
- review upcoming appointments
- confirm latest backup

Monthly:

- print/review emergency sheet
- test restore one file
- review user and caregiver permissions
- clean stale shared links
- review research export folder remains empty unless intentionally used

## Success Criteria

A setup is working when:

- the emergency sheet is findable in under 60 seconds
- a phone can upload a new document in under 2 minutes
- the caregiver can find only what they are allowed to see
- a backup restore has been tested
- low-supply risks are visible before they become urgent
- the user feels less chaos, not more admin work
- no data leaves the NAS without explicit user action

## Final Install Recommendation

For the Synology you already have online, start with this order:

1. Lock down DSM.
2. Install Drive and Hyper Backup.
3. Create `OpenDiabeticVault`.
4. Add the folder schema and starter files.
5. Set caregiver permissions.
6. Test phone upload.
7. Configure encrypted backup.
8. Restore-test.
9. Only then add dashboard or local agents.

The first win is not AI. The first win is a trusted local vault that a real person and caregiver can use during a stressful week.
