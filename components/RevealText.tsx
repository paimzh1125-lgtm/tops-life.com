// components/RevealText.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  text?: string;
  type?: "chars" | "lines" | "simple";
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function RevealText({
  children,
  text,
  type = "lines",
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const content = children ?? text ?? "";

  // 简单淡入
  if (type === "simple") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  // 纯文本才拆
  if (typeof content === "string") {
    const items =
      type === "chars"
        ? content.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.02, duration: 0.6 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))
        : content.split("\n").map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.15, duration: 0.9 }}
              className={className}
            >
              {line || "\u00A0"}
            </motion.div>
          ));

    return <Tag>{items}</Tag>;
  }

  // children 直接淡入
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {content}
    </motion.div>
  );
}
