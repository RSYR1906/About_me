"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  strings: string[];
  className?: string;
}

export function TypewriterText({ strings, className }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = strings[stringIndex];

    if (!deleting) {
      if (charIndex < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 65);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
      } else {
        timeoutRef.current = setTimeout(() => {
          setDeleting(false);
          setStringIndex((i) => (i + 1) % strings.length);
        }, 400);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, deleting, stringIndex, strings]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
