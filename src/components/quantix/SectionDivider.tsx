'use client';

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function SectionDivider() {
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
        { threshold: 0.5 }
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
        <div ref={ref} className="h-20 w-full flex items-center justify-center overflow-hidden" aria-hidden>
            <div className={cn(
                "w-full h-px bg-border/20 relative",
                isVisible ? "section-divider-trail" : ""
            )}>
            </div>
        </div>
    );
}
