export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "paperworth",
    title: "PaperWorth",
    description:
      "A full-stack receipt capture & expense tracking app with Google Vision OCR, promotion-matching algorithms, gamified rewards, and PWA support. Built with Angular, Spring Boot, Firebase, and MySQL/MongoDB.",
    tags: [
      "Angular",
      "Spring Boot",
      "Java",
      "Firebase",
      "Google Vision OCR",
      "MySQL",
      "MongoDB",
      "PWA",
    ],
    githubUrl: "https://github.com/RSYR1906/PaperWorth",
    liveUrl: "https://paperworth.vercel.app",
    featured: true,
  },
  {
    slug: "lfg",
    title: "LFG – Gaming Matchmaking Platform",
    description:
      "A web application using the Steam API to retrieve user profiles and game libraries. Features matchmaking with session creation/joining, authentication, and session management — delivered within an 11-week cycle.",
    tags: ["Java", "Steam API", "Web App", "Authentication"],
    githubUrl: "https://github.com/RSYR1906/ssf-mini-project",
    featured: true,
  },
  {
    slug: "fyp-tabgan",
    title: "FYP — RNA-seq Generation using GANs",
    description:
      "Final Year Project: Developed GAN models to scale small RNA-seq datasets into full datasets. Optimized generator/discriminator networks and validated outputs against biological metrics.",
    tags: ["Python", "Machine Learning", "GAN", "Bioinformatics"],
    githubUrl: "https://github.com/RSYR1906/FYP_TabGAN",
    featured: true,
  },
  {
    slug: "coinradar",
    title: "CoinRadar",
    description:
      "A cryptocurrency tracking application built with Spring Boot. Browse and monitor real-time crypto data through a clean, responsive web interface.",
    tags: ["Spring Boot", "Java", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/RSYR1906/CoinRadar",
    featured: false,
  },
  {
    slug: "crypto-news",
    title: "Crypto News",
    description:
      "A crypto news aggregation platform that curates the latest cryptocurrency news. Built with a Spring Boot backend and server-rendered HTML frontend.",
    tags: ["Spring Boot", "Java", "HTML", "CSS"],
    githubUrl: "https://github.com/RSYR1906/Crypto-News",
    featured: false,
  },
  {
    slug: "events-management",
    title: "Events Management",
    description:
      "An events management system for creating, browsing and managing events. Features a Spring Boot backend with a server-rendered web interface.",
    tags: ["Spring Boot", "Java", "HTML"],
    githubUrl: "https://github.com/RSYR1906/Events-Management",
    featured: false,
  },
];
