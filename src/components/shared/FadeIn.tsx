"use client";

import { useEffect } from "react";
import anime from "animejs";
import useInView from "@/hooks/useInView";
import useSize from "@/hooks/useSize";

type Props = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  threshold?: number;
};

export const FadeIn = ({ children, className, duration = 1000, threshold = 0.25 }: Props) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });
  const { width } = useSize();

  useEffect(() => {
    if (inView && width) {
      anime({
        targets: ref.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: duration,
        easing: "spring(1, 80, 15, 0)",
      });
    }
  }, [ref, inView, width, duration]);

  return (
    <div
      ref={ref}
      className={`w-full h-full ${className || ""}`}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};
