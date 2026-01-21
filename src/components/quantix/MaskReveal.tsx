
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type MaskRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function MaskReveal({ children, className, delay = 0 }: MaskRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
    >
      <div
        className={cn(
          "transition-transform duration-1000 ease-out",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
