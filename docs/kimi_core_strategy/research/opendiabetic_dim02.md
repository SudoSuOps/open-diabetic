# Dimension 02: Privacy-Preserving Compute & Federated Learning for Diabetes

## Research Summary

This report provides an in-depth analysis of privacy-preserving compute technologies, federated learning (FL), differential privacy (DP), homomorphic encryption (HE), secure multi-party computation (SMPC), and related techniques as applied to diabetes data and diabetic AI. The research draws on 25+ independent web searches spanning academic papers, regulatory guidance, industry reports, and open-source project documentation. Key findings include: (1) FL for diabetes prediction has achieved 91-97.27% accuracy in 2024-2025 studies, with clustering-based approaches reaching precision 0.93 and recall 0.96 for glucose prediction; (2) Real-world FL deployments in healthcare remain limited, with only 10 of 107 reviewed studies reporting actual distributed clinical implementations; (3) Differential privacy faces well-documented privacy-utility tradeoffs, particularly at epsilon values around 1, where noise injection frequently causes convergence failure; (4) Homomorphic encryption for healthcare AI remains 10-100x slower than plaintext but is becoming practically viable with hardware acceleration; (5) The FDA has not issued FL-specific guidance but its Good Machine Learning Practice (GMLP) principles are directly applicable; and (6) Significant opportunities exist for a privacy-first nonprofit foundation to build open-source diabetic compute infrastructure leveraging these technologies.

---

## 1. Current State of Federated Learning for Diabetes Research

### 1.1 Key Papers and Results (2024-2025)

The landscape of federated learning for diabetes prediction has matured substantially in 2024-2025, with multiple high-performance approaches published.

**FLWCO: Federated Learning with Weighted Conglomeration Optimization**

The most prominent recent result is the FLWCO framework, which achieves 97.27% accuracy on a 96,146-instance diabetes dataset from Kaggle. This represents the highest reported accuracy for federated diabetes prediction in the peer-reviewed literature to date.

```
Claim: FLWCO achieves 97.27% accuracy on 96,146-instance diabetes dataset, outperforming FedAvg by 5.08% in final accuracy, with 12% fewer communication rounds to reach 90% accuracy [^3^]
Source: Springer - International Journal of Computational Intelligence Systems
URL: https://link.springer.com/article/10.1007/s44196-025-00956-8
Date: 2025-08-23
Excerpt: "In the context of machine learning, accuracy refers to the proportion of properly predicted instances throughout the whole set of data...the FLWCO with FedMAP produced 84.43% accuracy with five functions in the first trial of 1000 rounds, whereas after subsequent rounds it achieves 97.27% accuracy after 3500 rounds using the same dataset."
Context: This paper introduces a weighted conglomeration optimization algorithm that dynamically adjusts classifier weights based on validation performance. The framework uses AdaBoost, Random Forest, XGBoost, Multilayer Perceptron, and Gradient Boost classifiers with dynamic weight adjustment.
Confidence: High
```

**FedGlu: Personalized Federated Learning for Glucose Prediction**

FedGlu represents a significant advance in personalized glucose prediction, specifically targeting glycemic excursion regions (hypoglycemia and hyperglycemia) that are clinically critical but statistically rare.

```
Claim: FedGlu achieves 35% improvement in glycemic excursion detection over local models, with a novel Hypo-Hyper (HH) loss function demonstrating 46% improvement over MSE loss across 125 patients [^145^]
Source: Scientific Reports (Nature)
URL: https://pubmed.ncbi.nlm.nih.gov/41184401/
Date: 2025-03-11
Excerpt: "FedGlu improved glycemic excursion detection by 35% compared to local models. This improvement translates to enhanced performance in predicting both, hypoglycemia and hyperglycemia, for 105 out of 125 patients."
Context: The HH loss function penalizes errors based on underlying glycemic range with higher penalty at the extremes. FedGlu was trained in a federated framework allowing collaborative learning without sharing sensitive CGM data.
Confidence: High
```

**Clu-FDL: Clustering-Based Federated Deep Learning for Glucose Prediction**

Clu-FDL takes a patient-clustering approach, grouping patients by carbohydrate intake patterns to create personalized models within a federated framework.

```
Claim: Clu-FDL achieves precision 0.93, recall 0.96, F1 0.95, with RMSE 11.08 ± 1.77 mg/dL for glucose prediction, outperforming non-clustering models for new patients with limited data [^1^]
Source: ScienceDirect - Healthcare Analytics
URL: https://www.sciencedirect.com/science/article/pii/S2772442525000115
Date: 2025-06-01
Excerpt: "The results show that the Clu-FDL approach achieves high precision (0.93), recall (0.96), and F1 scores (0.95), along with low Root Mean Square Error (RMSE) values (11.08 ± 1.77 mg/dL)."
Context: The study evaluates SimpleRNN and GRU models, finding GRU generally performs better. For new patients with only 0.25-3 days of data, Clu-FDL models show greater stability than non-clustering approaches.
Confidence: High
```

**Explainable Federated Learning for Diabetes Prediction**

Recent work has also focused on explainability in federated diabetes prediction, achieving strong performance with interpretable models.

```
Claim: Explainable federated learning models for privacy-preserving diabetes prediction achieved accuracy of 0.92, F1-score of 0.93, and ROC-AUC of 0.94 [^54^]
Source: ACM Digital Library
URL: https://dl.acm.org/doi/10.1145/3797491.3797542
Date: April 2026 (preprint)
Excerpt: "The federated models achieved strong predictive performance, with the best model obtaining accuracy of 0.92, F1-score of 0.93, and ROC-AUC of 0.94"
Context: This work emphasizes explainability alongside privacy preservation, making models more trustworthy for clinical deployment.
Confidence: High
```

### 1.2 FL Approaches for Diabetic Retinopathy

Federated learning has also been applied to diabetic retinopathy detection, an important diabetes complication screening task.

