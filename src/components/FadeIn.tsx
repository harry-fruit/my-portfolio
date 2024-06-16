"use client";

import { useEffect } from "react";
import anime from "animejs";
import useInView from "@/hooks/useInView";
import useSize from "@/hooks/useSize";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const FadeIn = ({ children, className }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { width } = useSize();

  useEffect(() => {
    if (inView && width) {
      anime({
        targets: ref.current,
        opacity: [0, 1],
        translateX: [(width / 2), 0],
        duration: 500,
        easing: "spring(1, 80, 15, 0)",
      });
    }
  }, [ref, inView, width]);

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
