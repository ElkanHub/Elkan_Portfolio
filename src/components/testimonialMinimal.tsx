import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialsMinimalProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
}

export default function TestimonialsMinimal({
  title = "What Others Say",
  subtitle = "Hear from people I've had the pleasure of working with",
  testimonials
}: TestimonialsMinimalProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-l-4 border-l-primary/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="hidden md:block">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.author
                          .split(' ')
                          .map(word => word[0])
                          .join('')
                          .substring(0, 2)
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <div className="mb-4">
                      <Quote className="h-6 w-6 text-primary/30" />
                    </div>
                    <p className="text-foreground mb-4 italic">
                      &apos;&apos;{testimonial.quote}&apos;&apos;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="md:hidden">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.author
                              .split(' ')
                              .map(word => word[0])
                              .join('')
                              .substring(0, 2)
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}