import { Introduction } from "@/components/introduction/Introduction";
import { About } from "@/components/about/About";

export default function Home() {
  return (
    <main className="w-full">
      <Introduction/>
      <About/>
    </main>
  );
}
