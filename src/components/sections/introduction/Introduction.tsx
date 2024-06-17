import Image from "next/image";
import { AnimatedBackground } from "@/components/sections/introduction/AnimatedBackground";

export const Introduction: React.FC = (): JSX.Element => {
  return (
    <section id={"introduction"} className={"w-full h-screen relative"}>
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