```
Claim: FL models for diabetic retinopathy achieved AUC 0.93-0.96, with internal models demonstrating performance equivalent to centrally trained models [^3^]
Source: Springer (FLWCO paper)
URL: https://link.springer.com/article/10.1007/s44196-025-00956-8
Date: 2025-08-23
Excerpt: "The area under the curve (AUC) ranged from 0.93 to 0.96. When looking at data from only one institution, the FL model performed better than other training models."
Context: Multiple studies have validated FL for DR screening across institutional boundaries, with models trained on fundus photographs from MESSIDOR-2, IDRID, and hospital datasets.
Confidence: High
```

### 1.3 Federated Learning-Inspired Evolutionary Approaches

Novel approaches combining evolutionary algorithms with federated learning principles have shown promise for glucose prediction.

```
Claim: A Federated Learning-Inspired Evolutionary Algorithm (FLEA) for glucose prediction showed improvements of 3.03% precision, 1.56% recall, 3.17% F1, and 1.56% accuracy over non-federated approaches [^122^]
Source: MDPI Sensors
URL: https://www.mdpi.com/1424-8220/23/6/2957
Date: 2023-03-08
Excerpt: "The improvement provided by knowledge sharing is equal to about 3.03% for precision, 1.56% for recall, 3.17% for F1, and 1.56% for accuracy."
Context: This approach uses Grammatical Evolution on local data, sharing models rather than data, and demonstrates that even evolutionary computation can benefit from federated knowledge sharing.
Confidence: High
```

---

## 2. Differential Privacy Techniques for Health Data

### 2.1 Core Mechanisms and Privacy Budget

Differential privacy (DP) provides mathematical privacy guarantees by adding carefully calibrated noise to data queries or model updates. The privacy guarantee is controlled by the epsilon (ε) parameter, with smaller values providing stronger privacy.

```
Claim: Privacy budget epsilon is the core parameter controlling DP guarantees; commonly used values in healthcare range from 0.01 to 10, with smaller values providing stronger privacy but potentially reducing model utility [^66^]
Source: PMC/NIH
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC8662814/
Date: 2021
Excerpt: "The strength of this privacy guarantee, or the privacy budget, is based on the value of a privacy parameter called epsilon... Smaller values of epsilon provide stronger privacy guarantees."
Context: A commonly applied rule of thumb is that epsilon should be thought of as a small number, between approximately 1/1,000 and 1.
Confidence: High
```

```
Claim: There exists no universal experimental evaluation to guide users on choosing an appropriate epsilon value; Dwork recommends values of 0.01, 0.1, ln2, or ln3, while some papers use values ranging from 0.5 to 10 [^196^]
Source: TDP Journal
URL: http://www.tdp.cat/issues11/tdp.a129a13.pdf
Date: N/A
Excerpt: "Dwork considers the issue as 'a social question and...beyond the scope' of her work, however she provides some recommended values of: 0.01, or 0.1, and sometimes ln2, and ln3."
Context: The paper emphasizes that epsilon cannot be defined in general but always depends on the dataset in question and the acceptable risk of revealing an individual's presence.
Confidence: High
```

### 2.2 Privacy-Utility Tradeoffs in Medical Deep Learning

Applying DP to medical deep learning reveals significant tradeoffs, with performance consistently degrading under stricter privacy budgets.

```
Claim: Performance consistently degrades under stricter DP privacy budgets, particularly at ε ≈ 1, where noise injection frequently leads to convergence failure or sharp accuracy declines; however, models can maintain clinically acceptable utility at ε ≈ 10 with strong pretraining and careful normalization [^198^]
Source: PMC/NIH
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12855931/
Date: N/A
Excerpt: "Performance consistently degrades under stricter privacy budgets, particularly at ε ≈ 1, where noise injection frequently leads to convergence failure or sharp accuracy declines... models can maintain clinically acceptable utility even under strong privacy guarantees (ε ≈ 10)."
Context: Imaging tasks (chest X-ray, CT) showed resilience to DP noise, while histopathology, dermoscopy, and pathological speech proved more vulnerable due to smaller datasets or higher input variability.
Confidence: High
```

### 2.3 DP Integration with Federated Learning

Differential privacy is frequently combined with federated learning to provide defense-in-depth against both data reconstruction and membership inference attacks.

```
Claim: DP integration with FL addresses privacy concerns by adding noise to local updates or gradients, providing quantifiable privacy budgets and competitive performance in healthcare applications [^107^]
Source: arXiv - Implementing Federated Learning in Healthcare
URL: https://arxiv.org/html/2409.09727v2
Date: 2024-04-24
Excerpt: "Differential Privacy: Adds noise to local updates or gradients to mask individual data contributions, ensuring privacy... Provide strong privacy guarantees with quantifiable privacy budget [but with a] trade-off between privacy and model accuracy."
Context: This comprehensive review identifies DP as one of the key perturbation techniques used alongside cryptography (HE, SMPC) and blockchain for privacy protection in healthcare FL.
Confidence: High
```

### 2.4 Practical Implementation of DP in Healthcare

```
Claim: Effective healthcare DP requires disciplined scoping, proper mechanism selection, strong baselines, and rigorous accounting using Privacy Accountants, Privacy Ledgers, and validation through membership inference attacks [^61^]
Source: Accountable HQ
URL: https://www.accountablehq.com/post/how-to-implement-differential-privacy-in-healthcare-step-by-step-guide
Date: 2025-11-08
Excerpt: "Choose a target Epsilon Privacy Budget (ε) and failure probability (δ). In healthcare, tighter ε constrains memorization risk but reduces utility... Set δ well below 1/N (N = number of patients) as a conservative default."
Context: The implementation guide recommends using Privacy Accountants (preferably Rényi DP or moments accountants), maintaining Privacy Ledgers, and validating with membership inference attacks and canary-based memorization checks.
Confidence: Medium
```

---

## 3. Edge AI Deployment for Diabetes Management

### 3.1 TensorFlow Lite on Raspberry Pi for Glucose Prediction

Edge deployment of diabetes prediction models has been demonstrated on low-cost hardware with compelling latency results.

