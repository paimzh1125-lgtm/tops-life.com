// components/RevealText.tsx

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealType = "chars" | "lines" | "fade" | "simple";

interface RevealTextProps {
  text?: string;
  children?: ReactNode;
  type?: RevealType;        // 动画类型
  once?: boolean;           // 是否只触发一次
  delay?: number;           // 整体延迟
  stagger?: number;         // 逐字/逐行间隔
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // h1, h2, p...
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      delay: custom,
      staggerChildren: 0.03,
      delayChildren: custom,
    },
  }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
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
  type = "lines",           // 默认最优雅的逐行上升
  once = true,
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  className = "",
  as: Tag = "div",
}: RevealTextProps) {

  // 简单淡入（你原来 GSAP 的那种）
  if (type === "simple") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-100px" }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className={className}
      >
        {children || text}
      </motion.div>
    );
  }

  // 其他三种高级动画（chars / lines / fade）
  const inner = children || text;

  if (typeof inner === "string" && !children) {
    const words = type === "chars"
      ? inner.split("").map((char, i) => (
          <motion.span key={i} variants={item} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      : inner.split(/\s+/).map((word, i) => (
          <motion.span key={i} variants={item} className="inline-block mr-[1ch]">
            {word + (i < inner.split(/\s+/).length - 1 ? "" : "")}
          </motion.span>
        ));

    const lines = type === "lines"
      ? inner.split("\n").map((line, i) => (
          <motion.div key={i} variants={item} className="block overflow-hidden">
            <div className="pt-2">{line || <span>&nbsp;</span>}</div>
          </motion.div>
        ))
      : words;

    return (
      <Tag className={className}>
        <motion.div
          custom={delay}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, margin: "-100px" }}
          style={{ 
            overflow: "hidden",
            display: "inline-block",
          }}
        >
          {type === "fade" ? (
            <motion.div variants={item}>{inner}</motion.div>
          ) : (
            lines
          )}
        </motion.div>
      </Tag>
    );
  }

  // 支持富文本 children
  return (
    <Tag className={className}>
      <motion.div
        custom={delay}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-100px" }}
      >
        {inner}
      </motion.div>
    </Tag>
  );
}
