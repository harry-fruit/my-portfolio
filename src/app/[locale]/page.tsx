import { Introduction } from "@/components/sections/introduction/Introduction";
import { About } from "@/components/sections/about/About";
import { Experience } from "@/components/sections/experiences/Experiences";
import { Projects } from "@/components/sections/projects/Projects";
import { Contact } from "@/components/sections/contact/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-x-hidden relative">
      <Navbar locale={locale} />
      <Introduction />
      <About />
      <Experience locale={locale} />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  );
}
