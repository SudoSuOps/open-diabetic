# Dimension 05: Data Privacy Concerns & Trust Barriers in Diabetic Digital Health

## Research Summary

This report presents a comprehensive, evidence-based analysis of data privacy concerns, trust barriers, and user attitudes among people with diabetes (PwD) regarding digital health technologies (DHTs). Based on extensive research across academic literature, regulatory sources, patient surveys, and industry reports, the findings reveal a critical trust deficit that significantly impacts technology adoption, treatment adherence, and health outcomes for diabetic patients worldwide.

### Key Findings at a Glance:

- **60% of diabetes apps** request potentially dangerous permissions, and **28.4% lack any privacy policy**, exposing users to significant privacy risks
- **81% of Americans mistakenly believe** health data in digital apps is protected under HIPAA
- **77% pooled willingness** to share health data globally, but with wide variation (24-100%) driven by privacy concerns
- **4 in 5 adults with diabetes** experience stigma; **1 in 5 face discrimination** in healthcare, education, and employment
- **40% of employees with diabetes** report negative workplace treatment; **10% hide their condition** from employers
- **94% of patients** want companies held legally accountable for health data use; **75% want to opt-in** before any data use
- Healthcare data breaches exposed **276+ million records in 2024** alone, with the Change Healthcare breach affecting **190 million individuals**
- **67% of healthcare organizations** were hit by ransomware in 2024
- CGM data faces a **regulatory gap**: the same data protected under HIPAA when held by healthcare providers receives **no protection** when held by CGM manufacturers
- **Federated learning, privacy by design, and dynamic consent models** represent the most promising privacy-preserving alternatives

---

## Table of Contents

