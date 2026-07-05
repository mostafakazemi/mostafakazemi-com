import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WhyHireMe } from "@/components/WhyHireMe";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyHireMe />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
