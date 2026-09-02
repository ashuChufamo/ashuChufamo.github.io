/**
 * Portfolio Central Data Configuration — Ashenafi Chufamo (V3.0 Complete & Evidence-Driven)
 * Primary Positioning: Senior Software Engineer → Applied AI/ML
 */

window.personalInfo = {
  name: "Ashenafi Chufamo",
  title: "Senior Software Engineer → Applied AI/ML",
  headline: "Senior Software Engineer → Applied AI/ML",
  primaryStatement: "I build production software and applied AI systems.",
  tagline: "I build production software and applied AI systems.",
  supportingCopy: "I combine years of software engineering experience with an MSc in Artificial Intelligence and hands-on work building software, machine learning systems, data products, and intelligent applications.",
  bio: "I combine years of software engineering experience with an MSc in Artificial Intelligence and hands-on work building software, machine learning systems, data products, and intelligent applications.",
  aboutText: [
    "I am a software engineer with years of experience building mobile, web, backend and enterprise systems.",
    "After developing a strong foundation in software engineering, I completed an MSc in Artificial Intelligence at Addis Ababa University, where I focused more deeply on machine learning, computer vision, model compression and AI research.",
    "I then moved deeper into applied AI and data science through my work at ArifPay, working on problems including fraud detection, credit scoring, prediction, recommendation, computer vision, reporting and intelligent systems.",
    "Alongside this, I continue building products and software systems through Technest/Sumuni."
  ],
  location: "Addis Ababa, Ethiopia",
  email: "chufamoashenafi@gmail.com",
  cvUrl: "./assets/docs/Ashenafi_Chufamo_CV.pdf",
  github: "https://github.com/ashuChufamo",
  linkedin: "https://et.linkedin.com/in/ashenafi-chufamo-bab330185"
};

// "Built for Production" Qualitative Signal Badges
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

// Visual Progression Timeline ("From Software Engineering to AI")
window.careerTransition = [
  {
    step: "01",
    phase: "Software Engineering Foundation",
    desc: "Built mobile, web, backend and enterprise software systems. Focus: Application development, APIs, backend systems, mobile applications, databases, system integration."
  },
  {
    step: "02",
    phase: "MSc Artificial Intelligence",
    desc: "Completed MSc in AI at Addis Ababa University. Focus: Machine Learning, Artificial Intelligence, Computer Vision, Model Compression, Explainability, AI Research."
  },
  {
    step: "03",
    phase: "Applied AI at ArifPay",
    desc: "Worked as Data Science Engineer and took on technical leadership. Worked across: Fraud Detection, Credit Scoring, Churn Prediction, Recommendation, Computer Vision, Data & Reporting, Agentic AI."
  },
  {
    step: "04",
    phase: "Product & AI Development at Technest",
    desc: "Cofounder building software products, mobile applications, enterprise systems, AI systems, agentic workflows, and data-driven products."
  }
];

