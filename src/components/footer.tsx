"use client";

import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-semibold text-white tracking-wider uppercase">
              Elkanah Donkor
            </span>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Crafting premium interactive digital experiences.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/elkanahdonkor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors hover-target"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/elkanah-donkor/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors hover-target"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/elkanahdonkor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors hover-target"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="mailto:elkanahdonkor@gmail.com"
              className="p-2.5 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors hover-target"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group p-3 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-all hover-target"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <hr className="border-white/5 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Elkanah Donkor. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[10px]">
            <span>Inspired by Dennis Snellenberg</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
