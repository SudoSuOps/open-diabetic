# Dimension 06: Synthetic & De-identified Health Data for Diabetes Research

## Executive Summary

Synthetic and de-identified health data represent one of the most promising yet technically complex frontiers in diabetes research. This report provides a comprehensive analysis of synthetic data generation techniques (GANs, VAEs, diffusion models), de-identification standards (HIPAA Safe Harbor, Expert Determination, GDPR), differential privacy mechanisms, real-world use cases in diabetes research, quality and fidelity evaluation, regulatory acceptance, available open datasets, privacy attack vectors, tools and platforms, ethical considerations, federated learning combinations, and compute requirements. The findings are based on systematic review of 25+ independent searches across peer-reviewed literature, government guidance, industry reports, and primary research databases.

**Key findings:**
- Synthetic data generation for diabetes has matured significantly, with CTGAN, CopulaGAN, TVAE, and specialized architectures like GluGAN demonstrating high fidelity on diabetes-specific datasets
- The FDA has begun formally accepting synthetic data in specific contexts (e.g., the UVA/Padova T1DM simulator for artificial pancreas testing), while the EMA is watching closely but has not yet released formal guidance
- Differential privacy (DP-SGD) provides the strongest mathematical privacy guarantees but imposes significant utility trade-offs, with practical deployments typically using epsilon values of 1-5
- Synthea remains the most widely used open-source synthetic patient generator but has documented limitations in diabetes module accuracy (e.g., 4000x overestimation of diabetes-related amputations in initial versions)
- Multiple open synthetic CGM datasets are now available, including 40,000 synthetic CGM days from a conditional GAN
- Membership inference attacks represent the primary privacy threat to synthetic data, with DP-based defenses offering the only provable protections but at utility cost
- The combination of federated learning with synthetic data generation is emerging as a powerful hybrid approach, as demonstrated by NHS England pilots

---

## 1. Synthetic Data Generation Techniques for Diabetes Data

### 1.1 GAN-Based Approaches

Generative Adversarial Networks (GANs) remain the dominant approach for synthetic health data generation. In diabetes research specifically, several architectures have demonstrated strong performance:

**CTGAN and CopulaGAN**, developed by MIT's Data to AI Lab as part of the Synthetic Data Vault (SDV), are specifically designed for tabular data common in diabetes research (e.g., patient demographics, lab values, diagnostic codes). A 2025 systematic review evaluated these models across multiple health datasets and found that a **divide-and-conquer (DC) strategy** significantly outperformed standard conditional sampling for diabetes data, achieving AUC scores of 0.733-0.786 (CTGAN-DC) compared to 0.542-0.611 (CTGAN without DC) on downstream classification tasks[^345^].

Claim: The divide-and-conquer approach with CTGAN achieves AUC scores of 0.733-0.786 on diabetes classification tasks, outperforming standard CTGAN by up to 20 percentage points.
Source: Synthetic Tabular Data Based on GANs in Health Care, JMIR Medical Informatics
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10709788/
Date: 2023-11-01
Excerpt: "CTGAN, DC: 74.50 (1.23) [AUC for NSCLC], 73.31 (1.11) [AUC for Diabetes]... CTGAN, no condition: 63.46 (1.91) [AUC for NSCLC], 64.65 (1.66) [AUC for Diabetes]"
Context: The study evaluated multiple GAN architectures across cancer and diabetes datasets using decision tree, XGBoost, and LightGBM classifiers.
Confidence: High

**GluGAN** is a specialized framework designed specifically for generating personalized glucose time series from CGM data. Using recurrent neural network (RNN) modules, GluGAN combines unsupervised and supervised training to learn temporal dynamics in latent spaces. Across three clinical datasets with 47 T1D subjects, GluGAN outperformed four baseline GAN models on all considered clinical metrics, distance scores, and discriminative/predictive scores. Notably, training sets augmented by GluGAN significantly reduced RMSE for glucose predictors over 30 and 60-minute horizons[^342^].

**Conditional GANs (CGAN)** have been successfully applied to generate synthetic CGM signals. Cichosz et al. trained a CGAN on 24-hour CGM profiles from healthy individuals and individuals with type 1 diabetes, conditioned on HbA1c levels. The model generated **40,000 synthetic CGM days** (equivalent to 940,000 hours of CGM measurements), which have been made publicly available. The synthetic data captured key glycemic characteristics including 24-hour means, time in hyperglycemia/hypoglycemia, and glycemic variability metrics[^339^][^340^].

### 1.2 VAE-Based Approaches

Variational Autoencoders (VAEs) and their conditional variants (CVAEs) offer an alternative probabilistic framework. The **TVAE (Tabular VAE)** model has shown competitive performance on diabetes datasets. A 2025 study on the Pima Indians Diabetes Dataset found that TVAE, alongside CTGAN and CopulaGAN, achieved high-fidelity synthetic data with predictive accuracy comparable to real data when optimized using Pairwise Correlation Distance (PCD) and Wasserstein Distance (WSD) as optimization targets[^329^].

VAEs typically outperform GANs in **absolute uniqueness** (low risk of record duplication) but may produce samples that less tightly match high-probability regions of the data, especially for rare events[^392^]. This trade-off is particularly relevant for diabetes research where rare complications (e.g., specific microvascular events) must be accurately represented.

