import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Smile } from "lucide-react";

interface HobbyItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface HobbySectionProps {
  title?: string;
  intro?: string;
  hobbies: HobbyItem[];
  funFact?: string;
}

export default function HobbySection({
  title = "Beyond the Code",
  intro = "When I'm not crafting digital experiences, you'll find me...",
  hobbies,
  funFact
}: HobbySectionProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 flex items-center justify-center gap-2">
            {title}
            <Smile className="h-8 w-8 text-yellow-500" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{intro}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <Card 
                key={index} 
                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-primary/30 rounded-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${hobby.color}`}></div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${hobby.color} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg">{hobby.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {funFact && (
          <Card className="border-2 border-dashed border-yellow-300/50 bg-yellow-50/30 dark:bg-yellow-900/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                    Fun Fact
                    <Badge variant="outline" className="text-xs bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700">
                      You probably didn&apos;t know this
                    </Badge>
                  </h3>
                  <p className="text-muted-foreground">{funFact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}