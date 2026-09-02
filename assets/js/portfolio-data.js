/**
 * Central Portfolio Data Configuration — Ashenafi Chufamo
 * Narrative: Senior Software Engineer → AI/ML Engineer
 * Grounded, technically credible, mature, and authentic.
 */

window.personalInfo = {
  name: "Ashenafi Chufamo",
  headline: "Senior Software Engineer building toward AI/ML.",
  subtitle: "Software Engineering · Applied AI/ML · Product Development",
  email: "chufamoashenafi@gmail.com",
  phone: "+251 (944) 060-864",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/ashuChufamo",
  linkedin: "https://et.linkedin.com/in/ashenafi-chufamo-bab330185",
  facebook: "https://www.facebook.com/ashenafichufamo1",
  bio: "I am a software engineer with several years of experience building applications and production systems. After completing my Master's degree in Artificial Intelligence at Addis Ababa University, I began moving deeper into AI and machine learning through practical work on production systems at ArifPay as a Data Science Engineer. Alongside that work, I continue building software products and AI/agentic systems as a cofounder at Technest/Sumuni."
};

/* --------------------------------------------------------------------------
   1. THE TRANSITION TIMELINE (Software Engineering → AI)
   -------------------------------------------------------------------------- */
window.careerTransition = [
  {
    step: "01",
    phase: "Software Engineering",
    title: "Software Engineer",
    desc: "Built applications, mobile platforms, and core software systems. Developed a strong engineering foundation in backend logic, databases, APIs, and client applications."
  },
  {
    step: "02",
    phase: "Senior Software Engineer",
    title: "Senior Software Engineer",
    desc: "Expanded experience into software architecture, production systems, scalable backend infrastructure, mobile applications (Flutter), and full product development lifecycle."
  },
  {
    step: "03",
    phase: "MSc in Artificial Intelligence",
    title: "MSc in AI — Addis Ababa University",
    desc: "Completed Master's degree focusing on Machine Learning, Deep Learning, Knowledge Distillation, Model Compression, and Explainable AI (SHAP)."
  },
  {
    step: "04",
    phase: "Data Science Engineer — ArifPay",
    title: "Data Science Engineer",
    desc: "Applied AI/ML and data engineering to real production and business problems, working on fraud detection, credit scoring, churn prediction, recommendation systems, and reporting pipelines."
  },
  {
    step: "05",
    phase: "AI + Software + Products",
    title: "Cofounder & Engineer",
    desc: "Combining software engineering foundation with applied AI and agentic systems while building products as a cofounder at Technest/Sumuni."
  }
];

/* --------------------------------------------------------------------------
   2. SOFTWARE I'VE BUILT (Software Engineering Foundation)
   -------------------------------------------------------------------------- */
window.softwareBuilt = [
  {
    title: "USP Airport Parking System Suite",
    category: "Smart Infrastructure & Revenue Management",
    desc: "Designed and developed the mobile apps and backend components for automated airport parking gate control, ticket validation, cashier management, and subscription billing.",
    role: "Lead Software & Mobile Engineer",
    tech: ["Flutter", "Node.js", "PostgreSQL", "Hardware Integration"],
    image: "./assets/images/usp.jpeg",
    subApps: [
      "Ethiopian Airport Parking System (Flutter)",
      "Airport Parking Attendant App (Flutter)",
      "Airport Parking Cashier App (Web)",
      "Airport Parking Admin App (Web)",
      "Penalty & Subscription QR Payment (Web)"
    ]
  },
  {
    title: "Addis Parking & Mobility Suite",
    category: "Smart City Mobility Platform",
    desc: "Built street parking management and tow truck dispatch mobile applications for urban parking supervisors and field attendants.",
    role: "Software & Mobile Engineer",
    tech: ["Flutter", "React", "Node.js", "PostgreSQL"],
    image: "./assets/images/usp.jpeg",
    subApps: [
      "Attendant App (Flutter)",
      "Parking Supervisor App (Flutter)",
      "Addis Tow Truck App (Flutter)"
    ]
  },
  {
    title: "Atrip Rental & Mobility Suite",
    category: "Vehicle Rental & Logistics",
    desc: "Developed vehicle rental mobile applications connecting car rental company owners with drivers and fleet operations.",
    role: "Mobile & Backend Engineer",
    tech: ["Flutter", "React", "Laravel API", "PostgreSQL"],
    image: "./assets/images/project-8.jpg",
    subApps: [
      "Atrip Rental Owner App (Flutter)",
      "Atrip Rental Drivers App (Flutter)"
    ]
  },
  {
    title: "Alateon",
    category: "Church Community & Donation App",
    desc: "Built spiritual content streaming application and mobile donation platform for the Ethiopian Orthodox Tewahedo Church community.",
    role: "Full-Stack Software Engineer",
    tech: ["Flutter", "Node.js", "PostgreSQL", "Payment Gateway APIs"],
    image: "./assets/images/project-3.jpg"
  },
  {
    title: "Custom Stock Management System",
    category: "Enterprise Inventory Control",
    desc: "Designed and built inventory tracking system managing multi-warehouse stock levels, purchase order workflows, and supplier audit trails.",
    role: "Software Engineer",
    tech: ["React", "Node.js", "MySQL", "Docker"],
    image: "./assets/images/project-4.png"
  },
  {
    title: "Technest SMS Service Gateway",
    category: "Enterprise Communications",
    desc: "Contributed to high-throughput bulk SMS gateway API platform handling transactional alerts and telecommunication provider integrations.",
    role: "Backend Software Engineer",
    tech: ["Node.js", "Go", "Redis", "MySQL", "SMPP Protocol"],
    image: "./assets/images/project-1.jpg"
  }
];

