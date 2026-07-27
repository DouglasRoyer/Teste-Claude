import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Differentials } from "@/components/site/differentials";
import { Process } from "@/components/site/process";
import { Projects } from "@/components/site/projects";
import { Testimonials } from "@/components/site/testimonials";
import { Cta } from "@/components/site/cta";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Differentials />
        <Process />
        <Projects />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
