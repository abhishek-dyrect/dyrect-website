"use client";

import { useEffect, useState } from "react";

interface RotatingWordProps {
  words: string[];
  color?: string;
  interval?: number;
}

export function RotatingWord({
  words,
  color = "var(--brand-blue)",
  interval = 2400,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  const widestWord = words.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span className="relative inline-block align-baseline">
      {/* Invisible widest word reserves width */}
      <span className="invisible whitespace-nowrap">{widestWord}</span>
      {words.map((word, idx) => (
        <span
          key={word}
          className="absolute left-0 top-0 whitespace-nowrap transition-all duration-500"
          style={{
            color,
            letterSpacing: "-2px",
            opacity: index === idx ? 1 : 0,
            transform:
              index === idx
                ? "translateY(0)"
                : idx === (index - 1 + words.length) % words.length
                  ? "translateY(-24%)"
                  : "translateY(24%)",
            transitionTimingFunction: "cubic-bezier(.16,.84,.44,1)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
