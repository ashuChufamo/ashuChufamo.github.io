/**
 * Portfolio Central Data Configuration — Ashenafi Chufamo (V2.5 Undeniably Credible)
 * Primary Positioning: Senior Software Engineer → Applied AI/ML
 */

window.personalInfo = {
  name: "Ashenafi Chufamo",
  title: "Senior Software Engineer → Applied AI/ML",
  headline: "Senior Software Engineer → Applied AI/ML",
  tagline: "I build production software and intelligent systems.",
  bio: "Years of software engineering experience, an MSc in Artificial Intelligence, and hands-on work applying AI/ML to real-world products and financial technology.",
  location: "Addis Ababa, Ethiopia",
  email: "chufamoashenafi@gmail.com",
  cvUrl: "./assets/docs/Ashenafi_Chufamo_CV.pdf",
  github: "https://github.com/ashuChufamo",
  linkedin: "https://et.linkedin.com/in/ashenafi-chufamo-bab330185"
};

// "Built for Production" Qualitative Signals
window.productionSignals = [
  "Production Systems",
  "Mobile Applications",
  "Backend APIs",
  "Applied AI / ML",
  "Data Pipelines",
  "Fintech Systems",
  "Computer Vision",
  "Agentic AI",
  "Technical Leadership"
];

// Narrative Career Transition Timeline
window.careerTransition = [
  {
    step: "01",
    phase: "Software Engineering",
    desc: "Built software applications, mobile clients, and web solutions. Developed core software engineering fundamentals."
  },
  {
    step: "02",
    phase: "Senior Software Engineering",
    desc: "Expanded into system architecture, production backend APIs, Flutter mobile apps, database design, and end-to-end product delivery."
  },
  {
    step: "03",
    phase: "MSc in Artificial Intelligence",
    desc: "Deepened technical research at Addis Ababa University, focusing on machine learning, deep learning, computer vision, and model compression."
  },
  {
    step: "04",
    phase: "Applied AI & Tech Lead — ArifPay",
    desc: "Applied AI and data science to real-world fintech systems. Transitioned from Data Science Engineer into technical leadership responsibilities across payment infrastructure."
  },
  {
    step: "05",
    phase: "Software + AI + Products",
    desc: "Combining software engineering, applied AI/ML, data pipelines, agentic workflows, and product development as Cofounder at Technest/Sumuni."
  }
];