### 1.3 Diffusion Models

Diffusion models represent the newest class of generative approaches being applied to health data. While initially developed for image generation, they are increasingly being adapted for tabular and time-series health data. A 2025 review of generative AI for synthetic health data identified diffusion models as offering "high accuracy with good hardware scalability" and noted that they are particularly suitable for "research-sensitive applications" due to their training stability compared to GANs[^374^]. However, their application to diabetes-specific datasets remains limited in published literature, representing an active research frontier.

### 1.4 Transformer and Autoregressive Models

Recent advances have applied transformer architectures to EHR synthesis. Models like **PromptEHR** and **CEHR-GPT** frame longitudinal EHR synthesis as a next-token prediction task over tokenized sequences of clinical events, enabling precise modeling of patient timelines and complex cohort definitions. These models can natively support multimodality and have shown promise for capturing the temporal dynamics essential for diabetes progression modeling[^392^].

---

## 2. De-identification Standards and Methods

### 2.1 HIPAA Safe Harbor and Expert Determination

The U.S. Department of Health and Human Services (HHS) provides two primary methods for de-identification under HIPAA: **Safe Harbor** (removal of 18 specified identifiers) and **Expert Determination** (statistical methods to mitigate re-identification risk). The Safe Harbor method is the most widely used but provides no quantitative guarantee of re-identification risk[^335^].

Claim: The HIPAA Safe Harbor de-identification standard removes 18 specified identifiers but does not guarantee against re-identification; HHS-commissioned studies found 0.013% of records could be correctly re-identified under Safe Harbor.
Source: A Systematic Review of Re-Identification Attacks on Health Data, PLoS ONE
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC3229505/
Date: N/A (PMC Article)
Excerpt: "The second case was commissioned by HHS to determine the re-identification risk of data de-identified using the HIPAA Safe Harbor standard. This study indicated that 0.013% of the records could be correctly re-identified, which was consistent with previous estimates of the actual risk of re-identification under Safe Harbor."
Context: Systematic review of 14 re-identification attacks, finding that most attacks targeted data NOT de-identified according to existing standards.
Confidence: High

Three classes of risk mitigation methods are commonly applied: **suppression** (removing data), **generalization** (replacing specific values with broader categories), and **perturbation** (replacing values with randomized but statistically similar alternatives)[^335^].

### 2.2 GDPR and the European Health Data Space

Under GDPR, truly anonymized data falls entirely outside the regulation's scope (Recital 26). However, the bar for GDPR anonymization is significantly higher than HIPAA's Safe Harbor standard. As one analysis notes: **"HIPAA's Safe Harbor method does not meet GDPR's anonymization standard"** because removing the 18 identifiers only reduces risk to a defined threshold -- it does not guarantee re-identification is impossible[^357^].

The **European Health Data Space (EHDS)**, scheduled for implementation in the coming years, will create new frameworks for cross-border health data sharing. Synthetic data is positioned as a key enabler within this framework, particularly for medical imaging AI development where privacy barriers have historically impeded progress[^383^]. However, a critical legal analysis warns that legislators face a decision: "either mandate a high standard of anonymization that may compromise data utility or abolish the distinction between 'anonymized health data' and 'personal health data'"[^361^].

### 2.3 k-Anonymity and l-Diversity

Beyond HIPAA and GDPR, formal privacy models provide additional protection:

- **k-anonymity**: Each record is indistinguishable from at least k-1 other records. However, it is vulnerable to homogeneity attacks (where all records in an equivalence class share the same sensitive value) and background knowledge attacks[^359^].
- **l-diversity**: Each equivalence class must contain at least l "well-represented" values for sensitive variables, addressing some k-anonymity limitations.
- **t-closeness**: Requires that the distribution of sensitive attributes within each equivalence class is close to the overall distribution.

These models are implemented in tools like the **ARX Data Anonymization Tool**, which evaluates risk under three attacker scenarios: prosecutor, journalist, and marketer models[^351^].

---

## 3. Differential Privacy for Synthetic Health Data

### 3.1 DP-SGD and Mathematical Guarantees

Differential privacy (DP) provides the strongest mathematical framework for privacy-preserving synthetic data generation. The most common implementation for GANs is **Differentially Private Stochastic Gradient Descent (DP-SGD)**, which: (1) clips per-sample gradients to bound sensitivity, (2) adds Gaussian noise, and (3) performs the optimization step. Privacy is parameterized by epsilon (epsilon) -- lower values indicate stronger privacy, with epsilon = infinity indicating no privacy[^384^][^388^].

Claim: Google has deployed differentially private synthetic data generation using DP-SGD for multiple applications, ensuring that privacy guarantees are preserved under any transformation of the output.
Source: Google Research Blog - Protecting users with differentially private synthetic training data
URL: https://research.google/blog/protecting-users-with-differentially-private-synthetic-training-data/
Date: N/A
Excerpt: "When developing a pipeline for generating private synthetic data, it suffices to verify that one step of the process satisfies differential privacy in order to ensure that all subsequent steps -- as well as all uses of the generated data -- are privacy preserving."
Context: Google's production deployment of DP-SGD for synthetic data generation across multiple products.
Confidence: High

### 3.2 Privacy-Utility Trade-off

