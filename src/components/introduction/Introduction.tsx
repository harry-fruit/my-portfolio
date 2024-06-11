import Image from "next/image";
import { AnimatedBackground } from "./AnimatedBackground";

export default function Introduction(): JSX.Element {
  return (
    <section id={"introduction"} className={"w-full h-screen relative"}>
      <Image
        src={"/montain4.jpg"}
        alt={"Montain background"}
        layout={"fill"}
        objectFit={"cover"}
        className={"blur-soft z-0"}
      />
      <AnimatedBackground/>
    </section>
  );
}