// Selected Software Projects ("Software I've Built")
window.softwareBuilt = [
  {
    id: "usp-airport",
    title: "Ethiopian Airport Parking System Suite",
    category: "Software Engineering",
    filterCategory: "Mobile",
    myRole: "Software Architecture & System Integration",
    problem: "Manual gate entry, revenue leakage, and inefficient vehicle tracking at airport parking facilities.",
    desc: "Complete smart airport parking gate control, revenue collection, and vehicle management ecosystem.",
    whatIBuilt: "Architected multi-app suite connecting hardware barrier gates, web cashier terminals, attendant mobile apps, and admin reporting.",
    tech: ["Flutter", "Web", "Node.js", "Hardware Integration", "PostgreSQL"],
    subApps: [
      "Ethiopian Airport Parking Gate Control (Flutter)",
      "Airport Parking Attendant App (Flutter)",
      "Airport Parking Cashier App (Web)",
      "Airport Parking Admin Dashboard (Web)",
      "Penalty & Subscription QR Payment Portal (Web)"
    ],
    image: "./assets/images/usp.jpeg"
  },
  {
    id: "addis-parking",
    title: "Addis Parking & Mobility Suite",
    category: "Software Engineering",
    filterCategory: "Mobile",
    myRole: "Mobile App Lead & System Design",
    problem: "Urban parking congestion and lack of real-time slot visibility across Addis Ababa parking lots.",
    desc: "Smart urban parking management platform with automated vehicle license plate recognition and slot booking.",
    whatIBuilt: "Engineered mobile attendant application, supervisor management client, and tow-truck dispatch module.",
    tech: ["Flutter", "Node.js", "REST APIs", "LPR Integration"],
    subApps: [
      "Attendant App (Flutter)",
      "Parking Supervisor App (Flutter)",
      "Addis Tow Truck App (Flutter)"
    ],
    image: "./assets/images/addis.jpg"
  },
  {
    id: "atrip-ride-rental",
    title: "Atrip Mobility Ecosystem (Ride & Rental)",
    category: "Software Engineering",
    filterCategory: "Mobile",
    myRole: "Full Stack & Mobile Development",
    problem: "Fragmented vehicle rental booking and urban transportation dispatch in Ethiopia.",
    desc: "Integrated vehicle rental booking platform and ride-hailing driver/owner management system.",
    whatIBuilt: "Developed vehicle owner management app, driver dispatch client, and real-time trip tracking APIs.",
    tech: ["Flutter", "Node.js", "Express", "MongoDB", "Google Maps API"],
    subApps: [
      "Atrip Rental Owner App (Flutter)",
      "Atrip Rental Driver App (Flutter)",
      "Atrip Booking Web Portal"
    ]
  },
  {
    id: "zayno-app",
    title: "Alateon / Zayno Digital Platform",
    category: "Software Engineering",
    filterCategory: "Software Engineering",
    myRole: "Co-creator & Full-Stack Engineer",
    problem: "Digital content distribution and structured community engagement platform.",
    desc: "Mobile application and web digital content app built for Ethiopian Orthodox content distribution and community giving.",
    whatIBuilt: "Implemented cross-platform mobile client, payment gateway integration, and backend API service.",
    tech: ["Flutter", "Node.js", "Payment Gateways", "REST APIs"],
    url: "https://zayno.io/"
  },
  {
    id: "stock-management",
    title: "Enterprise Custom Stock & Inventory System",
    category: "Software Engineering",
    filterCategory: "Backend",
    myRole: "Backend Lead & Database Architect",
    problem: "Inaccurate stock tracking, manual purchase order reconciliations, and financial reporting delays.",
    desc: "Multi-branch inventory control, sales ledger, purchase order management, and role-based financial reporting system.",
    whatIBuilt: "Built atomic inventory transaction manager, purchase order delivery trigger, and RBAC authorization module.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Express"]
  },
  {
    id: "technest-sms-gateway",
    title: "Technest Enterprise SMS & Notification Gateway",
    category: "Software Engineering",
    filterCategory: "Backend",
    myRole: "Backend Engineer",
    problem: "High failure rates and high latency in sending bulk transactional OTPs and SMS notifications.",
    desc: "High-throughput messaging broker handling SMS dispatch, queue management, and delivery callbacks.",
    whatIBuilt: "Implemented message queuing with Redis, rate limiter middleware, and provider failover routing.",
    tech: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "REST APIs"]
  }
];

// Applied AI at ArifPay (Data Science Engineer → Tech Lead)
window.arifPayAI = {
  role: "Data Science Engineer → Tech Lead",
  company: "ArifPay Financial Technologies",
  desc: "Applied machine learning, predictive algorithms, reporting pipelines, and agentic workflows to support payment systems, merchant risk, and business growth in Ethiopia.",
  projects: [
    {
      id: "fraud-detection",
      title: "Payment Fraud Detection Pipeline",
      category: "Applied AI / ML",
      filterCategory: "Fintech",
      myRole: "ML Feature Engineering & Pipeline Developer",
      desc: "Anomalous transaction identification model detecting suspicious payment patterns in real-time.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "REST APIs"]
    },
    {
      id: "credit-scoring",
      title: "Explainable Merchant Credit Scoring",
      category: "Applied AI / ML",
      filterCategory: "Fintech",
      myRole: "ML Modeling & Explainability Lead",
      desc: "ML credit scoring system utilizing merchant transaction history to evaluate micro-loan eligibility with SHAP explainability.",
      tech: ["Python", "LightGBM", "SHAP", "Feature Engine", "PostgreSQL"]
    },
    {
      id: "churn-prediction",
      title: "Merchant Churn Prediction System",
      category: "Applied AI / ML",
      filterCategory: "Applied AI / ML",
      myRole: "Data Science Engineer",
      desc: "Predictive model identifying merchants at risk of becoming inactive based on transaction frequency and volume decay.",
      tech: ["Python", "Scikit-learn", "Pandas", "Metabase BI"]
    },
    {
      id: "recommendation-engines",
      title: "Content & Merchant Recommendation Engines",
      category: "Applied AI / ML",
      filterCategory: "Applied AI / ML",
      myRole: "Algorithm Developer",
      desc: "Recommendation systems developed for media platforms (Arts TV) and e-commerce product discovery.",
      tech: ["Python", "Collaborative Filtering", "TF-IDF", "Implicit ML"]
    },
    {
      id: "plate-recognition",
      title: "License Plate Recognition System (LPR)",
      category: "Computer Vision",
      filterCategory: "Computer Vision",
      myRole: "Computer Vision Engineer",
      desc: "Automated license plate detection and character recognition system for vehicle access control.",
      tech: ["Python", "OpenCV", "YOLOv8", "Tesseract OCR", "PyTorch"]
    },
    {
      id: "regulatory-reporting",
      title: "Enterprise Data Warehouse & BI Engine",
      category: "Data Systems",
      filterCategory: "Data",
      myRole: "Data Engineer & Pipeline Lead",
      desc: "Scalable data pipeline aggregating transaction data for automated regulatory compliance reporting.",
      tech: ["Apache Spark", "Hadoop", "PostgreSQL", "Metabase", "Python"]
    },
    {
      id: "agentic-intelligence",
      title: "Agentic Business & Market Intelligence",
      category: "Agentic AI",
      filterCategory: "Applied AI / ML",
      myRole: "AI Systems Lead",
      desc: "Agentic AI workflows aggregating merchant data, social media sentiment, and partnership intelligence.",
      tech: ["Python", "LangChain", "LLMs", "Web Scraping", "Pandas"]
    }
  ]
};

