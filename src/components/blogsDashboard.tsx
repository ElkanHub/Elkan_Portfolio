"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogTile from "@/components/blogTile";
import blogPostsData from "@/data/bolgPosts"; // ✅ Temporary static data. Replace with DB/API call later.

type BlogPost = {
    id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  author: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
};

export default function BlogsDashboard() {
  const [filter, setFilter] = useState("all"); // 🏷️ Current tab/category
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); // 🗂️ Posts shown in the grid

  // 🔗 DB HOOK:
  // Right now this just filters a local JS array,
  // but it can later call your DB/API whenever the tab changes.
  useEffect(() => {
    // Example DB version:
    // fetch(`/api/blogs?category=${filter}`)
    //   .then((res) => res.json())
    //   .then((data) => setBlogPosts(data));

    // ✅ Static filtering for now
    const filtered =
      filter === "all"
        ? blogPostsData
        : blogPostsData.filter(
            (post) => post.category.toLowerCase() === filter // ⚠️ Ensure categories in data are lowercase to match tab values
          );

    // Ensure all posts have required properties
    const normalized = filtered.map((post) => ({
      ...post,
      author: post.author ?? "Unknown Author",
      imageUrl: post.imageUrl ?? "",
      imageAlt: post.imageAlt ?? "",
      readTime: post.readTime ?? "",
      featured: post.featured ?? false,
    }));

    setBlogPosts(normalized); // 🚀 Update state → triggers UI re-render
  }, [filter]);

  return (
    <div className="space-y-6">
      {/* === Stats and Charts Section === */}
      <div className="flex w-full gap-6 p-0 m-0">
        {/* === Stats Cards === */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="py-0 px-4 flex flex-col items-center justify-center">
                {/* 🔗 DB HOOK:
                    Replace static counts with dynamic totals from DB */}
                <div className="text-3xl font-bold">30</div>
                <p className="text-sm text-muted-foreground">Tutorials</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-0 px-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Insights</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="py-0 px-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">11</div>
                <p className="text-sm text-muted-foreground">OpenEnded</p>
              </CardContent>
            </Card>
          </div>

          {/* === Tabs for Blog Categories === */}
          <Tabs
            value={filter}
            onValueChange={setFilter} // ✅ Changes tab & triggers effect above
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 bg-black/10">
              {/* ⚠️ Tab values must match the filter logic exactly */}
              <TabsTrigger value="all">All Blogs</TabsTrigger>
              <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="open-ended">Open-Ended</TabsTrigger>
            </TabsList>

            {/* ✅ Single content block, reuses the same filtered array */}
            <TabsContent value={filter} className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <BlogTile key={post.slug} {...post} />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
