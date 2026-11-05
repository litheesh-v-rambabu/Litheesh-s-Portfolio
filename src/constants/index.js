import {
  mobile,
  backend,
  creator,
  web,
  angular,
  aws,
  dart,
  docker,
  flutter,
  git,
  html,
  javascript,
  mongodb,
  mysql,
  php,
  python,
  pytorch,
  reactjs,
  springboot,
  tailwind,
  typescript,
  tensorflow,
  vite,
  meta,
  starbucks,
  tesla,
  shopify,
  amazon_tracking,
  anbucocomart,
  anbucoconutfarm,
  ausmile,
  college_project,
  dating_application,
  evice,
  ksmodular,
  more_projects,
  movies_ticket_booking,
  stavat,
  theamdc,
  github,
  linkedin,
  email,
  phone,
  copy,
  blockstats,
  isanghanminds,
  isanghan_minds,
  esi_software,
  coincent,
  logo
} from "../assets";

export const navLinks = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/experience", title: "Experience" },
  { path: "/projects", title: "Projects" },
  { path: "/certifications", title: "Certifications" },
  { path: "/achievements", title: "Achievements" },
  { path: "/contact", title: "Contact" },
];

const services = [
  { title: "AI/ML Development", icon: backend },
  { title: "Web Development", icon: web },
  { title: "App Development", icon: mobile },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Dart", icon: dart },
  { name: "Flutter", icon: flutter },
  { name: "Python", icon: python },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Angular", icon: angular },
  { name: "Spring Boot", icon: springboot },
  { name: "PyTorch", icon: pytorch },
  { name: "TensorFlow", icon: tensorflow },
  { name: "Vite", icon: vite },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
// Add your real company logos to src/assets/company/ and update the icons below.
// For now, relevant tech icons are used as placeholders.

const experiences = [
  {
    title: "Software AI Engineer",
    company_name: "Isahghan Minds",
    location: "Bangalore, India",
    icon: isanghan_minds,       // Replace with real company logo when available
    iconBg: "#0a1628",
    date: "Dec 2023 – Aug 2025",
    points: [
      "Adapted domain-specific LLMs using Hugging Face for parameter-efficient fine-tuning (PEFT) with LoRA variants, and delivered REST APIs serving production ML models with GPU inference (CUDA), shipped via CI/CD.",
      "Built recommendation and semantic search systems using sentence embeddings, vector search, and re-ranking (Python, Pandas, NumPy), improving content discovery accuracy by 55% over the previous keyword-based approach.",
      "Deployed LLM-powered chatbots on AWS alongside generative AI product features, automating end-to-end conversational workflows and cutting manual intervention for end users by 60%+.",
      "Replaced manual inspection with computer vision pipelines running real-time inference at 70%+ detection accuracy, accelerating turnaround across production processes.",
      "Developed SQL and Pandas data pipelines to clean, transform, and load training and retrieval data into PostgreSQL and vector stores, supporting model retraining and evaluation.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "ESI Software (India) Private Limited",
    location: "Bangalore, India",
    icon: esi_software,           // Replace with real company logo when available
    iconBg: "#1d2b3a",
    date: "Aug 2023 – Nov 2023",
    points: [
      "Engineered data management for a Simulation Data Management (SDM) system on a graph database, enabling storage and retrieval of large simulation datasets for TensorFlow and PyTorch ML pipelines and improving data accessibility by 40%.",
      "Implemented a Java-based graph query layer with read/write operations for graph-based query execution, integrating outputs from scikit-learn and computer vision models, and reducing manual data-access overhead by 30%.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Coincent.ai",
    icon: coincent,          // Replace with real company logo when available
    iconBg: "#1a0a0a",
    date: "Apr 2023 – May 2023",
    points: [
      "Built a dog breed classification system using Transfer Learning with ResNet and EfficientNet architectures, achieving 90–95% accuracy across multiple breed categories.",
      "Conducted a comparative analysis of deep learning models (ResNet, EfficientNet, MLP), evaluating performance metrics to identify the optimal architecture for multi-class classification.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: logo,
    iconBg: "#0d1f3c",
    date: "Mar 2023 – Present",
    points: [
      "Designed and developed production-ready websites for clients across e-commerce, healthcare, furniture, and education sectors in India and Australia.",
      "Built full-stack solutions using HTML, jQuery, Tailwind CSS, PHP, and MySQL.",
      "Delivered responsive, cross-browser-compatible web apps with clean UI/UX aligned to client brand guidelines.",
    ],
  },
];


// ─── EDUCATION ────────────────────────────────────────────────────────────────
const education = [
  {
    degree: "M.S. Engineering Science (Artificial Intelligence)",
    school: "University at Buffalo, SUNY",
    location: "Buffalo, NY, USA",
    date: "Aug 2025 – Expected Dec 2026",
    emoji: "🎓",
    iconBg: "#0a1628",
    points: [
      "Master of Science in Engineering Science with a concentration in Artificial Intelligence; expected graduation Dec 2026.",
      "Projects: Agent Flight Recorder, Multi-Agent RAG Platform, and Deep RL Snow Plow Routing.",
    ],
  },
  {
    degree: "B.E. Artificial Intelligence & Machine Learning",
    school: "Visvesvaraya Technological University (KSIT)",
    location: "Bangalore, India",
    date: "Dec 2020 – Jun 2024",
    emoji: "🏫",
    iconBg: "#1d2b3a",
    points: [
      "Undergraduate degree in AI & ML; internships at ESI Software and Coincent.ai.",
      "Published a peer-reviewed paper on blockchain e-voting with AI anomaly detection (IARJSET, 2024).",
    ],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [];  // Cleared — add real testimonials when available

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
// To add a new project:
//   1. Add its image to src/assets/project/ and export it from src/assets/index.js
//   2. Copy one of the blocks below and fill in the details
//   3. Use category: "aiml" for AI/ML projects, category: "web" for web dev projects
//   4. For AI/ML projects, add a "metrics" array with key results (max 3-4)

const projects = [

  // ══════════════════════════════════════════════════════════════════════════
  //  AI / ML  PROJECTS
  // ══════════════════════════════════════════════════════════════════════════

  {
    name: "AI-Powered Code Suggester in IDEs",
    category: "aiml",
    description: "Fine-tuned CodeLlama-7B on 50K+ Python functions using LoRA/PEFT to deliver intelligent, context-aware code completions directly inside IDEs.",
    bullets: [
      "Fine-tuned CodeLlama-7B on 50K+ Python functions with LoRA/PEFT — 28% accuracy gain over baseline",
      "Applied 4-bit quantization via bitsandbytes, cutting GPU memory by 60% with no quality loss",
      "Custom tokenizer reduced inference latency from 800 ms → 250 ms at production scale",
      "Deployed as a FastAPI REST API on AWS SageMaker achieving sub-250ms real-time inference",
      "Built CI/CD pipeline with ONNX/TorchScript for automated retraining, versioning & deployment",
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CodeLlama-7B", color: "green-text-gradient" },
      { name: "LoRA / PEFT", color: "pink-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "AWS SageMaker", color: "green-text-gradient" },
      { name: "ONNX", color: "pink-text-gradient" },
    ],
    metrics: [
      { label: "Accuracy Gain", value: "+28%", color: "#4ade80" },
      { label: "Inference", value: "250ms", color: "#60a5fa" },
      { label: "GPU Mem ↓", value: "60%", color: "#f472b6" },
    ],
    gradient: "blue-purple",
    source_code_link: null,
    live_site_link: null,
  },

  {
    name: "Agent Flight Recorder: Failure Analysis & Regression Testing for LLM Agents",
    category: "aiml",
    description: "Observability and regression-testing toolkit for tool-using LLM agents — records every LLM and tool call, detects failures, and gates CI on pass-rate drops.",
    bullets: [
      "Architected an observability pipeline in Python that records every LLM and tool call as structured spans in SQLite, tracing ~700 runs across 120 tasks, served via a FastAPI service and Streamlit dashboard.",
      "Built failure detection combining rule-based checks, LLM-as-judge scoring, and embedding clustering (sentence-transformers, HDBSCAN, UMAP) — 0.76 precision and 0.56 recall against 100 hand-labeled failures on a frozen held-out split.",
      "Engineered a replay and regression-testing framework that turns failed traces into test cases and compares agent versions using Wilson intervals and McNemar's test.",
      "Added a CI gate that blocks pass-rate drops beyond 7 points.",
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
      { name: "LLM-as-Judge", color: "blue-text-gradient" },
      { name: "HDBSCAN / UMAP", color: "green-text-gradient" },
      { name: "SQLite", color: "pink-text-gradient" },
    ],
    metrics: [
      { label: "Precision", value: "0.76", color: "#4ade80" },
      { label: "Runs Traced", value: "~700", color: "#60a5fa" },
      { label: "Tasks", value: "120", color: "#f472b6" },
    ],
    gradient: "blue-purple",
    source_code_link: null,
    live_site_link: null,
  },

  {
    name: "Multi-Agent RAG Platform for Support Operations",
    category: "aiml",
    description: "Horizontally scalable microservice platform with event-driven LangGraph agents unifying RAG, data extraction, and automated triage.",
    bullets: [
      "Architected a microservice platform (Python, FastAPI, Docker) with event-driven LangGraph agent orchestration, serving 30K+ requests/month at 40% higher throughput.",
      "Built a retrieval pipeline with vector search (Chroma/FAISS embeddings, re-ranking) and a QLoRA classifier via Hugging Face — precision@k up from 68% to 87%, hallucination rate down 48%, inference cost down 93% vs. LLM calls.",
      "Shipped a Model Context Protocol (MCP) server and REST API with CI/CD (pytest, GitHub Actions, LLM-as-judge), circuit breakers, and exponential-backoff retries.",
      "Holds 99.2% uptime at P95 latency under 1,800 ms.",
    ],
    tags: [
      { name: "LangGraph", color: "blue-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
      { name: "QLoRA", color: "pink-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "MCP", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    metrics: [
      { label: "Precision@k", value: "68→87%", color: "#4ade80" },
      { label: "Cost ↓", value: "93%", color: "#60a5fa" },
      { label: "Uptime", value: "99.2%", color: "#f472b6" },
    ],
    gradient: "blue-purple",
    source_code_link: null,
    live_site_link: null,
  },

  {
    name: "SmartSnow — Deep RL for Urban Snow Plow Routing",
    category: "aiml",
    description: "Deep reinforcement learning platform that optimizes snow plow routing on Buffalo's real road network using OSMnx and NOAA-calibrated snowfall.",
    bullets: [
      "Built a Gymnasium environment on Buffalo's road network (OSMnx: 5,191 nodes, 8,040 edges) with NOAA-calibrated zero-inflated Gamma snowfall (5 intensity regimes), cutting state space 200x (8,040D to 40D) via Louvain clustering.",
      "Redesigned a sparse urgency-decay reward into a dense clearance-mode reward (17x clearance gain); trained PPO, A2C, DQN, and MaskablePPO (Stable-Baselines3) for 10M timesteps on dual NVIDIA L40S GPUs (CUDA).",
      "Evaluated agents over 50 deterministic episodes across 5 snowfall intensities — DQN cleared 80% of critical arterial roads in high snowfall versus 0% for the greedy heuristic baseline.",
    ],
    tags: [
      { name: "Reinforcement Learning", color: "blue-text-gradient" },
      { name: "Stable-Baselines3", color: "green-text-gradient" },
      { name: "Gymnasium", color: "pink-text-gradient" },
      { name: "OSMnx", color: "blue-text-gradient" },
      { name: "CUDA", color: "pink-text-gradient" },
    ],
    metrics: [
      { label: "State Space ↓", value: "200x", color: "#4ade80" },
      { label: "Clearance Gain", value: "17x", color: "#60a5fa" },
      { label: "Timesteps", value: "10M", color: "#f472b6" },
    ],
    gradient: "blue-purple",
    source_code_link: null,
    live_site_link: null,
  },

  {
    name: "Diffusion-Based Peptide Sequencing",
    category: "aiml",
    description: "Benchmarked deep learning-based de novo peptide sequencing tools to analyze tandem mass spectrometry (MS/MS) data from complex wastewater and E. coli samples.",
    bullets: [
      "Evaluated transformer and multinomial diffusion-based models (Casanovo, InstaNovo, InstaNovo+) against classical tools (Novor) for reference-free peptide sequencing.",
      "Analyzed complex wastewater proteomics data to identify proteins from uncharacterized organisms without relying on existing protein databases.",
      "Configured and deployed Casanovo's 9-layer transformer architecture, adjusting inference parameters like beam search termination and isotope error ranges.",
      "Established an evaluation pipeline using amino acid-level precision and recall for E. coli data, and False Discovery Rate (FDR) control for wastewater spectra.",
      "Integrated UniPept for downstream biological interpretation and taxonomic pattern visualization of the predicted peptide sets."
    ],
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
      { name: "Casanovo & InstaNovo", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Transformers", color: "blue-text-gradient" },
      { name: "Proteomics", color: "pink-text-gradient" },
    ],
    metrics: [
      { label: "Target FDR", value: "1%", color: "#4ade80" },
      { label: "Sequencing Tools", value: "4 Models", color: "#60a5fa" },
      { label: "Datasets", value: "E. coli & Wastewater", color: "#f472b6" },
    ],
    gradient: "blue-purple",
    source_code_link: "https://github.com/raunakpandey1/diffusion-peptide-sequencing",
    live_site_link: null,
  },

  {
    name: "Brain Tumor Segmentation",
    category: "aiml",
    description: "End-to-end ML pipeline for classifying brain MRI scans and segmenting tumor regions at pixel level — enabling accurate, interpretable clinical decisions.",
    bullets: [
      "Designed full ML pipeline for brain MRI classification: benign vs. malignant prediction",
      "Pixel-level tumor segmentation using CNN for precise, interpretable clinical decision-making",
      "Benchmarked CNN, KNN, and SVM — CNN achieved 95%+ accuracy on precision, recall & F1",
      "Integrated OpenCV image preprocessing to standardize MRI inputs across varied scan qualities",
      "Model trained and evaluated on publicly available brain MRI dataset with augmentation",
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "pink-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
    ],
    metrics: [
      { label: "CNN Accuracy", value: "95%+", color: "#4ade80" },
      { label: "Models Tested", value: "3", color: "#60a5fa" },
      { label: "Task", value: "MRI Seg.", color: "#fb923c" },
    ],
    gradient: "green-teal",
    source_code_link: null,
    live_site_link: null,
  },

  {
    name: "NLTA — Multilingual Browser Extension",
    category: "aiml",
    description: "Chrome extension that detects non-native language content and delivers real-time translations using ChatGPT and BERT — serving thousands of users across 50+ languages.",
    bullets: [
      "Built Chrome extension detecting non-native language content with ~80% accuracy",
      "Real-time translations via ChatGPT & Google BERT across 50+ languages at 150–300ms",
      "Python FastAPI NLP backend for low-latency language inference and processing",
      "Seamless UI integrates into any web portal without disrupting the host page layout",
      "Boosted cross-cultural accessibility for 1,000–5,000 active users by 30%",
    ],
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Chrome API", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "BERT", color: "green-text-gradient" },
      { name: "ChatGPT", color: "pink-text-gradient" },
    ],
    metrics: [
      { label: "Detection", value: "~80%", color: "#4ade80" },
      { label: "Languages", value: "50+", color: "#a78bfa" },
      { label: "Users", value: "5K+", color: "#60a5fa" },
    ],
    gradient: "purple-pink",
    source_code_link: null,
    live_site_link: null,
  },

  {
    name: "Decentralized e-Voting via Blockchain",
    category: "aiml",
    description: "Fraud-resistant e-voting system combining blockchain immutability and AI anomaly detection — published in an international peer-reviewed journal.",
    bullets: [
      "Designed a secure e-voting system using Ethereum blockchain for tamper-proof vote storage",
      "Integrated AI-based anomaly detection to identify and flag fraudulent voting patterns",
      "Smart contracts enforce vote immutability and enable transparent, automated tallying",
      "Cryptographic verification prevents double-voting and unauthorized voter access",
      "Published in IARJSET (Vol 11, Issue 5, 2024) — peer-reviewed international journal",
    ],
    tags: [
      { name: "Blockchain", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Smart Contracts", color: "blue-text-gradient" },
    ],
    metrics: [
      { label: "Published", value: "IARJSET", color: "#fbbf24" },
      { label: "Vol / Issue", value: "11 / 5", color: "#60a5fa" },
      { label: "Year", value: "2024", color: "#a78bfa" },
    ],
    gradient: "blue-cyan",
    source_code_link: null,
    live_site_link: null,
  },


  {
    name: "Isanghan Minds",
    category: "web",
    description: "Ed-tech web platform offering AI/ML online courses — student enrollment, course catalog, user authentication, and content delivery.",
    bullets: [
      "Complete ed-tech platform with course catalog, enrollment, and student dashboard",
      "User authentication and role-based access (admin, instructor, student)",
      "Course content delivery system with progress tracking for learners",
      "Payment workflow integration for course purchases and certificate generation",
      "Clean, modern UI aligned with the brand's educational and professional identity",
    ],
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "jQuery", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "PHP", color: "blue-text-gradient" },
    ],
    image: isanghanminds,
    live_site_link: "https://isanghanminds.com/",
    source_code_link: null,
  },

  {
    name: "Stavat Artventure",
    category: "web",
    description: "Business website for a digital wall-printing company in Bengaluru — portfolio showcase, service pages, and local SEO optimisation.",
    bullets: [
      "Portfolio showcase with rich project galleries for residential and commercial prints",
      "Service and pricing pages with WhatsApp and quote request integration",
      "Local SEO optimisation to attract clients in Bengaluru and surrounding areas",
      "Smooth animations and visual transitions to highlight the artistic brand identity",
      "Fast-loading, mobile-responsive design for on-the-go clientele",
    ],
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "jQuery", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: stavat,
    live_site_link: "https://artventure.stavat.in/",
    source_code_link: null,
  },


  // ADD NEW WEB PROJECTS ABOVE THIS LINE ↑
];

const contacts = [
  {
    name: "GitHub",
    icon: github,
    type: "link",
    link: "https://github.com/VRLITHI",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    type: "link",
    link: "https://www.linkedin.com/in/litheesh-velakaturi-rambabu/",
  },
  
  {
    name: "Email",
    icon: email,
    type: "copy",
    link: "mailto:vrlitheesh2002@gmail.com",
    value: "vrlitheesh2002@gmail.com",
  },
  {
    name: "Phone",
    icon: phone,
    type: "copy",
    link: "tel:+1(716)368-9971",
    value: "+1(716) 368-9971",
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
// To add a certification:
//   1. Copy the template block below and fill in the details
//   2. Optionally add a credential URL for the "View Credential" button
//
// Template:
// {
//   title: "Certification Name",
//   issuer: "Issuing Organisation",
//   date: "Month Year",
//   credentialId: "ABC-123456",        // optional
//   credentialUrl: "https://...",      // optional — link to verify
//   skills: ["Python", "ML", "AWS"],   // chips shown on the card
//   color: "#4ade80",                  // accent colour for the badge
// },

export const certifications = [

  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    subtitle: "Oracle University",
    date: "July 2024",
    description: "Earned professional recognition for expertise in OCI Generative AI services, large language models (LLMs), and RAG frameworks.",
    tags: ["Certification", "GenAI", "Cloud"],
    link: "https://drive.google.com/file/d/1kjVMpAMoN5gSWdyjZdqfsfR_MadN15yt/view?usp=sharing",
    linkLabel: "Verify Credential",
    icon: "☁️",
    color: "#e25c2f",
  },
  {
    title: "Machine Learning Onramp",
    subtitle: "MathWorks",
    date: "July 2023",
    description: "Mastered fundamental machine learning workflows in MATLAB, including data preprocessing, feature engineering, and training supervised learning models.",
    tags: ["Certification", "MATLAB", "Machine Learning"],
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=38f71286-90f7-4148-936d-1941656821b0",
    linkLabel: "View Certificate",
    icon: "📊",
    color: "#0076b8",
  },
  {
    title: "Machine Learning with Python Internship",
    subtitle: "Coincent (Fox Trading Solutions)",
    date: "May 2023",
    description: "Completed an intensive two-month internship focused on implementing machine learning algorithms and data processing pipelines using Python.",
    tags: ["Internship", "Python", "ML"],
    link: "https://drive.google.com/file/d/1hLpR5-S7FInCxQHF9_i5ZqN4Fgu9Rdjk/view?usp=drive_link",
    linkLabel: "Verify Certificate",
    icon: "🤖",
    color: "#38a169",
  },

];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
// Pre-filled with your IARJSET publication. Add more below as needed.
//
// Template:
// {
//   title: "Achievement Title",
//   subtitle: "Organisation / Venue",
//   date: "Month Year",
//   description: "Short description of the achievement.",
//   tags: ["Research", "AI/ML"],         // category chips
//   link: "https://...",                 // optional verification link
//   linkLabel: "View Publication",       // label for the link button
//   icon: "🏆",                          // emoji icon for the card header
//   color: "#f59e0b",                    // accent colour
// },

export const achievements = [
  {
    title: "Decentralized e-Voting System using Blockchain",
    subtitle: "Published in IARJSET — International Advanced Research Journal in Science, Engineering and Technology",
    date: "May 2024",
    description: "Peer-reviewed research paper on a secure, transparent e-voting system using Ethereum blockchain and AI-based anomaly detection (Vol. 11, Issue 5, 2024).",
    tags: ["Research", "Blockchain", "Security", "Published"],
    link: "https://doi.org/10.17148/IARJSET.2024.11520",
    linkLabel: "View Publication",
    icon: "📜",
    color: "#f59e0b",
  },
  {
    title: "Databricks Lakehouse Fundamentals",
    subtitle: "Databricks University Alliance",
    date: "2024",
    description: "Mastered core concepts of the Databricks Lakehouse Platform, including data warehousing, governance, and unified AI/ML workflows.",
    tags: ["Data Engineering", "Lakehouse", "AI/ML"],
    link: "https://universityalliance.databricks.com/4c586ac8-18c3-41b8-a95b-1191b836d4dd#acc.mprZsPuy",
    linkLabel: "View Badge",
    icon: "🧱",
    color: "#FF3621",
  },
  // ADD MORE ACHIEVEMENTS HERE ↓
];

export { services, technologies, experiences, education, testimonials, projects, contacts };
