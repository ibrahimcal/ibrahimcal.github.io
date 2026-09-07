import type { ReactNode } from "react";

export type BadgeTone = "brass" | "jade";

export interface Metric {
  value: string;
  plain?: boolean;
  label: string;
}

export interface ProjectCard {
  name: string;
  badge: string;
  tone: BadgeTone;
  wide?: boolean;
  description: ReactNode;
  stack: string[];
}

export interface Job {
  role: string;
  org: string;
  meta: string;
  now?: boolean;
  description: ReactNode;
}

export interface ToolkitChip {
  label: string;
  key?: boolean;
}

export interface ToolkitRow {
  category: string;
  chips: ToolkitChip[];
}

export interface Degree {
  title: string;
  org: string;
  year: string;
}

export interface Publication {
  title: string;
  venue: string;
}

export const DATA = {
  name: "Ibrahim Abdul Majeed",
  nameArabic: "إبراهيم عبد المجيد",
  honorific: "PhD",
  title: "Agentic AI & Enterprise AI Delivery",
  url: "https://ibrahimcal.github.io",
  location: "Riyadh, Saudi Arabia",
  updated: "August 2026",

  contact: {
    email: "ibrahim.am@gmail.com",
    mailto: "mailto:ibrahim.am@gmail.com",
    phone: "+966538381418",
    phoneDisplay: "+966 53 838 1418",
    tel: "tel:+966538381418",
    whatsapp: "https://wa.me/966538381418",
    whatsappMessage:
      "https://wa.me/966538381418?text=Hi%20Ibrahim%2C%20I%20found%20your%20site%20and%20would%20like%20to%20connect!",
    linkedin: "https://www.linkedin.com/in/ibrahim-abdul-majeed-60968b67/",
    github: "https://github.com/ibrahimcal",
    resume: "/Ibrahim_Abdul_Majeed_CV.pdf",
  },

  hero: {
    availability: "Open to senior AI roles",
    location: "Riyadh, Saudi Arabia",
    residency: "Premium Resident",
    suffix: "PhD · Agentic AI & Enterprise AI Delivery",
    tagline: "I take AI research all the way to production — and then keep it running.",
    copy: (
      <>
        {"Nine years of AI that ships: Saudi Arabia's national Arabic model "}
        <b>ALLaM</b>
        {" at SDAIA, the agentic AI practice at "}
        <b>Humain</b>
        {", conversational AI at "}
        <b>Amazon</b>
        {", and six US patents from healthcare research at "}
        <b>Samsung</b>
        {
          ". PhD from IISc Bangalore. Architecture, delivery and the code underneath it."
        }
      </>
    ),
  },

  metrics: [
    { value: "9+", label: "Years in AI/ML, research through production" },
    { value: "PhD", plain: true, label: "Data mining & ML, IISc Bangalore" },
    { value: "6", label: "US patents in healthcare AI" },
    { value: "$500M", label: "Savings identified at Samsung" },
    { value: "60%", label: "Faster time-to-first-token on LLM serving" },
    { value: "35%", label: "Better model convergence from curriculum training" },
  ] satisfies Metric[],

  about: {
    heading: "Start here",
    paragraphs: [
      "Most of my career has gone into the gap between a model that works in a notebook and a system a government or a bank will actually put in front of users. That gap is where I'm useful.",
      (
        <>
          {"At "}
          <b>SDAIA</b>
          {
            " I was senior lead on ALLaM, Saudi Arabia's national Arabic model — shipping its agentic capabilities, contributing tool-calling for "
          }
          <b>Tawakkalnaa</b>
          {
            ", and writing the organisation's AI safety and governance framework. At "
          }
          <b>Humain</b>
          {
            " I led the engineering team behind agentic AI, function calling and RAG, owning delivery from requirements through stakeholder sign-off. Before Saudi Arabia: conversational AI at "
          }
          <b>Amazon</b>
          {", and five years of healthcare AI research at "}
          <b>Samsung</b>
          {" that produced six US patents."}
        </>
      ),
      "I'm consulting independently right now — advising KSA government-related entities on AI adoption while building two products of my own. What I bring is range: I can set the architecture and the governance model for a programme, and I can go into the LangGraph pipeline or the inference stack when the problem calls for it. Both are places I'm comfortable working.",
    ] as ReactNode[],
    now: [
      {
        term: "Doing",
        detail: (
          <>
            {"Independent AI consulting "}
            <span>
              — architecture standards and vendor evaluation for KSA
              government-related entities
            </span>
          </>
        ),
      },
      {
        term: "Building",
        detail: (
          <>
            {"LexiMind "}
            <span>and</span>
            {" PlanWise "}
            <span>— bilingual legal AI and FMCG demand forecasting</span>
          </>
        ),
      },
      {
        term: "Based in",
        detail: (
          <>
            {"Riyadh "}
            <span>— Saudi Arabia Premium Resident</span>
          </>
        ),
      },
      {
        term: "Looking for",
        detail: (
          <>
            {"Senior AI leadership, solutions architecture, or consulting "}
            <span>— permanent or engagement-based</span>
          </>
        ),
      },
    ] as { term: string; detail: ReactNode }[],
  },

  focus: {
    heading: "Where I'm most useful",
    note: "Four areas where I've done the work more than once, at scale, with someone's name on the outcome.",
    rows: [
      {
        title: "Agentic AI & LLM systems",
        description: (
          <>
            {"Multi-agent orchestration, function calling and RAG with "}
            <b>LangGraph</b>
            {", "}
            <b>AutoGen</b>
            {
              " and hybrid retrieval — built for production traffic, not demos."
            }
          </>
        ),
      },
      {
        title: "Enterprise AI delivery",
        description:
          "Full solution lifecycle at government and PIF scale: requirements, architecture, testing, deployment, stakeholder acceptance. Including secure and air-gapped environments.",
      },
      {
        title: "Inference & serving",
        description: (
          <>
            {"Optimisation with "}
            <b>vLLM</b>
            {", "}
            <b>SGLang</b>
            {
              " and Triton on Kubernetes — paged attention, continuous batching, quantisation, speculative decoding. "
            }
            <b>60% faster</b>
            {" time to first token."}
          </>
        ),
      },
      {
        title: "Arabic & culturally-sensitive AI",
        description: (
          <>
            {
              "Safety frameworks and content verification for Arabic and Islamic contexts, including "
            }
            <b>Quran hallucination mitigation</b>
            {" for national deployments."}
          </>
        ),
      },
    ] as { title: string; description: ReactNode }[],
  },

  work: {
    heading: "Things that went live",
    note: "Systems I built or led that reached real users — national platforms, global marketplaces and clinical-grade hardware.",
    cards: [
      {
        name: "ALLaM agentic capabilities",
        badge: "SDAIA · Humain",
        tone: "brass",
        wide: true,
        description: (
          <>
            {
              "Function calling and multi-agent orchestration for Saudi Arabia's national Arabic LLM, delivered into secure government environments — including tool-calling integration for "
            }
            <b>Tawakkalnaa</b>
            {
              ", the national services app. Covered curriculum-based training that improved model convergence by "
            }
            <b>35%</b>
            {", and an inference stack tuned for production latency."}
          </>
        ),
        stack: ["LangGraph", "AutoGen", "NVIDIA NeMo", "vLLM", "Kubernetes", "Azure"],
      },
      {
        name: "ALLaM PC productivity suite",
        badge: "SDAIA",
        tone: "brass",
        description:
          "Meeting scheduling, email drafting and inbox summarisation, shipped as part of the ALLaM PC product launch — coordinated across model training, integration testing and end-user training.",
        stack: ["LLM tool calling", "Agent orchestration"],
      },
      {
        name: "AI safety & governance framework",
        badge: "SDAIA",
        tone: "brass",
        description:
          "Organisation-wide policy, implementation guidelines and compliance monitoring — including culturally-sensitive verification for Arabic and Islamic content across national deployments.",
        stack: ["Governance", "Risk assessment", "Arabic content safety"],
      },
      {
        name: "Purchase-guidance chatbot",
        badge: "Amazon",
        tone: "brass",
        description: (
          <>
            {
              "Conversational assistant for high-value electronics on Amazon's global platform — NER, slot filling and transformer intent classification. Lifted "
            }
            <b>customer satisfaction by 10%</b>
            {"."}
          </>
        ),
        stack: ["Amazon Lex", "Comprehend", "AWS"],
      },
      {
        name: "Non-invasive glucose monitoring",
        badge: "Samsung · 6 patents",
        tone: "brass",
        description: (
          <>
            {"Prediction algorithms reaching "}
            <b>Region A clinical accuracy</b>
            {
              " on the Clarke Error Grid, with PPG motion-artifact removal — built with Samsung Advanced Institute of Technology."
            }
          </>
        ),
        stack: ["Near-infrared spectroscopy", "Signal processing"],
      },
    ] satisfies ProjectCard[],
  },

  builds: {
    heading: "Built on my own time",
    note: "Independent products and engineering projects. This is where I stay hands-on.",
    cards: [
      {
        name: "LexiMind",
        badge: "2026 · in progress",
        tone: "jade",
        wide: true,
        description: (
          <>
            {
              "Bilingual Arabic/English legal AI assistant for KSA and MENA firms, covering civil-law codes and Sharia jurisprudence. An "
            }
            <b>8-agent LangGraph pipeline</b>
            {
              " with hybrid dense + BM25 retrieval fused by reciprocal rank fusion, a cross-encoder reranker, and live regulation sync from the Official Gazette. Hardened with JWT auth and prompt-injection protection — "
            }
            <b>87 backend and 28 end-to-end tests passing</b>
            {"."}
          </>
        ),
        stack: ["LangGraph", "FastAPI", "Weaviate", "AWS Bedrock", "Next.js 14"],
      },
      {
        name: "PlanWise",
        badge: "2026 · in progress",
        tone: "jade",
        description:
          "Multi-tenant AI demand-forecasting platform for FMCG supply chains — statistical baselines running alongside LightGBM and a Temporal Fusion Transformer.",
        stack: ["LightGBM", "Temporal Fusion Transformer", "Python"],
      },
      {
        name: "Sales Intelligence Agent",
        badge: "2024–25",
        tone: "brass",
        description:
          "Conversational agent that discovers and enriches business leads from a plain-language target description, with a hub-and-spoke dashboard routing AI assistant, category search and map views into one agent.",
        stack: ["LangGraph", "Azure OpenAI", "Playwright", "Next.js", "SSE streaming"],
      },
      {
        name: "LLM Evaluation Agent",
        badge: "2025",
        tone: "brass",
        description: (
          <>
            {
              "Takes an Excel evaluation set and routes it autonomously through extraction, scoring and report-generation nodes — running "
            }
            <b>Llama-3.3-70B locally via vLLM</b>
            {"."}
          </>
        ),
        stack: ["LangGraph", "vLLM", "Llama-3.3-70B"],
      },
      {
        name: "Multi-Agent Financial Report Analyst",
        badge: "2024",
        tone: "brass",
        description:
          "Five-node plan → research → generate → reflect → critique pipeline with stateful checkpointing and human-in-the-loop revision.",
        stack: ["LangGraph", "GPT-4", "Tavily Search"],
      },
    ] satisfies ProjectCard[],
  },

  experience: {
    heading: "Where the work happened",
    note: "Eleven years across research institutes, a national AI authority, and two of the largest engineering organisations in the world.",
    jobs: [
      {
        role: "Independent AI & Technology Consultant",
        org: "Self-employed",
        meta: "Apr 2026 — Present · Riyadh",
        now: true,
        description: (
          <>
            {"Advising "}
            <b>KSA government-related entities</b>
            {
              " on AI adoption, architecture standards and vendor evaluation. Delivered an FMCG field-sales platform end-to-end as a two-person founding team, integrated with "
            }
            <b>NetSuite ERP</b>
            {"."}
          </>
        ),
      },
      {
        role: "Senior Principal AI Researcher",
        org: "Humain (PIF-supported)",
        meta: "Apr 2025 — Mar 2026 · Riyadh",
        description: (
          <>
            {
              "Led the engineering team across agentic AI, function calling and RAG. Cut time-to-first-token by "
            }
            <b>60%</b>
            {" and improved model convergence "}
            <b>35%</b>
            {" through curriculum-based training."}
          </>
        ),
      },
      {
        role: "Expert Researcher — ALLaM LLM & Agentic AI",
        org: "National Center for AI (SDAIA)",
        meta: "Jul 2023 — Mar 2025 · Riyadh",
        description: (
          <>
            {"Senior lead on Saudi Arabia's national AI model. Delivered the "}
            <b>ALLaM PC</b>
            {" launch capabilities, tool-calling for "}
            <b>Tawakkalnaa</b>
            {", and organisation-wide AI safety policy."}
          </>
        ),
      },
      {
        role: "Applied Scientist II",
        org: "Amazon — International ML Group",
        meta: "Apr 2022 — May 2023 · Bangalore",
        description: (
          <>
            {
              "Shipped a customer-facing conversational AI for high-value electronics, lifting "
            }
            <b>customer satisfaction 10%</b>
            {"."}
          </>
        ),
      },
      {
        role: "Senior Chief Engineer",
        org: "Samsung R&D Institute India",
        meta: "May 2017 — Mar 2022 · Bangalore",
        description: (
          <>
            {"Identified "}
            <b>$500M</b>
            {
              " in potential savings through a federated-learning cost-benefit study. Six US patents in non-invasive health monitoring with SAIT."
            }
          </>
        ),
      },
      {
        role: "Assistant Professor",
        org: "NIT Calicut",
        meta: "Aug 2015 — May 2017 · Calicut",
        description:
          "Taught Pattern Recognition, Data Mining and Natural Language Processing.",
      },
    ] satisfies Job[],
  },

  toolkit: {
    heading: "What I build with",
    note: "Highlighted in brass are the things I reach for most often — the rest I've shipped with at least once.",
    rows: [
      {
        category: "Languages",
        chips: [
          { label: "Python", key: true },
          { label: "SQL" },
          { label: "TypeScript" },
          { label: "C++" },
        ],
      },
      {
        category: "Agentic & orchestration",
        chips: [
          { label: "LangGraph", key: true },
          { label: "AutoGen" },
          { label: "LangChain" },
          { label: "MCP servers" },
          { label: "Hybrid RAG", key: true },
          { label: "Dify" },
        ],
      },
      {
        category: "Inference & serving",
        chips: [
          { label: "vLLM", key: true },
          { label: "SGLang", key: true },
          { label: "TGI" },
          { label: "Triton" },
          { label: "Ray" },
          { label: "Quantization" },
          { label: "Speculative decoding" },
        ],
      },
      {
        category: "Training & frameworks",
        chips: [
          { label: "PyTorch", key: true },
          { label: "Transformers" },
          { label: "TRL (SFT/DPO/RL)" },
          { label: "NVIDIA NeMo" },
          { label: "TensorFlow" },
          { label: "XGBoost" },
        ],
      },
      {
        category: "Cloud & infrastructure",
        chips: [
          { label: "AWS Bedrock", key: true },
          { label: "Azure OpenAI" },
          { label: "Kubernetes", key: true },
          { label: "Docker" },
          { label: "Terraform" },
          { label: "FastAPI" },
          { label: "MLflow" },
        ],
      },
      {
        category: "Data",
        chips: [
          { label: "ClickHouse" },
          { label: "Data Juicer", key: true },
          { label: "PostgreSQL" },
          { label: "Qdrant" },
          { label: "Weaviate" },
          { label: "PySpark" },
          { label: "Metabase" },
        ],
      },
    ] satisfies ToolkitRow[],
  },

  research: {
    heading: "Degrees, papers, patents",
    education: [
      {
        title: "Ph.D., Data Mining & Machine Learning",
        org: "Indian Institute of Science (IISc), Bangalore",
        year: "2009 — 2016 · Advisor: Prof. P. S. Sastry",
      },
      {
        title: "M.Tech., Computer Science & Engineering",
        org: "Indian Institute of Technology (IIT), Kanpur",
        year: "Completed 2008",
      },
      {
        title: "B.Tech., Computer Science & Engineering",
        org: "National Institute of Technology (NIT), Calicut",
        year: "Completed 2004",
      },
    ] satisfies Degree[],
    patent: (
      <>
        <b>6 US patents</b>
        {
          " in healthcare AI (filed 2019–2020, Samsung R&D) — non-invasive glucose monitoring via near-infrared and diffuse-reflectance spectroscopy, PPG pre-processing, and drift, noise and motion-artifact correction."
        }
      </>
    ) as ReactNode,
    publications: [
      {
        title: "Discovering Compressing Serial Episodes from Event Sequences",
        venue: "Knowledge and Information Systems 47(2), Springer — 2016",
      },
      {
        title: "Pattern-growth Based Frequent Serial Episode Discovery",
        venue: "Data & Knowledge Engineering, Elsevier — 2013",
      },
      {
        title: "Factors Influencing Cost and Performance of Federated and Centralized ML",
        venue: "IEEE INDICON — 2022",
      },
      {
        title: "Motion Artifact Removal of Photoplethysmogram (PPG) Signal",
        venue: "IEEE EMBC — 2019",
      },
    ] satisfies Publication[],
  },

  contactSection: {
    heading: "Let's talk.",
    copy: "I'm in Riyadh and open to conversations about AI leadership, solution architecture, agentic systems, or getting an enterprise AI programme from pilot to production. WhatsApp is fastest.",
  },

  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibrahim Abdul Majeed",
    honorificSuffix: "PhD",
    jobTitle: "Independent AI & Technology Consultant",
    email: "mailto:ibrahim.am@gmail.com",
    telephone: "+966538381418",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    alumniOf: [
      "Indian Institute of Science, Bangalore",
      "IIT Kanpur",
      "NIT Calicut",
    ],
    knowsAbout: [
      "Agentic AI",
      "Large Language Models",
      "Retrieval Augmented Generation",
      "LLM Inference Optimization",
      "Arabic NLP",
    ],
    sameAs: [
      "https://www.linkedin.com/in/ibrahim-abdul-majeed-60968b67/",
      "https://github.com/ibrahimcal",
    ],
  },
} as const;
