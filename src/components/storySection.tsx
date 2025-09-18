// components/TheStorySection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Lightbulb, TrendingUp, Target } from "lucide-react";

interface TheStorySectionProps {
  openingHook: string;
  earlyCuriosity: string;
  turningPoint: string;
  lessonsGrowth: string;
  bridgeToPresent: string;
}

export default function TheStorySection({
  openingHook,
  earlyCuriosity,
  turningPoint,
  lessonsGrowth,
  bridgeToPresent,
}: TheStorySectionProps) {
  return (
    <section className="my-16 py-16 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            My Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The journey that brought me here
          </p>
        </div>
        <div className="group relative bg-gray-200 py-12 px-4 w-full my-10 flex justify-center items-center hover:text-shadow-accent hover:bg-gradient-to-bl from-yellow-400 via-orange-600 to-red-500 hover:rounded-lg transition-bg duration-900 cursor-pointer">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 absolute transition-opacity duration-300 group-hover:opacity-0">
            Naturally, I&apos;m an Artist.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            And it bleeds into my Code.
          </h2>
        </div>

        <div className="space-y-12">
          {/* Opening Hook */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-primary opacity-20">
              <Quote className="h-16 w-16" />
            </div>
            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardContent className="pt-8">
                <p className="text-xl md:text-2xl font-medium italic text-foreground">
                  {openingHook}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Early Curiosity */}
          <div className="flex gap-6">
            <div className="hidden md:flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div className="h-full w-0.5 bg-border mt-2"></div>
            </div>
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3 md:hidden">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <Badge variant="outline">Early Curiosity</Badge>
                </div>
                <p className="text-muted-foreground">{earlyCuriosity}</p>
              </CardContent>
            </Card>
          </div>

          {/* Turning Point */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 text-secondary opacity-20">
              <Target className="h-16 w-16" />
            </div>
            <Card className="border-l-4 border-l-secondary shadow-sm">
              <CardContent className="pt-8">
                <p className="text-lg md:text-xl font-medium text-foreground">
                  {turningPoint}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Lessons & Growth */}
          <div className="flex gap-6">
            <div className="hidden md:flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-secondary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="h-full w-0.5 bg-border mt-2"></div>
            </div>
            <Card className="flex-1">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3 md:hidden">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary/10 text-secondary">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <Badge variant="outline">Lessons & Growth</Badge>
                </div>
                <p className="text-muted-foreground">{lessonsGrowth}</p>
              </CardContent>
            </Card>
          </div>

          {/* Bridge to Present */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-primary opacity-20">
              <Quote className="h-16 w-16" />
            </div>
            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardContent className="pt-8">
                <p className="text-lg md:text-xl font-medium text-foreground">
                  {bridgeToPresent}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
