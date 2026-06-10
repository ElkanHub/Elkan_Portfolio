"use client";

import Grainient from "@/components/Grainient";

interface SectionGrainientProps {
  preset?: "hero" | "default";
}

export default function SectionGrainient({ preset = "default" }: SectionGrainientProps) {
  // Define settings based on presets matching the theme
  const config =
    preset === "hero"
      ? {
          color1: "#0f172a", // Dark navy base
          color2: "#1e1b4b", // Deep indigo highlight
          color3: "#020617", // Rich black shadow
          timeSpeed: 0.15,
          grainAmount: 0.05,
          warpStrength: 0.8,
        }
      : {
          color1: "#0e0e0e",
          color2: "#181818",
          color3: "#0e0e0e",
          timeSpeed: 0.1,
          grainAmount: 0.03,
          warpStrength: 0.5,
        };

  return (
    <div className="absolute inset-0 -z-10 w-full h-full opacity-60">
      <Grainient {...config} />
    </div>
  );
}
