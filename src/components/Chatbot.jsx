import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════════════════
   SHISIYA — Personal AI Assistant for Litheesh Velakaturi Rambabu
   Knowledge base sourced from resume + portfolio constants
═══════════════════════════════════════════════════════════════════════════ */

// ── MoonOrb — Floating toggle button visual ───────────────────────────────────
const MoonOrbSVG = ({ size = 60, isOpen = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Moon body gradient — cool lit side */}
      <radialGradient id="moon-body" cx="36%" cy="27%" r="70%">
        <stop offset="0%"   stopColor="#f0f6ff" />
        <stop offset="38%"  stopColor="#c4d8f8" />
        <stop offset="75%"  stopColor="#8db4e8" />
        <stop offset="100%" stopColor="#5a88cc" />
      </radialGradient>

      {/* Crater fill */}
      <radialGradient id="crater-fill" cx="38%" cy="32%" r="60%">
        <stop offset="0%"   stopColor="#7090c8" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#4a6aaa" stopOpacity="0.15" />
      </radialGradient>

      {/* Orbit path gradient */}
      <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#00cea8" stopOpacity="0.8" />
        <stop offset="50%"  stopColor="#bf61ff" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#00cea8" stopOpacity="0.1" />
      </linearGradient>

      {/* Outer aura gradient */}
      <radialGradient id="aura-grad" cx="50%" cy="50%" r="50%">
        <stop offset="60%"  stopColor="#00cea8" stopOpacity="0" />
        <stop offset="100%" stopColor="#00cea8" stopOpacity="0.25" />
      </radialGradient>

      {/* Soft blur for glow rings */}
      <filter id="glow-blur" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
    </defs>

    {/* ── Outer aura / soft glow ── */}
    <circle cx="30" cy="30" r="29" fill="url(#aura-grad)" filter="url(#glow-blur)" />

    {/* ── Halo rings ── */}
    <circle cx="30" cy="30" r="27.5" fill="none" stroke="#00cea8" strokeWidth="0.5" opacity="0.35" />
    <circle cx="30" cy="30" r="24"   fill="none" stroke="#bf61ff" strokeWidth="0.4" opacity="0.2"  />

    {/* ── Moon body ── */}
    <circle cx="30" cy="30" r="21" fill="url(#moon-body)" />

    {/* ── Night-side shadow (terminator / crescent) ── */}
    <circle cx="38" cy="30" r="20" fill="#050816" opacity="0.42" />

    {/* ── Craters ── */}
    {/* Large crater */}
    <circle cx="22" cy="25" r="5.5" fill="url(#crater-fill)" opacity="0.6"  />
    <circle cx="22" cy="25" r="3.5" fill="#b8d0f4"           opacity="0.18" />
    <circle cx="20.5" cy="23.5" r="1.3" fill="white"         opacity="0.22" />

    {/* Medium crater */}
    <circle cx="33" cy="35" r="3.8" fill="url(#crater-fill)" opacity="0.5"  />
    <circle cx="33" cy="35" r="2.2" fill="#b8d0f4"           opacity="0.15" />

    {/* Small crater */}
    <circle cx="16" cy="33" r="2.4" fill="url(#crater-fill)" opacity="0.42" />

    {/* Tiny craters */}
    <circle cx="26" cy="17" r="1.6" fill="url(#crater-fill)" opacity="0.38" />
    <circle cx="13" cy="22" r="1.2" fill="url(#crater-fill)" opacity="0.3"  />

    {/* ── Highlight — bright lit corner ── */}
    <circle cx="21" cy="20" r="5"   fill="white" opacity="0.14" />
    <circle cx="18.5" cy="17.5" r="2.2" fill="white" opacity="0.45" />
    <circle cx="17.5" cy="16.5" r="0.9" fill="white" opacity="0.85" />

    {/* ── Orbit ring (dashed ellipse, tilted) ── */}
    <ellipse
      cx="30" cy="30" rx="28" ry="7.5"
      fill="none"
      stroke="url(#orbit-grad)"
      strokeWidth="0.8"
      strokeDasharray="4 5"
      opacity="0.5"
      transform="rotate(-28 30 30)"
    />

    {/* ── Orbiting dot — animated via SVG animateTransform ── */}
    <g transform="rotate(-28 30 30)">
      <circle cx="58" cy="30" r="2.6" fill="#00cea8" opacity="0.9">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 30 30"
          to="360 30 30"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    {/* ── Close "×" overlay when chat is open ── */}
    {isOpen && (
      <g>
        <circle cx="30" cy="30" r="21" fill="#0d1226" opacity="0.55" />
        <line x1="23" y1="23" x2="37" y2="37" stroke="white" strokeWidth="2.8" strokeLinecap="round" opacity="0.85" />
        <line x1="37" y1="23" x2="23" y2="37" stroke="white" strokeWidth="2.8" strokeLinecap="round" opacity="0.85" />
      </g>
    )}
  </svg>
);

