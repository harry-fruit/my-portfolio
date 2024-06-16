import { Introduction } from "@/components/introduction/Introduction";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experiences/Experiences";
import { LineSplit } from "@/components/LineSplit";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-x-hidden">
      <Introduction />
      <About />
      <LineSplit fadeIn alignCenter />
      <Experience />
      <LineSplit fadeIn alignCenter />
      <Projects />
    </main>
  );
}
