import { Introduction } from "@/components/introduction/Introduction";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experiences/Experiences";

export default function Home() {
  return (
    <main className="w-full">
      <Introduction/>
      <About/>
      <Experience/>
    </main>
  );
}