// Software I've Built (Featured Real Software Projects)
window.softwareBuilt = [
  {
    id: "ethiopian-airport-parking",
    title: "Ethiopian Airlines Airport Parking System Suite",
    category: "Enterprise • Parking • Mobility",
    filterCategory: "Mobile",
    myRole: "Software engineering, application development, system integration and product development",
    desc: "A parking management system built for airport parking operations, covering the software systems required to manage parking workflows and transactions.",
    whatIBuilt: "Architected multi-app suite connecting hardware barrier gates, web cashier terminals, attendant mobile apps, and admin reporting.",
    tech: ["Flutter", "Backend APIs", "Database", "System Integration", "Node.js"],
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
    title: "Addis Parking Suite",
    category: "Mobility • Parking • Mobile",
    filterCategory: "Mobile",
    myRole: "Mobile and software engineering, system integration and product development",
    desc: "A parking platform developed for Addis Parking, focused on improving parking management and the user experience around urban parking.",
    whatIBuilt: "Engineered mobile attendant application, supervisor management client, and tow-truck dispatch module.",
    tech: ["Flutter", "APIs", "Backend", "Maps / Location Services", "LPR"],
    subApps: [
      "Attendant App (Flutter)",
      "Parking Supervisor App (Flutter)",
      "Addis Tow Truck App (Flutter)"
    ],
    image: "./assets/images/addis.jpg"
  },
  {
    id: "atrip-ride",
    title: "Atrip Ride",
    category: "Ride-Hailing • Mobile • Backend",
    filterCategory: "Mobile",
    myRole: "Mobile development, API integration, system implementation and product engineering",
    desc: "A ride-hailing application involving passenger and driver workflows, trip management, location services and backend integration.",
    whatIBuilt: "Implemented driver dispatch app, passenger ride booking interfaces, and real-time trip tracking integration.",
    tech: ["Flutter", "APIs", "Maps / Location Services", "Backend", "Node.js"]
  },
  {
    id: "atrip-rental",
    title: "Atrip Rental",
    category: "Vehicle Rental • Mobile • Backend",
    filterCategory: "Mobile",
    myRole: "Mobile development, API integration and product engineering",
    desc: "A vehicle rental application for managing rental-related workflows and user interactions.",
    whatIBuilt: "Developed vehicle owner client, reservation booking APIs, and vehicle availability tracking module.",
    tech: ["Flutter", "APIs", "Backend", "Node.js", "MongoDB"]
  },
  {
    id: "zayno-app",
    title: "Zayno (zayno.io)",
    category: "Product • Mobile • Software",
    filterCategory: "Software Engineering",
    myRole: "Cofounder and technology/product development",
    desc: "A product developed through Technest/Sumuni as part of my ongoing product engineering work for content distribution and community giving.",
    whatIBuilt: "Implemented cross-platform mobile client, payment gateway integration, and backend API service.",
    tech: ["Flutter", "Node.js", "Payment Gateways", "REST APIs"],
    url: "https://zayno.io/"
  },
  {
    id: "stock-management-system",
    title: "Stock Management System",
    category: "Enterprise • Inventory • Sales",
    filterCategory: "Backend",
    myRole: "Product design, system architecture and software development",
    desc: "A stock and sales management system designed to manage inventory entry, sales, expenses, pricing, financial tracking and role-based operations.",
    whatIBuilt: "Built atomic inventory transaction manager, role-based authorization (Owner, Manager, Sales, Finance), P&L tracking, and offline sync engine.",
    rolesAllowed: ["Owner", "Manager", "Sales", "Finance"],
    capabilities: [
      "Item entry & inventory catalog management",
      "Sales tracking & receipt logging",
      "Cost price & sales price calculations",
      "Expense tracking & manager approval workflows",
      "Promo codes & discount rule management",
      "Product category hierarchy & stock movement audit",
      "Profit and Loss (P&L) real-time calculations",
      "Offline capability with automatic database synchronization when connectivity returns"
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Express"]
  },
  {
    id: "sms-gateway",
    title: "Technest SMS Gateway",
    category: "Backend • Infrastructure • Messaging",
    filterCategory: "Backend",
    myRole: "Software engineering and backend/system development",
    desc: "An SMS gateway system developed through Technest/Sumuni for integrating SMS-based communication into applications and services.",
    whatIBuilt: "Implemented message queuing with Redis, rate limiter middleware, and provider failover routing.",
    tech: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "REST APIs"]
  }
];

