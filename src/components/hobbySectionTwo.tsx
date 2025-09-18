import { Badge } from "@/components/ui/badge";
import { Zap, Smile, Laugh } from "lucide-react";

interface HobbyItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface HumanSideSection2Props {
  title?: string;
  intro?: string;
  hobbies: HobbyItem[];
  funFact?: string;
}

export default function HobbySectionTwo({
  title = "Beyond the Code",
  intro = "When I'm not behind the PC, you'll find me...",
  hobbies,
  funFact,
}: HumanSideSection2Props) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="group relative text-3xl md:text-4xl font-bold tracking-tight mb-3 flex items-center justify-center gap-2">
            {title}
            <Smile className="absolute left-0 lg:left-20 h-8 w-8 text-yellow-500 transition-opacity duration-300 group-hover:opacity-0" />
            <Laugh className="absolute right-0 lg:right-20 h-8 w-8 text-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {intro}
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            // Rotate some cards slightly for a casual look
            const rotation =
              index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "";
            return (
              <div
                key={index}
                className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg ${rotation}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-600 dark:text-amber-400">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{hobby.title}</h3>
                    <p className="text-muted-foreground">{hobby.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {funFact && (
          <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/10 rounded-xl border-2 border-dashed border-yellow-300 dark:border-yellow-700">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                  Fun Fact
                  <Badge
                    variant="outline"
                    className="text-xs bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700"
                  >
                    You probably didn&apos;t know this
                  </Badge>
                </h3>
                <p className="text-muted-foreground">{funFact}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
