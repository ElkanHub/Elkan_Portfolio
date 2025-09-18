// components/BlogHighlights.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured?: boolean;
}

interface BlogHighlightsProps {
  title?: string;
  subtitle?: string;
  posts: BlogPost[];
  maxPosts?: number;
  showViewAll?: boolean;
  viewAllLink?: string;
}

export default function BlogHighlights({
  title = "From the Blog",
  subtitle = "Thoughts, tutorials, and insights",
  posts,
  maxPosts = 3,
  showViewAll = true,
  viewAllLink = "/blog"
}: BlogHighlightsProps) {
  // Limit the number of posts to display
  const displayPosts = posts.slice(0, maxPosts);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <Card key={post.id} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 h-full flex flex-col hover:outline">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={post.featured ? "default" : "secondary"} className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary w-fit">
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Button */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Button asChild size="lg" className="mt-4">
              <Link href={viewAllLink} className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                View all articles
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}