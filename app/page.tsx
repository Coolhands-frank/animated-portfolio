import Services from "../components/services/Services"
import Portfolio from "../components/portfolio/Portfolio"
import Contact from "../components/contact/Contact"
import About from "../components/about/About"
import Hero from "../components/hero/Hero"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section id="home" className="h-screen snap-center overflow-hidden">
        <Hero />
      </section>

      <section id="services" className="h-screen snap-center overflow-hidden">
        <Services />
      </section>

      <section id="work" className="overflow-hiddden">
        <Portfolio />
      </section>

      <section id="about" className="overflow-hidden h-screen snap-center">
        <About />
      </section>
      
      <section id="contact" className="h-screen snap-center overflow-hidden">
        <Contact />
      </section>

    {/*
      <section className="h-screen snap-center overflow-hidden">
        <HeroSection />
      </section>
    */}
    </div>
  );
}
