import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import FallbackImage from "@/components/fallbackImage";

export default function ProjectSection() {
  const projects = [
    {
      title: "Project One",

      description: "A brief description of Project One.",
      imageUrl: "/profilePic.jpg",
      projectUrl: "https://example.com/project-one",
      techStack: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      imageUrl: "/project2.png",
      projectUrl: "https://example.com/project-two",
      techStack: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      imageUrl: "/project3.png",
      projectUrl: "https://example.com/project-three",
      techStack: ["Vue.js", "Nuxt.js", "CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background m-0">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/projects" className="text-sm font-semibold">
              View All Projects
            </Link>
          </Button>
        </div>
        <Separator className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>{project.title}</CardTitle>
                <Button
                  variant="link"
                  asChild
                  className="size-7 p-0 flex items-center justify-center"
                >
                  <Link
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-50 font-bold hover:bg-accent"
                  >
                    &gt;&gt;
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="relative flex justify-center mb-4 w-full h-[200px] overflow-hidden mx-auto"> 
                  <FallbackImage
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover mb-4"
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <Separator className="my-4" />
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
