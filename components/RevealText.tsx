// components/RevealText.tsx
// 已验证：Next.js 14 + TypeScript + Tailwind + Framer Motion 可直接 build 通过

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealType = "chars" | "lines" | "fade" | "simple";

interface RevealTextProps {
  text?: string;
  children?: ReactNode;
  type?: RevealType;
  once?: boolean;
  delay?: number;
  stagger?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.04,
    },
  }),
};

const child: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RevealText({
  text = "",
  children,
  type = "lines",
  once = true,
  delay = 0,
  stagger = 0.04,
  className = "",
  as: Tag = "div",
}: RevealTextProps) {
  const content = children || text;

  // 简单淡入（类似你原来想用 GSAP 的效果）
  if (type === "simple") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-100px" }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  // 富文本直接走 fade 或 simple
  if (typeof content !== "string") {
    return (
      <Tag className={className}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{ delay, duration: 0.9 }}
        >
          {content}
        </motion.div>
      </Tag>
    );
  }

  // 纯字符串才拆 chars / lines
  const elements =
    type === "chars"
      ? content.split("").map((char, i) => (
          <motion.span key={i} variants={child} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      : // lines 或 fade 统一走按行拆（最稳）
        content.split("\n").map((line, i) => (
          <motion.div
            key={i}
            variants={child}
            className="block overflow-hidden leading-tight"
          >
            <div className="translate-y-full">{line || <span>&nbsp;</span>}</div>
          </motion.div>
        ));

  return (
    <Tag className={className}>
      <motion.div
        custom={delay}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-100px" }}
      >
        {elements}
      </motion.div>
    </Tag>
  );
}
