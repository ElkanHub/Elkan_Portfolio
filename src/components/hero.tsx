"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Text entrance animation
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.4,
    });

    tl.to(
      imageContainerRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.4,
        ease: "power4.inOut",
      },
      "-=0.8",
    );

    tl.from(
      ".hero-fade-in",
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.6",
    );

    // 2. Parallax animation on the hero image
    if (imageRef.current && imageContainerRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 3. Horizontal scrolling marquee
    let xPercent = 0;
    let direction = -1;

    const animateMarquee = () => {
      if (xPercent <= -50) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -50;
      }
      if (marqueeRef.current) {
        gsap.set(marqueeRef.current, { xPercent: xPercent });
      }
      xPercent += 0.08 * direction;
      requestAnimationFrame(animateMarquee);
    };

    requestAnimationFrame(animateMarquee);

    // Adjust marquee scroll direction based on scroll velocity
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        direction = self.direction === 1 ? -1 : 1;
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 md:pt-36 overflow-hidden bg-[#0e0e0e]"
    >
      {/* 1. Main Headline Reveal */}
      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className="display-xl tracking-tight text-white uppercase select-none">
            <span className="reveal-wrapper">
              <span ref={title1Ref} className="reveal-inner hero-reveal">
                Elkanah
              </span>
            </span>
            <span className="reveal-wrapper">
              <span
                ref={title2Ref}
                className="reveal-inner hero-reveal text-muted-foreground font-light"
              >
                Donkor
              </span>
            </span>
          </h1>
        </div>

        {/* Hero Meta Description Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4 md:mt-8 hero-fade-in">
          <div className="flex items-center gap-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Freelance & Contract
          </div>

          <div className="backdrop-blur-sm p-2 border-white border-r-2 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Freelance Full-Stack Developer & Designer crafting high-performance,
            interactive digital experiences.
          </div>
        </div>
      </div>

      {/* 2. Hero Background Image Container (Parallax) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-70">
        <div
          ref={imageContainerRef}
          className="relative w-full h-full overflow-hidden hero-clip-container"
        >
          <Image
            ref={imageRef}
            src="/hero-bg4.png"
            alt="Elkanah Hero Background"
            fill
            priority
            quality={100}
            className="object-cover object-[70%_15%] scale-100"
          />
        </div>
      </div>

      {/* 3. Huge Horizontal Marquee (Dennis Snellenberg's Signature) */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-tranparent backdrop-blur-none z-10 mt-auto">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap text-[8vw] md:text-[6vw] font-bold tracking-tight uppercase leading-none select-none text-white/95"
        >
          <span className="inline-block px-4">
            Full-Stack Developer{" "}
            <span className="text-muted-foreground font-light">—</span> UI/UX
            Designer <span className="text-muted-foreground font-light">—</span>{" "}
            Creative Coder{" "}
            <span className="text-muted-foreground font-light">—</span>
          </span>
          <span className="inline-block px-4">
            Full-Stack Developer{" "}
            <span className="text-muted-foreground font-light">—</span> UI/UX
            Designer <span className="text-muted-foreground font-light">—</span>{" "}
            Creative Coder{" "}
            <span className="text-muted-foreground font-light">—</span>
          </span>
        </div>
      </div>

      {/* 4. Bottom Info & Scroll Indicator */}
      <div className="container mx-auto px-6 md:px-12 py-8 z-10 flex justify-between items-center hero-fade-in border-t border-white/5 text-xs text-muted-foreground">
        <div>Located in Accra, Ghana</div>
        <div className="flex items-center gap-2">
          <span>Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
