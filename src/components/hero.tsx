import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Elkan</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                A Frontend Developer with Fullstack Skills
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              I provide <strong>real solutions</strong> with modern technologies.
              Specializing in React, Next.js, and Node.js to build performant
              web applications.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 hover:bg-accent">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-background"
                  >
                    <span className="text-xs font-bold">T{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+</span>{" "}
                Projects Completed
              </p>
            </div>
          </div>

          {/* Image Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="relative w-full max-w-md overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src="/profilePic.jpg" 
                    alt="Elkan - Developer"
                    fill
                    className="object-cover pointer-events-none select-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-0 -right-0 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                  <p className="font-bold">5+ Years Experience</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}




