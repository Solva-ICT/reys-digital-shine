import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
};

export function Counter({ to, suffix = "" }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const step = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
