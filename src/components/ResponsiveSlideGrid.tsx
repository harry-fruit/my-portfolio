"use client";

import useSize from "@/hooks/useSize";
import React, { useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const SlideComponent: React.FC<Props> = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? React.Children.count(children) - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div className="h-full w-full">
      <button onClick={nextSlide}>next</button>
      <button onClick={prevSlide}>previous</button>
      <div
        className="flex flex-col justify-start items-start relative h-full w-full transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute left-0 overflow-scroll bg-white flex flex-nowrap lg:w-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ResponsiveSlideGrid: React.FC<Props> = ({ children }: Props) => {
  const { width } = useSize();
  const isSmallDevice = (width || 0) < 1024;

  return isSmallDevice ? (
    <SlideComponent>{children}</SlideComponent>
  ) : (
    <GridComponent>{children}</GridComponent>
  );
};

export const GridComponent: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
};