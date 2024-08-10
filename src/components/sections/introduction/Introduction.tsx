import Image from "next/image";
import { AnimatedBackground } from "@/components/sections/introduction/AnimatedBackground";
import portfolioLayoutStyle from "@/styles/components/layouts/portfolio-layout.module.scss";

export const Introduction = () => {
  return (
    <section id={"introduction"} className={`w-full h-screen relative ${portfolioLayoutStyle.introduction}`}>
      <Image
        src={"/montain4.jpg"}
        alt={"Montain background"}
        fill
        className={"absolute blur-soft z-0 object-cover"}
      />
      <AnimatedBackground />
    </section>
  );
};
