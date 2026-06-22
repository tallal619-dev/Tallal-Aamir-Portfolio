"use client";

import { motion } from "motion/react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  by?: "words" | "chars";
  delay?: number;
}

export function SplitText({ text, as = "span", className, by = "words", delay = 0 }: SplitTextProps) {
  const Component = motion[as];
  const parts = by === "words" ? text.split(" ") : Array.from(text);

  return (
    <Component className={cn(className)} aria-label={text}>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          <span className="inline-block overflow-hidden align-top">
            <motion.span
              aria-hidden="true"
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: delay + index * 0.035,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {part}
            </motion.span>
          </span>
          {by === "words" && index < parts.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Component>
  );
}
