import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Notes } from "@/components/Notes";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1">
        <Hero />
        <About />
        <Projects />
        <Notes />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
