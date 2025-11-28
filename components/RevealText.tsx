// components/RevealText.tsx
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
      // You likely need to add an 'animate' and 'transition' prop here
      // to actually "reveal" the text using framer-motion.
      // Example:
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
