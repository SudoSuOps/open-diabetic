# Dimension 04: Open-Source Diabetes Technology Ecosystem

## Executive Summary

The open-source diabetes technology ecosystem represents one of the most remarkable examples of patient-led innovation in healthcare history. What began in 2013 with a father's desire to monitor his son's glucose remotely has evolved into a global movement — #WeAreNotWaiting — encompassing thousands of volunteer developers, multiple automated insulin delivery (AID) systems, data platforms, and a robust body of clinical evidence. This ecosystem includes Nightscout (real-time CGM data sharing, ~39,000+ community members), Tidepool (FDA-registered nonprofit data platform, 700,000+ lives touched), Loop/AndroidAPS/Trio (open-source AID systems, 30,000+ estimated users), xDrip+/Juggluco (CGM data collection tools), and a growing constellation of smartwatch integrations and caregiver apps. The CREATE trial (2022) provided landmark RCT evidence demonstrating that open-source AID is safe and effective, with users spending 3 hours 21 minutes more per day in target glucose range. However, the ecosystem faces critical challenges: volunteer burnout, lack of sustainable funding, regulatory barriers (especially in EU/UK), interoperability gaps with commercial systems, and the need for ongoing clinical evidence generation. For the OpenDiabetic Foundation, significant opportunities exist to support this ecosystem through funding volunteer developers, facilitating interoperability standards, supporting regulatory pathways, and filling gaps in data infrastructure — while being careful not to duplicate existing efforts or undermine the community-driven ethos that makes this ecosystem unique.

---

## 1. Nightscout: History, Architecture, and Community

### Origins and Founding

The Nightscout Project traces its origin to February 2013, when John Costik, a software engineer and father of a 4-year-old boy newly diagnosed with type 1 diabetes, developed software to access and transfer CGM data to cloud computing infrastructure after finding no commercially available way to access his son's data in real time.[^68^] Costik shared his accomplishment on Twitter, and after others expressed interest, privately shared the source code. His uploader was expanded by Lane Desborough and Ross Naylor to develop "Nightscout," adding a blood glucose chart display that could be viewed throughout a home.[^68^]

Further development occurred within a private community of developers including Ben West (co-founder and key architect), Ross Naylor, Kevin Lee, Jason Calabrese, Jason Adams, and Toby Canning.[^68^] Because this software was, in effect, an unlicensed medical device, the community delayed releasing the code as open source to explore and address legal concerns. The combined code was released in 2014 as the Nightscout Project.[^68^]

**Claim:** Nightscout was founded in 2013 by John Costik and expanded by a community of developers including Ben West, Lane Desborough, and others, with open-source release in 2014.[^68^]
**Source:** Wikipedia - Nightscout
**URL:** https://en.wikipedia.org/wiki/Nightscout
**Date:** 2017-05-06 (article); project founded 2013-2014
**Excerpt:** "The Nightscout Project traces its origin to February 2013, when the parents of a 4-year-old boy newly diagnosed with type 1 diabetes began using a continuous glucose monitoring system... The combined code was released in 2014 as the Nightscout Project."
**Confidence:** High

### Architecture and Technical Design

Nightscout is a do-it-yourself, open-source project built on Node.js with MongoDB for data storage. The system consists of:[^72^][^232^]

- **CGM Uploader**: A bridge application that reads CGM data and uploads it to the cloud
- **Cloud Database** (MongoDB): Stores entries, treatments, device status, profiles, and food data[^235^]
- **Web Application**: Real-time visualization dashboard with customizable alerts
- **REST API**: Provides programmatic access to all data

The Nightscout API v3 provides a lightweight, secured, and HTTP REST-compliant interface for T1D treatment data exchange, with endpoints for `entries` (CGM data), `treatments` (insulin, carbs, notes), `devicestatus` (pump/phone status), `profile` (settings), and `food` (custom food database).[^232^] The API supports authentication via API_SECRET tokens and JWT tokens, with full CRUD operations.

A modern rewrite called **Nocturne** is under active development, built with .NET 10 and PostgreSQL, providing complete Nightscout API parity with SignalR real-time support and data connectors for Dexcom, Glooko, LibreLinkUp, and others.[^192^]

**Claim:** Nightscout uses a Node.js/MongoDB stack with REST API v3 supporting entries, treatments, devicestatus, profile, and food collections.[^232^]
**Source:** Nightscout API OpenAPI Specification (GitHub)
**URL:** https://raw.githubusercontent.com/apidescriptions/nightscout/main/spec/cadl-output/@cadl-lang/openapi3/openapi.yaml
**Date:** 2018-05-03
**Excerpt:** "Nightscout API v3 is a component of cgm-remote-monitor project. It aims to provide lightweight, secured and HTTP REST compliant interface for your T1D treatment data exchange."
**Confidence:** High

### Community and Governance

The primary Facebook group for the movement, "CGM in the Cloud," supports individuals seeking to use real-time CGM data and as of early 2026 has over 39,000 members.[^68^] A related 501(c)(3) organization, the **Nightscout Foundation**, was formed in 2014 to encourage and support open-source technology projects for individuals with type 1 diabetes.[^68^]

Ben West, a core developer from the early days, has described how he organized the scattered source code into well-framed projects on GitHub, making them accessible to programmers.[^73^] He later founded **Medical Data Networks** and launched **T1Pal**, a commercial Nightscout-as-a-service offering that works with the FDA to ensure compliance.[^73^]

Multiple managed Nightscout hosting services now exist: T1Pal (by Ben West), NS10BE (Germany-based since 2017), and Nightscout Pro (founded 2022 by Andy Low).[^72^]

**Claim:** The CGM in the Cloud Facebook group has over 39,000 members, and the Nightscout Foundation was formed as a 501(c)(3) in 2014.[^68^]
**Source:** Wikipedia - Nightscout
**URL:** https://en.wikipedia.org/wiki/Nightscout
**Date:** 2017-05-06
**Excerpt:** "As of February 2026, this group has over 39,000 members. In addition, the related 501(c)(3) organization Nightscout Foundation was formed in 2014"
**Confidence:** High

### Funding Model