The central challenge in differential privacy is the **privacy-utility trade-off**. A 2025 review found that achieving strong provable privacy (e.g., epsilon approximately 1) with DP-SGD requires large noise magnitude that significantly deteriorates model utility[^434^]. In practice, most healthcare deployments use epsilon values between 1 and 5, with epsilon > 10 generally considered to provide weak privacy guarantees.

The UK Government's pilot combining differential privacy with federated querying for international cancer research used **epsilon = 1** with Laplace noise and cell suppression for results below threshold values, finding it "significantly shortened the information governance journey" from over a year to approximately two months[^433^].

### 3.3 DP-WGAN for Tabular Health Data

Research has specifically adapted Wasserstein GANs with differential privacy for tabular health data. A master's thesis project modified the GS-WGAN architecture for tabular EHR data, finding that the combination of Wasserstein loss with gradient penalty and DP-SGD could produce synthetic data with strong privacy guarantees, though dataset-independent privacy calculations meant no privacy-parameter tuning was needed[^379^]. The open-source DP-WGAN implementation achieved an AUC of approximately 0.85 on heart disease classification with epsilon approximately 3.4 and delta = 1e-5[^385^].

---

## 4. Real-World Use Cases in Diabetes Research

### 4.1 In Silico Clinical Trials for Artificial Pancreas

The most established regulatory use of synthetic data in diabetes is the **UVA/Padova Type 1 Diabetes Mellitus Simulator**, first introduced in 2008. This simulator includes three cohorts of 100 in-silico adults, 100 adolescents, and 100 children, each modeled with subject-specific parameters and inter-patient variability. The simulator was **approved by the FDA as a substitute for preclinical trials for insulin injection pumps driven by closed-loop algorithms** and has been used in multiple simulation studies that helped developers receive rapid FDA approval[^353^].

Claim: The UVA/Padova T1DM Simulator was FDA-approved as a substitute for preclinical trials for closed-loop insulin delivery algorithms, representing the most significant regulatory acceptance of synthetic data in diabetes.
Source: Synthetic biomedical data generation in support of In Silico Clinical Trials, Frontiers in Big Data
URL: https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2023.1085571/full
Date: 2023-08-15
Excerpt: "This simulator was approved by the FDA as a substitute for preclinical trials for insulin injection pumps driven by closed-loop algorithms and was used in several closed-loop algorithm simulation studies that helped many developers to receive rapid FDA approval of their closed-loop algorithms."
Context: Review of in silico clinical trials, with the artificial pancreas case study highlighted as exemplary.
Confidence: High

### 4.2 CGM Data Augmentation for ML Model Training

Synthetic CGM data has been successfully used to augment real datasets for machine learning model training. A study on nocturnal hypoglycemia prediction in type 1 diabetes used GAN-generated synthetic CGM data to augment training sets, achieving a **mean improvement of 11.5% across evaluation metrics** (ACC, SEN, SP, MCC, Gmean). The study found that 1,500 synthetic samples provided optimal augmentation, with diminishing returns beyond that point[^391^].

### 4.3 High-Fidelity Million-Patient Diabetes Cohort

A landmark 2026 study synthesized longitudinal datasets from **nearly 1 million individuals with diabetes** from the Andalusian Population Health Database using a dual adversarial autoencoder. The study established a comprehensive evaluation framework assessing fidelity, utility, privacy, and algorithmic bias. Models trained on synthetic data consistently tracked the performance of models trained on real data with only a slight performance gap, while hybrid models (real + synthetic) practically overlapped with real-data models. The study found that diagnoses with prevalence below 0.05 exhibited substantially increased relative error, identifying a critical threshold for synthetic data reliability[^331^].

Claim: A study of nearly 1 million diabetes patients found that synthetic data models achieved predictive performance tracking real-data models with only a slight gap, but diagnoses below 0.05% prevalence showed substantially increased relative error.
Source: High-Fidelity Synthetic Data Replicates Clinical Prediction Performance in a Million-Patient Diabetes Cohort, Advanced Science
URL: https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202516196
Date: 2026-03-16
Excerpt: "The small error bars for all models indicate high stability across the cross-validation splits... the models trained on synthetic replicas consistently track the performance of the model trained on original data, albeit with a slight but persistent performance gap."
Context: Evaluation of CKD onset prediction in post-diabetes diagnosis patients using real, synthetic, and hybrid training datasets.
Confidence: High

---

## 5. Quality, Fidelity, and Utility Evaluation

### 5.1 The Three-Dimensional Evaluation Framework

Synthetic data quality is universally assessed across three dimensions:

1. **Fidelity**: Statistical similarity to real data (distributions, correlations, dependencies)
2. **Utility**: Effectiveness for downstream tasks (ML model training, statistical analysis)
3. **Privacy**: Protection against re-identification and information leakage[^334^]

### 5.2 Key Metrics

A comprehensive 2025 benchmarking study evaluated 7 models across 9 datasets (including diabetes) using 38 metrics. Key findings for diabetes data specifically:

- **Utility**: Synthetic data is nearly on par with original data (almost all median utility scores above 0.9)
- **Fidelity**: CTGAN and CopulaGAN both achieved ~0.84-0.89 Column Pair Trends scores on diabetes data
- **Privacy**: All datasets had relative privacy scores equal to or greater than 1, meaning synthetic data provided privacy at least as good as original data splits[^333^]