// Applied AI at ArifPay (Data Science Engineer → Technical Leadership)
window.arifPayAI = {
  role: "Data Science Engineer → Technical Leadership",
  company: "ArifPay Financial Technologies",
  sectionIntro: "At ArifPay, I moved deeper into data science and applied AI while continuing to work within production software and financial technology systems.",
  projects: [
    {
      id: "fraud-detection",
      title: "Payment Fraud Detection Pipeline",
      category: "Fintech • Risk Control",
      filterCategory: "Fintech",
      myRole: "ML Feature Engineering & Pipeline Developer",
      desc: "Worked on machine-learning approaches for identifying potentially suspicious transactions in a payment environment.",
      areas: ["Transaction data", "Feature engineering", "Machine learning", "Risk detection", "Model evaluation", "Production integration"],
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "REST APIs"]
    },
    {
      id: "credit-scoring",
      title: "Explainable Merchant Credit Scoring",
      category: "Fintech • Credit Assessment",
      filterCategory: "Fintech",
      myRole: "ML Modeling & Explainability Lead",
      desc: "Worked on data-driven approaches for assessing credit risk and supporting credit-related decision making.",
      areas: ["Data preparation", "Feature engineering", "Predictive modeling", "Risk analysis"],
      tech: ["Python", "LightGBM", "SHAP", "Feature Engine", "PostgreSQL"]
    },
    {
      id: "churn-prediction",
      title: "Merchant Churn Prediction System",
      category: "Applied AI / ML",
      filterCategory: "Applied AI / ML",
      myRole: "Data Science Engineer",
      desc: "Worked on predictive modeling to identify patterns associated with customer churn.",
      areas: ["Customer data", "Feature engineering", "Predictive modeling", "Business intelligence"],
      tech: ["Python", "Scikit-learn", "Pandas", "Metabase BI"]
    },
    {
      id: "recommendation-systems",
      title: "Recommendation Approaches",
      category: "Applied AI / ML",
      filterCategory: "Applied AI / ML",
      myRole: "Algorithm Developer",
      desc: "Worked on recommendation approaches designed to use available user/business data to provide relevant suggestions and interactions.",
      areas: ["Data analysis", "Recommendation logic", "Machine learning", "Personalization"],
      tech: ["Python", "Collaborative Filtering", "TF-IDF", "Implicit ML"]
    },
    {
      id: "plate-recognition",
      title: "License Plate Recognition System (LPR)",
      category: "Computer Vision",
      filterCategory: "Computer Vision",
      myRole: "Computer Vision Engineer",
      desc: "Worked on computer vision systems involving vehicle/license plate recognition.",
      areas: ["Computer vision", "Image processing", "Recognition", "Model/application integration"],
      tech: ["Python", "OpenCV", "YOLOv8", "Tesseract OCR", "PyTorch"]
    },
    {
      id: "regulatory-reporting",
      title: "Regulatory Reporting & Analytics Engine",
      category: "Data Systems",
      filterCategory: "Data",
      myRole: "Data Engineer & Pipeline Lead",
      desc: "Worked on reporting systems and dashboards for payment data, including regulatory reporting requirements and data aggregation.",
      areas: ["Data pipelines", "Aggregation", "Reporting", "Dashboards", "Payment data", "Regulatory requirements"],
      tech: ["Apache Spark", "Hadoop", "PostgreSQL", "Metabase", "Python"]
    }
  ]
};

// Intelligent Systems (Marketing, BD, Social Media, Partnership & Agentic AI)
window.intelligentSystems = [
  {
    id: "marketing-intel",
    title: "Marketing Intelligence Systems",
    desc: "AI and data-driven systems for market analysis, customer segment insight, and marketing decision support.",
    tech: ["Python", "Pandas", "Scikit-learn", "Metabase"]
  },
  {
    id: "bd-intel",
    title: "Business Development Intelligence",
    desc: "Systems designed to help identify, score, and prioritize potential business and merchant outreach opportunities.",
    tech: ["Python", "Data Scoring", "SQL", "Web Data Mining"]
  },
  {
    id: "social-media-intel",
    title: "Social Media Intelligence",
    desc: "Systems for collecting, processing, and analyzing social media information to track digital merchant presence.",
    tech: ["Python", "Web Extraction", "NLP Basics", "Pandas"]
  },
  {
    id: "partnership-intel",
    title: "Partnership Intelligence",
    desc: "Systems designed to support partnership discovery, ecosystem analysis, and business development matching.",
    tech: ["Python", "Graph Modeling", "Data Extraction", "BI Dashboards"]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Workflows",
    desc: "AI systems and agents designed to automate research, information gathering, analysis, and business workflows.",
    tech: ["Python", "LangChain", "LLMs / Ollama", "Automation Tooling"]
  }
];

