import { Introduction } from "@/components/sections/introduction/Introduction";
import { About } from "@/components/sections/about/About";
import { Experience } from "@/components/sections/experiences/Experiences";
import { Projects } from "@/components/sections/projects/Projects";
import { Contact } from "@/components/sections/contact/Contact";

export default function Home() {
  
  return (
    <>
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