Nightscout itself operates as free, open-source software. The Nightscout Foundation provides governance and support, funded through donations and grants. Individual hosting services (T1Pal, NS10BE, Nightscout Pro) charge modest subscription fees ($5-15/month typically) for managed instances, relieving users of the technical burden of self-hosting.[^72^]

---

## 2. Tidepool: Nonprofit Model, FDA Strategy, and Open Code

### Founding and Mission

Tidepool was founded in 2013 by Howard Look, a parent of a child with type 1 diabetes who was an active user of Loop.[^65^][^74^] The organization's vision is to encourage diabetes device companies to recognize the value of a more open, interoperable approach to medical device development. An early success was persuading most leading diabetes device manufacturers to provide Tidepool with their data/device protocols to enable development of an interoperable data management platform.[^65^]

Tidepool is a 501(c)(3) nonprofit. As Howard Look explained in 2015: "Being nonprofit ensures that Tidepool in perpetuity prioritizes interoperability and open access over data silos and claims on market share."[^141^]

**Claim:** Tidepool was founded in 2013 by Howard Look as a 501(c)(3) nonprofit to promote diabetes device data interoperability.[^141^]
**Source:** Journal of the American Medical Informatics Association (JAMIA)
**URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC4784555/
**Date:** 2015-09-02 (published); 2012-01-30 (PMC record)
**Excerpt:** "We thus formed a non-profit corporation, Tidepool (tidepool.org), hypothesizing that a transparent process and organizational structure were critical to establish a new paradigm for management of diabetes device data."
**Confidence:** High

### Technology Platform

The Tidepool Platform provides a hub for patients' diabetes device data with open access for third-party apps via RESTful APIs.[^141^] Key technical features include:[^140^][^141^]

- **RESTful API architecture** using Node.js and Golang
- **Data storage**: MongoDB and Amazon S3 on HIPAA-compliant AWS
- **Client architecture**: React with D3 data visualization
- **Device-agnostic data ingestion** from 85+ diabetes devices
- **Tidepool data model**: Standardized representation of CGM, pump, and meter data
- **Open-source** under BSD license, with code on GitHub

The Tidepool Platform currently supports data management for over 1,000 clinics and more than 600,000 people living with diabetes in the US.[^137^]

### Tidepool Loop FDA Clearance

In January 2023, Tidepool Loop became the **first open-source AID algorithm to gain FDA regulatory clearance** — a landmark moment for the #WeAreNotWaiting movement.[^61^] Key facts about this clearance:

- **510(k) submission**: Completed end of 2020[^61^]
- **FDA clearance**: January 23, 2023[^61^]
- **Precedent**: First time real-world clinical evidence (rather than a clinical trial) was used to support iAGC clearance[^61^]
- **Evidence base**: Driven by data from 1,000+ open-source AID users willing to donate their data[^61^]
- **Openness**: Source code, meeting notes, and regulatory documentation are all publicly available[^61^]
- **Challenge**: No ACE (Alternate Controller Enabled) pump partner has yet been secured for commercial launch[^65^][^69^]

**Claim:** Tidepool Loop received FDA clearance on January 23, 2023, becoming the first open-source AID algorithm to achieve regulatory approval.[^61^]
**Source:** Journal of Diabetes Science and Technology
**URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC10563523/
**Date:** 2023
**Excerpt:** "After 2 years, the FDA approved the Tidepool Loop iAGC on January 23, 2023... this is the first time that real-world clinical evidence, rather than a clinical trial, was used to support regulatory clearance of an iAGC."
**Confidence:** High

### Sustainability and Revenue Model

Tidepool has been funded by grants from the JDRF, Goldsmith Foundation, The Helmsley Charitable Trust, and private philanthropy.[^141^] A major $6M funding commitment from Helmsley Charitable Trust and JDRF in 2018 specifically supported Tidepool Loop development.[^195^]

In April 2024, Tidepool announced it was expanding to include a **premium tier** for larger clinics and health systems to become self-sustaining.[^62^] The organization noted:

- "The philanthropy and grant-making landscape changed quite a bit during the pandemic"
- "We needed to wean ourselves off of grant and donation support for general operations"
- About 85% of operating expenses are people-related (salary and benefits)
- Currently supporting two complete FDA-regulated product lines with 50+ people[^62^]

The **Tidepool Big Data Donation Project**, launched with Mozilla Data Futures Lab support, allows over 40,000 individuals to donate anonymized diabetes device data for research — with fees charged to data partners to support free software for end users.[^227^][^228^]

**Claim:** Tidepool is transitioning to a self-sustaining model with premium tiers for clinics, while maintaining free access for individuals, supported by the Big Data Donation Project.[^62^]
**Source:** Tidepool Blog
**URL:** https://www.tidepool.org/blog/on-becoming-a-self-sustaining-nonprofit-organization
**Date:** 2024-04-22
**Excerpt:** "We needed to wean ourselves off of grant and donation support for general operations... Tidepool is currently developing and supporting two complete and important FDA-regulated product lines... We do all this with a mighty team of more than 50 people."
**Confidence:** High

---

## 3. Loop, AndroidAPS, and Trio: Open-Source AID Systems

### Loop (iOS)

Loop was initially developed by Nate Racklyeft and Pete Schwamb as an iOS app that connects to an insulin pump and CGM using Bluetooth LE.[^69^] It uses a predictive algorithm that forecasts future glucose by combining the effects of carbohydrates, insulin, glucose momentum, and retrospective correction.[^65^]

Key characteristics:
- **Platform**: iOS only (iPhone/Apple Watch)
- **Algorithm**: Loop algorithm (deterministic, predictive)
- **Devices**: Compatible with older Medtronic pumps, Omnipod Eros/Dash, most CGMs
- **FDA status**: Cleared as Tidepool Loop (January 2023), but DIY Loop remains unregulated
- **Estimated users**: Thousands worldwide[^69^]

### AndroidAPS

AndroidAPS (AAPS) implements the OpenAPS algorithm (oref0/oref1) on Android smartphones.[^225^] It was the first open-source AID system to be evaluated in a randomized controlled trial (the CREATE trial, 2022).[^194^]