```
Claim: TensorFlow Lite LSTM models for glucose prediction on Raspberry Pi achieved RMSE of 16 ± 4.7 mg/dL with 98.9% of predictions in Clarke Error Grid Zones A and B, with maximum inference time of 70.3 ms for LSTM and 101.56 ms for CNN [^69^]
Source: PMC/NIH
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC9137786/
Date: 2021-11-20
Excerpt: "The LSTM model outperforms the CNN in terms of numerical accuracy, achieving an RMSE of 16±4.7mg/dL, and 98.9% of its predictions fall in zones A and B of the CEG."
Context: Models were quantized to .tflite format with dynamic range quantization. Inference times were far below the 1-minute sampling period limit, covering at most 0.17% of the total time budget.
Confidence: High
```

### 3.2 Low-Cost Wearable Edge-AI for Blood Glucose Estimation

Recent work demonstrates fully integrated wearable devices with edge AI for non-invasive blood glucose estimation.

```
Claim: A wearable Edge-AI device for blood glucose estimation achieved 16.8% MAPE with 70.6% of predictions in Clarke Error Grid Region A, with real-time 30-second PPG sampling, at a device cost of $65 USD [^72^]
Source: ACM GLSVLSI 2025
URL: https://dl.acm.org/doi/10.1145/3716368.3735270
Date: 2025-09-01
Excerpt: "The device achieves a prediction accuracy of 16.8% MAPE (Mean Absolute Percentage Error) with 70.6% of predictions in Region A of Clarke Error Grid using PPG metrics and user input data as features for a quantized AI model on an edge device."
Context: The system uses PPG sensor data with a 30-second sampling window. Model quantization for edge deployment did not degrade performance. The device requires no external network connection.
Confidence: High
```

### 3.3 IoMT-Enabled Real-time Blood Glucose Prediction with Edge Computing

A complete IoMT system with Bluetooth connectivity and edge inference has been demonstrated.

```
Claim: An IoMT-enabled edge glucose prediction system achieved ~500 ms inference time using RNN on a BLE SoC, with 189.03 KB Flash and 16.12 KB SRAM usage, consuming 27 mW during edge AI computation [^70^]
Source: UCL Discovery
URL: https://discovery.ucl.ac.uk/id/eprint/10143535/1/
Date: N/A
Excerpt: "The running of the RNN predictor is the most energy-hungry process... but only takes a short operating time of around 500 ms."
Context: The system uses CMSIS-DSP APIs for low-level computation without interpreting the network graph, significantly reducing memory usage compared to TensorFlow Lite Micro.
Confidence: High
```

### 3.4 Jetson Nano for Edge AI

The NVIDIA Jetson Nano represents a middle-ground option between Raspberry Pi and cloud computing for edge AI deployment.

```
Claim: Jetson Nano ($99) provides 128-core Maxwell GPU, 5-10W power consumption, and is suitable for real-time ML deployment with local inference capabilities, making it ideal for resource-constrained environments [^197^]
Source: International Journal of Environmental Sciences
URL: https://theaspd.com/index.php/ijes/article/download/6115/4436/12420
Date: 2025
Excerpt: "NVIDIA Jetson Nano performs machine learning inference locally without relying on cloud infrastructure, reducing latency... Low power consumption (5-10W)."
Context: Jetson Nano balances cost ($99), power (5-10W), and performance (128-core GPU), making it suitable for clinical and home-based diabetes monitoring applications requiring more compute than Raspberry Pi can provide.
Confidence: High
```

### 3.5 Real-time IoT-CGM Integration with Edge AI

Combining CGM devices with IoT sensors and edge AI shows strong recent results.

```
Claim: A real-time IoT-CGM edge AI system achieved 92.4% accuracy, MAE of 7.6 mg/dL, and prediction latency of 1.4 seconds using LSTM, with 91% sensitivity and 89% specificity for hypoglycemia/hyperglycemia alerts [^191^]
Source: IJSREM
URL: https://ijsrem.com/uploads/production/Predicting-Short-Term-Glucose-Trends-in-Real-Time-Using-Multimodal-IoT-Data-and-Neural-Networks.pdf
Date: 2025
Excerpt: "Lightweight AI models deployed on edges decreased the mean prediction latency to 1.4 seconds, which guaranteed the delivery of alerts on time."
Context: The system integrates CGM data with wearable IoT sensors (heart rate, skin temperature, activity levels) for multimodal glucose prediction.
Confidence: Medium
```

---

## 4. Homomorphic Encryption for Healthcare AI

### 4.1 Practical Status and Performance

Homomorphic encryption (HE) enables computation on encrypted data without decryption, providing the strongest possible privacy guarantees, but at significant computational cost.

```
Claim: Fully Homomorphic Encryption (CKKS scheme) for medical AI demonstrated 99.56% accuracy in sleep apnea detection and 84.6% accuracy in ICU mortality prediction; however, training with FHE takes 10.8x longer than plaintext (138.2s vs 12.8s), with ciphertexts ~18x larger [^192^]
Source: Censinet
URL: https://censinet.com/perspectives/homomorphic-encryption-ai-healthcare
Date: 2026-05-11
Excerpt: "In a simulation conducted in July 2025 using the UCI Heart Disease dataset, training with FHE (CKKS) took 138.2 seconds compared to 12.8 seconds for plaintext, representing a 10.8x slowdown."
Context: FHE inference can achieve latencies under 20 milliseconds per sample, making it viable for batch processing. The FAS framework demonstrated a 90% speed boost over standard FHE by selectively encrypting high-risk parameters.
Confidence: High
```

### 4.2 HE Schemes for Healthcare: Comparative Analysis

Different HE schemes offer different tradeoffs for healthcare AI applications.

