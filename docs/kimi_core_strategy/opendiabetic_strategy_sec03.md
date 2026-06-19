## 3. Data Ownership Doctrine

The health data economy rests on a deception that 81% of Americans believe: that their health information in digital apps is protected under HIPAA [^282^]. It is not. The same CGM data that a physician must safeguard under federal law becomes, in the hands of the device manufacturer, an unregulated asset that privacy policies permit to use for any purpose — including sale to data brokers who capture 93% of US prescriptions daily and trade anonymized health records for as little as $2,500 per dataset [^270^][^319^]. Against this landscape, OpenDiabetic's Data Ownership Doctrine is not a set of preferences. It is a structural response to a market failure.

The doctrine governs every architectural decision, partnership negotiation, and regulatory submission the Foundation undertakes. Seven principles, organized into three operational domains, ensure that patient data serves the patient first and is never the product.

![Patient Attitudes Toward Health Data Privacy in the United States](fig_3_1_patient_privacy_attitudes.png)

The chart above quantifies the trust deficit OpenDiabetic must close. Ninety-five percent of patients are concerned about data breaches, 94% want companies held legally accountable for health data use, and 75% demand opt-in consent before any data use [^207^]. Yet 60% of diabetes apps request potentially dangerous permissions, 28.4% lack any privacy policy, and 40% contain advertising that funds their business model through patient data monetization [^308^]. OpenDiabetic's response is to make data exploitation structurally impossible — not merely against policy, but technically infeasible.

### 3.1 Core Principles

#### 3.1.1 No Harvesting: Diabetic Data Is Never the Product

OpenDiabetic does not sell, license, or monetize patient data in any form. This prohibition is absolute, applies to all data types from CGM readings to meal logs, and extends to all commercial arrangements including research partnerships, academic collaborations, and industry consortia. The prohibition is enforced at the architectural level: the Foundation's zero-knowledge cloud architecture, described in Chapter 2, means OpenDiabetic cannot decrypt user vaults even if compelled to do so.

This principle directly confronts the prevailing business model in digital health. The health data monetization market was valued at $25.5 billion in 2024 and is projected to reach $94.27 billion by 2035 [^207^]. Within this ecosystem, 40% of diabetes apps are free precisely because they monetize user data through advertising and third-party sharing [^308^]. All five digital medicine apps studied in one 2022 investigation had privacy policies, but three claimed health data would not be shared when information was in fact being transmitted to Facebook and other trackers [^330^]. OpenDiabetic rejects this model entirely. Sustainable funding comes from foundation grants, industry membership, and hosted-service revenue — not from the data of the people the Foundation serves.

#### 3.1.2 User-Owned Records: Cryptographic Key Control

Patients hold the cryptographic keys to their vaults. OpenDiabetic acts as fiduciary, not custodian. Under HIPAA, patients do not own their health data; the law grants only inspection and copy rights, not property rights [^246^]. OpenDiabetic closes this gap by design, ensuring that key material is generated on the patient's device and never transmitted to Foundation servers. The Foundation cannot access plaintext health records, cannot comply with requests for decrypted data, and cannot use patient data for any purpose — including research, product improvement, or model training — without the patient's explicit, cryptographically signed authorization.

This architecture aligns with emerging regulatory momentum. The European Health Data Space (EHDS), in force since March 2025, grants patients the right to access their data immediately, free of charge, in an interoperable format; to restrict access to parts of their data; to see who accessed their data; and to opt out of secondary use [^246^]. Washington State's My Health My Data Act (MHMDA) fills critical HIPAA gaps by extending protections to health data collected by apps, websites, and device manufacturers — precisely the entities the federal framework leaves exposed [^307^]. OpenDiabetic exceeds the requirements of both frameworks by making patient control the default rather than an opt-in right.

#### 3.1.3 Explicit Consent: Granular, Informed, Revocable

No broad terms-of-service data grabs. Every data use requires specific, informed, revocable authorization. This principle rejects the dominant model in which a single checkbox at sign-up grants perpetual, ill-defined permission for data use across product lines, advertising partnerships, and unspecified "service improvements."

The consent architecture follows five operational requirements derived from patient demands and regulatory standards: documented records of each consent decision; easy withdrawal without penalty; freely given consent without coercion; specific purposes stated in plain language for each request; and consent unbundled from terms of service [^257^]. Consent is requested at the point of need — not during onboarding when the user lacks context, but at the moment a specific data-sharing action is proposed. Research participation, family sharing, clinical data transmission, and third-party app access each require separate, individually revocable authorizations.

