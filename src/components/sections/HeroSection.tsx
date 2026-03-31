"use client";

import { TypewriterText } from "@/components/shared/TypewriterText";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const roles = [
  "Associate System Engineer @ Visa",
  "Full-Stack Developer",
  "Systems & Infrastructure Engineer",
  "NTU Graduate",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Animated gradient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-blob-1 absolute -top-40 -right-40 h-150 w-150 rounded-full bg-primary/10 blur-3xl" />
        <div className="hero-blob-2 absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/20"
        >
          <Image
            src="/Picture of myself.jpg"
            alt="Ryan Sim"
            width={128}
            height={128}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight"
        >
          Hi, I&apos;m <span className="text-primary">Ryan</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground min-h-10"
        >
          <TypewriterText strings={roles} />
        </motion.div>

        {/* Bio blurb */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Singapore-based software engineer at Visa, working on mission-critical
          payment systems and HPE NonStop infrastructure. I build robust,
          efficient systems across software, infrastructure, and finance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
        >
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="/resume">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="/Ryan_Resume_2026.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#about" aria-label="Scroll to about section">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