// Selected Applied AI Work (Structured Case Studies)
window.appliedAICaseStudies = [
  {
    id: "cs-fraud",
    title: "Fintech Fraud Detection Pipeline",
    category: "Fintech • Risk Control",
    filterCategory: "Fintech",
    myRole: "ML Pipeline & Integration Engineer",
    summary: "Real-time anomaly detection pipeline identifying high-risk transactions across merchant payment terminals.",
    problem: "Manual transaction audits could not keep up with growing daily payment volumes, risking delayed fraud detection.",
    approach: "Built feature extraction pipeline computing velocity metrics (transaction frequency, geo-anomaly, amount spikes) combined with XGBoost classification.",
    contribution: "Engineered 20+ streaming features in Python, trained baseline risk model, and built REST API wrapper for real-time scoring.",
    tech: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "PostgreSQL"]
  },
  {
    id: "cs-credit",
    title: "Explainable Merchant Credit Scoring",
    category: "Fintech • Credit Assessment",
    filterCategory: "Fintech",
    myRole: "Data Scientist & Model Developer",
    summary: "Objective micro-lending credit assessment for small business merchants based on payment volume telemetry.",
    problem: "Traditional financial institutions lack credit history for small merchants, preventing access to micro-loans.",
    approach: "Formulated machine learning model evaluating daily payment consistency, merchant tenure, and refund rates, generating credit scores with SHAP explainability.",
    contribution: "Developed feature pipelines, trained gradient boosted models, and generated interpretable feature attribution reports for credit reviewers.",
    tech: ["Python", "LightGBM", "SHAP", "Pandas", "PostgreSQL"]
  },
  {
    id: "cs-lpr",
    title: "Automated License Plate Recognition",
    category: "Computer Vision • Access Control",
    filterCategory: "Computer Vision",
    myRole: "Computer Vision Engineer",
    summary: "Real-time license plate detection and text extraction system for parking barriers.",
    problem: "Manual ticket distribution caused delays and entry bottleneck at busy urban parking lots.",
    approach: "Deployed YOLOv8 model for bounding box vehicle plate detection coupled with custom OCR text extraction.",
    contribution: "Collected and annotated regional license plate dataset, fine-tuned YOLO model, and integrated plate matching with parking gate barrier APIs.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Tesseract OCR"]
  },
  {
    id: "cs-churn",
    title: "Merchant Churn Prediction Engine",
    category: "Applied AI • Business Intelligence",
    filterCategory: "Applied AI / ML",
    myRole: "Data Science Engineer",
    summary: "Predictive model identifying merchants at risk of discontinuing POS payment terminal usage.",
    problem: "Merchant retention teams lacked early warning indicators when merchant transaction volume began declining.",
    approach: "Constructed time-series features tracking 30-day transaction volume decay and merchant support ticket spikes.",
    contribution: "Created automated weekly data extraction script, trained classification model, and exported actionable churn risk lists to Metabase dashboards.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Metabase BI", "SQL"]
  },
  {
    id: "cs-agentic",
    title: "Agentic Market Intelligence System",
    category: "Agentic AI • Business Systems",
    filterCategory: "Applied AI / ML",
    myRole: "AI & Data Engineer Lead",
    summary: "Automated intelligence gathering pipeline evaluating business registration trends and digital merchant presence.",
    problem: "Business development teams spent excessive time manually researching potential merchant prospects.",
    approach: "Designed agentic data extraction pipeline scraping web directories, scoring merchant digital presence, and compiling prioritized outreach workbooks.",
    contribution: "Built multi-source web extraction scripts, deduplication pipeline, and automated prospect scoring system.",
    tech: ["Python", "LangChain", "BeautifulSoup", "Pandas", "OpenAI APIs"]
  }
];

