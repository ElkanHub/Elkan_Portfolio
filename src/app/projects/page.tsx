import ProjectsDashboard from "@/components/projectsDashboard";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects Dashboard</h1>
        <p className="text-muted-foreground">Overview of all my projects and contributions</p>
      </div>
      
      <ProjectsDashboard />
    </div>
  );
}