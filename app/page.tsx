import Image from "next/image";
import Services from "../components/services/Services"
import Portfolio from "../components/portfolio/Portfolio"
import Contact from "../components/contact/Contact"
import About from "../components/about/About"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="h-screen snap-center overflow-hidden">Hero</section>
      <section className="h-screen snap-center overflow-hidden">
        <Services />
      </section>

      <section className="overflow-hiddden">
        <Portfolio />
      </section>

      <section className="overflow-hidden h-screen snap-center">
        <About />
      </section>
      
      <section className="h-screen snap-center overflow-hidden">
        <Contact />
      </section>
      
    </div>
  );
}