Key characteristics:
- **Platform**: Android
- **Algorithm**: OpenAPS oref0/oref1 with Super Micro Boluses (SMB)
- **Devices**: Broad pump and CGM compatibility including DANA-i, Omnipod, Accu-Chek, Medtronic
- **Features**: Remote monitoring via Nightscout, extensive automation capabilities
- **Estimated users**: 10,000+ worldwide[^99^]

### Trio (formerly iAPS/FreeAPS X)

Trio represents the evolution of a series of iOS AID implementations.[^226^][^231^] The lineage is:
1. **OpenAPS** (2015): Original oref0 algorithm on Linux mini-computer
2. **Loop** (2015): Different control algorithm for iOS
3. **FreeAPS** (2016): Fork of Loop adding configurable auto-boluses
4. **FreeAPS X** (~2019): OpenAPS algorithm implementation for iOS by Ivan Valkou
5. **iAPS** (~2021): Fork of FreeAPS X
6. **Trio** (2023+): Fork of iAPS after disagreements on development practices, hosted on Nightscout GitHub[^226^][^233^]

Key characteristics:
- **Platform**: iOS
- **Algorithm**: OpenAPS (Oref0) with adaptations for Trio
- **Features**: Emphasizes simplicity, unannounced meals (UAM), dynamic settings
- **Status**: Active community development, not FDA-cleared

**Claim:** Trio is an open-source AID for iOS based on the OpenAPS algorithm, representing the latest evolution from a lineage that includes FreeAPS X and iAPS.[^231^]
**Source:** TrioDocs
**URL:** https://triodocs.org/
**Date:** Current
**Excerpt:** "Trio is an open-source automated insulin delivery system (OS-AID) for iOS based on the OpenAPS algorithm with adaptations for Trio... The project started with Ivan Valkou's FreeAPS X implementation of the OpenAPS algorithm for iPhone"
**Confidence:** High

### Safety and Efficacy Evidence

#### The CREATE Trial (2022)

The CREATE trial was the **world's first randomized controlled trial of open-source AID**.[^194^] Key results:

- **Design**: 24-week, multi-center RCT in children (7-15) and adults (16-70)
- **Intervention**: Open-source AID using OpenAPS algorithm in AndroidAPS with DANA-i pump and Dexcom G6
- **Primary outcome**: Mean difference in TIR of **14.0 percentage points** favoring AID (95% CI 9.2-18.8; P<0.001)
- **Translation**: 3 hours 21 minutes more time in target range per day
- **Safety**: No severe hypoglycemia or DKA events in either arm; only 2 withdrawals due to hardware issues[^194^][^149^]

**Claim:** The CREATE trial demonstrated open-source AID users spent 14 percentage points more time in target range (3h 21m more per day) with no severe hypoglycemia or DKA events.[^194^]
**Source:** New England Journal of Medicine (via Dana Lewis blog)
**URL:** https://diyps.org/2022/06/06/findings-from-the-worlds-first-rct-on-open-source-aid-the-create-trial-presented-at-ada2022/
**Date:** 2022-06-06
**Excerpt:** "The percentage of time that the glucose level was in the target range of 3.9-10mmol/L was 14.0 percentage points higher among those who used the open-source AID system... a difference that reflects 3 hours 21 minutes more time spent in target range per day."
**Confidence:** High

#### BCDiabetes Clinic Study (248 patients)

A Canadian clinic study of 248 consecutive T1D patients using clinic-supported open-source AID (Loop, iAPS, and AAPS) found:[^52^]

- Average TIR rose from 64% to 81% (p<0.0001)
- TBR fell from 3.5% to 2.5% (p=0.001)
- A1c fell from 7.2% to 6.7% (p<0.0001)
- Three episodes of severe hypoglycemia over 2.5 years (0.5 per 100 person-years) — comparable to commercial systems
- No DKA episodes

#### Pancreas4ALL Study (2023)

The first study evaluating **full closed loop** (no meal boluses) with AndroidAPS in 16 adolescents found:[^214^]

- System controlled glycemia 95% of the time
- TIR (3.9-10 mmol/L): HCL 83.3% vs. Meal Announcement 79.85% vs. FCL 81.03%
- No serious adverse events
- "FCL might be a realistic mode of treatment for people with T1D"[^214^]

#### OPEN Project Multinational Survey (2023)

