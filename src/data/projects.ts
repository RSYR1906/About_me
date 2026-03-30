export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "keyboard-warriors",
    title: "KeyboardWarriors Game",
    description:
      "A typing speed game built with Next.js. Race against the clock, improve your WPM, and challenge yourself with dynamic word prompts — complete with animations and background music.",
    tags: ["Next.js", "JavaScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/RSYR1906/Keyboard_Warriors_Game",
    liveUrl: "https://keyboard-warriors-game.vercel.app",
    featured: true,
  },
  {
    slug: "underated",
    title: "Underated",
    description:
      "A full-stack e-commerce platform with Stripe payments, Supabase auth & database, server-side rendering, and a polished storefront UI built with shadcn/ui and Zustand state management.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Zustand",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/RSYR1906/Underated",
    liveUrl: "https://underated-zeta.vercel.app",
    featured: true,
  },
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
    slug: "coinradar",
    title: "CoinRadar",
    description:
      "A cryptocurrency tracking application built with Spring Boot. Browse and monitor real-time crypto data through a clean, responsive web interface.",
    tags: ["Spring Boot", "Java", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/RSYR1906/CoinRadar",
    featured: true,
  },
];
