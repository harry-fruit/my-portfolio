"use client";

import useSize from "@/hooks/useSize";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { LeftArrow } from "./icons/LeftArrow";
import { RightArrow } from "./icons/RightArrow";

type Props = {
  children: React.ReactNode;
};

export const SlideComponent: React.FC<Props> = ({ children }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % React.Children.count(children));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? React.Children.count(children) - 1 : prev - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div className="h-full w-full bg-white flex flex-col justify-center items-start">
      <div
        className="flex flex-col justify-start items-start h-full w-full transition-transform duration-300 "
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        {...handlers}
      >
        <div className=" flex flex-nowrap lg:w-0">{children}</div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div className="w-full flex justify-center items-center gap-2 mb-2">
          <div className="flex flex-col items-center justify-center p-4 border rounded">
            <LeftArrow
              onClick={prevSlide}
              width="20"
              height="20"
              className="text-gray-900"
            />
          </div>
          <div className="flex flex-col items-center justify-center p-4 border rounded">
            <RightArrow
              onClick={nextSlide}
              width="20"
              height="20"
              className="text-gray-900"
            />
          </div>
        </div>
        <p className="text-gray-500 text-xs"><i>Tip: you can slide or click next to see more projects</i></p> 
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