// Selected Applied AI Work (Structured Case Studies)
window.appliedAICaseStudies = [
  {
    id: "cs-fraud",
    title: "Payment Fraud Detection Pipeline",
    category: "Fintech • Risk Control",
    filterCategory: "Fintech",
    myRole: "ML Feature Engineering & Pipeline Developer",
    summary: "Machine-learning approaches for identifying potentially suspicious transactions in a payment environment.",
    problem: "Manual transaction audits could not scale with daily payment growth, requiring automated risk detection.",
    approach: "Built feature engineering pipeline evaluating transaction frequency, velocity, and amount anomalies paired with classification algorithms.",
    contribution: "Engineered streaming features in Python, trained risk classification models, and built API scoring integration.",
    tech: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "PostgreSQL"]
  },
  {
    id: "cs-credit",
    title: "Explainable Merchant Credit Scoring",
    category: "Fintech • Credit Assessment",
    filterCategory: "Fintech",
    myRole: "ML Modeling & Explainability Lead",
    summary: "Data-driven credit risk assessment evaluating merchant transaction telemetry for micro-lending eligibility.",
    problem: "Traditional institutions lacked credit history for small business merchants, limiting micro-loan access.",
    approach: "Formulated machine learning model analyzing payment volume consistency, tenure, and refund rates with SHAP explainability.",
    contribution: "Developed feature pipelines, trained gradient boosted models, and generated interpretable attribution reports.",
    tech: ["Python", "LightGBM", "SHAP", "Pandas", "PostgreSQL"]
  },
  {
    id: "cs-lpr",
    title: "Automated License Plate Recognition",
    category: "Computer Vision • Access Control",
    filterCategory: "Computer Vision",
    myRole: "Computer Vision Engineer",
    summary: "Computer vision systems involving vehicle and license plate recognition for barrier access control.",
    problem: "Manual ticket distribution caused delays and entry bottlenecks at parking facilities.",
    approach: "Deployed YOLOv8 model for bounding box vehicle plate detection coupled with OCR text extraction.",
    contribution: "Fine-tuned plate recognition models and integrated text matching with parking gate barrier APIs.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Tesseract OCR"]
  },
  {
    id: "cs-churn",
    title: "Merchant Churn Prediction Engine",
    category: "Applied AI • Business Intelligence",
    filterCategory: "Applied AI / ML",
    myRole: "Data Science Engineer",
    summary: "Predictive modeling to identify patterns associated with merchant transaction volume decay.",
    problem: "Retention teams lacked early warning indicators when merchant transaction activity began declining.",
    approach: "Constructed time-series features tracking transaction frequency decay over 30-day sliding windows.",
    contribution: "Created automated data extraction scripts, trained classification models, and exported risk lists to Metabase dashboards.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Metabase BI", "SQL"]
  },
  {
    id: "cs-reporting",
    title: "Regulatory Reporting & Analytics Engine",
    category: "Data Systems • Regulatory",
    filterCategory: "Data",
    myRole: "Data Engineer & Pipeline Lead",
    summary: "Reporting systems and dashboards for payment data, including regulatory reporting requirements and data aggregation.",
    problem: "Aggregating daily transaction ledgers into regulatory formats required robust, repeatable data pipelines.",
    approach: "Designed ETL batch pipeline consolidating multi-channel payment ledgers into unified data warehouse schemas.",
    contribution: "Built aggregation SQL scripts, configured automated batch jobs, and created regulatory compliance dashboards.",
    tech: ["Apache Spark", "Hadoop", "PostgreSQL", "Metabase", "Python"]
  }
];

