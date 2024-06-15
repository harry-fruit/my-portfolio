import { Introduction } from "@/components/introduction/Introduction";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experiences/Experiences";
import { LineSplit } from "@/components/LineSplit";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <Introduction/>
      <About/>
      <LineSplit/>
      <Experience/>
      <LineSplit/>
    </main>
  );
}
