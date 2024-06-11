"use client";

import { useRef } from "react";
import { useAnimeIntroduction } from "@/hooks/useAnimeIntroduction";

export const AnimatedBackground = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subHeaderRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useAnimeIntroduction({ headerRef, subHeaderRef, lineRef });

  return (
    <div
      id="wrapper"
      className="intro-gradient w-full h-full absolute z-10 flex flex-col items-center justify-center"
    >
      <div className="animated-header relative flex flex-col justify-center items-center">
        <h1 className="w-fit text-5xl text-center font-bold" ref={headerRef}>
          Isaque Duarte
        </h1>
        <div className="h-1 w-0 bg-gray-100 absolute" ref={lineRef}></div>{" "}
        <h3
          className="w-fit text-xl uppercase font-semibold text-center"
          ref={subHeaderRef}
        >
          Full stack developer
        </h3>
      </div>
      <div id="learn-more" className="absolute bottom-10">
        <p className="text-md uppercase">learn more</p>
      </div>
    </div>
  );
};