/* --------------------------------------------------------------------------
   3. APPLIED AI AT ARIFPAY (Data Science Engineer)
   -------------------------------------------------------------------------- */
window.arifPayAI = {
  role: "Data Science Engineer — ArifPay",
  period: "2024 — Present",
  summary: "Worked on practical AI/ML models, data pipelines, predictive algorithms, reporting dashboards, and agentic workflows to support payment infrastructure and merchant operations in Ethiopia.",
  projects: [
    {
      title: "Fraud Detection System",
      category: "Machine Learning • Fraud Prevention",
      desc: "Worked with the engineering team to build rule-based and anomaly detection models targeting suspicious payment transactions and risk scoring.",
      tech: ["Python", "scikit-learn", "Pandas", "PostgreSQL"],
      image: "./assets/images/project-4.png"
    },
    {
      title: "Explainable Credit Scoring",
      category: "Machine Learning • Credit Analytics",
      desc: "Developed credit evaluation model for merchant micro-loans using SHAP (SHapley Additive exPlanations) to ensure interpretable risk factors.",
      tech: ["XGBoost", "SHAP", "Python", "FastAPI"],
      image: "./assets/images/ai.png"
    },
    {
      title: "Customer Churn Prediction",
      category: "Machine Learning • Merchant Retention",
      desc: "Contributed to predictive classification pipeline identifying merchant churn indicators based on transaction frequency patterns.",
      tech: ["Python", "scikit-learn", "LightGBM", "Metabase"],
      image: "./assets/images/project-2.png"
    },
    {
      title: "Amharic Handwritten OCR Detection",
      category: "Computer Vision • Document AI",
      desc: "Worked on optical character recognition models to extract text from handwritten Amharic payment receipts and documents.",
      tech: ["PyTorch", "OpenCV", "CNNs", "FastAPI"],
      image: "./assets/images/ai-removebg-preview (1).png"
    },
    {
      title: "Content & Merchant Recommendation Engines",
      category: "Recommendation Systems",
      desc: "Implemented collaborative filtering and content-based recommendation pipelines for FM radio streams, media content, and e-commerce platforms.",
      tech: ["Python", "Surprise", "Implicit", "Redis"],
      image: "./assets/images/project-1.jpg"
    },
    {
      title: "Financial Reporting & Analytics Dashboards",
      category: "Data Engineering • Business Intelligence",
      desc: "Built data aggregation jobs and reporting dashboards for transaction volumes, merchant analytics, and regulatory reporting.",
      tech: ["Spark", "Hadoop", "SQL", "Metabase"],
      image: "./assets/images/project-7.png"
    },
    {
      title: "Marketing & Business Intelligence Agents",
      category: "AI / Agents • Workflow Automation",
      desc: "Developed prototype LLM agent workflows for merchant prospect analysis, competitive intelligence, and partnership outreach support.",
      tech: ["LangChain", "LLMs", "Python", "FastAPI"],
      image: "./assets/images/project-1.jpg"
    }
  ]
};

/* --------------------------------------------------------------------------
   4. INTERACTIVE APPLIED AI CASE STUDIES
   -------------------------------------------------------------------------- */