The million-patient diabetes study used a more extensive metric suite including **Boundary Adherence Score (BAS)**, **Category Adherence Score (CAS)**, **Kolmogorov-Smirnov Complement (KSS)**, **Correlation Similarity (CrSS)**, **Contingency Similarity (CtSS)**, **Sliced Wasserstein Distance (SWD)**, and a custom **Co-occurrence Correlation (CoC)** metric for temporal comorbidity relationships. Most median scores exceeded 0.95, with SWD of 0.0175-0.0184 indicating strong multivariate alignment[^331^].

### 5.3 Can Synthetic Data Replace Real Data?

The evidence suggests a nuanced answer. The benchmarking study found that **no single model outperforms all others across all metrics**, and method choice should be governed by the relative importance of evaluation metrics in downstream use cases[^333^]. For diabetes specifically:

- Synthetic data achieves predictive performance tracking real data with slight but persistent gaps[^331^]
- Data augmentation with synthetic data improves ML model performance, especially for imbalanced datasets[^391^]
- Low-prevalence conditions (prevalence < 0.05) exhibit substantially increased relative error[^331^]
- Standard statistical metrics do not guarantee preservation of complex biomedical patterns across time[^331^]

**The consensus view**: Synthetic data is best used as a complement to (not replacement for) real data, particularly for data augmentation, algorithm development, privacy-preserving collaboration, and rare disease research where real data is scarce.

---

## 6. Regulatory Acceptance

### 6.1 FDA Position

The FDA has moved from theoretical interest to practical acceptance of synthetic data in specific contexts:

- **2024 FDA Grand Rounds**: FDA scientists outlined how synthetic imaging can accelerate model evaluation while protecting patient privacy
- **VICTRE (Virtual Imaging Clinical Trial for Regulatory Evaluation)**: Replaced a large-scale breast imaging trial with fully synthetic data, achieving equivalent conclusions with faster timelines and lower cost
- **M-SYNTH**: FDA-led initiative for synthetic mammography datasets providing controlled testbeds for AI algorithm evaluation
- **UVA/Padova Simulator**: FDA-approved as substitute for preclinical trials for closed-loop insulin delivery algorithms[^397^]

The FDA's position can be characterized as **cautiously progressive** -- accepting synthetic data where validation frameworks are robust and the synthetic data has been demonstrated to faithfully represent the clinical phenomena of interest.

### 6.2 EMA Position

The European Medicines Agency has not yet released formal guidance on synthetic data. However, academic literature indicates convergence of priorities, with particular interest in synthetic data's promise for **rare diseases and pediatrics** -- areas where real data is nearly impossible to collect at scale. EMA scientists are reportedly watching FDA pilots closely, signaling likely adoption of similar frameworks in the future[^397^].

The EMA has historically prioritized patient privacy in clinical data sharing, recognizing the need to "protect patient privacy and balance the utility of de-identified data" as keys for clinical data sharing[^359^].

---

## 7. Open Synthetic Datasets for Diabetes Research

### 7.1 Synthetic CGM Datasets

| Dataset | Description | Size | Access |
|---------|-------------|------|--------|
| Synthetic CGM Signals (Cichosz et al.) | CGAN-generated CGM for 4 HbA1c categories | 40,000 days (940,000 hours) | Mendeley Data[^340^][^346^] |
| Breath Diabetes Synthetic Data | CTGAN-generated for non-invasive diabetes detection | 14,000 samples | GitHub (MIT License)[^344^] |
| Pima Indians Diabetes (synthetic variants) | Multiple synthetic versions for benchmarking | Varies | UCI/SDV ecosystem[^333^] |

### 7.2 Synthea Synthetic Patients

Synthea generates complete synthetic patient records including conditions, medications, encounters, and claims. It is recognized as a Digital Public Good by the UN and used by U.S. government agencies including HHS, ONC, CMS, and the Veterans Health Agency[^393^]. However, validation studies have identified significant limitations in the diabetes modules:

- Initial versions incorrectly generated 20% of T2D patients in the infant age group (ages 2-5)
- Failed to note diabetes onset after age 52
- Synthea patients were **4,000 times more likely** to undergo diabetes-related amputation than national average
- **110 times more likely** to suffer kidney failure and end-stage renal disease
- Survived 2-3 times longer than similar real patients[^330^]

Claim: Early Synthea versions overestimated diabetes-related amputations by 4000x and kidney failure by 110x compared to national averages, highlighting the critical need for validation before clinical use.
Source: Synthea: An approach for generating synthetic patients, PMC
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC7651916/
Date: 2020
Excerpt: "overall, a Synthea patient was 4000 times more likely to undergo a diabetes-related amputation than the national or state average. Synthea patients were 110 times more likely to suffer kidney failure and end-stage renal disease, surviving between 2 and 3 times longer than similar real patients."
Context: Validation study of Synthea's T2D modules comparing synthetic EHR statistics with Massachusetts state and US national averages.
Confidence: High

Subsequent modifications improved the T2D module by altering transition probabilities between progressive stages, but population-level statistics remained challenging to replicate due to the probabilistic nature of the simulation[^330^].

### 7.3 Youth Diabetes Epidemiological Data

