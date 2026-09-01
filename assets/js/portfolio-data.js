/**
 * Central Portfolio Data Configuration (Comprehensive Edition)
 * Includes Zayno (https://zayno.io/), Alateon (Church donation app), ArifPay 12-project AI suite,
 * Technest Apps, Qemer Software Tech, Freelance, and AAU BSc Projects.
 */

window.portfolioStats = {
  projects: "35+",
  productionSystems: "20+",
  aiSystems: "12",
  yearsExperience: "5+",
  technologies: "25+",
  businessesServed: "30+"
};

window.personalInfo = {
  name: "Ashenafi Chufamo",
  headline: "I Build Intelligent Systems That Solve Real-World Problems.",
  subtitle: "AI-Software Engineer • Tech Lead • Researcher • Cofounder",
  email: "chufamoashenafi@gmail.com",
  phone: "+251 (944) 060-864",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/ashuChufamo",
  linkedin: "https://et.linkedin.com/in/ashenafi-chufamo-bab330185",
  facebook: "https://www.facebook.com/ashenafichufamo1",
  bio: `Senior AI-Software Engineer, Tech Lead at ArifPay, and Cofounder at Sumuni (Technest). With an MSc in Artificial Intelligence from Addis Ababa University and 4 semesters of university lecturing experience (teaching Data Structures & Algorithms, Cognitive Science, and Math for AI), I engineer end-to-end intelligent software systems from Concept → Architecture → Production.`
};

/* --------------------------------------------------------------------------
   ARIFPAY AI & PRODUCT SUITE (12 Projects)
   -------------------------------------------------------------------------- */
window.arifPayData = {
  role: "Tech Lead — ArifPay",
  period: "2024 — Present",
  summary: "Directing engineering, AI integration, merchant intelligence, data pipelines, regulatory compliance reporting, and production infrastructure for payment systems in Ethiopia.",
  products: [
    {
      title: "Arifpay Product Chatbot",
      category: "Chatbot • AI/ML",
      desc: "Multilingual conversational AI agent assisting merchants and users with payment inquiries, transaction troubleshooting, and product support.",
      tech: ["Python", "LangChain", "LLMs", "FastAPI"],
      image: "./assets/images/project-1.jpg"
    },
    {
      title: "Multilingual Hate Speech Detection",
      category: "AI/ML • NLP",
      desc: "NLP classifier identifying hate speech and toxic content across Amharic, Afan Oromo, and English text data.",
      tech: ["PyTorch", "Hugging Face", "Transformers", "spaCy"],
      image: "./assets/images/ai.png"
    },
    {
      title: "Fraud Detection with ArifPay",
      category: "AI/ML • Security",
      desc: "Real-time anomaly detection engine evaluating high-frequency payment transaction risks under 50ms latency.",
      tech: ["PyTorch", "XGBoost", "Apache Spark", "Redis"],
      image: "./assets/images/project-8.jpg"
    },
    {
      title: "Data Warehouse (Spark & Hadoop)",
      category: "AI/ML • Data Engineering",
      desc: "Distributed big data architecture processing millions of payment logs for business intelligence and regulatory compliance.",
      tech: ["Apache Spark", "Hadoop", "PostgreSQL", "Metabase"],
      image: "./assets/images/project-6.png"
    },
    {
      title: "Explainable Credit Scoring",
      category: "AI/ML • Fintech",
      desc: "Alternative data credit scoring engine using SHAP explainable AI for merchant micro-loan underwriting.",
      tech: ["Python", "SHAP", "XGBoost", "FastAPI"],
      image: "./assets/images/project-7.png"
    },
    {
      title: "Arifcare AI-based Diagnosis",
      category: "AI/ML • Healthcare / USP",
      desc: "Healthcare diagnostic assistant leveraging machine learning for preliminary symptom analysis and medical triage.",
      tech: ["Python", "TensorFlow", "Scikit-Learn", "REST API"],
      image: "./assets/images/project-3.jpg"
    },
    {
      title: "OCR Detection for Amharic Handwritten Text",
      category: "AI/ML • Computer Vision & NLP",
      desc: "Deep learning vision system extracting and digitizing handwritten Amharic text from official documents and forms.",
      tech: ["OpenCV", "PyTorch", "CNNs", "Python"],
      image: "./assets/images/project-9.png"
    },
    {
      title: "Movie Recommendation (Arts TV)",
      category: "Recommender System",
      desc: "Personalized video content recommendation engine deployed for Arts TV streaming app users.",
      tech: ["TensorFlow", "Python", "Flutter Integration"],
      image: "./assets/images/project-3.jpg"
    },
    {
      title: "FM Content Recommendation",
      category: "Recommender System",
      desc: "Personalized audio & FM radio stream recommendation algorithm based on user listening history.",
      tech: ["PyTorch", "Python", "Redis"],
      image: "./assets/images/project-5.png"
    },
    {
      title: "E-commerce Recommender",
      category: "Recommender System",
      desc: "High-throughput product recommendation pipeline for merchant digital storefronts.",
      tech: ["Python", "Scikit-Learn", "PostgreSQL"],
      image: "./assets/images/project-2.png"
    },
    {
      title: "News Recommendation",
      category: "Recommender System",
      desc: "Real-time news article recommendation system ranking articles based on topic preference and trending topics.",
      tech: ["Python", "NLP", "FastAPI"],
      image: "./assets/images/project-1.jpg"
    },
    {
      title: "License Plate Detection System",
      category: "Computer Vision",
      desc: "Edge computer vision ALPR system recognizing vehicle license plates in real-time.",
      tech: ["YOLOv8", "OpenCV", "PyTorch"],
    image: "./assets/images/usp.jpeg"
    }
  ]
};

