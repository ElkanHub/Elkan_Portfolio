"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Layers, Monitor, Cpu, Sparkles } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    desc: "Building fast, reactive, and pixel-perfect web interfaces using React, Next.js, and TypeScript. Specializing in semantic markup, SEO, and styling systems.",
    icon: Monitor,
  },
  {
    num: "02",
    title: "Back-End Engineering",
    desc: "Designing secure, scalable API endpoints, databases, and microservices with Node.js, Express, Firebase, and PostgreSQL. Focused on uptime and data integrity.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Interactive Motion & UX",
    desc: "Reimagining user experiences using scroll-driven animations, custom transitions, canvas effects, and GSAP. Making sites feel alive, weighted, and responsive.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "UI/UX & Design Systems",
    desc: "Crafting structured, reusable components and interface blueprints in Figma. Bridging the gap between design conceptualization and frontend execution.",
    icon: Layers,
  },
];

export default function Services() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in headings
    gsap.from(".services-heading", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-heading",
        start: "top 85%",
      },
    });

    // Stagger services grid items reveal
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="services"
      className="relative py-24 md:py-36 w-full bg-[#0e0e0e] border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <div className="label-mono mb-12 md:mb-16">03 / CAPABILITIES</div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="services-heading text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white">
            What I <span className="font-editorial text-muted-foreground italic">Do</span>
          </h2>
          <div className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Focused on providing robust software engineering paired with custom web interactions to help products succeed.
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative p-8 border border-white/5 bg-[#121212]/30 hover:bg-[#121212]/80 transition-all duration-500 flex flex-col justify-between aspect-[4/3] md:aspect-square lg:aspect-[4/3] hover:border-white/20"
              >
                {/* Background hover fill effect */}
                <div className="absolute inset-0 bg-white/5 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out pointer-events-none" />

                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                    {service.num}
                  </span>
                  <div className="p-3 rounded-full bg-white/5 text-muted-foreground group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="z-10 mt-8">
                  <h3 className="text-lg md:text-xl font-normal text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