window.appliedAICaseStudies = [
  {
    id: "cs-fraud-detection",
    title: "Production Fraud Detection & Risk Scoring",
    category: "Machine Learning",
    summary: "Anomaly detection and transaction risk scoring for payment processing.",
    problem: "Identifying potential fraudulent payment activities in real-time without introducing excessive latency or false positives for legitimate merchants.",
    approach: "Combined rule-based filtering with supervised classification (XGBoost) and anomaly detection algorithms trained on historical transaction behavior patterns.",
    contribution: "Worked on data preprocessing, feature engineering (velocity features, device fingerprinting signals), model evaluation, and deployment of scoring API endpoints.",
    tech: ["Python", "XGBoost", "scikit-learn", "PostgreSQL", "FastAPI"],
    image: "./assets/images/project-4.png"
  },
  {
    id: "cs-credit-scoring",
    title: "Explainable Credit Scoring Model",
    category: "Machine Learning",
    summary: "Interpretable merchant credit scoring utilizing SHAP explainability.",
    problem: "Evaluating merchant creditworthiness for micro-loans where non-blackbox decisions are required for compliance and risk transparency.",
    approach: "Trained gradient boosted trees on merchant transaction history, repayment records, and volume stability, utilizing SHAP (SHapley Additive exPlanations) to explain feature contributions for every score.",
    contribution: "Designed feature extraction pipelines, implemented model training scripts, generated SHAP breakdown charts for loan officers, and served API predictions.",
    tech: ["Python", "XGBoost", "SHAP", "Pandas", "FastAPI"],
    image: "./assets/images/ai.png"
  },
  {
    id: "cs-churn-prediction",
    title: "Merchant Churn Prediction Pipeline",
    category: "Machine Learning",
    summary: "Predictive model identifying merchants at risk of becoming inactive.",
    problem: "Merchant retention teams needed early warning signals before merchants stopped processing payments.",
    approach: "Built a binary classification pipeline analyzing recency, frequency, monetary (RFM) indicators, transaction drops, and support interaction triggers.",
    contribution: "Contributed to data extraction from data warehouse, model training, cross-validation tuning, and automated weekly alert reporting for account managers.",
    tech: ["Python", "LightGBM", "scikit-learn", "SQL", "Metabase"],
    image: "./assets/images/project-2.png"
  },
  {
    id: "cs-plate-recognition",
    title: "Automated License Plate Recognition (ALPR)",
    category: "Computer Vision",
    summary: "Vehicle plate detection and text recognition at parking gates.",
    problem: "Automating parking gate check-in and check-out to reduce congestion and manual ticket issuance at commercial parking facilities.",
    approach: "Utilized YOLOv8 object detection to locate license plate regions from IP camera video streams, followed by OCR text extraction tuned for Ethiopian plate formats.",
    contribution: "Worked on image dataset annotation, YOLO model fine-tuning, camera stream integration, and connecting detection events to parking gate relay systems.",
    tech: ["YOLOv8", "OpenCV", "PyTorch", "Python", "FastAPI"],
    image: "./assets/images/usp.jpeg"
  },
  {
    id: "cs-recommendation-engine",
    title: "FM Content & Media Recommendation System",
    category: "Recommendation",
    summary: "Content recommendation pipeline for media streaming platforms.",
    problem: "Personalizing content feeds for listeners based on past radio station preferences, time of day, and category affinity.",
    approach: "Implemented matrix factorization (implicit collaborative filtering) combined with content-based tagging to generate personalized station and track recommendations.",
    contribution: "Developed offline recommendation batch jobs, vector embedding index generation, and fast recommendation lookup API endpoints.",
    tech: ["Python", "Implicit", "Surprise", "Redis", "FastAPI"],
    image: "./assets/images/project-1.jpg"
  },
  {
    id: "cs-ai-agents",
    title: "Market & Sales Intelligence Agentic Workflows",
    category: "AI / Agents",
    summary: "LLM-powered research agent summarizing prospective merchant data.",
    problem: "Sales and business development teams spent substantial time manually researching business directories, corporate sites, and merchant web presence.",
    approach: "Designed multi-step LLM agent pipelines using LangChain to search merchant directories, extract contact information, summarize product portfolios, and generate sales lead profiles.",
    contribution: "Built agent tool integrations, prompt templates, web scraping modules, and lead scoring summary exports.",
    tech: ["Python", "LangChain", "LLMs", "FastAPI", "BeautifulSoup"],
    image: "./assets/images/project-1.jpg"
  }
];