```
Claim: Three HE schemes show complementary strengths for healthcare: CKKS best for encrypted inference on real-valued data in edge/cloud diagnostics; BFV best for exact computations in imaging; BGV best for deep multi-institutional research pipelines [^195^]
Source: Springer - Discover Applied Sciences
URL: https://link.springer.com/article/10.1007/s44163-026-00920-1
Date: 2026-02-08
Excerpt: "CKKS: best for encrypted inference on real-valued data in edge/cloud diagnostics. BFV: best for exact computations in imaging and rule-based decision support. BGV: best for deep, multi-institutional research pipelines."
Context: The paper provides a comprehensive decision matrix for selecting HE schemes based on pipeline stage, system architecture, data type, and privacy requirements.
Confidence: High
```

### 4.3 Multi-Party HE for Medical Predictions

Recent work demonstrates practical multi-party HE for medical predictions.

```
Claim: A practical framework for encrypted medical prediction using CKKS homomorphic encryption achieved accuracy comparable to plaintext, with batched CKKS for logistic regression and blockchain-anchored key management [^194^]
Source: ACM Workshop
URL: https://dl.acm.org/doi/10.1145/3709020.3735357
Date: 2025-09-01
Excerpt: "Predictions made using homomorphic encryption achieved accuracy comparable to those from unencrypted (plaintext) data."
Context: The framework uses a hybrid key management system with HashiCorp Vault and Hyperledger Fabric for access control, tested at 192-bit and 256-bit security levels.
Confidence: High
```

### 4.4 Hardware Acceleration for HE

Hardware acceleration is critical for making HE practical in healthcare settings.

```
Claim: The Safhire framework offloading non-linear operations to clients while processing linear layers on GPU- accelerated servers achieved 1.5-10.5x latency reductions and up to 86.12x server-side execution time reduction [^192^]
Source: Censinet
URL: https://censinet.com/perspectives/homomorphic-encryption-ai-healthcare
Date: 2026-05-11
Excerpt: "By utilizing GPU acceleration, Safhire achieved latency reductions of 1.5 to 10.5 times and cut server-side execution time by up to 86.12 times."
Context: Bootstrapping (resetting noise in encrypted data) consumes 62-85% of total inference time in FHE, making hardware acceleration essential.
Confidence: High
```

---

## 5. Real-World Deployments of FL in Healthcare

### 5.1 The Simulation-to-Reality Gap

The overwhelming majority of FL healthcare research remains in simulation, with very few real-world distributed clinical deployments.

```
Claim: Of 107 reviewed FL healthcare studies, 95 followed centralized FL topology, only 10 reported real-world deployments in distributed clinical settings, and the majority (78/107) utilized custom-designed rather than open-source frameworks [^64^]
Source: arXiv
URL: https://arxiv.org/html/2409.09727v2
Date: 2024-04-24
Excerpt: "Only 10 studies reported real-world deployments in distributed clinical settings, while the rest remained in the realm of prototypes or simulations."
Context: The review found that most studies operated within controlled, simulated settings where data was pooled and then artificially partitioned to represent distributed environments.
Confidence: High
```

### 5.2 The EXAM Study: COVID-19 and FL at Scale

The EXAM (EMR CXR AI Model) study represents one of the largest and most successful clinical FL deployments to date.

```
Claim: The EXAM study involved 20 institutions across North America, Europe, and Asia, achieving AUC > 0.92 for predicting COVID-19 oxygen requirements, with 16% average improvement and 38% increase in generalizability over local models [^119^]
Source: Research Square/Nature Medicine
URL: https://www.researchsquare.com/article/rs-126892/latest.pdf
Date: 2021 (published Nature Medicine Sept 2021)
Excerpt: "EXAM achieved an average Area Under the Curve (AUC) of over 0.92, an average improvement of 16%, and a 38% increase in generalisability over local models."
Context: The study was completed in just two weeks of AI learning. Collaborators spanned four continents. Patient data was fully anonymized and algorithms were sent to each hospital so no data was shared or left its location.
Confidence: High
```

### 5.3 MELLODDY: Cross-Pharma Federated Learning

The MELLODDY project demonstrated the first cross-pharma federated learning platform for drug discovery at unprecedented scale.

```
Claim: MELLODDY involved 10 pharmaceutical companies training models on 2.6+ billion confidential experimental data points across 21+ million molecules, with the global model outperforming individual company models [^158^]
Source: PMC/NIH - Journal of Chemical Information and Modeling
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11005050/
Date: 2023 (cited by 178)
Excerpt: "The MELLODDY project is the first realization of cross-end point federated learning in drug discovery across 10 pharma partners, at an unprecedented data warehouse scale."
Context: The project extended multitask learning benefits to the multi-partner setting without compromising data confidentiality. All participants involved the vast majority of their SAR data warehouses.
Confidence: High
```

### 5.4 Commercial FL Platforms for Healthcare

Several commercial platforms are emerging to facilitate real-world FL healthcare deployments.

```
Claim: Healthcare FL platforms including tracebloc, Owkin's Substra, and Apheris are enabling real-world deployments for retinal disease detection, cardiovascular risk prediction, and breast cancer screening AI vendor evaluation [^71^]
Source: tracebloc
URL: https://tracebloc.io/blog/federated-learning-in-healthcare
Date: 2026-03-05
Excerpt: "Medical centers evaluating AI systems for retinal disease detection need to validate vendor claims against their actual patient population without exposing proprietary imaging data."
Context: These platforms address practical challenges: vendor evaluation without data exposure, multi-site model validation, and AI procurement with data sovereignty maintained.
Confidence: Medium
```

---

## 6. Regulatory Perspective

### 6.1 FDA Good Machine Learning Practice (GMLP)

While the FDA has not issued federated learning-specific guidance, its Good Machine Learning Practice principles are directly applicable to FL-based medical devices.

```
Claim: FDA, Health Canada, and MHRA jointly identified 10 GMLP guiding principles for AI/ML medical devices, covering multi-disciplinary expertise, software engineering, representative datasets, independent test sets, model design, human-AI team performance, clinical testing, transparency, and post-deployment monitoring [^175^]
Source: Government of Canada / FDA
URL: https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/good-machine-learning-practice-medical-device-development.html
Date: 2021-10-27
Excerpt: "These 10 guiding principles are intended to lay the foundation for developing Good Machine Learning Practice that addresses the unique nature of these products."
Context: GMLP principles are non-binding but widely expected in submissions. They cover the full lifecycle from development through post-market monitoring. Predetermined Change Control Plans (PCCPs) enable prospective authorization for algorithm updates.
Confidence: High
```

