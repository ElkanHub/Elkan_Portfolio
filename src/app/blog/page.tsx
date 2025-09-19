import BlogsDashboard from "@/components/blogsDashboard";
export default function BlogPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">You&apos;ll Love These Insights</h1>
        <p className="text-muted-foreground">Overview of all my blogs and articles</p>
      </div>

      <BlogsDashboard />
    </div>
  );
}