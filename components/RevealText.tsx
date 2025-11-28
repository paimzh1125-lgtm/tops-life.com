// components/RevealText.tsx

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealType = "chars" | "lines" | "fade";

interface RevealTextProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements; // h1, h2, p, span...
  className?: string;
  once?: boolean;         // 是否只触发一次
  delay?: number;         // 整体延迟
  type?: RevealType;      // 动画类型，默认 lines（最好看）
  stagger?: number;       // 每个字/行 之间的延迟
  duration?: number;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
  children?: ReactNode;   // 如果你想塞 rich text 而不是纯字符串
}

export default function RevealText({
  text = "",
  tag = "h2",
  className = "",
  once = true,
  delay = 0,
  type = "lines",
  stagger = 0.03,
  duration = 0.8,
  as,
  children,
}: RevealTextProps) {
  const Tag = as || tag;

  // 变体定义
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: type === "fade" ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: type === "lines" || type === "chars" ? 80 : 0,
      filter: type === "fade" ? "blur(10px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1], // 超丝滑曲线
      },
    },
  };

  // 情况1：纯文本 → 按字符或按行拆
  if (!children && text) {
    const elements = type === "chars"
      ? text.split("").map((char, i) => (
          <motion.span key={i} variants={childVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))
      : text.split("\n").map((line, i) => (
          <motion.div key={i} variants={childVariants} className="block">
            {line || "\u00A0"}
          </motion.div>
        ));

    return (
      <Tag className={className}>
        <motion.div
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

  // 情况2：你传了 children（支持加粗、<br>、链接等富文本）
  return (
    <Tag className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-100px" }}
      >
        {children || text}
      </motion.div>
    </Tag>
  );
}
