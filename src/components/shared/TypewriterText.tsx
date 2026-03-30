"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  strings: string[];
  className?: string;
}

export function TypewriterText({ strings, className }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const state = useRef({ idx: 0, pos: 0, del: false });
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const tick = () => {
      const { idx, pos, del } = state.current;
      const word = strings[idx];

      if (!del) {
        if (pos < word.length) {
          state.current.pos++;
          setDisplayed(word.slice(0, state.current.pos));
          timer.current = setTimeout(tick, 65);
        } else {
          timer.current = setTimeout(() => {
            state.current.del = true;
            tick();
          }, 1800);
        }
      } else {
        if (pos > 0) {
          state.current.pos--;
          setDisplayed(word.slice(0, state.current.pos));
          timer.current = setTimeout(tick, 35);
        } else {
          state.current.del = false;
          state.current.idx = (idx + 1) % strings.length;
          timer.current = setTimeout(tick, 400);
        }
      }
    };

    tick();
    return () => clearTimeout(timer.current);
  }, [strings]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}