/* --------------------------------------------------------------------------
   TECHNEST / SUMUNI PRODUCT SUITE
   -------------------------------------------------------------------------- */
window.sumuniData = {
  role: "Cofounder & Tech Lead — Sumuni / Technest",
  period: "2022 — Present",
  summary: "Co-founded Sumuni Creative Solutions / Technest. Technical lead for flagship enterprise products including Zayno (https://zayno.io/), Alateon, Airport Parking Suite, Mobility Apps, and SMS Service Gateway.",
  projects: [
    {
      title: "Zayno — Technest Masterpiece",
      category: "Technest Masterpiece / Enterprise Suite",
      desc: "Technest's flagship product powering enterprise operations, workflow automation, and digital management.",
      url: "https://zayno.io/",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
      image: "./assets/images/project-6.png",
      subApps: ["Zayno Advisor App (Web)", "Zayno User App (Web/Mobile)", "Zayno Admin App (Web)"]
    },
    {
      title: "Alateon",
      category: "Church Content & Donation Platform",
      desc: "Ethiopian Orthodox Tewahedo Church donation platform and spiritual content streaming application.",
      tech: ["Flutter", "Node.js", "PostgreSQL", "Payment Integration"],
      image: "./assets/images/project-3.jpg"
    },
    {
      title: "Project Sumuni",
      category: "Entrepreneurship & Investment",
      desc: "Sumuni's debut platform connecting African startups with global investors, due diligence tools, and business development.",
      tech: ["React", "Laravel", "MySQL", "Flutter"],
      image: "./assets/images/sumuni.png"
    },
    {
      title: "SMS Service Gateway",
      category: "Telecom & Enterprise Communication",
      desc: "High-throughput bulk SMS service gateway platform integrating telecom operators for transactional & promotional alerts.",
      tech: ["Node.js", "Go", "Redis", "MySQL", "SMPP Protocol"],
      image: "./assets/images/project-1.jpg"
    },
    {
      title: "Ethiopian Airport Parking System Suite",
      category: "Smart Airport Infrastructure",
      desc: "Complete smart airport parking gate control, revenue collection, and vehicle management ecosystem.",
      tech: ["Flutter", "Web", "Node.js", "Hardware Integration"],
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
      category: "Smart City Infrastructure",
      desc: "Smart urban parking management platform with automated vehicle license plate recognition and slot booking.",
      tech: ["Flutter", "Python / Vision", "React", "Node.js"],
    image: "./assets/images/usp.jpeg",
      subApps: [
        "Attendant App (Flutter)",
        "Parking Supervisor App (Flutter)",
        "Addis Tow Truck App (Flutter)"
      ]
    },
    {
      title: "Atrip Rental & Mobility Suite",
      category: "Vehicle Rental & Mobility",
      desc: "Vehicle rental platform connecting car owners with drivers and rental customers.",
      tech: ["Flutter", "React", "Laravel API", "PostgreSQL"],
      image: "./assets/images/project-8.jpg",
      subApps: [
        "Atrip Rental Owner App (Flutter)",
        "Atrip Rental Drivers App (Flutter)"
      ]
    },
    {
      title: "Custom Stock Management System",
      category: "Enterprise SaaS",
      desc: "All-in-one inventory tracking, sales recording, operational expense audit, and financial statement software.",
      tech: ["Laravel", "Vue.js", "MySQL"],
      image: "./assets/images/project-9.png"
    }
  ]
};