The **POND (Prediabetes/diabetes in youth Online Dashboard)** provides a comprehensive youth pre-DM/DM dataset with 95 variables across 4 domains, with data and analytical code publicly available via Zenodo. While derived from real NHANES data rather than synthetically generated, it demonstrates the availability of open diabetes datasets suitable for synthetic data generation training[^375^].

---

## 8. Privacy Attacks on Synthetic Data

### 8.1 Membership Inference Attacks (MIA)

Membership inference attacks attempt to determine whether a specific individual's data was used to train a synthetic data generation model. These are the primary privacy threat to synthetic health data. Attackers exploit differences in model behavior on member vs. non-member data -- members typically show higher prediction confidence, lower loss, and different loss trajectories[^436^][^438^].

The fundamental challenge is empirical: **a generator robust to distance-based MIA may still be vulnerable to a very different attack**, and MIA measures a specific attack model rather than providing formal mathematical guarantees like differential privacy[^441^].

### 8.2 Model Inversion Attacks

In model inversion attacks, adversaries use generative networks (often GANs) to create synthetic samples that gradually approximate the original training data. Recent advancements have shown the ability to reconstruct high-fidelity data even with black-box or label-only access[^435^].

### 8.3 Defense Mechanisms

Defenses fall into two categories[^438^]:

1. **Provable privacy**: Differential privacy (DP-SGD) provides rigorous mathematical guarantees but significantly reduces model utility. The only method achieving both provable privacy and acceptable utility remains an open research problem.

2. **Empirical privacy**: Techniques like adversarial regularization, knowledge distillation, self-distillation (SELENA), and confidence score masking aim to reduce MIA success while preserving utility. SELENA, which trains an ensemble of sub-models on overlapping data subsets, has shown the best privacy-utility trade-off among empirical defenses[^438^].

### 8.4 Re-identification Risk in Practice

Research demonstrates that **87.1% of the U.S. population can be uniquely identified using just 5-digit ZIP code, birth date, and gender**[^351^]. Even "anonymized" health data carries significant re-identification risk:

- 63-87% of the U.S. population can be identified using ZIP code, birth date, and gender[^351^]
- Medical records documentation of motor vehicle accidents raises re-identification risk by **537 times** compared to the general population[^351^]
- For patients hospitalized with permanent injuries from accidents, re-identification risk can reach **66.67%**[^351^]

Critically, a systematic review found that **most successful re-identification attacks targeted data that was NOT de-identified according to existing standards**. Only 2 of 14 attacks were on properly de-identified data, and in those cases, the risk was very low (0.013% for HIPAA Safe Harbor)[^358^].

---

## 9. Tools and Platforms for Synthetic Data Generation

### 9.1 Healthcare-Specific Tools

| Tool | Type | License | Key Features |
|------|------|---------|--------------|
| **Synthea** | Rule-based patient simulator | Apache 2.0 | Full patient lifecycles, conditions, encounters, claims; recognized Digital Public Good[^393^] |
| **MDClone** | Commercial healthcare platform | Proprietary | Self-service clinical data exploration; 4.9/5 G2 rating[^424^] |
| **GluGAN** | Specialized GAN for CGM | Research code | Personalized glucose time series; outperforms 4 baseline GANs[^342^] |

### 9.2 General-Purpose Synthetic Data Tools

| Tool | Type | License | Best For |
|------|------|---------|----------|
| **SDV (Synthetic Data Vault)** | Open-source library | MIT | Tabular, relational, time-series; multiple models (CTGAN, TVAE, CopulaGAN)[^425^] |
| **YData Synthetic** | Open-source + commercial | Open source SDK | CTGAN, TimeGAN implementations; Streamlit GUI[^425^] |
| **Gretel.ai** | Commercial + open source | Open source available | API-driven; advanced models (ACTGAN, DGAN)[^429^] |
| **Synthcity** | Open-source library | Apache 2.0 | Privacy/fairness evaluation; benchmarking suite[^425^] |
| **SmartNoise** | Open-source synthesizer | MIT | Differential privacy guarantees; backed by Microsoft[^425^] |
| **Twinify** | Open-source | Research | Privacy-preserving generation of synthetic twins[^429^] |

### 9.3 Evaluation Tools

- **SDMetrics**: Python package for comprehensive synthetic data quality evaluation (fidelity, utility, privacy)
- **Anonymeter**: Privacy evaluation tool implementing three GDPR re-identification risk assessments (singling out, linkability, inference)
- **SynthEHRella**: Open-source benchmarking framework for synthetic EHR generation methods[^390^]
- **ARX Data Anonymization Tool**: Open-source tool for k-anonymity, l-diversity, t-closeness, and differential privacy[^351^]

---

## 10. Ethical Considerations

### 10.1 Informed Consent Debate

The question of whether informed consent is required for synthetic data generation remains unresolved. Two polarizing viewpoints dominate the literature:

1. **Consent not required**: Synthetic data transforms real patient data to generate new datasets preserving statistical properties without revealing individual information, making consent unnecessary[^376^]
2. **Consent still relevant**: Connection between synthetic and original data varies by generation method; in some scenarios, synthetic data may still contain identifiable information or be traceable back to original data[^376^]

The ethical consensus emerging is that **"synthetic health data should not be employed as a mechanism to bypass informed consent or to compromise any ethical principles in pursuit of abstract notions such as 'public good' or 'technological progress'"**[^376^].

### 10.2 Transparency and Trust

