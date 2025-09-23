import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SkillsSection() {
  const skills = {
    frontend: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML & CSS", level: "Expert" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
    designTools: [
      { name: "Canva", level: "Expert" },
      { name: "Figma", level: "Expert" },
      { name: "Photoshop", level: "Intermediate" },
    ],
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500";
      case "Advanced":
        return "bg-blue-500";
      case "Intermediate":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 px-4 bg-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise across the development spectrum, organized by
            category....
            <br />
            In short, this is what I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <Card className="h-full border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Frontend Development
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {skill.level}
                    </Badge>
                    <div
                      className={`w-2 h-2 rounded-full ${getLevelColor(
                        skill.level
                      )}`}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="h-full border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Backend Development
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.backend.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {skill.level}
                    </Badge>
                    <div
                      className={`w-2 h-2 rounded-full ${getLevelColor(
                        skill.level
                      )}`}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Design Tools */}
          <Card className="h-full border-0 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                Design Tools
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.designTools.map((tool, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{tool.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {tool.level}
                    </Badge>
                    <div
                      className={`w-2 h-2 rounded-full ${getLevelColor(
                        tool.level
                      )}`}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skill Level Legend */}
        <div className="mt-12 flex justify-center">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Intermediate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