/* --------------------------------------------------------------------------
   5. BUILDING PRODUCTS AT TECHNEST / SUMUNI (Cofounder)
   -------------------------------------------------------------------------- */
window.technestProducts = {
  role: "Cofounder & Product Engineer",
  summary: "As a cofounder at Technest/Sumuni, I work across product conceptualization, architecture, software development, and AI/agentic integration.",
  lifecycle: [
    { step: "01", name: "Idea & Requirements", desc: "Understanding real business requirements and defining product scope." },
    { step: "02", name: "Product Design", desc: "User workflow mapping, database schema design, and API specification." },
    { step: "03", name: "Engineering", desc: "Building mobile applications (Flutter), web interfaces (React), and backend APIs." },
    { step: "04", name: "Deployment", desc: "Containerized deployment (Docker), database migration, and cloud/on-prem setup." },
    { step: "05", name: "Iteration", desc: "Monitoring performance, gathering user feedback, and rolling out continuous updates." }
  ],
  products: [
    {
      title: "Zayno — Technest Enterprise Platform",
      url: "https://zayno.io/",
      category: "Enterprise Software Suite",
      desc: "Technest's flagship product powering enterprise operations, workflow automation, and digital management.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
      image: "./assets/images/project-6.png",
      subApps: ["Zayno Advisor App (Web)", "Zayno User App (Web/Mobile)", "Zayno Admin App (Web)"]
    },
    {
      title: "Project Sumuni",
      category: "Startup Ecosystem Platform",
      desc: "Sumuni's debut platform connecting African startups with global investors, due diligence tools, and business development resources.",
      tech: ["React", "Laravel", "MySQL", "Flutter"],
      image: "./assets/images/sumuni.png"
    },
    {
      title: "Alateon",
      category: "Church Community Platform",
      desc: "Mobile application for community donation and spiritual content streaming.",
      tech: ["Flutter", "Node.js", "PostgreSQL"],
      image: "./assets/images/project-3.jpg"
    },
    {
      title: "USP Airport & Addis Parking Suites",
      category: "Smart Mobility Infrastructure",
      desc: "Smart parking management systems deployed for airport facilities and urban municipal parking.",
      tech: ["Flutter", "Python / Vision", "Node.js"],
      image: "./assets/images/usp.jpeg"
    }
  ]
};

/* --------------------------------------------------------------------------
   6. WHAT I ACTUALLY DO (Practical Capabilities)
   -------------------------------------------------------------------------- */
window.whatIActuallyDo = {
  build: [
    { name: "Mobile Applications", desc: "Cross-platform mobile apps using Flutter for iOS and Android." },
    { name: "Backend Systems & APIs", desc: "RESTful and GraphQL web services with Node.js, Python (FastAPI/Django), and Laravel." },
    { name: "Web Applications", desc: "Responsive web platforms with React and modern JavaScript/TypeScript." },
    { name: "Production Systems", desc: "Database architecture (PostgreSQL, MySQL), Redis caching, and Docker containerization." }
  ],
  intelligence: [
    { name: "Machine Learning", desc: "Classification, regression, and explainable AI models (SHAP, scikit-learn, XGBoost)." },
    { name: "Recommendation Systems", desc: "Collaborative filtering and content-based recommendation engines." },
    { name: "Computer Vision", desc: "Object detection (YOLO) and OCR text extraction (OpenCV, PyTorch)." },
    { name: "LLMs & AI Agents", desc: "Workflow automation agents, RAG implementations, and LangChain integration." }
  ],
  product: [
    { name: "Product Development", desc: "Translating business goals into technical requirements and usable products." },
    { name: "System Architecture", desc: "Designing robust data schemas, microservices, and component separation." },
    { name: "Technical Leadership", desc: "Guiding engineering tasks, code reviews, and production deployments." }
  ]
};

/* --------------------------------------------------------------------------
   7. TECHNOLOGY STACK
   -------------------------------------------------------------------------- */