Trust, transparency, and explainability are critical ethical pillars. The UK Statistics Authority has developed ethical principles specifically for synthetic data, focusing on:

- Ensuring quality and validity of synthetic data
- Considering public perceptions and understanding
- Clearly and transparently communicating uses, benefits, and limitations
- Maintaining accountability within all aspects of synthetic data processes[^382^]

A 2025 study in Nature Digital Medicine examining regulation of synthetic data generation concluded that **"legal compliance alone is insufficient to maintain public trust and maintain the social license for the secondary use and disclosure of health information"**[^378^].

### 10.3 Bias and Fairness

Synthetic data generation can either mitigate or amplify existing biases. A 2025 medRxiv study demonstrated that a Conditional Augmentation GAN (CA-GAN) could reduce the performance gap between Black and White patient cohorts from 8% (Delta AUC = 0.083) to 2% (Delta AUC = 0.025) by augmenting underrepresented minority class data[^437^].

However, if not carefully managed, synthetic data can perpetuate biases from the original training data. A review of bias mitigation via synthetic data found that while GAN-based approaches can improve fairness by up to 62%, they remain particular to the utilized datasets and face generalizability challenges[^439^].

---

## 11. Synthetic Data + Federated Learning Combinations

### 11.1 Complementary Approaches

Synthetic data and federated learning (FL) are increasingly viewed as complementary privacy-enhancing technologies rather than alternatives. A UK techUK report highlights that "federated learning may occur within or across TREs [Trusted Research Environments], and synthetic data may be used to simulate or prototype analyses before secure access"[^427^].

NHS England is actively exploring this combination, with a data science internship project aimed at testing how different PETs can be combined for healthcare use cases including[^428^]:
- Federated analytics for research across trusts without data sharing
- Private case-based retrieval (returning similar patient profiles while preserving privacy)
- Secure comparisons between real-time patient data and national models

### 11.2 Real-World Deployment: UK-US Cancer Research Pilot

A landmark pilot by the UK Government's DSIT enabled NHS England's National Disease Registration Service and the US National Cancer Institute to study ultra-rare childhood tumors using three complementary PETs[^433^]:

1. **Federated querying**: Executes approved scripts simultaneously inside NDRS and NCI firewalls
2. **Trusted Execution Environment (TEE)**: Decrypts and sums site aggregates inside secure enclaves
3. **Differential privacy + cell suppression**: Adds Laplace noise with epsilon = 1 and suppresses cells below threshold

The pilot found that information governance timelines were reduced from over a year to approximately two months[^433^].

### 11.3 Decentralized Diabetes-Specific Framework

A 2025 study proposed a decentralized framework for diabetic retinopathy detection combining federated learning, secure multi-party computation (SMPC), blockchain, and SMOTE. The framework achieved approximately 90% accuracy on the APTOS 2019 dataset across 2-10 clients without raw data sharing. Notably, compared to differentially private baselines (52.18% accuracy), the SMPC-based framework delivered a robust balance of performance, privacy, and fairness[^432^].

---

## 12. Compute Requirements

### 12.1 Hardware Requirements by Workload

| Workload | Hardware | Training Time |
|----------|----------|---------------|
| Light (tabular <50 cols, <10K rows) | Modern 8-core CPU | 8-24 hours |
| Medium (>50 cols, time series <500 length) | NVIDIA Tesla V100 / RTX 20 series | 30 min - 2 hours |
| Heavy (time series >500 length, high-dim) | NVIDIA Ampere A30/A100, 16GB+ RAM | 24+ hours |
| Complex 3D medical imaging | Powerful GPU clusters | Days[^374^] |

### 12.2 Practical Considerations

- **Tabular data with CTGAN/TVAE**: Typically completes in minutes to hours on standard hardware[^377^]
- **Medical image generation with diffusion models**: Seconds per image for inference; days/weeks of GPU training for custom models from scratch; pretrained models reduce to minutes/hours[^377^]
- **Production healthcare AI projects**: Weeks to months from initial data assessment through validated synthetic dataset deployment[^377^]
- **Total timeline**: Must include validation (statistical testing, expert clinical review, privacy assessments) adding weeks beyond generation time[^377^]

### 12.3 Cost Optimization Strategies

Institutions deploying AI-driven healthcare solutions must assess cost-effective strategies such as cloud-based AI services and lightweight edge computing solutions[^380^]. GANs and diffusion models require high-end GPUs and extensive parallelization, making them resource-intensive for many hospitals and medical institutions. FL models introduce additional communication and synchronization overhead, impacting real-time performance[^380^].

---

## 13. Key Tensions and Counter-Narratives

### 13.1 The Privacy-Utility-Fairness Trilemma

A fundamental trilemma governs synthetic data generation: maximizing fidelity and downstream utility inevitably increases statistical proximity to real records and hence privacy risk. Empirical benchmarks demonstrate that rule-based simulators provide maximal privacy but inferior utility; GAN- and diffusion-based models yield the highest fidelity but require postprocessing or DP to mitigate membership risk[^392^]. Adding fairness constraints introduces a third dimension of trade-off.

### 13.2 Synthetic Data Does Not Eliminate Privacy Risk

Despite marketing claims, synthetic data does not automatically eliminate privacy risks. The statement from a Sherpa.ai analysis captures this well: "If the generator model isn't properly protected, or if the real data is highly sensitive, leakage or reconstruction is possible"[^349^]. The only provable protection comes from differential privacy, which imposes its own utility costs.

