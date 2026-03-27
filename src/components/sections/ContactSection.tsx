"use client";

import { FadeInSection } from "@/components/shared/FadeInSection";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

const contactLinks = [
  {
    label: "Email",
    value: "rsim9977@gmail.com",
    href: "mailto:rsim9977@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "GitHub",
    value: "github.com/RSYR1906",
    href: "https://github.com/RSYR1906",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ryan-sim-yao-rong",
    href: "https://www.linkedin.com/in/ryan-sim-yao-rong-51b769219/",
    icon: <LinkedInIcon />,
  },
  {
    label: "Location",
    value: "Singapore",
    href: null,
    icon: <MapPin className="h-5 w-5" />,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <FadeInSection>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind, want to talk systems or finance, or just want to say hi? I'd love to hear from you."
        />
      </FadeInSection>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: links */}
        <FadeInSection delay={0.1}>
          <div className="space-y-5">
            {contactLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border bg-card text-muted-foreground">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{link.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Right: CTA card */}
        <FadeInSection delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl border bg-card p-8 text-center space-y-4"
          >
            <div className="text-4xl">👋</div>
            <h3 className="text-xl font-semibold">Let&apos;s work together</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether it&apos;s a tech project, an investment idea, or just a
              good conversation — I&apos;m always open to connecting with
              like-minded people.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://www.linkedin.com/in/ryan-sim-yao-rong-51b769219/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}
