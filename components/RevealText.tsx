"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function RevealText({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