```
Claim: By 2023, FDA had authorized 692 AI/ML-enabled devices, a 20-fold increase over the mean annual approval rate between 1995-2015, but only 3.6% reported race/ethnicity of validation cohorts [^176^]
Source: PMC/NIH
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC12730494/
Date: 2023-06-01
Excerpt: "The FDA had authorized 692 AI/Machine Learning (ML)-enabled devices by 2023, representing a 20-fold increase compared to the mean annual approval rate between 1995 and 2015."
Context: Gaps in demographic representation and transparency may exacerbate health disparities. FL could help address this by enabling training on more diverse datasets.
Confidence: High
```

### 6.2 Key Regulatory Considerations for FL in Healthcare

Several regulatory considerations are particularly relevant for FL-based medical AI:

- **Data provenance and representativeness** (GMLP Principle 3): FL must demonstrate that distributed training data is representative of the intended patient population across all participating sites.
- **Training/test independence** (GMLP Principle 4): In FL, careful attention must be paid to ensuring no data leakage between training and test sets across institutional boundaries.
- **Post-deployment monitoring** (GMLP Principle 10): FL models deployed across institutions need robust monitoring infrastructure to track performance and manage retraining risks.
- **Transparency and auditability**: Blockchain integration with FL (as in FedSecure-Chain) can provide immutable audit trails for regulatory compliance [^88^].

### 6.3 GDPR and HIPAA Compliance

Federated learning naturally supports GDPR and HIPAA compliance by design, since raw patient data never leaves local institutions.

```
Claim: FL keeps data localized on devices, minimizing the risk of data breaches and ensuring compliance with privacy regulations like GDPR and HIPAA; only model updates are transferred [^108^]
Source: Sherpa.ai
URL: https://federated-learning.sherpa.ai/en/blog/swarm-intelligence
Date: 2025-08-14
Excerpt: "Federated Learning allows healthcare institutions to collaborate on model training without sharing patient data... This approach significantly reduces the risk of data breaches, making it ideal for applications requiring stringent privacy controls."
Context: FL's privacy-by-design architecture aligns well with regulatory requirements, though additional measures (DP, secure aggregation) may be needed to prevent information leakage from model updates.
Confidence: High
```

---

## 7. Limitations and Challenges

### 7.1 Non-IID Data in Healthcare FL

Non-independent, identically distributed (non-IID) data is the norm in healthcare and poses fundamental challenges for federated learning.

```
Claim: Non-IID data in FL significantly degrades global accuracy compared to IID setups, with accuracy drops of 5.9% to 17.6% depending on dataset size; smaller datasets experiencing larger degradation [^160^]
Source: PMC/NIH
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11095741/
Date: N/A
Excerpt: "The Small dataset experiencing a notable 17.6% drop in accuracy, the Medium dataset registering an 11.3% decline, and the Large dataset showing a 5.9% decrease."
Context: FedProx is the most commonly employed solution (25% of papers), followed by Scaffold, data sharing, and FedNova. Personalized FL approaches allow each client to tailor the model to local data.
Confidence: High
```

```
Claim: FedProx provides convergence guarantees even with non-IID data but performance is sensitive to the proximal term choice; Scaffold uses control variates to counteract client drift and enhance convergence [^152^]
Source: arXiv
URL: https://arxiv.org/html/2411.12377v1
Date: 2024-11-19
Excerpt: "FedProx: Designed to combat heterogeneity within FL environments... providing convergence guarantees even when learning from non-IID data. Scaffold: leverages control variates... to counteract the client drift phenomenon."
Context: The systematic review found that most solutions focus on only one type of non-IIDness, which is a gap future research should address.
Confidence: High
```

### 7.2 Communication Overhead and Efficiency

Communication costs represent 70-90% of total FL system latency, making efficiency techniques critical.

```
Claim: Communication costs account for 70-90% of total FL system latency; quantization offers 40-70% bandwidth savings; combining 1-bit quantization with FedProx achieves 70%+ bandwidth savings with <2% accuracy degradation [^171^]
Source: BonView Press
URL: https://ojs.bonviewpress.com/index.php/AIA/article/download/6275/1740/41499
Date: 2025-11-15
Excerpt: "Recent studies indicate that communication costs account for 70-90% of total FL system latency... quantization techniques offer 40-70% bandwidth savings... hybrid techniques combining 1-bit quantization with FedProx aggregation showed optimal balance."
Context: Three primary techniques reduce communication overhead: model compression (quantization, pruning, sparsification), structured updates with selective parameter sharing, and efficient aggregation with client sampling.
Confidence: High
```

```
Claim: The Communication-Efficient Federated Learning (CEFL) framework for CT classification reduced latency to 70 ms while improving accuracy to 90%, reducing communication overhead by 40-60% compared to conventional FedAvg [^142^]
Source: International Journal of Drug Delivery Technology
URL: https://impactfactor.org/PDF/IJDDT/16/IJDDT,Vol16,Issue13s,Article17.pdf
Date: 2026
Excerpt: "The proposed CEFL framework reduces communication overhead by up to 40-60% compared to conventional FL methods such as FedAvg, while achieving improved classification accuracy of approximately 90%."
Context: CEFL integrates gradient sparsification, model quantization (32-bit to 8/16-bit), and adaptive communication scheduling.
Confidence: Medium
```

### 7.3 Model Poisoning Attacks and Defenses

Federated learning systems are vulnerable to poisoning attacks where malicious participants manipulate model updates.

