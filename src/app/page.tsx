import Hero from "@/components/hero";
import About from "@/components/about";
import Founder from "@/components/founder";
import Work from "@/components/work";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#0e0e0e]">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Founder Section */}
      <Founder />

      {/* Selected Projects Section */}
      <Work />

      {/* Capabilities Section */}
      <Services />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
