"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Elkanah SaaS Dashboard",
    category: "Design & Development",
    year: "2026",
    image: "/laptop.jpg",
    link: "https://github.com/elkanahdonkor",
  },
  {
    title: "Creative Portfolio",
    category: "Interaction & Frontend",
    year: "2025",
    image: "/aboutHeroPic1.jpg",
    link: "https://github.com/elkanahdonkor",
  },
  {
    title: "Elkan Hub E-Commerce",
    category: "Full Stack Engineering",
    year: "2026",
    image: "/aboutHeroPic2.jpg",
    link: "https://github.com/elkanahdonkor",
  },
  {
    title: "Interactive Web Space",
    category: "Design & Custom Motion",
    year: "2025",
    image: "/aboutHeroPic3.jpg",
    link: "https://github.com/elkanahdonkor",
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState({ active: false, index: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in titles
    gsap.from(".work-heading", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work-heading",
        start: "top 85%",
      },
    });

    // Animate lines
    gsap.to(".work-divider", {
      scaleX: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".work-divider",
        start: "top 90%",
      },
    });

    // Animate list items entrance
    gsap.from(".work-item-row", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".work-list-container",
        start: "top 80%",
      },
    });

    // Mouse move tracking for floating project modal preview
    const moveModal = (e: MouseEvent) => {
      if (!modalRef.current) return;
      gsap.to(modalRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveModal);
    return () => {
      window.removeEventListener("mousemove", moveModal);
    };
  }, []);

  // Animate modal open/close & index transition
  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;

    if (modal.active) {
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
      // Move the internal image strip to display the correct project image
      gsap.to(".project-modal-slider", {
        y: `${-100 * modal.index}%`,
        duration: 0.45,
        ease: "power3.out",
      });
    } else {
      gsap.to(el, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [modal]);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-24 md:py-36 w-full bg-[#0e0e0e]"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <div className="label-mono mb-12 md:mb-16">02 / RECENT WORK</div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="work-heading text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white">
            Selected <span className="font-editorial text-muted-foreground italic">Projects</span>
          </h2>
          <div className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A small selection of projects that showcase my attention to detail, motion styling, and engineering quality.
          </div>
        </div>

        {/* Project List */}
        <div className="work-list-container flex flex-col mt-8 border-t border-white/10">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setModal({ active: true, index })}
                onMouseLeave={() => setModal({ active: false, index })}
                className="work-item-row group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-10 border-b border-white/10 transition-colors duration-300 hover:px-4 hover:bg-white/[0.01]"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-xs text-muted-foreground tracking-widest">{`0${index + 1}`}</span>
                  <h3 className="text-xl md:text-3xl font-normal text-white group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="flex justify-between md:justify-end items-center w-full md:w-auto gap-12 mt-4 md:mt-0">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-white transition-colors duration-300">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/elkanahdonkor"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover-target"
          >
            See More on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Floating Project Modal (Dennis Snellenberg Hover Effect) */}
      <div
        ref={modalRef}
        className="fixed top-0 left-0 w-80 h-[220px] pointer-events-none z-50 overflow-hidden scale-0 opacity-0 -translate-x-1/2 -translate-y-1/2 hidden md:block border border-white/10 shadow-2xl shadow-black/80"
      >
        <div className="project-modal-slider w-full h-full relative transition-transform duration-300">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full h-full relative bg-zinc-950 flex items-center justify-center"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="320px"
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
