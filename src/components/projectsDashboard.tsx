// components/ProjectsDashboard.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { projectTypes } from "@/data/projects";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ProjectsDashboard() {
  return (
    <div className="space-y-6">
      
      {/* Stats and Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">30</div>
                <p className="text-sm text-muted-foreground">Real world</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Experimental</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">11</div>
                <p className="text-sm text-muted-foreground">Case Studies</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for Project Categories */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-black/10">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="real">Real World</TabsTrigger>
              <TabsTrigger value="experimental">Experimental</TabsTrigger>
              <TabsTrigger value="caseStudy">Case Studies</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium">Project {i + 1}</h4>
                          <p className="text-sm text-muted-foreground">
                            Description of project {i + 1}
                          </p>
                        </div>
                        <Badge
                          variant={
                            i % 3 === 0
                              ? "default"
                              : i % 3 === 1
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {i % 3 === 0
                            ? "Experimental"
                            : i % 3 === 1
                            ? "Case Study"
                            : "Real World"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experimental">
              <Card>
                <CardHeader>
                  <CardTitle>Experimental Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Projects exploring new technologies and concepts
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="real">
              <Card>
                <CardHeader>
                  <CardTitle>Real World Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Projects deployed and used by real users
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="caseStudy">
              <Card>
                <CardHeader>
                  <CardTitle>Case Studies </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Projects showcasing in-depth analysis and insights not yet
                    built. Only documentation available.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pie Chart */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Project Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={projectTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {projectTypes.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </div>
  );
}