/* --------------------------------------------------------------------------
   QEMER SOFTWARE TECHNOLOGIES PROJECTS
   -------------------------------------------------------------------------- */
window.qemerData = [
  {
    title: "Project Alen",
    category: "Applications • Qemer",
    desc: "Enterprise management and digital operational solution developed at Qemer Software Technologies.",
    tech: ["Flutter", "Node.js", "MySQL"],
    image: "./assets/images/qemer.jpeg"
  },
  {
    title: "Project Heipeus",
    category: "Applications • Qemer",
    desc: "Custom digital service platform engineered for commercial client workflow automation.",
    tech: ["React", "Laravel", "PostgreSQL"],
    image: "./assets/images/qemer.jpeg"
  },
  {
    title: "Project MallEt",
    category: "Applications • Qemer",
    desc: "E-commerce mall aggregation and vendor management portal for retail businesses.",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    image: "./assets/images/qemer.jpeg"
  }
];

/* --------------------------------------------------------------------------
   FREELANCE PROJECTS
   -------------------------------------------------------------------------- */
window.freelanceData = [
  {
    title: "Superstar",
    category: "Social Platform • Freelance",
    desc: "Innovative LinkedIn & TikTok fusion app where tech professionals and creators post video content showcasing their skills and products.",
    tech: ["Flutter", "Firebase", "Node.js", "Video Transcoding"],
    image: "./assets/images/project-4.png"
  },
  {
    title: "Food Fight",
    category: "Mobile Application • Freelance",
    desc: "Interactive culinary mobile application connecting food lovers, restaurants, and cooking challenges.",
    tech: ["Flutter", "Dart", "REST API"],
    image: "./assets/images/project-8.jpg"
  }
];

/* --------------------------------------------------------------------------
   AAU BSC PROJECTS
   -------------------------------------------------------------------------- */
window.aauBscData = [
  {
    title: "FixIt",
    category: "Services Platform • AAU BSc",
    desc: "On-demand maintenance and home repair technician booking platform built during BSc at AAU.",
    tech: ["Java", "Android Native", "Firebase"],
    image: "./assets/images/logo 1.png"
  },
  {
    title: "Crime Investigation System",
    category: "Security & Law Enforcement • AAU BSc",
    desc: "Digital forensic investigation record management system for case tracking and evidence logs.",
    tech: ["PHP", "MySQL", "JavaScript"],
    image: "./assets/images/logo 1.png"
  }
];

/* --------------------------------------------------------------------------
   ALL SELECTED PROJECTS FOR FILTERABLE GRID
   -------------------------------------------------------------------------- */
window.projectsData = [
  {
    title: "Zayno — Technest Flagship",
    category: "Web Applications",
    desc: "Technest's masterpiece enterprise platform powering digital operations and SaaS management.",
    url: "https://zayno.io/",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    image: "./assets/images/project-6.png",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Alateon",
    category: "Mobile Applications",
    desc: "Ethiopian Orthodox Tewahedo Church donation platform and spiritual content app.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    image: "./assets/images/project-3.jpg",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Project Sumuni",
    category: "Web Applications",
    desc: "Sumuni's debut platform enabling business development, due diligence, and startup investor matchmaking.",
    tech: ["React", "Laravel", "MySQL", "Flutter"],
    image: "./assets/images/sumuni.png",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Technest SMS Service Gateway",
    category: "Payment & Fintech",
    desc: "High-volume transactional SMS gateway with telecom SMPP protocol integration.",
    tech: ["Node.js", "Go", "Redis", "MySQL"],
    image: "./assets/images/project-1.jpg",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Superstar Video Network",
    category: "Mobile Applications",
    desc: "LinkedIn + TikTok hybrid platform for professionals to share video content about themselves and products.",
    tech: ["Flutter", "Firebase", "Node.js"],
    image: "./assets/images/project-4.png",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Arifpay Product Chatbot",
    category: "AI / ML",
    desc: "Multilingual conversational AI agent assisting merchants and users with payment inquiries.",
    tech: ["Python", "LangChain", "LLMs", "FastAPI"],
    image: "./assets/images/project-1.jpg",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Multilingual Hate Speech Detection",
    category: "AI / ML",
    desc: "NLP classifier identifying toxic speech across Amharic, Afan Oromo, and English.",
    tech: ["PyTorch", "Hugging Face", "spaCy"],
    image: "./assets/images/ai.png",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Amharic Handwritten OCR Detection",
    category: "Computer Vision",
    desc: "Deep learning vision system extracting handwritten Amharic text from official forms.",
    tech: ["OpenCV", "PyTorch", "CNNs"],
    image: "./assets/images/project-9.png",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Movie & FM Recommendation (Arts TV)",
    category: "AI / ML",
    desc: "Personalized audio & video recommendation engine deployed on production streaming apps.",
    tech: ["TensorFlow", "Python", "Flutter"],
    image: "./assets/images/project-3.jpg",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Addis Parking Smart Vision",
    category: "Computer Vision",
    desc: "Automated license plate recognition and smart parking gate integration system.",
    tech: ["YOLOv8", "OpenCV", "PyTorch", "React"],
    image: "./assets/images/usp.jpeg",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "Project Alen (Qemer)",
    category: "Web Applications",
    desc: "Enterprise operational solution developed at Qemer Software Technologies.",
    tech: ["Flutter", "Node.js", "MySQL"],
    image: "./assets/images/qemer.jpeg",
    github: "https://github.com/ashuChufamo"
  },
  {
    title: "FixIt (AAU BSc)",
    category: "Mobile Applications",
    desc: "On-demand maintenance and home repair technician booking application.",
    tech: ["Java", "Android Native", "Firebase"],
    image: "./assets/images/logo 1.png",
    github: "https://github.com/ashuChufamo"
  }
];