// Technest / Sumuni Products (Cofounder & Technology Lead)
window.technestProducts = {
  role: "Cofounder & Product/Technology Lead",
  lifecycle: [
    { step: "01", name: "Idea & Requirements", desc: "Understanding real business/user needs" },
    { step: "02", name: "System Architecture", desc: "Designing database, API & UI framework" },
    { step: "03", name: "Engineering & Dev", desc: "Building clean Flutter apps & backend services" },
    { step: "04", name: "Deployment & QA", desc: "Production deployment & hardware gate integration" },
    { step: "05", name: "Iteration", desc: "Optimizing features based on usage data" }
  ],
  products: [
    {
      id: "tn-zayno",
      title: "Zayno (zayno.io)",
      category: "Mobile & Web Platform",
      filterCategory: "Mobile",
      myRole: "Cofounder & Mobile Tech Lead",
      desc: "Ethiopian Orthodox content distribution and community giving platform.",
      tech: ["Flutter", "Node.js", "Payment Gateways"],
      url: "https://zayno.io/"
    },
    {
      id: "tn-sumuni",
      title: "Sumuni Entrepreneurship Platform",
      category: "Web & Mobile Ecosystem",
      filterCategory: "Software Engineering",
      myRole: "Cofounder & Software Architect",
      desc: "Startup ecosystem platform connecting Ethiopian entrepreneurs with investors and business development services.",
      tech: ["React", "Node.js", "PostgreSQL", "REST APIs"]
    },
    {
      id: "tn-alateon",
      title: "Alateon Software Product Suite",
      category: "Software Products",
      filterCategory: "Software Engineering",
      myRole: "Cofounder & Lead Developer",
      desc: "Specialized mobile software applications tailored for local business needs.",
      tech: ["Flutter", "Dart", "Node.js"]
    },
    {
      id: "tn-mobility",
      title: "Smart Mobility Suites (Airport & Addis Parking)",
      category: "Urban Technology",
      filterCategory: "Mobile",
      myRole: "Product & Engineering Lead",
      desc: "Urban mobility, tow-truck dispatch, and smart gate barrier parking management software.",
      tech: ["Flutter", "Node.js", "Hardware Barriers", "REST APIs"]
    }
  ]
};

// "What I Build" Matrix
window.whatIActuallyDo = {
  build: [
    { name: "Mobile Applications", desc: "Cross-platform mobile apps built with Flutter for iOS & Android." },
    { name: "Backend Systems & APIs", desc: "Scalable REST APIs, Microservices, Node.js & Django backends." },
    { name: "Production Web Apps", desc: "Responsive web apps built with modern JavaScript/TypeScript." }
  ],
  intelligence: [
    { name: "Machine Learning Models", desc: "Predictive classification, fraud detection, credit scoring & churn models." },
    { name: "Computer Vision", desc: "License plate recognition (YOLOv8 + OCR) & image processing." },
    { name: "Agentic AI & LLMs", desc: "Agentic workflows, market intelligence extraction & RAG implementations." }
  ],
  product: [
    { name: "System Architecture", desc: "Database schema design, API structure & multi-app suite architecture." },
    { name: "Product Development", desc: "Taking software products from initial concept to live production deployment." },
    { name: "Technical Leadership", desc: "Leading development teams, establishing code standards & technical decisions." }
  ]
};

