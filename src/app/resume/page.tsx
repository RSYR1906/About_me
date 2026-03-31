import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume — Ryan Sim Yao Rong",
  description:
    "Resume of Ryan Sim Yao Rong — Associate System Engineer at Visa, NTU graduate, full-stack developer.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const education = {
  school: "Nanyang Technological University (NTU), Singapore",
  degree:
    "Bachelor of Science in Biological Sciences with Minor in Computing & Data Analytics",
  period: "Aug 2020 – May 2024",
};

const workExperience = [
  {
    role: "Associate System Engineer",
    company: "Visa Worldwide Inc",
    period: "Oct 2025 – Present",
    bullets: [
      "Support mission-critical payment and ATM transaction systems using HPE NonStop (Tandem) infrastructure",
      "Utilize TACL (Tandem Advanced Command Language) for system management, diagnostics, and automation",
      "Monitor system performance and availability using Prognosis and enterprise monitoring tools to ensure 24/7 uptime",
      "Investigate and resolve transaction issues across complex payment networks, maintaining high system reliability",
      "Collaborate with internal engineering teams and external vendors to ensure system stability and performance",
      "Gain hands-on experience in real-time processing, fault-tolerant systems, and financial transaction infrastructure",
    ],
  },
  {
    role: "Tech Trainee (NUS-ISS Programme)",
    company: "Visa Worldwide Inc",
    period: "Oct 2024 – Sep 2025",
    bullets: [
      "Trained in full-stack development using Java, Spring Boot, Angular, MongoDB, Redis, and MySQL",
      "Built and deployed full-stack applications integrating frontend, backend, and database systems",
      "Developed RESTful APIs and implemented authentication and data management workflows",
      "Gained exposure to scalable system design and modern web development practices",
      "Transitioned into full-time engineering role upon programme completion",
    ],
  },
];

const projects = [
  {
    title: "PaperWorth – Receipt Capture & Expense Tracking Application",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Architected and implemented a full-stack application using Angular and Spring Boot with Firebase authentication",
      "Integrated Google Vision OCR API for automated receipt scanning and data extraction",
      "Designed MongoDB and MySQL hybrid database architecture with RESTful APIs",
      "Developed promotion-matching algorithms to deliver personalized recommendations",
      "Implemented gamified rewards system with tiered membership and redeemable incentives",
      "Enabled Progressive Web App (PWA) features including offline functionality and performance optimization",
    ],
  },
  {
    title: "NTU Final Year Project – RNA-seq Generation using GANs",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Developed GAN models to scale small RNA-seq datasets into full datasets",
      "Processed biological data using bioinformatics pipelines",
      "Optimized generator and discriminator networks to replicate realistic gene expression profiles",
      "Validated outputs against biological metrics for accuracy",
    ],
  },
  {
    title: "LFG (Looking For Group) – Gaming Matchmaking Platform",
    period: "Jan 2024 – May 2024",
    bullets: [
      "Developed web application using Steam API to retrieve user profiles and game libraries",
      "Implemented matchmaking features including session creation and joining",
      "Built authentication and session management functionalities",
      "Delivered functional prototype within 11-week development cycle",
    ],
  },
];

const skillCategories = [
  {
    label: "Programming Languages",
    items: ["C", "Python", "R", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Technologies & Tools",
    items: [
      "Angular",
      "Spring Boot",
      "Firebase",
      "MongoDB",
      "MySQL",
      "Redis",
      "Linux",
      "TACL (NonStop)",
      "Jupyter Notebook",
      "R Studio",
      "VS Code",
      "IntelliJ",
      "PyCharm",
    ],
  },
  {
    label: "Core Competencies",
    items: [
      "Systems & Infrastructure Engineering",
      "High-Availability & Fault-Tolerant Systems",
      "Full-Stack Development",
      "Data Analysis & Machine Learning Fundamentals",
      "Problem Solving & Analytical Thinking",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */
/*  Shared Components                                                  */
/* ------------------------------------------------------------------ */

function SectionTitle({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h2 className="text-xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ResumeCard({
  title,
  subtitle,
  period,
  bullets,
}: {
  title: string;
  subtitle?: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-xl border bg-card p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-primary font-medium text-sm">{subtitle}</p>
          )}
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {period}
        </span>
      </div>
      <BulletList items={bullets} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ResumePage() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-flex items-center gap-1"
        >
          ← Back to home
        </Link>

        {/* ---- Header ---- */}
        <header className="mt-6 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ryan Sim <span className="text-primary">Yao Rong</span>
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Singapore
            </span>
            <a
              href="tel:+6580901071"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +65 8090 1071
            </a>
            <a
              href="mailto:rsim9977@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              rsim9977@gmail.com
            </a>
          </div>
          <a
            href="/Ryan_Resume_2026.pdf"
            download
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline transition-colors"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </header>

        <hr className="border-border mb-10" />

        {/* ---- Education ---- */}
        <div className="mb-12">
          <SectionTitle icon={<GraduationCap className="h-5 w-5" />}>
            Education
          </SectionTitle>
          <div className="rounded-xl border bg-card p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold">{education.school}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {education.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{education.degree}</p>
          </div>
        </div>

        {/* ---- Work Experience ---- */}
        <div className="mb-12">
          <SectionTitle icon={<Briefcase className="h-5 w-5" />}>
            Work Experience
          </SectionTitle>
          <div className="space-y-6">
            {workExperience.map((job) => (
              <ResumeCard
                key={job.role}
                title={job.role}
                subtitle={job.company}
                period={job.period}
                bullets={job.bullets}
              />
            ))}
          </div>
        </div>

        {/* ---- Projects ---- */}
        <div className="mb-12">
          <SectionTitle icon={<Code2 className="h-5 w-5" />}>
            Projects
          </SectionTitle>
          <div className="space-y-6">
            {projects.map((proj) => (
              <ResumeCard
                key={proj.title}
                title={proj.title}
                period={proj.period}
                bullets={proj.bullets}
              />
            ))}
          </div>
        </div>

        {/* ---- Skills ---- */}
        <div className="mb-12">
          <SectionTitle icon={<Code2 className="h-5 w-5" />}>
            Skills
          </SectionTitle>
          <div className="rounded-xl border bg-card p-5 sm:p-6 space-y-5">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="text-xs px-2.5 py-0.5"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