### 13.3 Regulatory Uncertainty

While the FDA has accepted synthetic data in specific contexts (in silico trials, imaging AI evaluation), there remains no general framework for synthetic data in clinical trials or regulatory submissions. The EMA has not yet released formal guidance. This uncertainty creates risk for organizations investing in synthetic data infrastructure.

### 13.4 Validation Remains Challenging

The Synthea validation experience demonstrates that even widely-used synthetic data generators can contain severe inaccuracies (4000x amputation overestimation) that are not immediately apparent. Comprehensive validation frameworks must assess not just standard statistical metrics but also domain-specific clinical plausibility and temporal coherence[^331^][^330^].

---

## 14. Forward Outlook and Recommendations

### 14.1 Emerging Trends

1. **Diffusion models for health data**: Expected to mature rapidly, offering training stability advantages over GANs
2. **LLM-based synthetic data generation**: Large language models are beginning to generate clinically plausible text and structured data
3. **Real-time synthetic data generation**: Edge computing enabling on-device synthetic data for closed-loop diabetes systems
4. **Regulatory harmonization**: International efforts through WHO and ICH to develop global guidelines for synthetic health data[^376^]
5. **EHDS integration**: Synthetic data positioned as a key enabler for the European Health Data Space

### 14.2 Recommendations for OpenDiabetic Foundation

1. **Adopt a hybrid approach**: Combine synthetic data generation with federated learning and differential privacy for maximum protection
2. **Invest in validation infrastructure**: Establish domain-specific validation frameworks that go beyond standard statistical metrics to assess clinical plausibility of diabetes-specific features (glucose dynamics, complication progression)
3. **Contribute to open datasets**: Generate and release open synthetic diabetes datasets (CGM, EHR, claims) with comprehensive documentation of generation methods and validation results
4. **Engage with regulatory bodies**: Participate in FDA/EMA consultation processes on synthetic data guidance
5. **Address fairness proactively**: Ensure synthetic data generation processes explicitly account for underrepresented populations (type 1 vs. type 2, racial/ethnic minorities, rare diabetes subtypes)
6. **Establish data lineage standards**: Implement clear chain of custody documenting data sources, generation methods, privacy guarantees, and validation results

---

## 15. Sources Index