The OPEN (Outcomes of Patients' Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology) Project conducted a multinational survey of 592 participants using validated patient-reported outcome measures:[^221^]

- 451 open-source AID users vs. 141 non-users
- Users reported significantly better: general emotional well-being, sleep quality, diabetes-specific QoL, treatment satisfaction
- Users reported significantly less: diabetes distress, fear of hypoglycemia
- All effect sizes were medium to large (Cohen d = 0.5-1.5)
- Differences remained significant after adjusting for HbA1c and demographics[^221^]

#### DIWHY Survey (2021)

A survey of 897 participants from 35 countries found:[^223^]

- Primary motivations: improving glycemic control (93.5%), reducing complication risk (87.2%), less frequent diabetes interaction (81.1%)
- Mean HbA1c improved from 7.14% to 6.24% (p<0.001)
- Mean TIR improved from 62.96% to 80.34% (p<0.001)
- Improvements independent of age and gender[^223^]

#### Adoption Statistics

Estimates suggest approximately **30,000+ people worldwide** are using open-source AID systems.[^52^] This includes:
- Loop users: Estimated in the thousands (Riley/Orangelink customers ~19,000+ as of 2023)[^52^]
- AndroidAPS users: Estimated 10,000+[^99^]
- iAPS/Trio users: Growing community, exact numbers unknown
- OpenAPS (legacy): Still in use but declining as smartphone apps mature

A Chinese study of 292 AAPS users found the system "appears endurably efficacious in improving glycemia and shows no obvious deterioration in safety."[^96^]

---

## 4. xDrip+ and CGM Data Tools: Open Protocols and Reverse Engineering

### xDrip+

xDrip+ is an open-source Android app (compatible with Android 7-16) that turns a phone into a CGM system. It is developed and maintained by volunteers from the diabetes community with no financial incentive.[^151^]

Key features include:[^151^][^204^]
- Customizable alerts and alarms
- Follow (remote monitoring) capabilities
- Statistical analysis and target setting
- Support for multiple CGM devices (Dexcom, Libre, Medtronic, etc.)
- Calibration capabilities (even for factory-calibrated sensors like G6)
- Nightscout integration
- Wear OS smartwatch support
- Companion mode (reading from official CGM apps while preserving data flow to manufacturer cloud)
- Open-source codebase on GitHub (jamorham/xDrip-plus)

**Claim:** xDrip+ is an open-source Android CGM app developed by volunteers, supporting multiple sensors with customizable alerts, calibration, Nightscout integration, and smartwatch display.[^151^]
**Source:** xDrip Documentation
**URL:** https://navid200.github.io/xDrip/
**Date:** Current
**Excerpt:** "xDrip is an open-source Android app (compatible with Android 7-16) that turns your phone into a continuous glucose monitoring (CGM) system. It is developed and maintained by volunteers from the diabetes community."
**Confidence:** High

### Juggluco

Juggluco is an open-source Android app created by Jaap Korthals Altes that reads FreeStyle Libre sensors directly via NFC/Bluetooth.[^78^][^84^] Key characteristics:

- Direct sensor connection without manufacturer app
- Supports FreeStyle Libre 2/2+/3/3+, Dexcom G7, Accu-Chek SmartGuide, Sibionics
- Calibration support (added in version 10.0.0)[^84^]
- Wear OS integration (direct to watch, no internet required)
- Garmin support via Kerfstok
- No data upload to LibreView by default (configurable)
- GPL open-source license

### GlucoDataHandler

GlucoDataHandler (GDH), developed by Michael Pach from Germany, is an open-source (MIT license) app that serves as a central hub for glucose data on Android devices.[^163^][^164^] It supports:

- Data sources: LibreLinkUp, Dexcom Share, Nightscout, xDrip+, Juggluco, AndroidAPS, Eversense, Diabox
- Visualization: Widgets, floating widget, lock screen wallpaper, Always On Display
- Wear OS complications, alarms
- Garmin and Fitbit support (web service in xDrip+ format)
- **Google Health Connect support**[^164^]
- Android Auto integration (via GlucoDataAuto)
- Available on GitHub and IzzyOnDroid F-Droid repository

**Claim:** GlucoDataHandler is an open-source MIT-licensed app by Michael Pach that aggregates data from multiple CGM sources and supports Health Connect, Wear OS, Garmin, and Android Auto.[^164^]
**Source:** GitHub - pachi81/GlucoDataHandler
**URL:** https://github.com/pachi81/GlucoDataHandler
**Date:** 2023-01-10
**Excerpt:** "This innovative app receives data from various sources and visualizes it clearly on your Android smartphone, smartwatch (Wear OS, Miband, and Amazfit), and in your car (via GlucoDataAuto)."
**Confidence:** High

### Legal and Regulatory Status of Reverse Engineering

The open-source CGM ecosystem operates in a legally gray area. Abbott's Freestyle Libre terms of service explicitly prohibit reverse engineering, requiring patients to agree that such actions "constitute immediate, irreparable harm to Abbott, its affiliates, and/or its licensors."[^78^] Despite this, the open-source community has continued reverse engineering work, and as of 2025, no known legal action has been taken against individual users or open-source developers for CGM reverse engineering.

---

## 5. Apple HealthKit and Google Health Connect as Data Aggregation Layers

### Apple HealthKit

Apple HealthKit serves as a central repository for health data on iOS. Key diabetes-related integration points:

- **Dexcom G7** synchronizes CGM data directly to Apple Health via Bluetooth[^70^]
- Stanford's 2016 pilot demonstrated integrating Dexcom CGM data into Epic EHR through Apple HealthKit[^75^]
- Limitations: Apple Health limits visibility of glucose values with roughly a 3-hour delay before complications and watch-face data sources can read them — making it unsuitable for real-time CGM display on watch faces[^7^]
- Gluroo works around this by writing CGM readings as calendar events, which update every minute[^200^]
- Apple HealthKit stores blood glucose values but real-time access is restricted for battery life reasons

### Google Health Connect

Google Health Connect (introduced 2022, replacing Google Fit) provides a unified health data platform for Android:

- **MyFitnessPal** integrated with Health Connect for CGM data at Google I/O 2023[^230^]
- GlucoDataHandler supports Health Connect for diabetes data sharing[^164^]
- Health Connect supports data types including blood glucose, nutrition, exercise, sleep
- Unlike Apple HealthKit, Health Connect allows for more real-time data access patterns
- Still early in CGM ecosystem adoption; most CGM manufacturers have not yet built direct Health Connect integrations

**Claim:** Google Health Connect launched CGM data integration with MyFitnessPal in 2023, but ecosystem adoption remains early.[^230^]
**Source:** PR Newswire
**URL:** https://www.prnewswire.com/news-releases/myfitnesspal-and-google-health-connect-launch-integration-for-continuous-glucose-monitoring-cgm-301820891.html
**Date:** 2023-05-10
**Excerpt:** "Individuals diagnosed with Type 1 and 2 diabetes who use select continuous glucose monitoring (CGM) tools integrated with Google's Health Connect can now see their glucose data directly within the MyFitnessPal app."
**Confidence:** High

### Key Limitations

- Neither Apple HealthKit nor Google Health Connect provides real-time enough access for live CGM watch face complications (3-hour delay on Apple)[^7^]
- No standardized CGM data model across platforms
- Manufacturer apps (Dexcom, Libre) remain the primary data sources
- Interoperability gaps between commercial and open-source systems persist

---

## 6. The #WeAreNotWaiting Movement: Origins, Philosophy, and Impact

### Origins

The #WeAreNotWaiting hashtag was initially coined by Lane Desborough and Howard Look in reference to a November 2013 call for a "diabetes data exchange" hosted by Tidepool and DiabetesMine.[^68^]

The movement emerged from frustration among tech-savvy people with diabetes at the slow pace of commercial innovation.[^57^] Dana Lewis, founder of OpenAPS, described the philosophy: "I kickstarted the #OpenAPS movement to make basic artificial pancreas technology widely available because #WeAreNotWaiting (we can't, when there are lives that need improving TODAY, not just in 5 years)."[^144^]

### Key Figures

1. **John Costik** (2013): Created the original CGM uploader that became Nightscout, driven by love for his son Evan[^71^]
2. **Dana Lewis** (2014-2015): Created #DIYPS, then OpenAPS — the first open-source artificial pancreas system. "Not satisfied with being one of the few people in the world with a DIY APS, Dana looked to the open source world as a way to pay it forward."[^138^]
3. **Ben West**: Key Nightscout architect; organized scattered code into professional open-source projects on GitHub[^73^]
4. **Howard Look**: Founded Tidepool in 2013 to bring interoperability to diabetes device data[^141^]
5. **Kevin Winchcombe**: UK parent who became an evangelist for the movement, speaking at conferences[^142^]

### Philosophy and Principles

The movement is characterized by:[^54^][^144^][^223^]
- **"Paying it forward"**: Openly sharing code and knowledge
- **Patient autonomy**: People with diabetes taking control of their own technology
- **Open source**: All code freely available for inspection and improvement
- **Speed over permission**: Moving faster than regulatory and commercial timelines
- **Community-driven**: Peer support through Facebook, Discord, Gitter, GitHub
- **Data liberation**: Freeing health data from proprietary silos
- **Collaboration**: Healthcare providers, patients, developers, and researchers working together

### Impact

The movement has had profound effects on the diabetes technology landscape:

- **Anticipated commercial AID by years**: Open-source AID was available before the first FDA-cleared commercial AID (2016)[^225^]
- **Drove regulatory change**: The Tidepool Loop FDA clearance set precedent for open-source algorithms[^61^]
- **Generated clinical evidence**: Multiple RCTs and observational studies proving safety and efficacy[^194^][^214^]
- **International consensus**: A 2022 international consensus statement endorsed by multiple diabetes organizations gave healthcare professionals guidance on supporting open-source AID users[^52^]
- **Influenced commercial products**: Features like super micro boluses, unannounced meals, and remote monitoring later appeared in commercial systems
- **Research paradigm**: Demonstrated that patient-led research can be rigorous and publishable in top journals (NEJM)[^194^]

**Claim:** The #WeAreNotWaiting movement began in 2013-2014 and has developed innovations significantly more advanced than those commercially available, leading to the first open-source AID FDA clearance in 2023.[^57^]
**Source:** JMIR - Examining the Emotional and Physical Health Impact
**URL:** https://www.jmir.org/2025/1/e48406/PDF
**Date:** 2025
**Excerpt:** "One of the most significant innovations to emerge from the #WeAreNotWaiting movement are open-source AID systems—sometimes referred to as do-it-yourself artificial pancreas systems—such as OpenAPS, AndroidAPS, iAPS, and Loop."
**Confidence:** High

---

## 7. Open-Source AID Safety and Efficacy Studies

### Randomized Controlled Trials

| Trial | Year | N | Design | Key Finding |
|-------|------|---|--------|-------------|
| CREATE | 2022 | 97 | 24-week RCT vs SAPT | +14% TIR (3h21m more/day); no severe hypo/DKA[^194^] |
| Pancreas4ALL | 2023 | 16 | Crossover (HCL/MA/FCL) | TIR 83.3%/79.85%/81.03%; FCL feasible[^214^] |
| Perioperative AID | 2026 | 49 | RCT vs conventional pump | TIR 76.4% vs 61.2% (p=0.005); no severe hypo[^139^] |
| CLOSE IT | Ongoing | 75 | Non-inferiority FCL vs HCL | Protocol published; recruiting[^193^] |

### Real-World Evidence

- **BCDiabetes** (n=248): TIR 64%→81%, A1c 7.2%→6.7%[^52^]
- **China AAPS study** (n=292): "Endurably efficacious in improving glycemia"[^96^]
- **OPEN multinational survey** (n=592): Medium-to-large improvements in all psychosocial outcomes[^221^]
- **DIWHY survey** (n=897): HbA1c 7.14%→6.24%, TIR 62.96%→80.34%[^223^]

### Safety Profile

The evidence consistently shows:[^52^][^194^][^149^]
- No increase in severe hypoglycemia compared to standard care
- No DKA events attributed to algorithm errors
- Rates comparable to or better than commercial AID systems
- Safety improves with clinical support infrastructure

### Systematic Reviews and Meta-Analyses

A 2022 systematic review found comparable clinical outcomes between open-source and commercial AID systems.[^61^] A 2025 meta-analysis of AID systems in type 2 diabetes (including open-source) found increased TIR of 20.3% in RCTs, with no increased hypoglycemia concern.[^145^]

---

## 8. Regulatory Landscape for DIY Diabetes Technology

### United States (FDA)

- **Tidepool Loop**: Cleared January 23, 2023 as Class II, 510(k) K203689[^61^]
- **DIY Loop/AndroidAPS/Trio**: Not FDA-cleared; used at patients' own risk
- **FDA has taken no enforcement action** against individual DIY AID users
- The FDA's Q-Submission program allows developers to meet with FDA staff for guidance[^94^]
- Tidepool established SOP-0016 and SOP-0018 for connected device integration and regulatory determination[^61^]

**Claim:** The FDA cleared Tidepool Loop in January 2023 but has not taken enforcement action against individual DIY AID users.[^61^]
**Source:** Journal of Diabetes Science and Technology
**URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC10563523/
**Date:** 2023
**Excerpt:** "For the first time, a nonprofit organization received clearance for an iAGC... the source code of the Tidepool Loop algorithm, meeting notes and documentation for regulatory clearance are all openly available to the public."
**Confidence:** High

### European Union (MDR)

A landmark study by Downey et al. (2024) analyzed EU regulatory pathways for Tidepool Loop:[^93^][^94^]

- Tidepool Loop would likely be classified as **Class III** (highest risk) under EU Medical Devices Regulation[^65^]
- This classification carries the most stringent evidence requirements and longest approval timelines
- The complexity of navigating EU regulatory systems "has the potential to act as a disincentive to open source developers from seeking regulatory approval"[^94^]
- No open-source AID system has received CE marking under MDR as of 2025

### United Kingdom (MHRA)

- The UK post-Brexit regulatory system (Great Britain) differs from the EU MDR
- MHRA has announced recognition routes with international partners but not specifically for diabetes tech[^93^]
- No open-source AID system has UK regulatory approval
- Breakthrough T1D UK has announced support for Tidepool to develop Tidepool Loop through UK regulatory processes[^95^]

### International Consensus

A 2022 international consensus statement and practical guidance for healthcare professionals on open-source AID was published and endorsed by several professional diabetes organizations.[^52^] This represents formal medical community recognition of the legitimacy of open-source AID.

---

## 9. Gaps in the Open-Source Ecosystem: Opportunities for OpenDiabetic

### Identified Gaps and Needs

Based on this research, the following gaps represent potential areas where the OpenDiabetic Foundation could add value:

#### 1. Volunteer Developer Sustainability
The ecosystem is overwhelmingly dependent on uncompensated volunteer labor. Key developers maintain critical infrastructure (xDrip+, Nightscout, AndroidAPS, Trio, Juggluco) with no financial compensation.[^151^][^7^] Studies of FOSS communities show high burnout rates, with many volunteers leaving within a year.[^165^] The "double-shift" phenomenon — working a full-time job and then maintaining open-source health software — is unsustainable.[^168^]

**Opportunity:** Direct financial support to core developers, infrastructure grants, and fellowship programs.

#### 2. Regulatory Pathway Support
The complexity of EU/UK regulatory pathways is a major barrier.[^93^][^94^] The cost of Class III medical device approval in Europe is prohibitive for volunteer projects. No open-source AID system has CE marking.

**Opportunity:** Fund regulatory consultants, support conformity assessment processes, and advocate for proportionate regulation.

#### 3. Data Infrastructure and Interoperability
While Tidepool and Nightscout provide excellent platforms, gaps remain:
- No universal CGM data standard[^79^]
- CGM manufacturer data silos persist[^5^]
- Hospital EHR integration remains limited[^79^]
- No open-source equivalent to Tidepool's Big Data Donation Project exists outside the US

**Opportunity:** Support data standardization efforts, fund interoperability bridge development, support Nightscout infrastructure.

#### 4. Clinical Evidence Generation
More evidence is needed, especially for:
- Full closed-loop (bolus-free) systems[^217^]
- Pediatric populations
- Type 2 diabetes
- Low-resource settings
- Long-term (5+ year) outcomes

**Opportunity:** Fund registry studies, support the CLOSE IT trial and similar research, establish international outcomes database.

#### 5. Education and Healthcare Provider Support
A survey of 129 non-users identified key barriers: lack of confidence in technology skills, fear of losing healthcare provider support, and perceived time/energy requirements.[^222^] Many healthcare providers are unfamiliar with open-source AID and cannot support patients using it.

**Opportunity:** Develop HCP education programs, create patient onboarding resources, support certified diabetes care and education specialists (DCES) training.[^239^]

#### 6. Smartwatch and Wearable Integration
While multiple solutions exist (xDrip+→GDH, Juggluco→Wear OS, Dexcom→Garmin), the ecosystem is fragmented:[^7^]
- Multiple third-party apps needed for different combinations
- Wear OS 5 broke legacy watch face modes[^119^]
- Apple Watch real-time display requires calendar-event workarounds[^200^]
- No single open-source solution covers all CGM + watch combinations

**Opportunity:** Support unified wearable integration projects (GlucoDataHandler, Juggluco), fund cross-platform development.

#### 7. Global Access and Equity
Open-source AID use is concentrated in high-income countries. Barriers in Asia-Pacific and other regions include:[^96^]
- High device costs with limited reimbursement
- Limited clinical support infrastructure
- Language barriers in documentation
- Regulatory uncertainty

**Opportunity:** Support localized documentation, fund device access programs, partner with clinics in underserved regions.

### What NOT to Duplicate

The OpenDiabetic Foundation should be careful to complement, not compete with:
- **Tidepool**: Well-funded, established nonprofit with strong FDA relationships and data platform
- **Nightscout Foundation**: Existing 501(c)(3) supporting the Nightscout ecosystem
- **JDRF/Helmsley**: Major funders with specific research agendas
- **Individual projects**: AndroidAPS, Loop, Trio communities are vibrant and self-organizing

---

## 10. Volunteer Sustainability: Burnout, Funding, and Governance

### The Challenge

Open-source diabetes technology is built and maintained almost entirely by volunteers who receive no compensation.[^7^] As one developer noted about GlucoDataHandler: "I am not a professional app developer and I develop this app for free in my limited spare time. I do not earn any money with this app."[^166^]

The broader open-source software community faces well-documented burnout challenges:[^167^][^168^]

- **Six causes of burnout**: difficulty getting paid, workload, unrewarding maintenance, toxic behavior, hyper-responsibility, pressure to prove oneself[^167^]
- **The "double-shift"**: Many developers work full-time jobs and maintain OSS in their spare time[^168^]
- **High turnover**: Many volunteers leave within a year of joining a project[^165^]
- **Feeling exploited**: "Their code enables the software industry to be enormously profitable, and yet it is an uphill struggle to receive anything in return"[^168^]

### Specific Diabetes Community Context

The diabetes open-source community is somewhat unique because:
- Most developers have diabetes or care for someone who does — creating deep intrinsic motivation[^151^]
- The community is tight-knit and supportive, with extensive peer support networks[^7^]
- The direct, life-saving impact of the software provides strong purpose
- However, the technical complexity and safety-critical nature add significant stress

### Funding Landscape

| Source | Recipients | Amount/Type |
|--------|-----------|-------------|
| JDRF | Tidepool, research | $6M for Tidepool Loop (with Helmsley)[^195^] |
| Helmsley Charitable Trust | Tidepool, research | $6M for Tidepool Loop[^195^] |
| New Zealand HRC | CREATE trial | RCT funding[^194^] |
| Jaeb Center | Loop observational study | Helmsley-funded[^195^] |
| Wellcome Trust | EU regulatory research | Research grant[^93^] |
| Private philanthropy | Various | Individual donations |

There is essentially **no ongoing, sustainable funding mechanism** for the volunteer developers who build and maintain the core software. The major grants flow to organizations (Tidepool, academic institutions) rather than individual open-source projects.

### Governance Models

- **Nightscout**: Community-governed via GitHub, with Nightscout Foundation providing legal/financial umbrella
- **Tidepool**: Board-governed nonprofit with professional staff
- **AndroidAPS**: Core team of volunteer developers with community input
- **Loop**: Originally community-driven; now Tidepool Loop is professionally managed while DIY Loop remains community-driven
- **Trio/iAPS**: Community-forked after governance disagreements[^233^]

---

## 11. Interoperability Between Open-Source and Commercial Systems

### Current State

Interoperability remains a significant challenge. The diabetes device ecosystem is characterized by:[^5^]

- **Proprietary data silos**: Each manufacturer has its own software, cables, and protocols
- **Locked ecosystems**: Commercial AID systems typically require specific pump-CGM combinations
- **Fragmentation**: No single platform can view all device data together

Tidepool's platform represents the most successful interoperability effort, ingesting data from 85+ devices.[^137^] However, real-time data sharing between open-source and commercial systems remains limited.

### Open-Source Ecosystem Interoperability

Within the open-source ecosystem, interoperability is stronger:

- **Nightscout as hub**: Most open-source AID systems upload to Nightscout, creating a common data layer
- **xDrip+ as universal reader**: Can read from multiple CGM sources and forward to other apps
- **GlucoDataHandler as aggregator**: Receives data from multiple sources and distributes to wearables[^164^]
- **OpenAPS algorithm**: Implemented across AndroidAPS, Trio, FreeAPS X, and Tidepool Loop

### CGM Manufacturer API Access

- **Dexcom**: Offers a formal Developer Program with three tiers (Sandbox, Limited Access, Full Access), requiring partnership agreements for commercial scale[^77^]
- **Abbott**: No formal developer API for FreeStyle Libre; data access through LibreLinkUp cloud
- **Medtronic**: Limited API access; primarily through CareLink
- **Third-party access**: Open-source apps use reverse-engineered protocols or companion-app modes

### Key Barriers

1. Manufacturers lack incentives to open protocols[^141^]
2. Regulatory requirements complicate inter-device communication
3. No universal diabetes device data standard (though IEEE standards are emerging)[^5^]
4. Data privacy and security concerns
5. Commercial competitive pressures

**Claim:** The diabetes device data ecosystem remains fragmented and siloed, with Tidepool's platform representing the most comprehensive interoperability effort at 85+ devices.[^5^][^137^]
**Source:** JAMIA (Neinstein et al.)
**URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC4784555/
**Date:** 2015-09-02
**Excerpt:** "Because patients may use multiple devices from different vendors to manage their diabetes, it is often impossible for a patient to import all of her device data into one software application."
**Confidence:** High

---

## 12. Data Models and Protocols

### Nightscout Data Model

The Nightscout data model consists of five primary collections:[^232^][^234^]

1. **Entries** (`/api/v1/entries`): CGM sensor glucose values with timestamp, glucose value, direction/trend
2. **Treatments** (`/api/v1/treatments`): Insulin boluses, carb entries, temporary targets, notes
3. **Device Status** (`/api/v1/devicestatus`): Pump status, phone battery, loop status, IOB, COB
4. **Profile** (`/api/v1/profile`): Basal rates, ISF, carb ratios, targets
5. **Food** (`/api/v1/food`): Custom food database entries

The API supports both v1 (legacy) and v3 (modern REST) endpoints. API v3 uses JWT-based authentication, automatic deduplication via `identifier` fields, and supports CRUD operations on all collections.[^232^]

### Tidepool Data Model

Tidepool developed a **device-agnostic data model** that standardizes data from any manufacturer's devices:[^229^]

- Unified representation of: CGM data, pump events (boluses, basals, suspends), blood glucose readings, food entries, exercise, settings
- Support for 85+ device types
- De-identification pipeline for research data donation
- Exported in CSV, JSON, or XLSX format for researchers

### Health Connect Data Model

Google Health Connect defines standardized data types for:[^230^]
- Blood glucose
- Nutrition (carbs, protein, fat)
- Exercise/activity
- Sleep
- Heart rate

As of 2023, CGM integration was demonstrated with MyFitnessPal, but broader adoption remains limited.[^230^]

### Emerging Standards

- **IEEE 11073** standards for diabetes device data protocols are being developed based on work from the University of Toronto[^5^]
- **iCoDE consortium** working on data standards and implementation policies for CGM-EHR integration[^79^]
- **FHIR (Fast Healthcare Interoperability Resources)** could enable standardized health data exchange

---

## 13. CGM-to-Smartwatch Ecosystem

### Overview

Displaying CGM data on smartwatches has become a key feature for the diabetes community. A comprehensive guide (diabetotech.com) documents solutions for Apple Watch, Wear OS, and Garmin across all major CGM brands.[^7^]

### Key Solutions

| Platform | Solution | CGM Support | Cost | Open Source |
|----------|----------|-------------|------|-------------|
| Apple Watch | Gluroo | Dexcom, Libre | Free | No |
| Apple Watch | xDrip4iOS | Multiple | Free | Yes |
| Apple Watch | Native Dexcom G7 | Dexcom | Free | No |
| Wear OS | Juggluco | Libre, Dexcom | Free | Yes |
| Wear OS | GlucoDataHandler | Multiple via xDrip+ | Free | Yes (MIT) |
| Wear OS | Blose | LibreLinkUp, Dexcom Share | Free | No |
| Garmin | Dexcom Connect IQ | Dexcom | Free | No (official) |
| Garmin | xDrip+ → Connect IQ | Multiple | Free | Yes |
| Cross-platform | Gluroo | Dexcom, Libre, Nightscout | Free | No |

### Innovation Highlight: Gluroo

Gluroo, founded by former Facebook/Google executive Greg Badros after his son's T1D diagnosis, has innovated around Apple's limitations by writing CGM readings as calendar events — the only data type allowed to update every minute on Apple Watch complications.[^200^] The app has grown to 43,000+ users in 100+ countries and provides:

- Cross-platform family sharing ("GluCrew")
- AI meal analysis via photo scanning
- Real-time wearable integration across Apple Watch, Wear OS, and Garmin
- Nightscout-compatible backend[^200^][^201^][^202^]

### Challenges

- Apple HealthKit's 3-hour delay makes real-time watch display impossible without workarounds[^7^]
- Wear OS 5 removed legacy watch face modes, breaking some existing apps[^119^]
- Each CGM + watch combination requires a different app or workflow[^7^]
- Internet dependency for cloud-based solutions
- Fragmented ecosystem with no single solution covering all combinations

---

## 14. Market Size and Future Outlook

### Global AID Market

The global artificial pancreas device market is estimated at **$406.86 million in 2026** and projected to expand at 8.7% CAGR from 2026 to 2036.[^100^] Key growth markets:

- India: 9.2% CAGR (growing diagnosis, private healthcare expansion)
- China: 6.0% CAGR (regulatory pathway development)
- USA: 3.6% CAGR (largest installed base, mature adoption)[^100^]

### Open-Source Ecosystem Growth Trajectory

- Estimated **30,000+ open-source AID users** worldwide, growing at ~20% annually[^52^]
- Nightscout community: 39,000+ Facebook group members[^68^]
- Tidepool platform: 600,000+ users, 1,000+ clinics[^137^]
- Multiple RCTs ongoing or planned (CLOSE IT, perioperative studies)
- First FDA clearance achieved; EU/UK pathways being explored

### Emerging Trends

1. **Full Closed Loop**: The Pancreas4ALL and CLOSE IT trials are evaluating bolus-free systems[^214^][^193^]
2. **Tidepool Loop commercialization**: Pending ACE pump partner announcement[^62^]
3. **Professional open-source support**: BCDiabetes and similar clinics offering in-clinic setup[^52^]
4. **AI integration**: Gluroo's AI meal analysis, pattern recognition features[^202^]
5. **Expanded device compatibility**: Chinese CGM manufacturers increasingly supported[^96^]
6. **CGM-EHR integration**: iCoDE consortium working on standards[^79^]
7. **Newer insulin integration**: Fiasp and Lyumjev studies in AID systems[^193^]

### Key Risks

1. **Volunteer burnout**: Core developers may leave without compensation
2. **Regulatory barriers**: EU MDR Class III classification may block open-source AID approval[^93^]
3. **Commercial competition**: As commercial AID improves, open-source value proposition may shift
4. **Device compatibility**: CGM manufacturers may lock down protocols
5. **Lack of sustainable funding**: No ongoing revenue model for most projects

---

## Recommendations for OpenDiabetic Foundation

Based on this comprehensive analysis, the following strategic opportunities emerge for the OpenDiabetic Foundation to support and complement the open-source diabetes technology ecosystem:

### High-Impact, Complementary Roles

1. **Developer Sustainability Fund**: Establish micro-grants and fellowships for core open-source diabetes developers, administered with minimal overhead and maximum respect for project autonomy.

2. **Infrastructure Support**: Provide hosting credits, CI/CD resources, and security audit support for critical projects (Nightscout, xDrip+, AndroidAPS, Trio).

3. **Regulatory Navigation Support**: Fund regulatory pathway consulting for open-source projects seeking CE marking/UKCA, particularly for AndroidAPS and Trio.

4. **Clinical Evidence Fund**: Support registry studies, real-world evidence collection, and outcomes research that complements (not duplicates) existing trials.

5. **Healthcare Provider Education**: Develop and distribute accredited education materials for HCPs supporting patients using open-source AID, in partnership with existing diabetes organizations.

6. **Interoperability Standards Advocacy**: Support IEEE 11073, FHIR, and other data standardization efforts; fund bridge development between open-source and commercial systems.

7. **Global Access Programs**: Partner with clinics in Asia-Pacific, Africa, and Latin America to support open-source AID adoption where commercial systems are unavailable or unaffordable.

### Principles for Engagement

1. **Community-first**: The #WeAreNotWaiting movement's strength comes from its patient-led, volunteer-driven nature. Any support must preserve this autonomy.

2. **Complement, don't compete**: Avoid duplicating Tidepool, Nightscout Foundation, or JDRF efforts. Fill gaps they cannot address.

3. **Open by default**: All outputs should be open-source and freely available.

4. **Evidence-based**: Decisions should be grounded in the robust existing evidence base.

5. **Inclusive**: Support should reach beyond high-income countries to global communities.

---

## Appendix: Key Statistics Summary

| Metric | Value | Source |
|--------|-------|--------|
| Estimated open-source AID users worldwide | 30,000+ | [^52^][^99^] |
| Nightscout Facebook group members | 39,000+ | [^68^] |
| Tidepool platform users | 600,000+ | [^137^] |
| Tidepool clinics supported | 1,000+ | [^137^] |
| CREATE trial TIR improvement | +14% (3h21m/day) | [^194^] |
| BCDiabetes SOSAPS patients (248) TIR improvement | 64%→81% | [^52^] |
| DIWHY survey participants | 897 from 35 countries | [^223^] |
| OPEN multinational survey participants | 592 | [^221^] |
| Tidepool Big Data Donation donors | 40,000+ | [^227^] |
| Gluroo users | 43,000+ in 100+ countries | [^200^] |
| Artificial pancreas device market (2026) | $406.86M | [^100^] |
| FDA clearance date for Tidepool Loop | January 23, 2023 | [^61^] |
| xDrip+ Android compatibility | Android 7-16 | [^151^] |

---

*This report was prepared for the OpenDiabetic Foundation to support strategic planning around engagement with the open-source diabetes technology ecosystem. All citations are inline and linked to primary sources where possible. The report reflects the state of the ecosystem as of mid-2025.*