// Technest / Sumuni Products (Cofounder • Product & Technology)
window.technestProducts = {
  role: "Cofounder • Product & Technology",
  sectionIntro: "Through Technest/Sumuni, I continue to build software products and business systems from idea to implementation.",
  products: [
    {
      id: "tn-zayno",
      title: "Zayno (zayno.io)",
      category: "Product • Mobile • Software",
      filterCategory: "Mobile",
      myRole: "Cofounder & Product/Technology Lead",
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
      id: "tn-sms-gateway",
      title: "SMS Gateway",
      category: "Backend • Infrastructure",
      filterCategory: "Backend",
      myRole: "Software Engineering & Backend Lead",
      desc: "An SMS gateway system developed through Technest/Sumuni for integrating SMS communication into applications.",
      tech: ["Node.js", "Redis", "BullMQ", "REST APIs"]
    },
    {
      id: "tn-airport",
      title: "Ethiopian Airlines Airport Parking",
      category: "Enterprise • Mobility",
      filterCategory: "Mobile",
      myRole: "Software Engineering & System Integration",
      desc: "Smart gate control, cashier web portal, and attendant mobile application suite.",
      tech: ["Flutter", "Node.js", "Hardware Gate Integration"]
    },
    {
      id: "tn-addis-parking",
      title: "Addis Parking Suite",
      category: "Mobility • Parking",
      filterCategory: "Mobile",
      myRole: "Mobile & Software Engineering",
      desc: "Attendant mobile application, supervisor management app, and tow-truck dispatch system.",
      tech: ["Flutter", "APIs", "Location Services"]
    },
    {
      id: "tn-atrip-ride",
      title: "Atrip Ride",
      category: "Ride-Hailing • Mobile",
      filterCategory: "Mobile",
      myRole: "Mobile Development & API Integration",
      desc: "Ride-hailing application managing passenger booking, driver dispatch, and location tracking.",
      tech: ["Flutter", "Node.js", "Google Maps API"]
    },
    {
      id: "tn-atrip-rental",
      title: "Atrip Rental",
      category: "Vehicle Rental • Mobile",
      filterCategory: "Mobile",
      myRole: "Mobile Development & Product Engineering",
      desc: "Vehicle rental platform for managing rental reservations, owner inventory, and user booking.",
      tech: ["Flutter", "APIs", "MongoDB"]
    },
    {
      id: "tn-stock-management",
      title: "Stock Management System",
      category: "Enterprise • Inventory",
      filterCategory: "Backend",
      myRole: "Product Design & System Architecture",
      desc: "Inventory entry, sales tracking, cost/sales pricing, expense tracking, manager approval, and offline sync engine.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM"]
    }
  ]
};

// "What I Actually Do" (5 Core Capability Cards)
window.whatIActuallyDo = [
  {
    title: "Production Software",
    icon: "⚡",
    color: "var(--accent-cyan)",
    desc: "Design and build mobile, web, backend and enterprise applications."
  },
  {
    title: "Applied AI/ML",
    icon: "🧠",
    color: "var(--accent-emerald)",
    desc: "Develop and integrate machine-learning and AI systems for practical business problems."
  },
  {
    title: "Data Systems",
    icon: "📊",
    color: "var(--accent-blue)",
    desc: "Work with data pipelines, analytics, reporting and data-driven applications."
  },
  {
    title: "Intelligent Agents",
    icon: "🤖",
    color: "var(--accent-purple)",
    desc: "Build AI-powered systems for research, intelligence, automation and business workflows."
  },
  {
    title: "Technical Leadership",
    icon: "🚀",
    color: "var(--accent-amber)",
    desc: "Contribute to architecture, technical decisions, system design and product development."
  }
];

// Technology Stack (Grouped Humanly & Pragmatically)
window.techStack = {
  languages: ["Dart", "Python", "JavaScript", "Java", "Go", "C", "C#"],
  mobile: ["Flutter"],
  frontend: ["React", "Vue", "HTML", "CSS", "Bootstrap"],
  backend: ["Node.js", "Django", "Laravel", "Spring"],
  aiMl: ["Python", "PyTorch", "Hugging Face", "LangChain", "Ollama", "SHAP", "LIME"],
  data: ["MySQL", "Apache Spark", "Hadoop", "Databricks", "Jupyter", "Metabase"]
};

// Specialized AI Areas Breakdown
window.aiAreasGrid = [
  {
    domain: "Machine Learning",
    topics: ["Fraud Detection", "Credit Scoring", "Churn Prediction", "Recommendation Systems"]
  },
  {
    domain: "Computer Vision",
    topics: ["License Plate Recognition (LPR)", "Image-Based Systems", "Object Detection (YOLOv8)", "OCR Text Extraction"]
  },
  {
    domain: "Generative AI",
    topics: ["LLM Applications", "RAG Implementations", "LangChain Framework", "Ollama Local Execution"]
  },
  {
    domain: "AI Agents",
    topics: ["Research Automation", "Business Development Intelligence", "Marketing Intelligence", "Partnership Intelligence"]
  }
];