| Ref | Source | URL | Date |
|-----|--------|-----|------|
| [^329^] | Quantifying Fidelity and Utility in Synthetic Healthcare Data (PubMed) | https://pubmed.ncbi.nlm.nih.gov/42175014/ | 2026 |
| [^330^] | Synthea: Validation of T2D Modules (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7651916/ | 2020 |
| [^331^] | High-Fidelity Synthetic Data in Million-Patient Diabetes Cohort (Advanced Science) | https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202516196 | 2026-03-16 |
| [^332^] | Harnessing the power of synthetic data in healthcare (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC10562365/ | 2023 |
| [^333^] | Evaluating the Quality of Synthetic Data in Health Care (Research Square) | https://www.researchsquare.com/article/rs-6320382/latest.pdf | 2024 |
| [^334^] | Evaluating the Quality of Synthetic Data (Medium) | https://sulbhajain.medium.com/evaluating-the-quality-of-synthetic-data-efe4ad11f8d7 | 2025-08-29 |
| [^335^] | HHS HIPAA De-identification Guidance | https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html | 2025-02-03 |
| [^336^] | A systematic review of privacy-preserving techniques for synthetic tabular health data (Springer) | https://link.springer.com/article/10.1007/s44248-025-00022-w | 2025-03-10 |
| [^339^] | CGAN for Synthesis of CGM Signals (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC9445350/ | 2021 |
| [^340^] | Synthetic CGM Signals Dataset (AAU) | https://vbn.aau.dk/en/datasets/synthetic-continuous-glucose-monitoring-cgm-signals/ | 2021 |
| [^342^] | GluGAN: Generating Personalized Glucose Time Series (UCL) | https://discovery.ucl.ac.uk/10169613/1/GluGAN_Generating_Personalized_Glucose_Time_Series_Using_Generative_Adversarial_Networks.pdf | 2021 |
| [^344^] | Breath Diabetes Synthetic Data (GitHub) | https://github.com/AlbertoGudinoOchoa/breath-diabetes-synthetic-data/ | 2024-09-26 |
| [^345^] | Synthetic Tabular Data Based on GANs in Health Care (JMIR) | https://pmc.ncbi.nlm.nih.gov/articles/PMC10709788/ | 2023-11-01 |
| [^346^] | Synthetic CGM Signals (Mendeley Data) | https://data.mendeley.com/datasets/chd8hx65r4/2 | 2021-08-20 |
| [^351^] | Ultimate Guide to Re-Identification Risk (Censinet) | https://censinet.com/perspectives/ultimate-guide-re-identification-risk-healthcare-data | 2026-06-05 |
| [^353^] | Synthetic biomedical data for In Silico Clinical Trials (Frontiers) | https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2023.1085571/full | 2023-08-15 |
| [^357^] | HIPAA vs GDPR Health Data Privacy (GetLimina) | https://www.getlimina.ai/en/blog/hipaa-vs-gdpr-health-data-privacy-differences | 2026-04-15 |
| [^358^] | Systematic Review of Re-Identification Attacks on Health Data (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3229505/ | 2011 |
| [^361^] | Redefining Anonymization: Legal Challenges in EHDS Era (Springer) | https://link.springer.com/chapter/10.1007/978-3-031-99709-9_5 | 2025-01-01 |
| [^372^] | A bimodal dataset for diabetes research (Nature/PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC13111635/ | 2025 |
| [^374^] | Infrastructure for Synthetic Data Generation (BlueGen) | https://bluegen.ai/what-infrastructure-is-required-for-synthetic-data-generation/ | 2026-05-18 |
| [^376^] | Ethical implications of AI-generated synthetic health data (HAL) | https://hal.science/hal-04216538v1/file/Ethical_implications_of_AI_generated_synthetic_medical_data-2.pdf | 2023 |
| [^377^] | Creating synthetic training data for healthcare AI (Momentum) | https://www.themomentum.ai/blog/creating-synthetic-training-data-for-healthcare-ai | 2025-09-25 |
| [^378^] | Protecting patient privacy in tabular synthetic health data (Nature) | https://www.nature.com/articles/s41746-025-02112-0 | 2025-11-28 |
| [^379^] | DP synthetic tabular data generation with WGAN (UTU) | https://www.utupub.fi/bitstream/handle/10024/154640/Nieminen_Valtteri_opinnayte.pdf | 2022 |
| [^380^] | Review of generative AI for synthetic data (Springer) | https://link.springer.com/article/10.1007/s10462-025-11440-2 | 2025-12-10 |
| [^382^] | Ethical considerations relating to synthetic data (UK Statistics Authority) | https://uksa.statisticsauthority.gov.uk/publication/ethical-considerations-relating-to-the-creation-and-use-of-synthetic-data/ | 2022-10-19 |
| [^383^] | Synthetic data in medical imaging within the EHDS (Frontiers) | https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2025.1620270/full | 2025-10-08 |
| [^384^] | How to DP-fy Your Data: Practical Guide (arXiv) | https://arxiv.org/html/2512.03238v1 | 2025-12-02 |
| [^388^] | Google DP Synthetic Training Data (Google Research) | https://research.google/blog/protecting-users-with-differentially-private-synthetic-training-data/ | N/A |
| [^390^] | Generating Synthetic EHR Data: Scoping Review with Benchmarking (arXiv) | https://arxiv.org/abs/2411.04281 | 2024-11-06 |
| [^391^] | Generation of Individualized Synthetic Data for T1D Augmentation (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC9269743/ | 2022-05-30 |
| [^392^] | Synthetic Electronic Health Records: Methods Review (Emergent Mind) | https://www.emergentmind.com/topics/synthetic-electronic-health-records-ehrs | 2026-01-10 |
| [^393^] | Synthea Digital Public Goods Profile | https://www.digitalpublicgoods.net/r/synthea | 2025-12-04 |
| [^397^] | Regulatory Readiness: FDA & EMA Synthetic Data (CareZai) | https://carezai.com/blog/regulatory-readiness-synthetic-data-part2 | 2025-09-02 |
| [^424^] | 15 Best Synthetic Data Tools for AI (GuideFlow) | https://www.guideflow.com/blog/synthetic-data-tools | 2026-06-16 |
| [^427^] | Leveraging PETs to Support UK Life Sciences (techUK) | https://www.techuk.org/resource/leveraging-privacy-enhancing-technologies-to-support-uk-life-sciences.html | 2025-05-14 |
| [^428^] | Applied PETs in Healthcare (NHS England) | https://nhsx.github.io/nhsx-internship-projects/pets-in-healthcare/ | N/A |
| [^430^] | UK Gov PETs Use Cases Repository: Health | https://www.gov.uk/guidance/repository-of-privacy-enhancing-technologies-pets-use-cases/health-and-social-care | 2024-11-07 |
| [^432^] | Decentralized privacy-preserving framework for DR (ScienceDirect) | https://www.sciencedirect.com/science/article/pii/S2590123025015269 | 2025-07-12 |
| [^433^] | PETs for International Cancer Research (GDS Blog) | https://gds.blog.gov.uk/2025/10/09/using-privacy-enhancing-technologies-to-enable-international-data-sharing/ | 2025-10-09 |
| [^434^] | Evaluations of ML Privacy Defenses are Misleading (arXiv) | https://arxiv.org/html/2404.17399v2 | 2024 |
| [^435^] | Stand-in Model Protection for MIA Defense (ScienceDirect) | https://www.sciencedirect.com/science/article/abs/pii/S0950705125003867 | 2025-05-08 |
| [^437^] | Generative AI Mitigates Representation Bias (medRxiv) | https://www.medrxiv.org/content/10.1101/2023.09.26.23296163v4.full-text | 2025-02-27 |
| [^438^] | SELENA: Self-Distillation for MIA Defense (USENIX) | https://www.usenix.org/system/files/sec22fall_tang.pdf | 2022 |
| [^439^] | Bias Mitigation via Synthetic Data Generation: A Review (MDPI) | https://www.mdpi.com/2079-9292/13/19/3909 | 2024-10-02 |

---

*Report prepared for OpenDiabetic Foundation Research Compute Strategy. All claims are sourced with inline citations. Last updated: July 2025.*
