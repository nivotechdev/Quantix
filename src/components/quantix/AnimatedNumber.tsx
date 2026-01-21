
"use client";

import { useEffect, useRef, useState } from "react";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function AnimatedNumber({ value, isFloat = false }: { value: number, isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const startTime = performance.now();

          const animateCount = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVal = easeOutExpo(progress) * (end - start) + start;

            if (isFloat) {
                setCount(parseFloat(currentVal.toFixed(1)));
            } else {
                setCount(Math.floor(currentVal));
            }
            
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if(currentRef) {
        observer.unobserve(currentRef)
      }
    };
  }, [value, isFloat]);

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>;
}