```
Claim: FedSecure-Chain, combining anomaly detection, robust aggregation, and blockchain logging, maintained 94-95% accuracy under clean conditions and mitigated accuracy drops from 75-85% (attack-only) to near-baseline levels under five distinct poisoning attacks [^88^]
Source: PMC/NIH
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC13036150/
Date: N/A
Excerpt: "Under clean non-IID conditions, the federated model consistently achieved accuracies between 94% and 95%... When introducing poisoning strategies... the global accuracy dropped to values between 75% and 85%."
Context: Five attack types were evaluated: label-flip, clean-label, backdoor, Byzantine (sign), and Byzantine (scale+noise). The three-layer defense (anomaly detection + robust aggregation + blockchain) significantly reduced attack impact.
Confidence: High
```

```
Claim: Clustering-based defense algorithms (PCA + K-Means, KPCA + K-Means, RPCA + PCA + K-Means) consistently outperformed non-clustering defenses (CONTRA, KRUM, COOMED) across all datasets and attack scenarios, but incur additional execution time [^87^]
Source: MDPI Applied Sciences
URL: https://www.mdpi.com/2076-3417/14/22/10706
Date: 2024-11-19
Excerpt: "RPCA + PCA + K-means was shown to be the most effective algorithm in defending federated learning systems when varying the percentage of IID data, the number of clients, and the percentage of malicious clients."
Context: Evaluation covered four datasets (Fashion-MNIST, CIFAR-10, UCI Adult Census, Epileptic Seizure Recognition) with varying client numbers, malicious client percentages, and IID/non-IID conditions.
Confidence: High
```

### 7.4 Key Challenges Summary

Based on the reviewed literature, the primary challenges for FL in healthcare are:

1. **Non-IID data** causing accuracy degradation and slow convergence
2. **Communication overhead** consuming 70-90% of system latency
3. **Model poisoning** from malicious participants
4. **Scalability** concerns with large numbers of diverse clients
5. **Lack of real-world deployment** experience (only 10/107 studies)
6. **Privacy-utility tradeoffs** in differential privacy implementations
7. **Computational overhead** of homomorphic encryption (10-100x slower)
8. **Regulatory uncertainty** around FL-specific compliance requirements

---

## 8. Synthetic Data + Federated Learning Combination Approaches

### 8.1 Federated Synthetic Data Generation

Combining FL with synthetic data generation offers a promising approach for healthcare applications, enabling the creation of larger, more representative datasets without exposing real patient data.

```
Claim: Using FL to produce synthetic data can produce datasets more representative of the overall distribution than any client's individual dataset, without requiring data sharing; federated GANs and VAEs have been used for this purpose [^92^]
Source: International Journal of Population Data Science
URL: https://ijpds.org/article/view/2158
Date: 2023-10-31
Excerpt: "Using FL to produce synthetic data may produce a dataset that is more representative of the overall (or combined) distribution than any clients own individual dataset could be, without the need for data sharing."
Context: Multiple approaches exist: SGDE (each client trains a local VAE with DP), federated GANs (combining local GAN parameters), and Fed-TGAN (using statistical properties for initialization).
Confidence: High
```

### 8.2 SMOTE for Class Imbalance in Federated Diabetes Prediction

Synthetic data techniques like SMOTE are commonly used within FL frameworks to address class imbalance in diabetes datasets.

```
Claim: Applying SMOTE in federated diabetes prediction greatly improved recall and F1-score for the minority class; SMOTE is used alongside rigorous pre-processing and validation to reduce synthetic noise risk [^3^]
Source: Springer
URL: https://link.springer.com/article/10.1007/s44196-025-00956-8
Date: 2025-08-23
Excerpt: "Applying SMOTE greatly improved the model's recall and F1-score, especially for the minority class. This was achieved by correcting class imbalance and allowing the classifiers to better generalize to underrepresented patterns."
Context: SMOTE does increase the risk of synthetic noise, which is mitigated through rigorous pre-processing and the FLWCO framework's ensemble approach that highlights persistent patterns across models.
Confidence: High
```

---

## 9. Swarm Learning vs. Federated Learning

### 9.1 Key Differences

Swarm Learning (SL) represents a fully decentralized variant of federated learning without a central aggregator.

```
Claim: Swarm Learning takes a different approach by decentralizing not just the privacy protocol but the entire model training process; there is no central aggregator, instead decentralized hardware infrastructures work together to securely onboard clients and collaboratively generate a global model [^107^]
Source: arXiv
URL: https://arxiv.org/html/2409.09727v2
Date: 2024-04-24
Excerpt: "Swarm Learning takes a different approach by decentralizing not just the privacy protocol but the entire model training process... This decentralized approach enhances the network's resilience against attacks."
Context: SL's peer-to-peer architecture introduces latency issues and may slow training. It is particularly effective for non-IID data scenarios such as COVID-19 and leukemia prediction.
Confidence: High
```

```
Claim: The original Nature paper introducing Swarm Learning demonstrated it outperformed classifiers developed at individual sites using data from COVID-19, tuberculosis, leukemia and lung pathologies, with more than 16,400 blood transcriptomes and 95,000 chest X-ray images [^115^]
Source: DZNE Swarm Learning Hub
URL: https://www.dzne.de/en/swarm-learning-hub/publications/
Date: 2024-12-09
Excerpt: "With more than 16,400 blood transcriptomes derived from 127 clinical studies as well as more than 95,000 chest X-ray images, we showed that Swarm Learning classifiers outperform those developed at individual sites."
Context: SL uses blockchain-based peer-to-peer networking for coordination, making it more complex to deploy than centralized FL but potentially more resilient.
Confidence: High
```

### 9.2 Practical Considerations

Owkin, a leading healthcare FL company, notes that centralized FL is better suited for real-world healthcare projects due to privacy, IT, and IP requirements of partners.