The evidence for this approach is compelling. Support for data sharing increases by an average of 11 percentage points when data is de-identified, and willingness to share for research rises to 72.46% under anonymization conditions [^304^][^281^]. These findings demonstrate that patients are not privacy maximalists — they are privacy pragmatists who want control and transparency. When 92% of Americans believe explicit opt-in consent should be mandatory for health data sharing, and over 75% want to opt in before any company uses their health data [^207^], the market signal is unambiguous [^207^].

#### 3.1.4 Local-First Defaults: Data Originates and Persists Locally

Patient data originates on the patient's device, persists on the patient's device, and treats cloud storage as backup and coordination — not as primary storage. This principle operationalizes the architectural choices detailed in Chapter 2: CRDT-based sync enables real-time consistency across devices without requiring a cloud-native data model, and encrypted backup ensures data durability without exposing plaintext to infrastructure operators.

Local-first architecture is the technical implementation of privacy by design, a concept embedded in GDPR Article 25 and increasingly required by emerging privacy legislation worldwide [^271^]. For diabetes specifically, the approach carries additional urgency. CGM data is not protected by HIPAA when held by CGM manufacturers, and patients' ability to control how that information is collected, stored, and used is virtually nonexistent [^270^]. Italian regulators imposed a EUR 45,000 penalty on a US diabetes monitoring company for unintentionally disseminating the personal data of 2,000 people through a smart-working employee's error — a breach mode that local-first storage, in which data never passes through company servers, would have prevented [^241^].

### 3.2 Sharing and Research Boundaries

#### 3.2.1 Optional Sharing: Time-Limited, Revocable Permissions

Family members, caregivers, and healthcare providers receive access only through user-granted, time-limited, revocable permissions. Sharing is not a binary switch. Each permission specifies the data types accessible (glucose readings, insulin doses, meal logs, activity data), the permitted operations (read-only or read-write), the duration of access, and the notification preferences for access events. All sharing events are logged to an immutable audit trail stored within the user's local vault.

#### 3.2.2 Research Opt-In Only: Separate Consent for Data Donation

Participation in research datasets requires explicit, separate consent. No default opt-in, no pre-checked boxes, no bundling with service terms. This principle addresses a documented pattern of concern: while 72.46% of patients are willing to share data for research under anonymization conditions [^281^], that willingness collapses when consent is assumed rather than asked. Over a million people opted out of NHS Digital's GP data collection program when it failed to meet public expectations for transparency and control — a mass opt-out that prompted program delay and redesign [^207^].

OpenDiabetic supports research through three privacy-preserving mechanisms. Federated learning enables collaborative model training without centralizing patient data [^299^]. Synthetic data generation produces statistically equivalent datasets for algorithm development and validation [^342^]. Differential privacy provides mathematical guarantees that no individual record can be identified in aggregate outputs [^384^]. These mechanisms are not alternatives to consent — they are methods that make consent meaningful by ensuring that data donation carries minimal privacy risk.

#### 3.2.3 De-identification Standards: Exceeding Regulatory Minimums

OpenDiabetic applies de-identification standards that exceed regulatory minimums at every tier. The table below compares the Foundation's tiered approach against current consent and privacy models.

| Dimension | HIPAA Safe Harbor | GDPR Anonymization | OpenDiabetic Tier 1 | OpenDiabetic Tier 2 | OpenDiabetic Tier 3 |
|:---|:---|:---|:---|:---|:---|
| **Standard** | Remove 18 identifiers | Guarantee impossible re-identification | HIPAA Safe Harbor minimum | Differential privacy (ε ≤ 1–10) | Synthetic data generation |
| **Privacy guarantee** | None quantitative; 0.013% re-ID risk in practice [^335^] | Highest legal bar in EU | Baseline compliance | Mathematical: any single record change alters output probability by ≤ e^ε [^384^] | Structural: no real patient data present |
| **Data utility** | High | Variable | High | Moderate; accuracy within 5% of non-private models [^301^] | Good for training/validation; slight persistent performance gap vs. real data [^331^] |
| **Use case** | Internal analytics | Public release | Required minimum for any sharing | Aggregate reporting, population insights | Research datasets, external model training |
| **Patient control** | None required | None required (post-anonymization) | Granular opt-in per use | Granular opt-in per use; ε value disclosed | Granular opt-in per study; generation method disclosed |
| **Revocability** | N/A | N/A | Immediate; future data stops flowing | Immediate; but prior DP-aggregated results remain | Immediate; synthetic datasets may be withdrawn from future distribution |