// ── Intent definitions ────────────────────────────────────────────────────────
// Each intent has: tags (keywords to match), response (text), chips (quick replies)
const intents = [

  /* ── Greeting ── */
  {
    tags: ["hi", "hello", "hey", "howdy", "yo", "morning", "evening", "afternoon", "sup", "what's up", "start", "begin"],
    response: `Hey! 👋 I'm **SHISIYA**, Litheesh's personal AI assistant.\n\nI know everything about him — his skills, projects, work experience, education, and how to reach him. What would you like to know?`,
    chips: ["Who is Litheesh?", "His skills", "His projects", "Contact info"],
  },

  /* ── Who / About ── */
  {
    tags: ["who is litheesh", "about litheesh", "tell me about", "introduce", "background", "summary", "overview", "who are", "about him", "litheesh velakaturi", "rambabu"],
    response: `**Litheesh Velakaturi Rambabu** is an AI & ML Engineer based in **Buffalo, NY** 🚀\n\nHe's currently pursuing a **Masters in Artificial Intelligence** at the University at Buffalo (SUNY) and has 2+ years of professional experience building:\n\n• LLM-powered chatbots & intelligent systems\n• Computer vision pipelines (YOLOv8, OpenCV)\n• Scalable REST APIs & RAG pipelines\n• AI recommendation & semantic search engines\n\nPreviously worked at **Isahghan Minds**, **ESI Software**, and **Coincent.ai**, and also runs freelance web development projects.`,
    chips: ["His experience", "His education", "His skills", "Contact him"],
  },

  /* ── Education ── */
  {
    tags: ["education", "study", "studying", "degree", "university", "college", "school", "buffalo", "ub", "suny", "vtu", "ksit", "bachelor", "master", "masters", "graduate", "academic", "qualification"],
    response: `**Education** 🎓\n\n**Masters in Engineering Science (Artificial Intelligence)**\nUniversity at Buffalo (SUNY), Buffalo, NY\nAug 2025 – Expected Dec 2026\n\n**Bachelor of Engineering (AI & Machine Learning)**\nVisvesvaraya Technological University (KSIT)\nBangalore, India | Dec 2020 – Jun 2024`,
    chips: ["His experience", "His skills", "Contact him"],
  },

  /* ── Experience / Work ── */
  {
    tags: ["experience", "work", "job", "career", "employment", "worked", "working", "company", "professional", "internship", "intern", "isahghan", "esi", "coincent", "freelance", "engineer", "position"],
    response: `**Work Experience** 💼\n\n**Software AI Engineer — Isahghan Minds**\nDec 2023 – Aug 2025 · Bangalore\n• LLM chatbots on AWS cutting manual intervention by 60%+\n• Semantic search & recommendations improving accuracy by 55%\n• Computer vision pipelines with 70%+ detection accuracy\n• PEFT/LoRA fine-tuned LLMs served via REST APIs (CUDA, CI/CD)\n\n**Software Engineer Intern — ESI Software**\nAug 2023 – Nov 2023 · Bangalore\n• Graph DB data management improving data access by 40%\n• Java graph query layer cutting manual data-access overhead by 30%\n\n**Machine Learning Intern — Coincent.ai**\nApr 2023 – May 2023\n• Dog breed classifier: 90–95% accuracy (ResNet/EfficientNet)\n\n**Freelance Web Developer — Self-Employed**\nMar 2023 – Present\n• Production sites for e-commerce, healthcare & furniture clients`,
    chips: ["His tech stack", "His projects", "Contact him"],
  },

  /* ── Skills (general) ── */
  {
    tags: ["skills", "technologies", "tech", "stack", "language", "framework", "library", "tool", "expertise", "proficient", "knows", "capable", "programming", "coding", "technical"],
    response: `**Technical Skills** ⚙️\n\n**Languages:** Python, Java, JavaScript, HTML, C/C++, R\n\n**ML / AI:** TensorFlow, PyTorch, Keras, scikit-learn, OpenCV, NumPy, Pandas, Matplotlib, Google BERT, Apache TVM\n\n**LLM & GenAI:** LangChain, OpenAI APIs, Hugging Face, LoRA, QLoRA, RAG Pipelines, Vector Embeddings, YOLOv8\n\n**Cloud & DevOps:** AWS, AWS SageMaker, Docker, FastAPI\n\n**Databases:** MySQL, Neo4j (Graph DB)\n\n**Web Dev:** React, Flutter, Angular, PHP, Tailwind CSS\n\n**Tools:** Git/GitHub, VS Code, PyCharm, Postman, Jupyter Notebook`,
    chips: ["Python & ML", "LLM experience", "Web dev skills", "Contact him"],
  },

  /* ── Python / ML stack ── */
  {
    tags: ["python", "pytorch", "tensorflow", "keras", "numpy", "pandas", "scikit", "matplotlib", "data science"],
    response: `Litheesh is highly proficient in **Python** and its full ML/data ecosystem:\n\n**Deep Learning:** TensorFlow, PyTorch, Keras\n**Data Science:** NumPy, Pandas, Matplotlib, scikit-learn\n**Computer Vision:** OpenCV, YOLOv8\n**NLP / LLM:** LangChain, Hugging Face, BERT, RAG Pipelines\n**Deployment:** FastAPI, ONNX, TorchScript, AWS SageMaker\n\nUsed Python across all professional roles and personal projects.`,
    chips: ["LLM experience", "His projects", "His experience"],
  },

  /* ── LLM / GenAI ── */
  {
    tags: ["llm", "large language model", "langchain", "openai", "gpt", "hugging face", "rag", "lora", "fine-tun", "generative", "genai", "chatbot ai", "nlp", "bert", "transformer", "vector", "embedding"],
    response: `Litheesh has strong hands-on **LLM & GenAI** experience:\n\n• Fine-tuned **CodeLlama-7B** with LoRA/PEFT → **+28% accuracy**\n• Built **RAG pipelines** with vector embedding search systems\n• Deployed LLMs on **AWS SageMaker** (sub-250ms inference)\n• Used **LangChain + OpenAI APIs** for production chatbots at Isahghan Minds\n• Applied **4-bit quantization** to reduce GPU memory by 60%\n• BERT-powered multilingual extension serving **5K+ users**\n• QLoRA, Hugging Face, and domain-specific fine-tuning experience`,
    chips: ["Code Suggester project", "NLTA project", "His experience"],
  },

  /* ── Computer Vision ── */
  {
    tags: ["computer vision", "opencv", "yolo", "yolov8", "image", "detection", "segmentation", "cnn", "visual", "object detection", "cv"],
    response: `Litheesh has solid **Computer Vision** experience:\n\n• Built **YOLOv8** real-time pipelines at Isahghan Minds (70–80% accuracy)\n• **Brain tumor segmentation** using pixel-level CNN (**95%+ accuracy**)\n• **Dog breed classification** using ResNet/EfficientNet Transfer Learning (90–95%)\n• OpenCV preprocessing pipelines for MRI scans & production systems\n• Benchmarked CNN, KNN, and SVM architectures`,
    chips: ["Brain Tumor project", "Dog Breed project", "His experience"],
  },

  /* ── Cloud / DevOps ── */
  {
    tags: ["aws", "cloud", "docker", "sagemaker", "deploy", "deployment", "devops", "ci/cd", "pipeline", "container", "production"],
    response: `**Cloud & Deployment Skills** ☁️\n\n• **AWS SageMaker** — deployed LLMs for sub-250ms inference\n• **Docker** — containerized ML workflows at ESI Software\n• **FastAPI** — REST APIs for ML model serving\n• **CI/CD pipelines** with ONNX/TorchScript for automated retraining\n• Postman for REST API validation across 10+ endpoints on AWS`,
    chips: ["Code Suggester project", "His experience", "His skills"],
  },

  /* ── Projects (general) ── */
  {
    tags: ["project", "projects", "built", "portfolio", "work done", "what has he made", "show projects", "all projects"],
    response: `**Litheesh's Projects** 🛠️\n\n**AI / ML:**\n• 🔍 Agent Flight Recorder — LLM agent tracing, failure detection & CI regression gate\n• 🧩 Multi-Agent RAG Platform — LangGraph, 30K+ req/month, precision@k 68→87%\n• ❄️ SmartSnow — Deep RL snow plow routing (10M timesteps)\n• 🤖 AI Code Suggester — CodeLlama-7B, 250ms on AWS SageMaker\n• 🧠 Brain Tumor Segmentation — CNN pipeline, 95%+ accuracy\n• 🌐 NLTA Browser Extension — 50+ languages, 5K+ users\n• 🐕 Dog Breed Classifier — ResNet/EfficientNet, 90–95%\n• 🗳️ Blockchain e-Voting — Published in IARJSET (2024)\n\n**Web Development:**\n• 🛒 Anbu CocoMart — Live e-commerce (anbucocomart.in)\n• 🪑 KS Modular — Modular furniture business site\n• 🦷 AuSmile Dental — Healthcare site (Australia)\n• 🏢 Stavat Systems — Corporate website\n\nAsk me about any specific project for details!`,
    chips: ["Code Suggester", "Brain Tumor project", "NLTA project", "Web projects"],
  },

  /* ── Code Suggester ── */
  {
    tags: ["code suggester", "code suggestion", "ide", "codellama", "code llama", "code completion", "peft", "sagemaker", "onnx", "torchscript", "quantization"],
    response: `**AI-Powered Code Suggester in IDEs** 💻\n\nFine-tuned CodeLlama-7B for intelligent IDE code completions.\n\n• Fine-tuned on **50K+ Python functions** with LoRA/PEFT → **+28% accuracy**\n• **4-bit quantization** cut GPU memory by **60%** with zero quality loss\n• Custom tokenizer: latency from **800ms → 250ms**\n• Deployed on **AWS SageMaker** as FastAPI REST API\n• Full CI/CD with ONNX/TorchScript for automated retraining & deployment\n\n**Stack:** Python, CodeLlama-7B, LoRA/PEFT, FastAPI, AWS SageMaker, ONNX`,
    chips: ["His LLM skills", "His experience", "Other projects"],
  },

  /* ── Brain Tumor ── */
  {
    tags: ["brain tumor", "brain", "tumor", "mri", "medical", "segmentation", "clinical", "benign", "malignant", "pixel"],
    response: `**Brain Tumor Segmentation** 🧠\n\nEnd-to-end ML pipeline for MRI classification and pixel-level tumor segmentation.\n\n• Full pipeline: benign vs. malignant **MRI scan classification**\n• **Pixel-level segmentation** using CNN for clinical decision-making\n• **CNN achieved 95%+** on precision, recall & F1\n• Benchmarked CNN vs. KNN vs. SVM — CNN won across all metrics\n• OpenCV preprocessing standardized inputs across varied scan qualities\n\n**Stack:** Python, TensorFlow, CNN, OpenCV, scikit-learn`,
    chips: ["Dog Breed project", "His CV skills", "Other AI projects"],
  },

  /* ── NLTA Extension ── */
  {
    tags: ["nlta", "multilingual", "browser extension", "translation", "translate", "chrome extension", "language detection", "chrome", "extension", "50 language"],
    response: `**NLTA — Multilingual Browser Extension** 🌐\n\nReal-time language detection and translation Chrome extension.\n\n• Detects non-native content with **~80% accuracy**\n• Translates across **50+ languages** in **150–300ms** (ChatGPT + BERT)\n• Served **1,000–5,000 active users**\n• Python FastAPI backend for low-latency NLP processing\n• Boosts cross-cultural accessibility by **30%**\n• Seamless UI — integrates into any webpage without disruption\n\n**Stack:** JavaScript, React, Chrome API, Python, FastAPI, BERT, ChatGPT`,
    chips: ["His NLP skills", "Code Suggester", "Other projects"],
  },

  /* ── Blockchain / e-Voting ── */
  {
    tags: ["blockchain", "voting", "e-voting", "ethereum", "smart contract", "decentralized", "fraud", "election", "immutable"],
    response: `**Decentralized e-Voting System using Blockchain** 🗳️\n\nFraud-resistant voting combining blockchain + AI anomaly detection.\n\n• **Ethereum blockchain** for tamper-proof vote storage\n• **AI anomaly detection** to flag fraudulent voting patterns\n• Smart contracts enforce vote immutability\n• Cryptographic verification prevents double-voting\n\n📄 **Published in IARJSET** — Vol 11, Issue 5, 2024\n\n**Stack:** Blockchain, Python, AI, Smart Contracts`,
    chips: ["His publication", "Other AI projects", "Contact him"],
  },

  /* ── Dog Breed ── */
  {
    tags: ["dog breed", "dog", "breed", "resnet", "efficientnet", "transfer learning", "imagenet", "classification"],
    response: `**Dog Breed Classification** 🐕\n\nTransfer Learning project built during his ML internship at Coincent.ai.\n\n• Multi-class classification using **ResNet & EfficientNet** (ImageNet weights)\n• Achieved **90–95% accuracy** across multiple breed categories\n• Comparative analysis: ResNet vs. EfficientNet vs. MLP\n• Data augmentation pipeline for better generalization on limited data\n\n**Stack:** Python, PyTorch, ResNet, EfficientNet, Transfer Learning`,
    chips: ["Brain Tumor project", "His CV experience", "Other projects"],
  },

  /* ── Web projects ── */
  {
    tags: ["web", "website", "frontend", "backend", "full stack", "fullstack", "anbu", "cocomart", "ks modular", "furniture", "ecommerce", "dental", "ausmile", "stavat", "php", "jquery", "html css"],
    response: `**Web Development Projects** 🌐\n\n🛒 **Anbu CocoMart** — Full e-commerce platform for coconut farmers\n(Live at anbucocomart.in)\n\n🪑 **KS Modular** — Premium modular furniture business website with portfolio gallery, SEO & lead forms\n\n🦷 **AuSmile Dental** — Healthcare website for an Australian dental clinic\n\n🏢 **Stavat Systems** — Corporate website for Bangalore-based company\n\n**Stack:** React, HTML, jQuery, Tailwind CSS, PHP, MySQL`,
    chips: ["His full-stack skills", "AI projects", "Contact him"],
  },

  /* ── Publication / Research ── */
  {
    tags: ["publication", "published", "paper", "research", "journal", "iarjset", "academic", "article", "research paper"],
    response: `📄 **Research Publication**\n\n**"A Decentralized e-Voting System using Blockchain"**\n\nPublished in **IARJSET**\n(International Advanced Research Journal in Science, Engineering and Technology)\n**Volume 11, Issue 5 — 2024**\n\nThe paper presents a secure e-voting architecture using Ethereum blockchain combined with AI-based anomaly detection to prevent electoral fraud and guarantee transparent, trustworthy results.`,
    chips: ["Blockchain project", "His AI projects", "Contact him"],
  },

  /* ── Contact ── */
  {
    tags: ["contact", "reach", "email", "phone", "linkedin", "hire", "connect", "get in touch", "message", "talk", "meet", "opportunity", "job", "position", "recruit", "hiring", "available for"],
    response: `**Contact Litheesh** 📬\n\n📧 **Email:** vrlitheesh2002@gmail.com\n📧 **University:** litheesh@buffalo.edu\n📱 **Phone:** (716) 368-9971\n💼 **LinkedIn:** linkedin.com/in/litheesh-rambabu\n📍 **Location:** Buffalo, NY, USA\n\nHe's open to **full-time roles**, **research collaborations**, **freelance projects**, and **internships** in AI/ML and web engineering.\n\n⏱ Usually responds within 24 hours.`,
    chips: ["His skills", "His projects", "His experience"],
  },

  /* ── Location ── */
  {
    tags: ["location", "where", "city", "country", "based", "live", "buffalo", "new york", "india", "bangalore", "timezone"],
    response: `**Location** 📍\n\nLitheesh is currently based in **Buffalo, NY, USA**, where he's pursuing his Masters in AI at the University at Buffalo.\n\nHe's originally from **Bangalore, India**, where he completed his Bachelor's in AI & ML (VTU / KSIT).\n\n**Timezone:** EST (UTC −5)`,
    chips: ["His education", "Contact him"],
  },

  /* ── Availability ── */
  {
    tags: ["available", "availability", "open to", "looking for", "seeking", "full time", "fulltime", "internship opportunities", "hire me", "open for work"],
    response: `Litheesh is currently **open to opportunities** 🟢\n\n✅ Full-time AI/ML Engineering roles\n✅ Research collaborations\n✅ Freelance & contract projects\n✅ AI/ML internships\n\n📧 Reach him at: **vrlitheesh2002@gmail.com**\n💼 Or on LinkedIn: **linkedin.com/in/litheesh-rambabu**\n\n⏱ Usually responds within 24 hours.`,
    chips: ["His skills", "Contact info", "His projects"],
  },

  /* ── Thank you ── */
  {
    tags: ["thank", "thanks", "thank you", "appreciate", "helpful", "great", "awesome", "cool", "nice", "perfect", "good job"],
    response: `You're welcome! 😊 Happy to help anytime.\n\nIf you'd like to connect with Litheesh directly, feel free to reach out at **vrlitheesh2002@gmail.com** or on LinkedIn!`,
    chips: ["Contact info", "His projects", "His experience"],
  },

  /* ── Bye ── */
  {
    tags: ["bye", "goodbye", "see you", "later", "cya", "good night", "take care", "farewell"],
    response: `Goodbye! 👋 Feel free to come back anytime.\n\nDon't forget — Litheesh is always reachable at **vrlitheesh2002@gmail.com** or on LinkedIn!`,
    chips: ["Contact info"],
  },

  /* ── What is SHISIYA ── */
  {
    tags: ["what is shisiya", "who are you", "shisiya", "your name", "what are you", "introduce yourself", "about you", "what can you do"],
    response: `I'm **SHISIYA** 🤖 — Litheesh's personal AI assistant built into this portfolio.\n\nI'm trained on his full resume, projects, experience, skills, and more. I can answer any question about him instantly!\n\nTry asking me about his projects, skills, work history, or how to get in touch.`,
    chips: ["Who is Litheesh?", "His projects", "Contact info"],
  },
];

