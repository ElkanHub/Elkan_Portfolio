"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursorOuter || !cursorInner) return;

    // Set initial positions
    gsap.set(cursorOuter, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorInner, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      // Small inner dot follows mouse immediately
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "power2.out",
      });

      // Larger outer circle trails behind
      gsap.to(cursorOuter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover state handlers
    const onMouseEnterLink = () => {
      gsap.to(cursorOuter, {
        scale: 2.2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 1)",
        duration: 0.3,
      });
      gsap.to(cursorInner, {
        scale: 0,
        duration: 0.2,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursorOuter, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.3,
      });
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.2,
      });
    };

    const onMouseEnterProject = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const hoverText = target.getAttribute("data-cursor-text") || "VIEW";
      
      // Update cursor contents if needed (we can display a text inside the cursor)
      cursorOuter.innerHTML = `<span class="text-[8px] font-bold tracking-widest text-black">${hoverText}</span>`;
      
      gsap.to(cursorOuter, {
        scale: 3,
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        duration: 0.3,
      });
      gsap.to(cursorInner, {
        scale: 0,
        duration: 0.2,
      });
    };

    const onMouseLeaveProject = () => {
      cursorOuter.innerHTML = "";
      gsap.to(cursorOuter, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.5)",
        duration: 0.3,
      });
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Add listeners to links, buttons, and custom interactive components
    const updateListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], .hover-target");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });

      const projectElements = document.querySelectorAll(".project-card-hover");
      projectElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterProject);
        el.addEventListener("mouseleave", onMouseLeaveProject);
      });
    };

    // Initial setup
    updateListeners();

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      updateListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      
      const interactiveElements = document.querySelectorAll("a, button, [role='button'], .hover-target");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });

      const projectElements = document.querySelectorAll(".project-card-hover");
      projectElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterProject);
        el.removeEventListener("mouseleave", onMouseLeaveProject);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Cursor ring */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center select-none overflow-hidden transition-[background-color,border-color] duration-150 hidden md:flex"
      />
      {/* Inner Cursor dot */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference -translate-x-1/2 -translate-y-1/2 select-none hidden md:block"
      />
    </>
  );
}