window.techStackData = {
  Languages: ["Python", "Dart", "JavaScript", "TypeScript", "Java", "Go", "C", "C#", "PHP"],
  Frameworks: ["Flutter", "React", "Node.js", "Vue.js", "Laravel", "Django", "Spring Boot", "FastAPI"],
  "AI / ML": ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "RAG", "LLMs", "Computer Vision (YOLO/OpenCV)", "Recommendation Systems", "Explainable AI (SHAP)", "Model Compression", "Knowledge Distillation"],
  Data: ["PostgreSQL", "MySQL", "Apache Spark", "Hadoop", "Databricks", "Redis", "MongoDB", "Metabase"]
};

window.timelineData = [
  {
    period: "Feb 2024 — Present",
    role: "Tech Lead — ArifPay",
    org: "ArifPay",
    desc: "Directing AI chatbot, Amharic OCR, fraud detection, hate speech detection, recommenders, data warehouse, and central bank reporting.",
    image: "./assets/images/project-2.png"
  },
  {
    period: "May 2023 — Present",
    role: "Cofounder & Tech Lead",
    org: "Sumuni Creative Solutions / Technest",
    desc: "Built Technest masterpiece Zayno (https://zayno.io/), Alateon church app, Project Sumuni, SMS Gateway, Airport Parking suite, and Mobility apps.",
    image: "./assets/images/logo 7.png"
  },
  {
    period: "Feb 2024 — Present (4 Semesters / ~2 Years)",
    role: "Lab Lecturer",
    org: "Addis Ababa University",
    desc: "Taught 4 semesters of Data Structures & Algorithms (DSA), Cognitive Science, and Mathematics for AI.",
    image: "./assets/images/logo 1.png"
  },
  {
    period: "Oct 2023 — Aug 2025",
    role: "MSc. in Artificial Intelligence",
    org: "Addis Ababa University",
    desc: "Research focused on Mechanistic Attention Transfer & Interpretable Knowledge Distillation.",
    image: "./assets/images/ai.png"
  },
  {
    period: "July 2024 — Nov 2024",
    role: "AGI Research Intern",
    org: "iCog Labs",
    desc: "Researched OpenCog and advanced artificial general intelligence architectures.",
    image: "./assets/images/logo 5.png"
  },
  {
    period: "2021 — 2022",
    role: "Software Engineer",
    org: "Qemer Software Technologies",
    desc: "Built Project Alen, Project Heipeus, and Project MallEt.",
    image: "./assets/images/qemer.jpeg"
  },
  {
    period: "Aug 2022 — May 2023",
    role: "ICT Intern",
    org: "UNOPS",
    desc: "Worked with Active Directory, Google Workspace, Windows Server, network infrastructure, and oneUNOPSCollect.",
    image: "./assets/images/logo 2.png"
  },
  {
    period: "Nov 2017 — Aug 2022",
    role: "BSc. in Software Engineering (Great Distinction)",
    org: "Addis Ababa University",
    desc: "Graduated with top honors. Built FixIt and Crime Investigation System.",
    image: "./assets/images/logo 1.png"
  }
];