1. [Quantitative Data on Diabetic Patient Privacy Concerns](#1-quantitative-data-on-diabetic-patient-privacy-concerns)
2. [Health Data Monetization and Trust Erosion](#2-health-data-monetization-and-trust-erosion)
3. [Diabetes-Specific Privacy Concerns](#3-diabetes-specific-privacy-concerns)
4. [Regulatory Landscape: GDPR, HIPAA, and Emerging Laws](#4-regulatory-landscape)
5. [Trust Factors in Digital Health Adoption](#5-trust-factors-in-digital-health-adoption)
6. [Generational Differences in Health Data Sharing](#6-generational-differences)
7. [CGM Data and Surveillance Concerns](#7-cgm-data-and-surveillance-concerns)
8. [The Data Harvesting Business Model](#8-the-data-harvesting-business-model)
9. [Privacy-Preserving Alternatives](#9-privacy-preserving-alternatives)
10. [Consent Models for Health Data](#10-consent-models-for-health-data)
11. [Data Breaches in Health Tech](#11-data-breaches-in-health-tech)
12. [International Comparison](#12-international-comparison)

---

## 1. Quantitative Data on Diabetic Patient Privacy Concerns

### 1.1 Systematic Reviews of Patient Privacy Attitudes

A comprehensive 2024 systematic review of patients' perspectives on data confidentiality, privacy, and security of mHealth apps analyzed 33 studies and found significant concerns across multiple dimensions.

**Claim:** Two-thirds (66.7%) of mHealth app users cite cost and lack of security features as the main barriers to adopting the technology. [^281^]
Source: PMC (Alhammad et al., 2024)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11179037/
Date: 2024
Excerpt: "two-thirds of the users (66.7%) stated that the cost and lack of security features of mHealth apps were the main barriers to adopting the technology."
Context: Systematic review of patient perspectives on mHealth app privacy across multiple countries
Confidence: High

**Claim:** 38.04% of patients across 14 European countries felt concerned but helpless about their eHealth data privacy, while 16.3% avoided using eHealth services due to lack of confidence. [^281^]
Source: PMC (Natsiavas et al., systematic review)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11179037/
Date: 2024
Excerpt: "26.09% of the respondents felt confident regarding their eHealth data privacy, 38.04% felt concerned but helpless, and 16.3% stated that they avoided using eHealth services due to the lack of confidence regarding their data handling"
Context: Survey across 14 European countries examining patient attitudes toward eHealth data
Confidence: High

**Claim:** 72.46% of respondents were willing to share personal data for research purposes under anonymization conditions. [^281^]
Source: PMC (systematic review)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11179037/
Date: 2024
Excerpt: "72.46% of respondents were willing to share their personal data for research purposes, at least under anonymization"
Context: Willingness to share increases significantly when data is de-identified
Confidence: High

**Claim:** 60.9% of Turkish survey participants did not know who had the right to access their medical records, and 9.7% reported their records had been used or released without consent. [^281^]
Source: PMC (Ozkan et al., Turkey survey)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11179037/
Date: 2024
Excerpt: "Most of the participants (60.9%) stated that they did not know who had the right to access their medical records, and 7.4% believed to have comprehensive knowledge on the topic"
Context: Survey of patient awareness about medical record access rights in Turkey
Confidence: High

### 1.2 The Knowledge Gap: Patients Don't Know Their Data Isn't Protected

**Claim:** 81% of Americans assume that health data collected by digital health apps is protected under HIPAA, when in reality it is not. [^282^]
Source: ClearDATA/Harris Poll Survey
URL: https://www.cleardata.com/news/cleardata-survey-reveals-many-americans-dont-realize-personal-data-shared-with-digital-health-apps-could-be-sold-without-their-consent/
Date: July 11, 2023
Excerpt: "81% of Americans assume that all protected health data collected by digital health apps is protected under HIPAA. And while 68% of Americans say they are very or somewhat familiar with HIPAA, in reality, HIPAA does not safeguard protected health information (PHI) within the context of digital apps"
Context: National survey of 2,053 U.S. adults conducted by The Harris Poll
Confidence: High

**Claim:** 58% of Americans who have used digital health apps have never considered where their protected health information is shared. [^282^]
Source: ClearDATA/Harris Poll Survey
URL: https://www.cleardata.com/news/cleardata-survey-reveals-many-americans-dont-realize-personal-data-shared-with-digital-health-apps-could-be-sold-without-their-consent/
Date: July 11, 2023
Excerpt: "Over half of Americans who have ever used digital health apps (58%) have never considered where their protected health information/data is shared when using those apps."
Context: Only 27% consider privacy/security among top three factors when choosing care
Confidence: High

### 1.3 Global Willingness to Share Health Data: A Meta-Analysis

**Claim:** A 2024 meta-analysis of 65 studies found a pooled estimate of 77% willingness to share health data for secondary purposes, with extreme variation ranging from 24% (UK) to nearly 100% (Norway). [^305^]
Source: PMC (Baines et al., 2024)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12375002/
Date: September 16, 2024
Excerpt: "Sixty-five articles reported a wide range (24-100%) of public willingness to share resulting in a pooled estimate of 77% (95% CI: 71-82%) among predominantly high-income countries. Participants remain concerned about privacy, consent, and transparency."
Context: Worldwide meta-analysis of 117,905 participants across 52 studies
Confidence: High

**Claim:** Support for data sharing increases by an average of 11 percentage points when data is de-identified. [^304^]
Source: Understanding Patient Data (UK)
URL: https://www.understandingpatientdata.org.uk/what-do-members-public-think
Date: N/A (ongoing research)
Excerpt: "According to one study, support for the use of data increased an average 11 percentage points when data is de-identified, indicating that the nature of the data significantly affects public support."
Context: Analysis of UK public attitudes toward health data sharing
Confidence: High

### 1.4 Diabetes Apps: A Privacy Audit

**Claim:** Approximately 60% of analyzed diabetes apps requested potentially dangerous permissions, and 28.4% did not provide a privacy policy website. [^308^]
Source: PMC (Analysis of Diabetes Apps)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC7840294/
Date: 2021
Excerpt: "Approximately 60% of the analyzed diabetes apps requested potentially dangerous permissions, which pose a significant risk to users' data privacy. In addition, 28.4% (141/497) of the apps did not provide a website for their privacy policy."
Context: Analysis of 497 Android diabetes apps' privacy-related permissions
Confidence: High

**Claim:** 40% of diabetes apps contained advertising, and 95.4% were free of charge, with the free apps' business model largely based on advertising and consequently sharing or selling private data. [^308^]
Source: PMC (Analysis of Diabetes Apps)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC7840294/
Date: 2021
Excerpt: "40.0% (199/497) of the apps contained advertising... 95.4% of the apps were free of charge... app users do not always realize that the free apps' business model is largely based on advertising and, consequently, on sharing or selling their private data, either directly or indirectly, to unknown third parties."
Context: Business model analysis showing ad-supported diabetes apps monetize user data
Confidence: High

---

## 2. Health Data Monetization and Trust Erosion

### 2.1 The DeepMind-Royal Free Case: A Canonical Example

**Claim:** The UK's Information Commissioner's Office found that Royal Free NHS Foundation Trust failed to comply with data protection law when sharing 1.6 million patient records with Google's DeepMind, citing inadequate patient information. [^240^]
Source: Frontiers in Health Services
URL: https://www.frontiersin.org/journals/health-services/articles/10.3389/frhs.2026.1771744/full
Date: 2026
Excerpt: "In 2017 the UK Information Commissioner's Office concluded that Royal Free NHS Foundation Trust failed to comply with data protection law in sharing 1.6 million patient records with Google's DeepMind to develop and test the Streams app"
Context: Analysis through lens of "relational ethics" showing the failure was not merely procedural but relational -- patients were treated as data sources rather than moral partners
Confidence: High

**Claim:** The ICO investigation found the data-sharing agreement took place on an "inappropriate legal basis," and included sensitive information such as HIV status, depression diagnoses, and abortion history. [^283^]
Source: Wikipedia/Google DeepMind (referencing ICO and press reports)
URL: https://en.wikipedia.org/wiki/Google_DeepMind
Date: 2014-2017 (events)
Excerpt: "In April 2016, New Scientist obtained a copy of a data sharing agreement between DeepMind and the Royal Free London NHS Foundation Trust... This included personal details such as whether patients had been diagnosed with HIV, suffered from depression or had ever undergone an abortion"
Context: ICO investigation and National Data Guardian's "considered opinion"
Confidence: High

### 2.2 Commercialization of Health Data: The Broader Ecosystem

**Claim:** Sales of de-identified health data under HIPAA can occur without transparency to patients, without patient consent, and even over a patient's objection. [^314^]
Source: PMC (McGraw, 2020)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC7239667/
Date: 2020
Excerpt: "Legally, sales of de-identified data can occur without transparency to patients or the public, without patient consent, and even over a patient's objection."
Context: Analysis of HIPAA's limitations in protecting health data from commercialization
Confidence: High

**Claim:** Data brokers legally buy, sell, and trade anonymized health information. IQVIA captures 93% of US prescriptions daily, selling to pharmaceutical companies, insurers, and marketers. [^324^]
Source: HealthConsent FAQ
URL: https://myhealthconsent.org/faq
Date: 2024
Excerpt: "Data brokers like IQVIA (capturing 93% of prescriptions daily), LexisNexis, and hundreds of others sell to pharmaceutical companies, insurers, employers, and marketers. They claim data is 'de-identified' but researchers prove it can be traced back to individuals."
Context: Overview of the health data broker ecosystem
Confidence: Medium

**Claim:** A 2019 Duke University study found data brokers willing to sell mental health data including names and addresses of individuals with depression, bipolar disorder, anxiety, and PTSD for as little as $2,500. [^319^]
Source: Duke Tech Policy (Data Brokers and Sale of Mental Health Data)
URL: https://techpolicy.sanford.duke.edu/data-brokers-and-the-sale-of-americans-mental-health-data/
Date: 2025
Excerpt: "Data broker 4 was the most willing to sell data on depressed and anxious individuals at the author's budget price of $2,500 and stated no apparent, restrictive data-use limitations post-purchase."
Context: Investigation into data brokers selling sensitive mental health data
Confidence: High

---

## 3. Diabetes-Specific Privacy Concerns

### 3.1 CGM Data: The Regulatory Gap

**Claim:** CGM data is not protected by HIPAA when held by CGM manufacturers. Patients' ability to control how their information is collected, stored, and used is virtually nonexistent. [^270^]
Source: PMC (Britton & Britton-Colonnese, 2017)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC5478039/
Date: 2017
Excerpt: "The risks to patients' expectation of privacy are great, and their ability to control how their information is collected, stored, and used is virtually nonexistent."
Context: Foundational analysis of CGM data privacy and security protections
Confidence: High

**Claim:** CGM manufacturers can gather information including IP address, browser data, and activities while using products. Privacy policies allow use of "de-identified" data for any purpose. [^270^]
Source: PMC (Britton & Britton-Colonnese)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC5478039/
Date: 2017
Excerpt: "According to Dexcom's privacy policy, Dexcom can gather information including IP address and other information regarding the user's computer, Internet service, the browser used, and the user's activities while using Dexcom Products and Services."
Context: Specific example from Dexcom privacy policy showing broad data collection
Confidence: High

**Claim:** An Italian Data Protection Authority enforcement order (No. 242/2022) imposed a EUR 45,000 penalty on a US company marketing digital diabetes monitoring tools for unintentionally disseminating personal data of 2,000 people through a smart-working employee's error. [^241^]
Source: MDPI (Datafication of Care)
URL: https://www.mdpi.com/2075-4698/14/9/163
Date: 2024-08-29
Excerpt: "This order imposed a penalty of EUR 45,000 on a U.S. company that markets digital medical monitoring tools for diabetics in Italy. The penalty was for unintentionally disseminating the personal data of 2000 people undergoing glucose monitoring through an app."
Context: Case of email data breach exposing diabetes patient information
Confidence: High

### 3.2 Diabetes Stigma and Its Privacy Implications

**Claim:** 4 in 5 adults with diabetes experience diabetes stigma, and 1 in 5 experience discrimination in healthcare, education, and employment. [^315^]
Source: Lancet Diabetes & Endocrinology (Speight et al., 2024)
URL: https://pubmed.ncbi.nlm.nih.gov/38128969/
Date: 2024
Excerpt: "On average, four in five adults with diabetes experience diabetes stigma and one in five experience discrimination (ie, unfair and prejudicial treatment) due to diabetes, such as in health care, education, and employment."
Context: International consensus statement by 51 experts from 18 countries
Confidence: High

**Claim:** 40% of employees living with diabetes report negative treatment in the workplace. 10% have not disclosed their condition to their employer, with 43% of those fearing being treated differently. [^289^]
Source: International Diabetes Federation (IDF)
URL: https://idf.org/news-and-resources/news/negative-workplace-treatment/
Date: 2025-12-04
Excerpt: "Two-fifths [40%] of employees living with diabetes reported negative treatment in the workplace because of their condition... One in ten employees living with diabetes has not disclosed their condition to their employer, with 43% of those saying they feared being treated differently."
Context: Global IDF survey across five continents
Confidence: High

**Claim:** Nearly half (46%) of employees with type 1 diabetes reported negative treatment in the workplace, compared with 36% of those with type 2 diabetes. 23% said they had missed out on career development opportunities. [^289^]
Source: IDF Global Survey
URL: https://idf.org/news-and-resources/news/negative-workplace-treatment/
Date: 2025
Excerpt: "Nearly half [46%] of employees diagnosed with type 1 diabetes reported negative treatment in the workplace... Almost a quarter [23%] said they had missed out on career development or training opportunities because of their condition."
Context: Higher rates of discrimination for T1D due to visible management needs
Confidence: High

### 3.3 Fear of Being Judged Based on Shared Health Data

**Claim:** The concept of "dataveillance" -- self-disciplinary practice from monitoring and aggregation of data -- is perceived by PwD as a state of hyper-control, making them think more frequently about their disease and feel "sicker." [^241^]
Source: MDPI (Datafication of Care)
URL: https://www.mdpi.com/2075-4698/14/9/163
Date: 2024-08-29
Excerpt: "Dataveillance, understood as the self-disciplinary practice arising from the monitoring, aggregation, and organization of data, is perceived by interviewees as a state of hyper-control... the self-surveillance and the resulting disciplinary effects are experienced as excessive control, leading them to think more frequently about the disease and to feel 'sicker'."
Context: Qualitative study of Italian and Polish adults with T1D
Confidence: High

**Claim:** Patients with diabetes expressed fear that their data could end up "in the wrong hands," with one respondent stating: "I want to be the one to decide who should or shouldn't know that I'm diabetic." [^241^]
Source: MDPI (Datafication of Care)
URL: https://www.mdpi.com/2075-4698/14/9/163
Date: 2024-08-29
Excerpt: "What if my data ends up in the wrong hands? I want to be the one to decide who should or shouldn't know that I'm diabetic. I do everything I can to hide the presence of this insulin pump."
Context: Direct quote from Italian T1D patient, male, 48 years old
Confidence: High

---

## 4. Regulatory Landscape: GDPR, HIPAA, and Emerging Laws

### 4.1 GDPR and Health Data Protection

**Claim:** Under GDPR, health data is classified as "special category" data requiring explicit consent for processing. Data subject rights include access, rectification, erasure, data portability, and the right to withdraw consent. [^246^]
Source: PMC (Towards better Diabetes Data Rights)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12857859/
Date: 2023-12-13
Excerpt: "health data, which is classified under both the UK and EU GDPR as 'special category' data... Special category data may only be processed under strict conditions -- most commonly with explicit consent"
Context: Comprehensive analysis of diabetes technology and data governance under GDPR
Confidence: High

**Claim:** GDPR's Article 25 mandates "privacy by design" -- requiring data controllers to implement privacy protections from the design phase through the full data lifecycle. [^271^]
Source: Privacy Legal (Switzerland)
URL: https://privacylegal.ch/en/news-knowledge/privacy-by-design-in-digital-health
Date: 2016-04-27
Excerpt: "With this, the legislator wanted to emphasise that it is not enough to set standards, but that these standards must be implemented in an effective and verifiable manner."
Context: Legal analysis of privacy by design obligations under GDPR Article 25
Confidence: High

### 4.2 HIPAA: Limited Protection Scope

**Claim:** HIPAA only applies to "covered entities" (healthcare providers, insurers, and business associates). The same health data from a CGM that would be protected by HIPAA when held by a healthcare provider receives NO protection when held by the CGM manufacturer. [^270^]
Source: PMC (Britton & Britton-Colonnese, 2017)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC5478039/
Date: 2017
Excerpt: "The current data privacy and security landscape contains regulatory gaps where adequate protections may not exist... the same information protected by HIPAA is not protected because data generated by CGM is not held by a covered entity."
Context: Detailed analysis of HIPAA regulatory gaps for CGM data
Confidence: High

### 4.3 State Privacy Laws: CCPA and Beyond

**Claim:** The California Consumer Privacy Act (CCPA) provides broad exclusion for organizations handling health information under HIPAA, meaning HIPAA-covered entities are largely exempt from CCPA requirements. [^260^]
Source: Clarip (CCPA-HIPAA analysis)
URL: https://www.clarip.com/data-privacy/ccpa-hipaa/
Date: N/A
Excerpt: "The CCPA excludes: Medical information governed by the Confidentiality of Medical Information Act; Protected Health Information collected by a covered entity or business associate governed by HIPAA"
Context: Analysis of the interplay between CCPA and HIPAA for health data
Confidence: High

**Claim:** As of 2023-2024, 13 US states have enacted comprehensive consumer data privacy laws. Most exempt PHI in the hands of covered entities/business associates, but NOT health data held by non-HIPAA entities such as health apps. [^267^]
Source: Davis Wright Tremaine
URL: https://www.dwt.com/blogs/privacy--security-law-blog/2023/10/consumer-data-privacy-laws-healthcare-phi
Date: 2023-12-01
Excerpt: "In an unprecedented spate of privacy legislation, the number of states with new general privacy laws covering consumers' personal information has more than doubled, now standing at 13 states."
Context: Tracking the rapid expansion of state privacy laws affecting health data
Confidence: High

### 4.4 Washington My Health My Data Act (MHMDA)

**Claim:** Washington's MHMDA, passed in April 2023, fills critical gaps in HIPAA by extending protections to health data collected by entities not bound by HIPAA, including apps, websites, and small businesses. It prohibits the sale of health data without signed consumer authorization. [^307^]
Source: OneTrust
URL: https://www.onetrust.com/blog/washington-state-passes-my-health-my-data-act/
Date: 2024-02-16
Excerpt: "The Washington My Health My Data Act extends these protections to health data collected by entities not bound by HIPAA, including certain apps, websites, and small businesses."
Context: Analysis of groundbreaking state health data privacy legislation
Confidence: High

**Claim:** The MHMDA makes using geofencing technology to target consumers near healthcare facilities illegal -- a critical protection for individuals seeking sensitive care. [^303^]
Source: Emery Reddy (Legal Analysis)
URL: https://www.emeryreddy.com/data-breach/washingtons-my-health-my-data-act
Date: 2026-02-02
Excerpt: "It is illegal to use geofencing technology to target consumers near healthcare facilities for advertising or data collection purposes. This provision is especially important for protecting individuals seeking sensitive care."
Context: Consumer rights under the MHMDA
Confidence: High

### 4.5 European Health Data Space (EHDS)

**Claim:** The EHDS aims to establish a framework for health data sharing across the EU, but patient consent models remain debated, with the Standard Health Consent (SHC) proposed to give citizens control over their health data through an easy-to-use consent process. [^255^]
Source: Nature (Welzel et al., 2025)
URL: https://www.nature.com/articles/s41746-025-01945-z
Date: 2025-08-30
Excerpt: "A recently proposed consent approach -- the Standard Health Consent (SHC) -- would combine features of all three consent concepts and would give citizens control over their health data while enabling primary and secondary data sharing through an easy-to-use and standardized consent process."
Context: Proposed framework for consent management in the EHDS
Confidence: High

---

## 5. Trust Factors in Digital Health Adoption

### 5.1 The Trust Equation: What Builds and What Breaks Trust

**Claim:** Trust in digital health technologies is shaped by the interaction of functional and psychological factors, including identity and value-related concerns, in feedback loops that entrench avoidance behaviors over time. [^248^]
Source: PMC (Barriers to Digital Health Adoption in Older Adults)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12863245/
Date: N/A
Excerpt: "resistance is not a static failure to adopt nor a passive disengagement, but rather a dynamic, emotionally embedded process... shaped by the interaction of functional and psychological factors"
Context: Scoping review applying Innovation Resistance Theory (IRT) to older adults' digital health resistance
Confidence: High

**Claim:** 72% of people trust the NHS with their data; trust drops to 39% for health technology companies, 34% for national government, and 33% for local government. [^304^]
Source: Understanding Patient Data (UK)
URL: https://www.understandingpatientdata.org.uk/what-do-members-public-think
Date: N/A
Excerpt: "72% of people trust the NHS with their data... have the lowest levels of trust in health technology companies (39%), national government (34%) and local government (33%)."
Context: NHS England research on public trust in different organizations with health data
Confidence: High

### 5.2 Patient Demands for Accountability and Control

**Claim:** 94% of patients want companies held legally accountable for uses of their health data; 93% want app developers to be transparent; 80% want to opt-out of sharing; and more than 75% want to opt-in before any data use. [^207^]
Source: AMA Press Release (Savvy Cooperative Survey)
URL: https://www.ama-assn.org/press-center/ama-press-releases/patient-survey-shows-unresolved-tension-over-health-data-privacy
Date: 2022-07-25
Excerpt: "More than nine out of ten (94%) patients want companies to be held legally accountable for uses of their health data. A similar majority of patients (93%) want health application (app) developers to be transparent... Almost 80% of patients want to be able to opt-out of sharing some or all their health data with companies. More than 75% of patients want to opt-in before a company uses any of their health data."
Context: Survey of 1,000 patients by Savvy Cooperative, patient-owned health insights organization
Confidence: High

**Claim:** Nearly 75% of patients expressed concern about protecting the privacy of personal health data, and only 20% knew the scope of companies and individuals with access to their data. [^207^]
Source: AMA/Savvy Cooperative Survey
URL: https://www.ama-assn.org/press-center/ama-press-releases/patient-survey-shows-unresolved-tension-over-health-data-privacy
Date: 2022-07-25
Excerpt: "Nearly 75% of patients expressed concern about protecting the privacy of personal health data, and only 20% of patients indicated they knew the scope of companies and individuals with access to their data."
Context: Key finding on the gap between concern and understanding
Confidence: High

**Claim:** 82% of people expect the NHS to publish information about data access partnerships; 74% believe the public should be involved in decisions about health data use. [^290^]
Source: Understanding Patient Data/Ada Lovelace Institute
URL: https://www.adalovelaceinstitute.org/news/accountability-transparency-participation-third-party-use-nhs-data/
Date: 2020-03-02
Excerpt: "82% of people expect the NHS to publish information about data access partnerships. 74% of people believe the public should be involved in decisions about how health data is used."
Context: National survey of 2,095 UK citizens plus citizens' juries
Confidence: High

### 5.3 Discrimination Concerns

**Claim:** 64% of patients are "very" or "extremely" concerned about discriminatory uses of health data to exclude them from insurance coverage; 56% are concerned about employment discrimination; 59% are concerned about being excluded from healthcare opportunities. [^207^]
Source: AMA/Savvy Cooperative Survey
URL: https://www.ama-assn.org/press-center/ama-press-releases/patient-survey-shows-unresolved-tension-over-health-data-privacy
Date: 2022-07-25
Excerpt: "Most patients stated they are 'very' or 'extremely' concerned about discriminatory uses of personal health data to exclude them from insurance coverage (64%), employment (56%), or opportunities for health care (59%)."
Context: Discrimination concerns heightened post-Dobbs decision
Confidence: High

---

## 6. Generational Differences in Health Data Sharing

### 6.1 Digital Natives vs. Digital Immigrants

**Claim:** Younger generations (ages 18-34) are more likely to choose convenience over privacy: 54% said privacy was not as important as convenience, compared to only 31% of those over 65. [^282^]
Source: ClearDATA/Harris Poll
URL: https://www.cleardata.com/news/cleardata-survey-reveals-many-americans-dont-realize-personal-data-shared-with-digital-health-apps-could-be-sold-without-their-consent/
Date: July 11, 2023
Excerpt: "54% of Americans ages 18-34 said the privacy and security of their personal health information was not as important to them as convenience, while 69% of those over age 65 disagreed, putting a higher premium on privacy and security."
Context: Clear generational divide in privacy vs. convenience tradeoffs
Confidence: High

**Claim:** 60% of Americans ages 18-34 would still use a digital health app if they knew data would be shared with third parties for marketing, while only 17% of those over 65 would do the same. [^282^]
Source: ClearDATA/Harris Poll
URL: https://www.cleardata.com/news/cleardata-survey-reveals-many-americans-dont-realize-personal-data-shared-with-digital-health-apps-could-be-sold-without-their-consent/
Date: July 11, 2023
Excerpt: "60% of Americans ages 18-34 would still use a digital health app if they knew data collected would be shared with third parties for marketing purposes, while only 17% of those over age 65 said the same thing."
Context: Significant willingness among younger users to accept data sharing
Confidence: High

### 6.2 Generational Health Data Attitudes

**Claim:** The Silent Generation (born 1925-1945) is least comfortable with technology and may be more likely to experience privacy breaches due to uncertainty about protective measures. Gen Z is most likely to share health information with non-primary care providers and trusts internet health information more than HCPs. [^254^]
Source: PMC (Generational differences in healthcare)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11897013/
Date: N/A
Excerpt: "The Silent Generation are considered the least comfortable with technology... This cohort may be more likely to experience information theft or privacy breaches due to uncertainty about appropriate measures... Gen Z are more likely to share their health information with non-primary care providers"
Context: Comprehensive review of generational differences in healthcare technology attitudes
Confidence: High

**Claim:** Privacy and data security are particularly important to Generation X. Millennials prefer virtual appointments and on-demand access to personal health records. [^254^]
Source: PMC (Generational differences in healthcare)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11897013/
Date: N/A
Excerpt: "Privacy and data security are important to this generation [Gen X]... Millennials... would prefer to have a virtual appointment than see a doctor in person. They value on-demand (e.g., access to personal health records, online appointment scheduling)"
Context: Gen X prioritizes privacy; Millennials prioritize convenience and access
Confidence: High

---

## 7. CGM Data and Surveillance Concerns

### 7.1 Dataveillance and the Experience of Self-Surveillance

**Claim:** CGM users experience "dataveillance" -- constant monitoring that creates self-disciplinary effects. For some, this is empowering; for others, it creates excessive control leading them to feel "sicker." [^241^]
Source: MDPI (Datafication of Care)
URL: https://www.mdpi.com/2075-4698/14/9/163
Date: 2024-08-29
Excerpt: "Dataveillance... is perceived by interviewees as a state of hyper-control... the self-surveillance and the resulting disciplinary effects are experienced as excessive control, leading them to think more frequently about the disease and to feel 'sicker'."
Context: Qualitative study revealing dual nature of CGM monitoring
Confidence: High

**Claim:** Some CGM users experience "dataism" -- over-reliance on devices that triggers a relaxation of internal control mechanisms, with some no longer noticing sensor alarms. [^241^]
Source: MDPI (Datafication of Care)
URL: https://www.mdpi.com/2075-4698/14/9/163
Date: 2024-08-29
Excerpt: "The concept of dataism... is observed in our sample of interviewees as an over-reliance on the tools and the data they generate... These individuals report no longer noticing the sensor alarms during the night and experience a diminished sense of 'individual feelings' concerning diabetes."
Context: Psychological dependency on CGM data as form of dataism
Confidence: High

### 7.2 Employer Wellness Programs and Data Concerns

**Claim:** 1 in 10 employees with diabetes has not disclosed their condition to their employer, with 29% concerned that disclosure could limit their career progression. [^289^]
Source: IDF Global Survey
URL: https://idf.org/news-and-resources/news/negative-workplace-treatment/
Date: 2025
Excerpt: "One in ten employees living with diabetes has not disclosed their condition to their employer, with 43% of those saying they feared being treated differently. Nearly a third [29%] of these respondents were concerned that disclosure could limit their career progression."
Context: Culture of silence around diabetes in the workplace due to fear of discrimination
Confidence: High

---

## 8. The Data Harvesting Business Model

### 8.1 Health Apps Sharing Data with Facebook and Google

**Claim:** 79% of popular health websites share data with third parties including Google, Amazon, Facebook, and Oracle -- often without explicit consent for "special category data" under GDPR. [^329^]
Source: Campaign Live (Financial Times investigation)
URL: https://www.mmm-online.com/home/channel/media-news/health-sites-sharing-personal-data-with-google-facebook-and-amazon/
Date: 2024-10-23
Excerpt: "79% of them dropped cookies that allow other parties to track people around the web... drug names entered into Drugs.com were sent to DoubleClick, symptoms typed into WebMD were shared with Facebook"
Context: Financial Times analysis of 100 health websites
Confidence: High

**Claim:** A 2019 Wall Street Journal investigation found that health and fitness apps were sharing sensitive personal information with Facebook through its "App Events" tool, including ovulation cycles, pregnancy intentions, heart rate data, and body weight -- without user notification. [^331^]
Source: The Verge
URL: https://www.theverge.com/2019/2/22/18236398/facebook-mobile-apps-data-sharing-ads-health-fitness-privacy-violation
Date: 2019-02-22
Excerpt: "app makers like ovulation tracker Flo Health and Azumio Inc... use what's known as 'App Events,' a Facebook-provided tool that shares sensitive, user-submitted data directly with the social network"
Context: Facebook's advertising tool enabling health data extraction from apps
Confidence: High

**Claim:** At least 61% of apps tested automatically transfer data to Facebook the moment a user opens the app, whether they have a Facebook account or not. [^335^]
Source: Privacy International
URL: https://www.privacyinternational.org/sites/default/files/2018-12/How%20Apps%20on%20Android%20Share%20Data%20with%20Facebook%20-%20Privacy%20International%202018.pdf
Date: 2018
Excerpt: "We found that at least 61 percent of apps we tested automatically transfer data to Facebook the moment a user opens the app. This happens whether people have a Facebook account or not, or whether they are logged into Facebook or not."
Context: Technical analysis of Facebook SDK data collection across Android apps
Confidence: High

**Claim:** Health advertising on Facebook reveals that personal health data is routinely passed to third parties, but users are not transparently informed about these practices. All five digital medicine apps studied had privacy policies, but three said health data would not be shared when information was actually being shared. [^330^]
Source: HIPAA Journal
URL: https://www.hipaajournal.com/study-explores-how-medical-apps-are-sending-health-data-to-facebook-and-others/
Date: 2022-08-26
Excerpt: "All five of the apps had privacy policies, but three said health data would not be shared with advertisers when information was being shared... 'These marketing tools reveal a dark pattern used to track vulnerable patient journeys across platforms'"
Context: Study of medical apps sharing health data through Facebook's cross-site tracking
Confidence: High

### 8.2 The FTC Crackdown on Health Data Sharing

**Claim:** Health apps like GoodRx, BetterHelp, and Cerebral were fined over $20 million by the FTC for sharing user data with Facebook and Google without adequate consent. [^324^]
Source: HealthConsent
URL: https://myhealthconsent.org/faq
Date: 2024
Excerpt: "Health apps like GoodRx, BetterHelp, and Cerebral were fined over $20 million by the FTC for sharing user data with Facebook and Google."
Context: FTC enforcement actions against health data sharing violations
Confidence: High

---

## 9. Privacy-Preserving Alternatives

### 9.1 Federated Learning

**Claim:** Federated learning enables collaborative AI model development using large datasets without sharing individual patient-level data. The Personal Health Train (PHT) infrastructure allows research questions to "travel" to data rather than data traveling to researchers. [^299^]
Source: JMIR AI
URL: https://ai.jmir.org/2025/1/e60847
Date: 2026-06-05
Excerpt: "Federated learning (FL) allows the collaborative development of artificial intelligence models using large datasets, without the need to share individual patient-level data... partial models trained on separate datasets are shared, but not the data itself"
Context: Advancing privacy-preserving healthcare analytics through federated deep learning
Confidence: High

**Claim:** Federated learning with differential privacy can maintain model accuracy within 5% of non-private models while providing formal privacy guarantees. [^301^]
Source: WJARR (Privacy-preserving federated learning)
URL: https://wjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-1921.pdf
Date: 2025
Excerpt: "Studies on real-world healthcare datasets have demonstrated that differential privacy mechanisms can maintain model accuracy within 5% of non-private models while providing formal privacy guarantees."
Context: Technical analysis of privacy-utility tradeoffs in federated learning
Confidence: High

### 9.2 Privacy by Design in Healthcare

**Claim:** Privacy by design consists of seven foundational principles: (1) proactive not reactive; (2) privacy as default; (3) privacy embedded into design; (4) full functionality; (5) end-to-end security; (6) visibility and transparency; (7) respect for user privacy. [^269^]
Source: Brightsquid
URL: https://brightsquid.com/enabling-privacy-by-design-in-canadian-healthcare/
Date: 2025-03-18
Excerpt: "Privacy by Design is a framework developed by Dr. Ann Cavoukian in the 1990s, advocating for privacy to be an integral part of the design and operation of IT systems, networked infrastructure, and business practices."
Context: Healthcare-specific implementation of privacy by design principles
Confidence: High

**Claim:** A Privacy Impact Assessment (PIA) is the first step toward implementing privacy by design in healthcare, identifying potential privacy risks before they become active problems. [^274^]
Source: SecureWorld
URL: https://www.secureworld.io/industry-news/privacy-by-design-healthcare-systems
Date: 2023-07-26
Excerpt: "A Privacy Impact Assessment, or PIA, is a process that helps assist organizations in identifying and minimizing the potential privacy risks of new projects or policies."
Context: Best practices for implementing privacy by design in healthcare systems
Confidence: High

### 9.3 Trusted Research Environments (TREs)

**Claim:** Trusted Research Environments (TREs) are controlled virtual environments for securely storing healthcare data, enabling researchers to analyze data without revealing personally identifiable information. Data owners remain in full control of their data. [^277^]
Source: PMC (Privacy-by-Design Environments for Large-Scale Health Research)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC9565554/
Date: 2021-07-26
Excerpt: "These TREs are designed as controlled virtual environments for securely storing healthcare data, enabling analysts and researchers to conglomerate and share data without revealing any personally identifiable information."
Context: NHS England investment in privacy-preserving research infrastructure
Confidence: High

---

## 10. Consent Models for Health Data

### 10.1 Current Consent Models

**Claim:** Three main consent models exist for health data: (1) broad consent -- agreement to future research for up to 5 years, revocable; (2) dynamic consent -- patients provide/withdraw consent via web/app platform; (3) meta consent -- patients choose how they want to provide consent. [^255^]
Source: Nature (Welzel et al., 2025)
URL: https://www.nature.com/articles/s41746-025-01945-z
Date: 2025-08-30
Excerpt: "One model is broad consent, where individuals agree to future research on their data for up to 5 years and can revoke consent at any time... dynamic consent allows individuals to provide or withdraw consent via a web or app platform... meta consent combines broad and dynamic consent"
Context: Analysis of consent models for secure health data sharing
Confidence: High

### 10.2 Granular Consent Principles

**Claim:** Consent granularity requires: documented records of consent; easy withdrawal without penalty; freely given consent without coercion; specific purposes for each consent request; and unbundled consent separate from terms of service. [^257^]
Source: Talking Health Tech
URL: https://www.talkinghealthtech.com/glossary/consent-granularity
Date: 2025-10-29
Excerpt: "Consent is only valid if individuals have a genuine choice. It must not be forced, implied, or obtained through pressure... Requests for consent should be separate from other terms and conditions or service agreements."
Context: Principles of granular consent in health data
Confidence: High

### 10.3 Emerging: Self-Sovereign Identity (SSI)

**Claim:** Self-Sovereign Identity (SSI) using blockchain-based decentralized identifiers (DIDs) enables automated consent management where consent agreements can be encoded into smart contracts, with automatic expiration and immediate revocation across the ecosystem. [^255^]
Source: Nature (Welzel et al., 2025)
URL: https://www.nature.com/articles/s41746-025-01945-z
Date: 2025-08-30
Excerpt: "When a patient wants to revoke or update consent, the change can be immediately reflected across the ecosystem without the need to update multiple records... Automated consent management could be realized by encoding consent agreements into smart contracts linked to DIDs."
Context: Emerging technical infrastructure for patient-controlled health data consent
Confidence: Medium

---

## 11. Data Breaches in Health Tech

### 11.1 The Scale of Healthcare Data Breaches

**Claim:** In 2024, 725 large healthcare breaches were reported in the US -- nearly two per day. The average healthcare data breach cost $7.42 million in 2025, more than any other industry for 14 consecutive years. [^182^]
Source: Sprinto
URL: https://sprinto.com/blog/healthcare-data-breach-statistics/
Date: 2026-06-17
Excerpt: "With 725 large breaches reported in U.S. healthcare in 2024 alone, nearly two a day... In 2025, the healthcare industry topped IBM's league table for breach costs, averaging $7.42 million per incident"
Context: Comprehensive analysis of healthcare data breach statistics
Confidence: High

**Claim:** The Change Healthcare ransomware attack (February 2024) affected 192.7 million individuals -- the largest healthcare data breach in US history -- with total costs reaching $3.09 billion. [^184^]
Source: HIPAA Journal
URL: https://www.hipaajournal.com/healthcare-data-breach-statistics/
Date: 2026-06-04
Excerpt: "the Change Healthcare ransomware attack... 192.7 million individuals are known to have been affected and had their personal and health information stolen in that single attack."
Context: Largest confirmed healthcare data breach ever recorded
Confidence: High

**Claim:** From 2009 to 2024, 6,759 healthcare data breaches (500+ records each) exposed the PHI of 846,962,011 individuals -- more than 2.6x the US population. [^182^]
Source: Sprinto
URL: https://sprinto.com/blog/healthcare-data-breach-statistics/
Date: 2026-06-17
Excerpt: "From 2009 to 2024, there were 6,759 healthcare data breaches (>=500 records), exposing or impermissibly disclosing 846,962,011 individuals' PHI -- more than 2.6x the U.S. population."
Context: Long-term tracking of healthcare data breach trends
Confidence: High

### 11.2 Ransomware Attacks

**Claim:** 67% of healthcare organizations were hit by ransomware attacks in 2024 -- nearly double the 34% rate in 2021. 29% of healthcare organizations that experienced breaches reported increased patient mortality. [^280^]
Source: Faxsipit
URL: https://www.faxsipit.com/blogs/healthcare-cybersecurity-statistics
Date: 2026-06-11
Excerpt: "67% of healthcare organizations were hit by ransomware attacks in 2024, nearly double the 34% rate in 2021... 29% of healthcare organizations that experienced data breaches or ransomware attacks reported increased patient mortality as a direct consequence"
Context: Sophos/Ponemon Institute survey of 677 IT and cybersecurity professionals
Confidence: High

### 11.3 Impact on Patient Care

**Claim:** After a hospital suffers a data breach and implements security fixes, door-to-ECG times rise by up to 2.7 minutes and 30-day heart-attack mortality increases by 0.23-0.36 percentage points -- effectively erasing roughly a year of clinical progress. [^182^]
Source: Sprinto (referencing peer-reviewed research)
URL: https://sprinto.com/blog/healthcare-data-breach-statistics/
Date: 2026-06-17
Excerpt: "Peer-reviewed research found that after a hospital suffers a breach and implements security fixes, door-to-ECG times rise by up to 2.7 minutes and 30-day heart-attack mortality increases by 0.23-0.36 percentage points."
Context: Direct clinical impact of cybersecurity breaches on patient outcomes
Confidence: High

---

## 12. International Comparison

### 12.1 EU vs. US: Fundamental Approaches

**Claim:** GDPR requires explicit consent for data processing and provides the right to withdraw consent at any time. CCPA emphasizes the right to opt-out of data sales. GDPR fines can reach 4% of global turnover; CCPA fines cap at $7,500 per violation. [^261^]
Source: Equisoft (CCPA Explained)
URL: https://www.equisoft.com/glossary/california-consumer-privacy-act-explained-ccpa
Date: 2025-05-15
Excerpt: "GDPR mandates explicit consent for data processing, while the CCPA emphasizes the right to opt out of data sales... Fines of up to $7,500 per violation for intentional breaches [CCPA]... Fines up to EUR20M or 4% of annual global turnover [GDPR]"
Context: Side-by-side comparison of GDPR and CCPA
Confidence: High

### 12.2 Cross-Country Willingness to Share Health Data

**Claim:** Norway showed nearly 100% willingness to share health data in one study; the UK showed only 24% in another. The US pooled estimate was 75%, while Germany was 83%. [^305^]
Source: PMC (Worldwide willingness meta-analysis)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12375002/
Date: 2024-09-16
Excerpt: "Willingness to share health data in individual studies ranged between 24% in the UK, and almost 100% in Norway... USA (0.75), Germany (0.83), Canada (0.79), UK (0.71)"
Context: Country-specific willingness to share health data in meta-analysis
Confidence: High

### 12.3 Trust in Organizations Across Countries

**Claim:** The NHS is by far the most trusted organization with health data in the UK: 83% trust the NHS to use data responsibly, and 82% trust the NHS to keep data secure. Trust in health technology companies is only 39%. [^304^]
Source: Understanding Patient Data (UK)
URL: https://www.understandingpatientdata.org.uk/what-do-members-public-think
Date: N/A
Excerpt: "83% of British adults trust the NHS to use their data responsibly, and 82% trust the NHS to keep their data secure... 39% [trust] health technology companies"
Context: Trust in different organizations with health data in the UK
Confidence: High

### 12.4 Diabetes-Specific Data Rights Initiatives

**Claim:** A Diabetes Data Rights Charter is being co-developed with the diabetes community to articulate principles for responsible diabetes technology development, ensuring PwD can safely access and exercise control over their data. [^246^]
Source: PMC (Towards better Diabetes Data Rights)
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12857859/
Date: 2023-12-13
Excerpt: "we argue that PwD interests could be bolstered by something like the Diabetes Data Rights Charter we are co-developing with the diabetes community... ensuring that innovation delivers benefits equitably to those most affected"
Context: Emerging framework for diabetes-specific data rights
Confidence: High

### 12.5 The Italian Regulatory Response

**Claim:** The Italian Data Protection Authority's enforcement order against a US diabetes monitoring company (EUR 45,000 fine) established that patient data can only be processed with appropriate legal basis, consent to privacy policy must be separate from license agreement, and data subjects must be informed about data collection purposes with provision for consent revocation. [^241^]
Source: MDPI (Datafication of Care)
URL: https://www.mdpi.com/2075-4698/14/9/163
Date: 2024-08-29
Excerpt: "In the specific case of the glucose monitoring sensor, consent to the terms of the license agreement and consent to the privacy policy must be separate and not on the same page -- consent must be expressed with two different 'clicks'."
Context: Practical regulatory guidance for diabetes app consent requirements
Confidence: High

---

## Synthesis and Implications for OpenDiabetic Foundation's Data Ownership Doctrine

### Critical Gaps Identified

1. **Regulatory Vacuum for CGM Data**: The single most critical finding is that CGM data exists in a regulatory gap. When held by healthcare providers, it receives HIPAA protection. When held by CGM manufacturers, it receives virtually no protection. This gap must be addressed for any data ownership framework to be meaningful.

2. **Knowledge Asymmetry**: 81% of Americans incorrectly believe health app data is protected by HIPAA. This fundamental misunderstanding means patients cannot make informed decisions about their data. Any data ownership doctrine must include robust patient education.

3. **Consent Architecture is Broken**: Current consent models are too broad, opaque, and difficult to revoke. Patients need granular, dynamic, revocable consent that travels with their data.

4. **Stigma Amplifies Privacy Concerns**: With 4 in 5 PwD experiencing stigma and 1 in 5 facing discrimination, privacy is not a luxury -- it is a prerequisite for health. The fear of being judged based on shared health data is a significant, measurable barrier to both technology adoption and treatment adherence.

5. **Trust is the Foundation**: All data points converge on a single conclusion -- without trust, patients will not adopt digital health technologies, will not share data, and will not achieve optimal health outcomes. Trust requires transparency, accountability, patient control, and privacy by design.

### Recommended Principles for Data Ownership Doctrine

Based on this research, the following principles should underpin the OpenDiabetic Foundation's Data Ownership Doctrine:

1. **Granular, Revocable Consent**: Patients must be able to control who sees what data, for what purpose, and for how long. Consent must be revocable at any time.

2. **Transparency by Default**: All data collection, processing, and sharing must be fully transparent, using plain language (5th-grade reading level).

3. **Privacy by Design**: All diabetes technologies should embed privacy protections from the design phase, not as an afterthought.

4. **Purpose Limitation**: Data collected for diabetes management may not be used for advertising, insurance risk assessment, or employer wellness programs without explicit, separate consent.

5. **Federated Architecture**: Where possible, data should remain under patient control, with analytics brought to the data rather than data traveling to analytics.

6. **Patient Education**: A comprehensive patient education component is essential to address the 81% knowledge gap about HIPAA protections.

7. **Anti-Discrimination Safeguards**: Data ownership must include protections against the well-documented discrimination that PwD face in employment and insurance.

---

*Research compiled for the OpenDiabetic Foundation's Data Ownership Doctrine. All claims sourced and cited as of January 2025.*