// Academic MSc Research
window.mscResearch = {
  title: "Interpretable Knowledge Distillation with Mechanistic Attention Transfer for Efficient Model Compression",
  institution: "Addis Ababa University • MSc in Artificial Intelligence",
  degree: "MSc in Artificial Intelligence",
  desc: "My MSc research explored how knowledge distillation can be made more interpretable by transferring attention-related information from a larger teacher model to a smaller student model.",
  flow: [
    { label: "Teacher Model", detail: "Deep High-Capacity Model" },
    { label: "Attention Extraction", detail: "Mechanistic Map Match" },
    { label: "Mechanistic Alignment", detail: "Attention Transfer Matrix" },
    { label: "Knowledge Distillation", detail: "Soft Logit & Attention Loss" },
    { label: "Efficient Student Model", detail: "Compact & Explainable AI" }
  ]
};

// Currently Exploring (Honest Exploration Areas)
window.currentlyExploring = [
  { topic: "Agentic AI", desc: "Building systems that combine LLMs, tools, data and workflows." },
  { topic: "Applied Machine Learning", desc: "Going deeper into practical ML systems and model evaluation." },
  { topic: "Efficient AI", desc: "Continuing to explore model compression, knowledge distillation and efficient AI based on my MSc research." },
  { topic: "AI + Software Engineering", desc: "Exploring how AI can be integrated into reliable production software rather than treated as an isolated model." }
];

// Teaching Experience (Laboratory Instructor Entry)
window.teachingExperience = {
  role: "Laboratory Instructor",
  institution: "Addis Ababa University",
  period: "Academic Laboratory Courses",
  desc: "Supported laboratory sessions for a university course, working with students on practical exercises and technical concepts (approximately 5–6 sessions per semester).",
  courses: [
    "Data Structures & Algorithms Laboratory",
    "Cognitive Science & AI Foundations Laboratory",
    "Mathematics & Programming for AI Laboratory"
  ]
};

// Work History Timeline (Verified Entries Only)
window.careerTimeline = [
  {
    period: "2023 — Present",
    role: "Data Science Engineer / Technical Leadership",
    company: "ArifPay Financial Technologies",
    desc: "Applied AI, machine learning, data systems, reporting, fraud detection, credit scoring, and financial technology."
  },
  {
    period: "2021 — Present",
    role: "Cofounder & Product/Technology",
    company: "Technest / Sumuni",
    desc: "Software products, AI systems, enterprise solutions, mobility platforms, and end-to-end product development."
  },
  {
    period: "2021",
    role: "Software Engineering Intern",
    company: "UNOPS (United Nations Office for Project Services)",
    desc: "Assisted in software development, backend API integrations, database operations, and system documentation."
  },
  {
    period: "2020 — 2022",
    role: "Senior Software Engineer",
    company: "Qemer Software & Enterprise Systems",
    desc: "Designed enterprise web applications, inventory management systems, REST APIs, and database structures."
  },
  {
    period: "2018 — 2020",
    role: "Software Engineer",
    company: "Addis Software",
    desc: "Developed mobile applications, web components, database integrations, and client software products."
  }
];

// Education History (Verified Degree Entries)
window.educationHistory = [
  {
    period: "2021 — 2023",
    degree: "Master of Science (MSc) in Artificial Intelligence",
    institution: "Addis Ababa University",
    desc: "Specialized in Machine Learning, Computer Vision, Model Compression, Explainability, and AI Systems. GPA: 3.89."
  },
  {
    period: "2014 — 2018",
    degree: "Bachelor's Degree in Software Engineering / Computer Science",
    institution: "Addis Ababa University",
    desc: "Rigorous foundation in Software Engineering, Algorithms, Database Management, Data Structures, and Computer Architecture."
  }
];