window.techStack = {
  softwareEngineering: [
    { name: "Flutter / Dart", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "JavaScript / TypeScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js / Express", level: "Advanced" },
    { name: "Django / FastAPI", level: "Intermediate" },
    { name: "Laravel", level: "Intermediate" }
  ],
  aiMl: [
    { name: "Machine Learning", level: "Applied" },
    { name: "Deep Learning (PyTorch)", level: "Applied" },
    { name: "Computer Vision (YOLO/OpenCV)", level: "Applied" },
    { name: "Recommendation Systems", level: "Applied" },
    { name: "LLMs & LangChain", level: "Applied" },
    { name: "RAG & AI Agents", level: "Exploring / Applied" },
    { name: "SHAP Explainability", level: "Applied" }
  ],
  dataInfra: [
    { name: "PostgreSQL / MySQL", level: "Advanced" },
    { name: "Redis", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Spark / Hadoop", level: "Foundational" },
    { name: "Metabase BI", level: "Intermediate" }
  ]
};

/* --------------------------------------------------------------------------
   8. ACADEMIC RESEARCH (MSc Thesis)
   -------------------------------------------------------------------------- */
window.mscResearch = {
  degree: "MSc in Artificial Intelligence",
  institution: "Addis Ababa University",
  thesisTitle: "Interpretable Knowledge Distillation with Mechanistic Attention Transfer for Efficient Model Compression",
  summary: "My Master's research focused on compressing large neural networks into lightweight student models while transferring mechanistic attention maps to preserve interpretability and decision confidence.",
  flow: [
    { label: "Large Teacher Model", detail: "Heavy deep learning model with high accuracy but high computational cost." },
    { label: "Knowledge Distillation", detail: "Transferring soft probability distributions from teacher to student." },
    { label: "Attention Transfer", detail: "Aligning intermediate layer feature maps and mechanistic attention." },
    { label: "Compact Student Model", detail: "Lightweight, interpretable model suitable for resource-constrained deployment." }
  ]
};

/* --------------------------------------------------------------------------
   9. CURRENTLY EXPLORING
   -------------------------------------------------------------------------- */
window.currentlyExploring = [
  { topic: "Agentic AI", desc: "Multi-agent orchestration frameworks and automated tool execution." },
  { topic: "LLM Applications & RAG", desc: "Retrieval-augmented generation pipelines for enterprise domain search." },
  { topic: "AI Automation", desc: "Streamlining business workflows with intelligent API agents." },
  { topic: "Production ML (MLOps)", desc: "Model monitoring, feature store integration, and automated retraining." },
  { topic: "Efficient AI", desc: "Model quantization, pruning, and low-latency edge inference." }
];

/* --------------------------------------------------------------------------
   10. TEACHING EXPERIENCE
   -------------------------------------------------------------------------- */
window.teachingExperience = {
  role: "Laboratory Instructor",
  institution: "Addis Ababa University",
  period: "2023 — 2025 (4 Semesters)",
  desc: "Conducted practical lab sessions and guided undergraduate students through hands-on programming exercises for 5–6 sessions per course semester.",
  courses: [
    "Data Structures & Algorithms (Lab)",
    "Cognitive Science & AI Fundamentals (Lab)",
    "Mathematics for AI & Machine Learning (Lab)"
  ]
};

/* --------------------------------------------------------------------------
   11. CAREER EXPERIENCE TIMELINE
   -------------------------------------------------------------------------- */
window.careerTimeline = [
  {
    role: "Data Science Engineer",
    company: "ArifPay",
    period: "2024 — Present",
    desc: "Working on fraud detection models, credit scoring algorithms, churn prediction, recommendation engines, and business analytics pipelines."
  },
  {
    role: "Cofounder & Product Engineer",
    company: "Technest / Sumuni Creative Solutions",
    period: "2022 — Present",
    desc: "Co-founding enterprise products, leading full-stack mobile/web engineering, and developing smart mobility systems."
  },
  {
    role: "Software Engineer",
    company: "Qemer Software Technologies",
    period: "2021 — 2022",
    desc: "Developed client web applications and mobile software solutions for regional enterprises."
  },
  {
    role: "Laboratory Instructor",
    company: "Addis Ababa University",
    period: "2023 — 2025",
    desc: "Instructed laboratory sessions for Data Structures, Cognitive Science, and Mathematics for AI."
  }
];

window.educationHistory = [
  {
    degree: "MSc in Artificial Intelligence",
    institution: "Addis Ababa University",
    period: "2022 — 2024",
    desc: "Focus on Machine Learning, Deep Learning, Computer Vision, Model Compression, and Knowledge Distillation."
  },
  {
    degree: "BSc in Computer Science",
    institution: "Addis Ababa University",
    period: "2018 — 2022",
    desc: "Strong core foundation in Software Engineering, Algorithms, Database Systems, and Network Architecture."
  }
];