// Technology Stack (Grouped Humanly)
window.techStack = {
  languages: ["Dart", "Python", "JavaScript / TypeScript", "Java", "Go", "C / C++"],
  mobile: ["Flutter", "Android / iOS Setup"],
  backend: ["Node.js / Express", "Django / Python", "Laravel / PHP", "Spring Boot / Java", "REST APIs"],
  aiMl: ["Python", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "SHAP / LIME", "OpenCV / YOLOv8"],
  data: ["MySQL", "PostgreSQL", "Apache Spark", "Hadoop", "Databricks", "Metabase BI"],
  infrastructure: ["Docker", "Git / GitHub", "Linux / Bash", "Redis", "Cloud Infrastructure"]
};

// Academic MSc Research
window.mscResearch = {
  title: "Interpretable Knowledge Distillation with Mechanistic Attention Transfer for Efficient Model Compression",
  institution: "Addis Ababa University • MSc in Artificial Intelligence",
  flow: [
    { label: "Teacher Model", detail: "Deep High-Capacity Model" },
    { label: "Knowledge Distillation", detail: "Soft-Logit Loss Transfer" },
    { label: "Attention Transfer", detail: "Mechanistic Map Match" },
    { label: "Compact Student", detail: "Efficient & Explainable AI" }
  ]
};

// Currently Exploring
window.currentlyExploring = [
  { topic: "Agentic AI Systems", desc: "Building autonomous agent workflows with tool-calling capabilities." },
  { topic: "RAG & LLM Applications", desc: "Retrieval-Augmented Generation for enterprise document intelligence." },
  { topic: "Production ML (MLOps)", desc: "Streamlining ML model monitoring, automated retraining & CI/CD." },
  { topic: "Efficient & Explainable AI", desc: "Model quantization, distillation, and mechanistic interpretability." }
];

// Teaching Experience (Laboratory Instructor)
window.teachingExperience = {
  role: "Laboratory Instructor",
  institution: "Addis Ababa University",
  period: "Academic Laboratory Courses",
  desc: "Assisted with laboratory practical sessions for university courses (approximately 5–6 sessions per semester), guiding students through hands-on programming and lab exercises.",
  courses: [
    "Data Structures & Algorithms Laboratory",
    "Cognitive Science & AI Foundations Laboratory",
    "Mathematics & Programming for AI Laboratory"
  ]
};

// Work History Timeline
window.careerTimeline = [
  {
    period: "2023 — Present",
    role: "Data Science Engineer → Tech Lead",
    company: "ArifPay Financial Technologies",
    desc: "Moved deeper into applied AI and data science while taking on technical leadership responsibilities over payment infrastructure, risk models, data pipelines, and intelligence systems."
  },
  {
    period: "2021 — Present",
    role: "Cofounder & Product/Technology Lead",
    company: "Technest / Sumuni",
    desc: "Co-founded Technest software studio. Leading technical architecture, mobile engineering (Flutter), backend APIs, and product strategy across mobility suites, Zayno, and stock systems."
  },
  {
    period: "2020 — 2022",
    role: "Senior Software Engineer",
    company: "Qemer Software & Enterprise Systems",
    desc: "Designed and engineered enterprise web applications, inventory management systems, REST APIs, and database structures."
  },
  {
    period: "2018 — 2020",
    role: "Software Engineer",
    company: "Addis Software",
    desc: "Developed mobile applications, web components, database integrations, and client software products."
  }
];

// Education History
window.educationHistory = [
  {
    period: "2021 — 2023",
    degree: "Master of Science (MSc) in Artificial Intelligence",
    institution: "Addis Ababa University",
    desc: "Specialized in Machine Learning, Computer Vision, Deep Neural Compression, Mechanistic Interpretability, and AI Systems."
  },
  {
    period: "2014 — 2018",
    degree: "Bachelor of Science (BSc) in Computer Science",
    institution: "Addis Ababa University",
    desc: "Rigorous foundation in Software Engineering, Algorithms, Database Management, Data Structures, and Computer Architecture."
  }
];