// ── Response matching engine ──────────────────────────────────────────────────
const FALLBACK = {
  response: `Hmm, I'm not sure about that one. 🤔\n\nI can tell you about Litheesh's **skills**, **projects**, **work experience**, **education**, or how to **contact him**.\n\nTry something like "What are his skills?" or "Tell me about his projects."`,
  chips: ["His skills", "His projects", "His experience", "Contact info"],
};

function findResponse(input) {
  const lower = input.toLowerCase().trim();

  let bestIntent = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const tag of intent.tags) {
      if (lower.includes(tag)) {
        score += tag.split(" ").length + 1; // longer phrase match = higher score
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return bestScore > 0 ? bestIntent : FALLBACK;
}

// ── Simple markdown renderer (handles **bold** and \n) ────────────────────────
function renderText(text) {
  return text.split(/(\*\*[^*]+\*\*|\n)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    if (part === "\n") return <br key={i} />;
    return <span key={i}>{part}</span>;
  });
}

// ── Typing indicator ──────────────────────────────────────────────────────────
const TypingDots = () => (
  <div className="flex items-start">
    <div
      className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5"
      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#00cea8" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.55, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  </div>
);

// ── Main Chatbot Component ────────────────────────────────────────────────────
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: "bot",
      text: `Hi there! 👋 I'm **SHISIYA**, Litheesh's personal AI assistant.\n\nAsk me anything about his skills, projects, experience, education, or how to reach him!`,
      chips: ["Who is Litheesh?", "His skills", "His projects", "Contact info"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), sender: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate a natural thinking delay
    const delay = 600 + Math.random() * 500;
    setTimeout(() => {
      const result = findResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: result.response,
          chips: result.chips || [],
        },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Chat panel ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-[185px] right-4 sm:right-6 z-50
                       w-[calc(100vw-2rem)] sm:w-[380px]
                       flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(#0d1226, #0d1226) padding-box, linear-gradient(135deg, #00cea8, #bf61ff) border-box",
              border: "1px solid transparent",
              maxHeight: "min(560px, calc(100vh - 120px))",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(0,206,168,0.12), rgba(191,97,255,0.12))",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(0,206,168,0.15), rgba(191,97,255,0.15))", border: "1px solid rgba(0,206,168,0.3)" }}
                >
                  <MoonOrbSVG size={26} isOpen={false} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15px] leading-none tracking-wide">SHISIYA</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
                    </span>
                    <p className="text-[#4ade80] text-[11px]">Online · AI Assistant</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-secondary hover:text-white transition-colors text-[13px]"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4"
              style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-2 ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  {/* Bubble */}
                  <div
                    className={`max-w-[88%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      msg.sender === "user"
                        ? "rounded-2xl rounded-br-sm text-white"
                        : "rounded-2xl rounded-bl-sm text-[#e2e8f0]"
                    }`}
                    style={
                      msg.sender === "user"
                        ? { background: "linear-gradient(135deg, #00cea8, #bf61ff)" }
                        : {
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }
                    }
                  >
                    {renderText(msg.text)}
                  </div>

                  {/* Quick reply chips */}
                  {msg.sender === "bot" && msg.chips?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 max-w-[88%]">
                      {msg.chips.map((chip) => (
                        <button
                          key={chip}
                          onClick={() => sendMessage(chip)}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors duration-150 hover:bg-[rgba(0,206,168,0.2)]"
                          style={{
                            background: "rgba(0,206,168,0.08)",
                            border: "1px solid rgba(0,206,168,0.25)",
                            color: "#00cea8",
                          }}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && <TypingDots />}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Litheesh…"
                className="flex-1 bg-transparent text-white text-[13px] outline-none placeholder:text-[#6b7280] min-w-0"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isTyping}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-xl transition-opacity duration-200 disabled:opacity-30"
                style={{ background: "linear-gradient(135deg, #00cea8, #bf61ff)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MoonOrb floating toggle ──────────────────────────────────────────── */}
      <div className="fixed bottom-[100px] right-4 sm:right-6 z-50 flex items-center">

        {/* SHISIYA label badge — slides in from right when chat is closed */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.92 }}
              animate={{ opacity: 1, x: 0,  scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.92 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mr-2 px-3 py-1.5 rounded-xl text-white text-[11px] font-bold tracking-widest select-none pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(0,206,168,0.12), rgba(191,97,255,0.12))",
                border: "1px solid rgba(0,206,168,0.28)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              SHISIYA
            </motion.div>
          )}
        </AnimatePresence>

        {/* The orb button itself */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          animate={!isOpen ? {
            y: [0, -6, 0, -3, 0],
            transition: { duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }
          } : { y: 0 }}
          className="relative flex items-center justify-center rounded-full"
          style={{
            width: 62,
            height: 62,
            filter: isOpen
              ? "drop-shadow(0 0 8px rgba(0,206,168,0.4)) drop-shadow(0 0 18px rgba(191,97,255,0.25))"
              : "drop-shadow(0 0 14px rgba(0,206,168,0.65)) drop-shadow(0 0 30px rgba(191,97,255,0.4))",
            transition: "filter 0.3s ease",
          }}
        >
          <MoonOrbSVG size={62} isOpen={isOpen} />

          {/* Pulse dot — online indicator, hidden when open */}
          {!isOpen && (
            <span className="absolute top-0.5 right-0.5 z-10">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-65" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#4ade80]" />
              </span>
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default Chatbot;
