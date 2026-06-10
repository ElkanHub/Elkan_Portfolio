"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Headline slide up reveal
    gsap.to(".contact-reveal", {
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-trigger",
        start: "top 80%",
      },
    });

    // Animate contact cards
    gsap.from(".contact-info-card", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-info-trigger",
        start: "top 85%",
      },
    });

    // Animate contact form
    gsap.from(".contact-form-container", {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-form-container",
        start: "top 85%",
      },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Mock API submission simulation
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 md:py-36 w-full bg-[#0e0e0e] border-t border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Label */}
        <div className="label-mono mb-12 md:mb-16">04 / CONTACT</div>

        {/* Giant Headline */}
        <div className="contact-trigger mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase select-none leading-none">
            <span className="reveal-wrapper">
              <span className="reveal-inner contact-reveal">Let&apos;s Work</span>
            </span>
            <br />
            <span className="reveal-wrapper">
              <span className="reveal-inner contact-reveal text-muted-foreground font-editorial italic font-normal">
                Together
              </span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info Card List */}
          <div className="lg:col-span-5 flex flex-col gap-8 contact-info-trigger">
            <div className="contact-info-card flex items-start gap-6 p-6 border border-white/5 bg-[#121212]/30 hover:border-white/10 transition-colors">
              <div className="p-3 bg-white/5 text-white rounded-full">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Email Me</span>
                <a href="mailto:elkanahdonkor@gmail.com" className="text-sm md:text-base text-white hover:underline hover-target">
                  elkanahdonkor@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card flex items-start gap-6 p-6 border border-white/5 bg-[#121212]/30 hover:border-white/10 transition-colors">
              <div className="p-3 bg-white/5 text-white rounded-full">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Call Me</span>
                <a href="tel:+233200000000" className="text-sm md:text-base text-white hover:underline hover-target">
                  +233 (0) 50 000 0000
                </a>
              </div>
            </div>

            <div className="contact-info-card flex items-start gap-6 p-6 border border-white/5 bg-[#121212]/30 hover:border-white/10 transition-colors">
              <div className="p-3 bg-white/5 text-white rounded-full">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Location</span>
                <span className="text-sm md:text-base text-white">
                  Accra, Ghana
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 contact-form-container bg-[#121212]/20 border border-white/5 p-8 md:p-10">
            <h3 className="text-lg md:text-xl font-normal text-white mb-6 uppercase tracking-wider">
              Send a Message
            </h3>
            
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4 animate-bounce" />
                <h4 className="text-lg font-medium text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-xs text-muted-foreground max-w-sm">
                  Thank you for reaching out. I will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2 border border-white/10 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-colors duration-300 hover-target"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors hover-target"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors hover-target"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#161616] border border-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors hover-target resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex items-center justify-between w-full mt-2 px-6 py-4 bg-white text-black hover:bg-white/95 text-xs font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 hover-target"
                >
                  <span>{status === "sending" ? "Sending..." : "Submit Inquiry"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
