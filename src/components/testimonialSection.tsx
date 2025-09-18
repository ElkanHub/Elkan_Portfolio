import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  showRating?: boolean;
}

export default function TestimonialsSection({
  title = "What Others Say",
  subtitle = "Hear from people I've had the pleasure of working with",
  testimonials,
  showRating = true,
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group transition-all duration-300 hover:outline hover:shadow-lg hover:-translate-y-1 border-border/50 h-full flex flex-col"
            >
              <CardContent className="pt-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/30 transition-colors" />
                </div>

                <p className="text-foreground mb-6 flex-1">
                  &apos;&apos;{testimonial.quote}&apos;&apos;
                </p>

                <div className="mt-auto">
                  {showRating && testimonial.rating && (
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.author
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .substring(0, 2)
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            More testimonials available upon request
          </Badge>
        </div>
      </div>
    </section>
  );
}
