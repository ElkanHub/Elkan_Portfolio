"use client";

import { useState, useEffect } from "react";
import { Menu, Github, Linkedin, Twitter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background border/darkness on scroll
      setScrolled(window.scrollY > 50);

      // Section intersection detection
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          if (scrollPosition >= top) {
            const id = section.getAttribute("id");
            if (id) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(href.substring(1));
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent ${
        scrolled
          ? "bg-[#0e0e0e]/80 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Code by Name branding */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group hover-target text-sm font-normal text-white flex items-center select-none"
        >
          <span className="relative overflow-hidden inline-flex">
            <span className="group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
              © Designed by Elkanah
            </span>
            <span className="absolute left-0 top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out font-medium">
              alias~@KhlanKell
            </span>
          </span>
        </a>

        {/* Right: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link-underline hover-target text-xs uppercase tracking-widest transition-colors py-1 ${
                activeSection === link.href.substring(1)
                  ? "text-white font-medium"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 -mr-2 text-white hover:text-muted-foreground transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:max-w-xs bg-[#0e0e0e] border-l border-white/5 p-8 flex flex-col justify-between"
            >
              <div className="space-y-12 mt-12">
                <SheetTitle className="text-left font-normal uppercase tracking-widest text-muted-foreground text-xs">
                  Navigation
                </SheetTitle>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-2xl font-light py-2 border-b border-white/5 transition-colors uppercase ${
                        activeSection === link.href.substring(1)
                          ? "text-white"
                          : "text-muted-foreground hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Social links at the bottom of the drawer */}
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground border-b border-white/5 pb-2">
                  Socials
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/elkanahdonkor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elkanah-donkor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com/elkanahdonkor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
