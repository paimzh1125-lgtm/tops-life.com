import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  text: string;
  tag?: React.ElementType;
  className?: string;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, tag = 'div', className = '', delay = 0 }) => {
  const elRef = useRef<HTMLElement>(null);
  const Tag = tag;

  useEffect(() => {
    if (elRef.current) {
      gsap.fromTo(
        elRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [delay]);

  return (
    // @ts-ignore
    <Tag ref={elRef} className={className}>
      {text}
    </Tag>
  );
};

export default RevealText;