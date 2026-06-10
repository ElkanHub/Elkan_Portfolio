"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Text lines fade-up reveal
    if (textRef.current) {
      const words = textRef.current.innerText.split(" ");
      textRef.current.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="about-word inline-block translate-y-[100%]">${word}&nbsp;</span></span>`,
        )
        .join("");

      gsap.to(".about-word", {
        y: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      });
    }

    // 2. Parallax animation for the about image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 3. Staggered details list reveal
    gsap.from(".about-detail-item", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-details-trigger",
        start: "top 85%",
      },
    });

    // 4. Horizontal dividers scale reveal
    gsap.to(".about-divider", {
      scaleX: 1,
      duration: 1.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".about-divider",
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 md:py-36 w-full bg-[#0e0e0e] border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <div className="label-mono mb-12 md:mb-16">01 / ABOUT ME</div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-8">
            <h2
              ref={textRef}
              className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white font-editorial select-none"
            >
              Helping brands stand out in the digital age. Together we will set
              the new status quo. No nonsense, always on point. I combine
              creative interfaces with clean frontend and backend code to
              deliver premium web products.
            </h2>

            {/* Circular CTA Button */}
            <div className="mt-12 md:mt-16">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center w-40 h-40 rounded-full border border-white/10 hover-target overflow-hidden transition-colors duration-500"
              >
                {/* Background hover curtain fill */}
                <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center ease-out -z-10" />
                <span className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500 font-semibold">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Brief Paragraph Bio */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:pl-12">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The combination of my passion for design, code & interaction
              places me in a unique position in the web development world. I
              build websites that don&apos;t just look beautiful but feel
              smooth, snappy, and intuitive.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am dedicated to writing clean, maintainable code, leveraging
              technologies like Next.js, React, Node.js, and Tailwind CSS. Every
              project is approached with pixel-perfect accuracy and high
              performance in mind.
            </p>
          </div>
        </div>

        {/* Profile/Illustration Image with Parallax & Details List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-24 md:mt-32 items-center">
          {/* Parallax Image */}
          <div className="lg:col-span-7">
            <div
              ref={imageContainerRef}
              className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-white/5"
            >
              <Image
                ref={imageRef}
                src="/profilePic2.png" // Dennis Snellenberg style uses profile picture or workspace image
                alt="Elkanah Workspace"
                fill
                className="object-cover scale-110 -translate-y-6"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
            </div>
          </div>

          {/* Details List */}
          <div className="lg:col-span-5 flex flex-col gap-6 about-details-trigger">
            <div className="about-divider animated-hr" />

            <div className="about-detail-item flex justify-between py-2 items-center">
              <span className="text-xs tracking-widest text-muted-foreground uppercase font-semibold">
                Core Services
              </span>
              <span className="text-sm text-white">
                Full-Stack Dev / UI Design
              </span>
            </div>

            <div className="about-divider animated-hr" />

            <div className="about-detail-item flex justify-between py-2 items-center">
              <span className="text-xs tracking-widest text-muted-foreground uppercase font-semibold">
                Focus Areas
              </span>
              <span className="text-sm text-white">
                Interactive Portfolios, SaaS Apps
              </span>
            </div>

            <div className="about-divider animated-hr" />

            <div className="about-detail-item flex justify-between py-2 items-center">
              <span className="text-xs tracking-widest text-muted-foreground uppercase font-semibold">
                Frameworks
              </span>
              <span className="text-sm text-white">
                Next.js, React, Node, Tailwind
              </span>
            </div>

            <div className="about-divider animated-hr" />
          </div>
        </div>
      </div>
    </section>
  );
}
