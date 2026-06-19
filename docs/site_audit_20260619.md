# OpenDiabetic Site Audit - 2026-06-19

## Audit Scope

Reviewed the public OpenDiabetic static site for:

- Common-sense clarity for people living with diabetes and caregivers
- Human-in-the-loop ease of use
- Practical utility that works now
- Actionable infrastructure for donors, developers, researchers, and local operators
- Privacy and medical-safety boundaries
- SEO/GEO discovery assets
- Security headers and local-only/no-patient-data posture
- Build health and deployment readiness

## Executive Finding

The site now communicates the category clearly: **privacy-first compute for diabetic life**. The major strength is the trust doctrine: no harvesting, local-first records, public-good compute, and real-world help. The major gap found during audit was that a visitor had to infer their next action from the broader story. That is now fixed with a role-based **What works now** section and mobile quick navigation.

## What Was Working

| Area | Status | Evidence |
| --- | --- | --- |
| Category message | Strong | Hero leads with privacy-first compute, not a wellness app. |
| Trust doctrine | Strong | Dedicated doctrine section says no harvesting and no hidden resale. |
| Hard facts | Strong | Homepage and `/hard-facts-diabetes` cite CDC and ADA source links. |
| Safety boundary | Strong | Footer and pages state no medical advice, diagnosis, dosing, or emergency triage. |
| Developer path | Good | Dataset guide and NAS guide are linked from the research/developer section. |
| Local-first strategy | Good | Local vault, NAS, and edge-device concepts are clear. |
| Static security | Good | CSP, frame deny, nosniff, referrer, and permissions headers exist. |
| No fake backend | Good | Contact uses mailto; `/api/*` redirects to 404. |
| Build pipeline | Good | Vite static build passes. |

## Findings Fixed In This Pass

### 1. Mobile Navigation Was Too Thin

**Issue:** On small screens, users only saw the logo in the sticky header. The page is long, and people looking for facts, trust doctrine, DiabeticOS, or contact had to scroll manually.

**Fix:** Added a horizontal mobile quick navigation bar with: Start, Facts, Trust, DiabeticOS, Join.

**Impact:** Better caregiver usability, better mobile scanning, lower friction to reach action sections.

### 2. Visitor Role Paths Were Not Explicit Enough

**Issue:** The site explained the mission well, but did not tell each visitor type what to do next.

**Fix:** Added a new `ActionPaths` section after the hero with role-based actions for:

- People living with diabetes
- Caregivers and family
- Donors and sponsors
- Developers and researchers
- Clinicians and educators
- Local vendors and volunteers

**Impact:** The site now converts mission into concrete, human-readable utility.

### 3. Human-in-the-Loop Guardrails Needed to Be Above the Fold Path

**Issue:** Medical-safety disclaimers existed, but the operational guardrails were not framed as product doctrine near the user action path.

**Fix:** Added a Human-in-the-loop guardrails block:

- No diagnosis, treatment, medication dosing, or emergency triage
- Human review before care-pack, vendor, dataset, or research workflows go live
- Local-first records by default
- AI assists with organization and explanation, not independent medical decisions

**Impact:** Makes the site safer, more trustworthy, and clearer for clinicians, donors, and developers.

## Remaining Priorities

| Priority | Recommendation | Why It Matters |
| --- | --- | --- |
| P0 | Add a real non-medical intake backend when ready | Mailto works now, but care-pack and dataset workflows need structured intake. |
| P0 | Add emergency disclaimer near any future forms | Prevents users from submitting urgent medical problems to a non-emergency system. |
| P1 | Create downloadable DiabeticOS printable toolkit PDF | Gives people and caregivers something immediately useful. |
| P1 | Create caregiver emergency sheet template | Turns the mission into a practical artifact. |
| P1 | Add care-pack pilot page | Donors need package definitions, cost estimates, and fulfillment workflow. |
| P1 | Add dataset access request policy | Developers need eligibility, review, licensing, privacy, and de-identification requirements. |
| P2 | Add visual accessibility pass with screenshot testing | Current design is accessible in structure, but should be checked visually on real devices. |
| P2 | Add analytics only if privacy-preserving | Avoid trackers that conflict with the no-harvesting doctrine. |
| P2 | Add public roadmap/status page | Shows progress without pretending the product is already complete. |

## Product Utility Assessment

### Person With Diabetes

Current utility is informational and directional. The site explains why OpenDiabetic exists and gives a contact path. Next useful artifact should be a printable DiabeticOS daily checklist and emergency sheet.

### Caregiver

Current utility improved with the role-based path. The caregiver now sees what OpenDiabetic can help organize: daily tasks, emergency context, family updates, records, and supplies. Next useful artifact should be a caregiver packet.

### Donor

Current utility is strong enough for first contact. Care-pack concepts and compute-credit language are visible. Next useful artifact should be a care-pack pilot budget and donation impact ladder.

### Developer / Researcher

Current utility is better than a landing page because the site exposes dataset docs, Synology guide, and compute grant positioning. Next useful artifact should be a clean developer portal index with data access policy and examples.

### Clinician / Educator

Current utility is trust-building but still early. The site avoids clinical overclaiming. Next useful artifact should be a clinician review packet explaining how OpenDiabetic supports appointment prep and patient-owned records without giving medical advice.

### Vendor / Volunteer

Current utility is directional. The site explains local resources and care packs. Next useful artifact should be a vetted vendor / volunteer intake workflow.

## Safety and Privacy Assessment

- The site does not collect patient data.
- The site does not claim diagnosis, treatment, dosing, or emergency triage.
- The site does not run third-party trackers in current static code.
- The contact path is direct email, not a fake form.
- Future forms must be intentionally limited: no emergency requests, no medical diagnosis details, no unrestricted PHI upload.

## Infrastructure Assessment

Current deploy is appropriate for this phase:

- Vite + React + TypeScript
- Static Cloudflare Pages
- No backend, database, login, or patient-data collection
- Static docs for datasets and Synology setup
- Security headers in `public/_headers`
- Search discovery through `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`, and static public pages

Next infrastructure layer:

1. Static public site remains the trust and education layer.
2. Intake backend receives non-emergency interest only.
3. Dataset access workflow requires review and receipts.
4. LocalDiabetic NAS guides become reproducible setup scripts.
5. Any personal health vault functionality stays local-first and consent-bound.

## Final Verdict

**Verdict: PASS with active roadmap.**

The site now makes the hard facts, trust doctrine, and practical action paths visible. It is credible as public-good infrastructure and avoids the dangerous pattern of pretending to be a medical product before the safety, compliance, and human review systems exist.

The next build should turn the action paths into actual artifacts: printable DiabeticOS toolkit, caregiver emergency sheet, care-pack pilot page, developer dataset access policy, and privacy-preserving intake.
