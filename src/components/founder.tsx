"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import MetallicPaint from "@/components/MetallicPaint";

export default function Founder() {
  return (
    <section className="relative py-24 md:py-36 w-full bg-[#0e0e0e] border-t border-white/5">
      <h1 className="mt-8 max-w-full font-sans text-center text-5xl font-medium tracking-tight text-white sm:text-7xl">
        Main Focus Project
      </h1>
      <div className=" container mx-auto px-6 md:px-12 w-full max-w-7xl pt-32 pb-20 sm:pt-36 sm:pb-24 lg:px-8 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center items-center max-w-xl">
          {/* Responsive circle profile photo */}
          <div className="size-40 sm:size-56 md:size-64 rounded-full overflow-hidden mb-6 shrink-0">
            <Image
              src="/founderportrait.png"
              alt="Elkanah portrait photo"
              width={256}
              height={256}
              priority // Add this if this is at the very top of the page (above the fold)
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h1 className="mt-8 font-serif text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Solo Founder.
          </h1>

          <Link
            href="https://qms-manaja.vercel.app/"
            className="mt-4 group inline-flex h-12 items-center gap-2 rounded-none bg-white px-6 text-sm font-semibold text-brand-navy shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-all hover:bg-white/90 active:translate-y-px"
          >
            Check it out
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right Side: Metallic Paint Component */}
        <div className="relative flex flex-col justify-center w-full aspect-square max-w-md mx-auto lg:mx-0">
          <h1 className="mt-8 font-serif text-4xl text-center font-medium tracking-tight text-white sm:text-6xl">
            QMS-MANAJA
          </h1>
          <MetallicPaint
            imageSrc="qms-manaja-logo.jpg"
            mouseAnimation={true}
            speed={0.25}
            refraction={0.015}
            blur={0.02}
            brightness={2.2}
            contrast={0.8}
            liquid={0.8}
            lightColor="#2DD4BF" // brand teal highlight
            darkColor="#0f172a" // brand navy dark parts
            tintColor="#38BDF8" // brand sky tint
          />
        </div>
      </div>
      <p className="mt-0 max-w-full text-lg text-center text-white/70">
        Manage SOPs, approvals, equipment PMs, and training in one controlled
        system. Compliance Software Built for QA-led teams.
      </p>
    </section>
  );
}
