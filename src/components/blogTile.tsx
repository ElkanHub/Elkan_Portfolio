// components/BlogTile.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogTileProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  author?: string;
  imageUrl?: string;
  imageAlt?: string;
  featured?: boolean;
}

export default function BlogTile({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
  author,
  imageUrl,
  imageAlt,
  featured = false
}: BlogTileProps) {
  return (
    <Card className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 h-full flex flex-col overflow-hidden ${featured ? 'outline-orange-400' : ''}`}>
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-white/90 text-black hover:bg-white">{category}</Badge>
          </div>
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          {!imageUrl && (
            <Badge variant="secondary" className="text-xs">{category}</Badge>
          )}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          {author && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="line-clamp-3 mb-4 flex-1">
          {excerpt}
        </CardDescription>
        <Button variant="ghost" size="sm" className="p-0 h-auto group-hover:text-primary w-fit">
          <Link href={`/blog/${slug}`} className="flex items-center gap-1">
            Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}