```
Claim: Owkin's experience managing healthcare consortiums demonstrates that federated learning with centralized orchestration is better suited for real-world healthcare projects than fully decentralized approaches, mainly due to privacy, IT and IP requirements [^109^]
Source: Owkin
URL: https://www.owkin.com/blogs-case-studies/federated-learning-the-most-effective-collaborative-ai-framework-for-healthcare
Date: 2022-08-02
Excerpt: "Our experience managing healthcare consortiums training machine learning models on data at scale has demonstrated that federated learning with centralized orchestration is better suited for real-world healthcare projects."
Context: Owkin has worked with hospitals, research centers, and pharmaceutical companies on large collaborative projects. They consider swarm learning as technically a form of federated learning.
Confidence: High
```

---

## 10. Open-Source Frameworks for Privacy-Preserving Healthcare AI

### 10.1 Key Frameworks

Multiple open-source frameworks support privacy-preserving healthcare AI development.

```
Claim: The leading open-source FL frameworks are PySyft (9,200 stars, 424 contributors), FATE (5,500 stars, 86 contributors), Flower (4,100 stars, 121 contributors), and NVIDIA FLARE (523 stars, 34 contributors) [^146^]
Source: Apheris
URL: https://www.apheris.com/resources/blog/top-7-open-source-frameworks-for-federated-learning
Date: 2026-02-15
Excerpt: "PySyft: 9200 stars, 424 contributors. FATE: 5500 stars, 86 contributors. Flower: 4100 stars, 121 contributors. NVIDIA FLARE: 523 stars, 34 contributors."
Context: PySyft emphasizes privacy (DP + SMPC + HE), FATE targets enterprise/healthcare with Kubernetes support, Flower is framework-agnostic and research-friendly, NVIDIA FLARE is optimized for healthcare and edge devices.
Confidence: High
```

### 10.2 OpenMined: Nonprofit Privacy-Preserving Infrastructure

OpenMined represents a nonprofit model directly relevant to the OpenDiabetic Foundation's mission.

```
Claim: OpenMined is a nonprofit foundation focused on creating open-source technology infrastructure that helps researchers and app builders get answers from data without needing a copy or direct access [^121^]
Source: Data Foundation
URL: https://datafoundation.org/news/blogs/766/766-How-Privacy-Preserving-Infrastructure-Helps-Transition-from-Data-Silos-to-Evidence-Based-Solutions
Date: 2025-12-03
Excerpt: "OpenMined is a nonprofit foundation focused on creating open-source technology infrastructure that helps researchers and app builders get answers from data without needing a copy or direct access."
Context: OpenMined's PySyft framework has 9,200+ GitHub stars and 424+ contributors, making it one of the most popular open-source privacy-preserving ML frameworks. The Data Foundation panel explored how privacy-preserving technologies can improve evidence-based policymaking.
Confidence: High
```

### 10.3 Flower Framework for Healthcare FL

Flower has emerged as a particularly popular framework for healthcare FL research.

```
Claim: Flower is used by healthcare institutions including the UK National Health Service (NHS) and Owkin, with 6,600+ GitHub stars and 170+ contributors; it provides a 'write once, federate anywhere' philosophy [^140^]
Source: Red Hat
URL: https://www.redhat.com/en/blog/scaling-enterprise-federated-ai-with-flower-and-open-cluster-management
Date: 2026-03-11
Excerpt: "Healthcare institutions like the National Health Service (NHS) in the UK and Owkin are pushing open science with Flower."
Context: Flower is framework-agnostic (PyTorch, TensorFlow, JAX, scikit-learn) and can run both simulations and production deployments. Combined with Open Cluster Management, it provides a production-ready solution for enterprise federated AI.
Confidence: High
```

---

## 11. Secure Multi-Party Computation (SMPC) for Medical AI

SMPC allows multiple parties to collaboratively compute functions on their combined data while keeping inputs private.

```
Claim: SMPC ensures confidentiality of input data and computation results and is robust against adversarial attacks, but faces high computational and communication overhead and scalability issues with increasing participants [^107^]
Source: arXiv
URL: https://arxiv.org/html/2409.09727v2
Date: 2024-04-24
Excerpt: "Secure Multi-Party Computation: Allow multiple parties to collaboratively compute a function on their combined data while keeping data private... Robust against adversarial attacks [but with] high computational and communication overhead."
Context: SMPC is often combined with other techniques (DP, HE) in hybrid approaches for healthcare FL. The Froelicher et al. (2021) Nature Communications paper demonstrated "truly privacy-preserving federated analytics for precision medicine with multiparty homomorphic encryption."
Confidence: High
```

---

## 12. Trusted Execution Environments (TEEs) for Healthcare

TEEs provide hardware-enforced isolated environments for processing sensitive data.

```
Claim: TEEs including ARM TrustZone, Intel SGX/TDX, AMD SEV, and NVIDIA Confidential Computing Architecture offer hardware-enforced isolation for healthcare AI; a prototype combining ARM TrustZone at the edge and AMD SEV in the cloud demonstrated practicality for ARDS detection workflows [^153^]
Source: OpenReview
URL: https://openreview.net/pdf?id=RHhMyaBgyw
Date: N/A
Excerpt: "A prototype combining ARM TrustZone at the edge and AMD SEV in the cloud demonstrates the practicality of the approach."
Context: TEEs simplify proof-of-compliance for regulatory certification. However, no single TEE spans all device classes, and coordinating across heterogeneous enclaves remains an engineering challenge.
Confidence: High
```

```
Claim: Substra uses trusted execution environments (enclaves) that enable setting aside private regions for code and data, combined with immutable ledger traceability and encryption of model updates, data at rest, and network communication [^146^]
Source: Apheris
URL: https://www.apheris.com/resources/blog/top-7-open-source-frameworks-for-federated-learning
Date: 2026-02-15
Excerpt: "Substra uses trusted execution environments (also called enclaves) that enables setting aside private regions for code and data... Traceability: Substra writes all operations on the platform to an immutable ledger."
Context: Substra, originally developed by Owkin and now hosted by the Linux Foundation, is specifically focused on the medical field.
Confidence: High
```

---

## 13. Opportunities for OpenDiabetic Foundation

Based on the comprehensive landscape analysis, the following strategic opportunities exist for the OpenDiabetic Foundation to build privacy-preserving compute infrastructure:

### 13.1 Build an Open-Source FL Platform Specialized for Diabetes

The overwhelming majority (73%) of FL healthcare studies use custom frameworks rather than open-source solutions [^64^]. This fragmentation presents an opportunity for OpenDiabetic to develop a specialized, open-source FL platform purpose-built for diabetes data types (CGM time-series, HbA1c, demographic, retinal imaging, etc.), leveraging established frameworks like Flower or PySyft as a foundation.

### 13.2 Establish "FL-as-a-Service" for Diabetes Research

The healthcare FL field is transitioning from research to "FL-as-a-service platforms" [^76^]. OpenDiabetic could provide the infrastructure layer that enables diabetes researchers, clinics, and device manufacturers to run federated studies without building their own FL systems. This aligns with the finding that "realizing this vision requires continued advances, such as FL-as-a-service platforms and regulatory-aligned workflows" [^76^].

### 13.3 Pioneer Differential Privacy Standards for Diabetes Data

There are no established epsilon standards for diabetes-specific FL applications. OpenDiabetic could lead the development of privacy budget recommendations tailored to different diabetes use cases (population health analytics vs. individual glucose prediction vs. retinal screening), filling a critical gap in practical DP implementation [^196^][^198^].

### 13.4 Enable Cross-Silo Collaboration Without Data Harvesting

The existing landscape is dominated by commercial entities that may have incentives to aggregate data. OpenDiabetic's privacy-first, nonprofit stance directly addresses the trust gap that prevents many institutions from participating in collaborative AI. The MELLODDY project demonstrated that even competing pharmaceutical companies will participate when data privacy is guaranteed [^158^]. A similar approach for diabetes could unite academic medical centers, device manufacturers, and patient advocacy groups.

### 13.5 Develop Reference Implementations for Edge AI + FL

With demonstrated feasibility of <50ms inference on Raspberry Pi and <500ms on BLE SoCs for glucose prediction [^69^][^70^], OpenDiabetic could develop reference implementations showing how FL-trained models can be deployed to edge devices for real-time, privacy-preserving diabetes management. The integration of CGM + IoT sensors + edge AI is an active area with strong recent results [^191^].

### 13.6 Address the Non-IID Challenge for Diabetes Data

Diabetes data is inherently non-IID across populations, geographies, devices, and disease subtypes. The Clu-FDL approach [^1^] of clustering patients by behavioral patterns (e.g., carbohydrate intake) represents a promising direction. OpenDiabetic could develop and open-source non-IID mitigation techniques specifically designed for diabetes data distributions.

### 13.7 Integrate Multiple Privacy Techniques (Defense in Depth)

The most robust privacy approaches combine multiple techniques. OpenDiabetic could pioneer practical integrations of FL + DP + secure aggregation + optional HE for different threat models, following the defense-in-depth approach recommended in the literature [^88^][^107^].

### 13.8 Regulatory Pathway Development

Working with regulators to establish clear pathways for FL-based diabetes AI approval could be a high-impact activity. The FDA's GMLP principles provide a starting framework [^175^], but FL-specific guidance does not yet exist. OpenDiabetic could develop regulatory templates, quality management systems, and change control plans specifically for federated diabetes AI.

---

## 14. Forward Outlook

### 14.1 Key Trends

1. **FL market growth**: Driven by escalating privacy regulations and the need for collaborative ML without centralized data sharing, with healthcare as one of the most promising segments [^152^].
2. **Hybrid privacy approaches**: Combining FL + DP + SMPC + HE + blockchain for defense-in-depth is becoming the norm rather than the exception [^107^][^88^].
3. **Hardware acceleration**: GPUs, TPUs, and specialized HE accelerators (e.g., DARPA DPRIVE) are making privacy-preserving computation increasingly practical [^192^].
4. **Communication efficiency**: New compression techniques (quantization, pruning, sparsification) combined with efficient aggregation (FedProx, SCAFFOLD) are reducing bandwidth requirements by 40-70%+ [^171^].
5. **Personalized FL**: Moving beyond a single global model to personalized approaches (like Clu-FDL and FedGlu) that account for patient heterogeneity [^1^][^145^].
6. **FL-as-a-Service**: Platforms are emerging to lower the barrier to entry for healthcare institutions wanting to participate in federated studies [^76^][^71^].

### 14.2 Critical Gaps

1. **Real-world deployment experience**: Only ~9% of FL healthcare studies have deployed in actual distributed clinical settings [^64^].
2. **Standardized evaluation**: Lack of consistent benchmarks for comparing privacy-utility tradeoffs across different techniques.
3. **Non-IID handling**: Most solutions address only one type of non-IIDness [^152^].
4. **Regulatory clarity**: No FL-specific regulatory guidance exists from FDA or EMA.
5. **Bandwidth optimization at scale**: Most efficiency studies are in simulation; real-world bandwidth constraints remain a barrier.
6. **Model poisoning defenses**: While defenses exist, their computational overhead and effectiveness under adaptive attacks remain concerns [^87^][^88^].

---

## References

All citations in this report use inline references [^N^] that correspond to sources identified through web searches during research. Key sources include:

- Peer-reviewed journals: Nature Medicine, Nature Scientific Reports, Springer, MDPI Sensors, MDPI Applied Sciences, ACM Digital Library, IEEE Internet of Things Journal
- Preprint servers: arXiv, Research Square, SSRN
- Regulatory sources: FDA, Health Canada, MHRA, Government of Canada
- Open-source projects: Flower (flwr.org), PySyft (OpenMined), FATE, NVIDIA FLARE, OpenFL, TensorFlow Federated
- Industry reports: Owkin, tracebloc, Apheris, Censinet, NVIDIA
- Academic institutions: Texas A&M, UCL, Cambridge University, University of Oxford, DZNE

---

*Research compiled for the OpenDiabetic Foundation. This report covers the current state, historical evolution, key stakeholders, tensions and counter-narratives, data points, and forward outlook for privacy-preserving compute and federated learning applied to diabetes data and diabetic AI.*
