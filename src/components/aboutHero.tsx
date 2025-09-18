// components/HeroIntro.tsx
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroIntroProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function AboutHeroSection({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  ctaText = "Get in touch",
  ctaLink = "/contact",
}: HeroIntroProps) {
  return (
    <section className="py-16 md:py-24 lg:bg-gradient-to-r from-background from-[80%] via-black/20 via-[5%] to-background">
      <Container className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {subtitle && (
              <p className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                {subtitle}
              </p>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {description}
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="group">
                <Link href={ctaLink} className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
