import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

import logoUber from "@/assets/logos/uber.png";
import logoDecathlon from "@/assets/logos/decathlon.png";
import logoHardrock from "@/assets/logos/hardrock.png";
import logoTigris from "@/assets/logos/tigris.png";
import logoHpe from "@/assets/logos/hpe.png";
import logoCheckatrade from "@/assets/logos/checkatrade.png";
import logoUrbn from "@/assets/logos/urbn.png";
import logoBrevo from "@/assets/logos/brevo.png";
import logoPercona from "@/assets/logos/percona.png";
import logoConverge from "@/assets/logos/converge.png";


const logos = [
  { src: logoUber, alt: "Uber" },
  { src: logoDecathlon, alt: "Decathlon" },
  { src: logoHardrock, alt: "Hard Rock" },
  { src: logoTigris, alt: "Tigris" },
  { src: logoHpe, alt: "HP Enterprise" },
  { src: logoCheckatrade, alt: "Checkatrade" },
  { src: logoUrbn, alt: "URBN" },
  { src: logoBrevo, alt: "Brevo" },
  { src: logoPercona, alt: "Percona" },
  { src: logoConverge, alt: "Converge Bio" },
];

const Index = () =>
<div className="min-h-screen flex flex-col bg-primary-foreground">
    <main className="max-w-[994px] mx-auto w-full flex flex-col flex-1">
      <Header />
      <HeroSection />
      <ProductsSection />

        <div
          className="my-14 px-6 text-center"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[2px] text-faint">
            trusted by
          </p>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-y-8 gap-x-4 w-full">
            {logos.map((logo) => (
            <div className="flex items-center justify-center">
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="w-[140px] h-auto object-contain mix-blend-multiply max-sm:w-[100px]"
              />
            </div>
            ))}
          </div>
        </div>

      <Footer />
    </main>
  </div>;


export default Index;