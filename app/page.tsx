import Image from "next/image";
import Services from "../components/services/Services"
import Portfolio from "../components/portfolio/Portfolio"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="h-screen snap-center">Hero</section>
      <section className="h-screen snap-center">
        <Services />
      </section>

      <section className="h-screen snap-center">
        <Portfolio />
      </section>
      
      <section className="h-screen snap-center">
        
      </section>
    </div>
  );
}