The Foundation's tiered framework operates on a simple decision rule: the greater the distance between data and the patient, the stronger the privacy guarantee required. Internal analytics within a user's own vault require no de-identification — the data never leaves the patient's control. Aggregate population insights use differential privacy with an epsilon parameter disclosed to participating patients. External research datasets prefer synthetic data, generated using specialized models such as GluGAN for CGM time series [^342^] or CTGAN-DC for tabular diabetes records [^345^], ensuring that no real patient record is included in the output. This preference for synthetic over de-identified real data is the most protective choice available: synthetic data carries zero re-identification risk by construction, though the Foundation acknowledges its limitations, including substantially increased relative error for conditions below 0.05% prevalence [^331^].

#### 3.2.4 Emergency Access: Break-Glass Protocols with Cryptographic Logging

Medical emergencies require access protocols that balance speed of care with patient autonomy. OpenDiabetic implements a break-glass mechanism with three safeguards: cryptographic logging of every access event to an immutable, tamper-evident audit trail; trusted contact verification requiring consensus among designated emergency contacts before vault access is granted; and automatic expiration of emergency access within a configurable window (default: 24 hours).

The break-glass protocol is designed for the specific emergency scenarios that people with diabetes face: severe hypoglycemia rendering the patient unconscious; acute illness requiring emergency department care where the patient cannot provide access credentials; or transition of care where a substitute clinician needs immediate access to glucose history. Each activation triggers real-time notification to the patient and all designated emergency contacts, with a full access log available for review once the emergency resolves.

### 3.3 Family and Caregiver Permissions

#### 3.3.1 Granular Permission Model: Read, Write, and Alert-Only Access

Diabetes is a family computational problem. Caregivers serve as memory support, care organizers, and communication coordinators, experiencing their own alarm fatigue and burnout [^241^]. Yet current personal health record platforms are designed for individual users, Apple HealthKit offers no multi-user scenarios, and most diabetes apps ignore the caregiver entirely. OpenDiabetic's permission model addresses this gap by offering four access tiers:

**Vault Owner** holds the cryptographic keys and controls all access grants. **Family Members** may receive read access to selected data types with configurable granularity — glucose readings only, not meal logs; trend summaries, not full history; alert notifications, not raw data streams. **Caregivers** (non-family care providers) receive time-limited, purpose-specific access granted through the explicit consent flow. **Emergency Contacts** hold break-glass authorization only, activated through the trusted-contact consensus protocol described in Section 3.2.4.

Write access is more restricted than read access. Only Vault Owners and specifically authorized Family Members may input data such as insulin doses or meal records. This prevents well-intentioned but dangerous data modifications by caregivers who lack full clinical context.

#### 3.3.2 Minor Transitions: Automated Permission Evolution

Children with diabetes present a unique permission challenge. Parents or guardians currently hold legal authority over a minor's health data, but as the child ages, the transition to autonomous data control must be gradual and developmentally appropriate. OpenDiabetic implements an automated permission evolution protocol that shifts control from guardian-managed to self-managed according to a configurable schedule.

The default model begins at age 13 with the child receiving read access to their own vault, progresses at age 16 to the child holding co-keys with guardians (any data sharing requires joint authorization), and completes at the age of legal majority with full key transfer to the young adult. The progression timeline is configurable by families and clinicians. This approach addresses the dual finding that Generation Z is the most likely cohort to share health information digitally [^254^], while simultaneously recognizing that the youngest patients require protection from both external exploitation and their own inexperience.

#### 3.3.3 Care Circle Management: Easy Addition and Removal

Caregiver relationships change over time: a night nurse for a child with T1D may rotate every few months; a spouse providing support during a difficult glycemic period may step back when control stabilizes; an adult child monitoring an elderly parent's glucose may need to scale involvement up or down. OpenDiabetic's care circle management is designed for this fluidity.

Adding a caregiver requires the Vault Owner to select a contact, choose permission tier and data scope, set an expiration date, and confirm with biometric or passkey authentication. Removing a caregiver is instant and takes effect across all synced devices within seconds. Automatic access review reminders prompt Vault Owners to audit active permissions at configurable intervals (default: 90 days). All access events — grants, renewals, revocations, and every data read or write — are logged to the tamper-evident audit trail.

The design principle is straightforward: managing who sees a patient's health data should be as easy as managing who sees their social media posts, and far more transparent. In a landscape where 60.9% of survey participants do not even know who has the right to access their medical records [^281^], OpenDiabetic's goal is to make every data access visible, justified, and revocable. The patient who told researchers, "I want to be the one to decide who should or shouldn't know that I'm diabetic" [^241^], speaks for a population whose privacy concerns are inseparable from the stigma and discrimination that four in five adults with diabetes experience [^315^]. Data ownership, in this context, is not an abstraction. It is the prerequisite for dignified care.
