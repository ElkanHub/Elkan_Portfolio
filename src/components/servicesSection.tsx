import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
interface ServiceItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServicesSectionProps {
  title?: string;
  description?: string;
  services: ServiceItem[];
}

export default function ServicesSection({
  title = "What I Do / How I Help",
  description = "I help businesses and individuals succeed through these key services:",
  services,
}: ServicesSectionProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 border-dashed border-primary/20 hover:border-primary/40 rounded-xl p-5 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs font-normal bg-background/80"
                      >
                        Service {index + 1}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <Check className="h-3 w-3" />
                        <span>Available</span>
                      </div>
                    </div>
                    <p className="font-medium leading-relaxed">
                      {service.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
