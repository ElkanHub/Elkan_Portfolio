// components/ProjectsDashboard.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Filter, Users, Briefcase, Beaker, BarChart3 } from "lucide-react";
import { projectTypes, contributionData } from "@/data/projects";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ProjectsDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Navigation */}
      <div className="flex flex-wrap gap-2 items-center">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Beaker className="h-4 w-4" />
          Experimental projects
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Briefcase className="h-4 w-4" />
          Casestudies
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <BarChart3 className="h-4 w-4" />
          Real world projects
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          Users accross all platforms
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <div className="ml-auto flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            50+ projects
          </Badge>
        </div>
      </div>

      {/* Stats and Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">50+</div>
                <p className="text-sm text-muted-foreground">Total Projects</p>
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
                <div className="text-3xl font-bold">30</div>
                <p className="text-sm text-muted-foreground">Real World</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for Project Categories */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="experimental">Experimental</TabsTrigger>
              <TabsTrigger value="real">Real World</TabsTrigger>
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

      {/* Contribution Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Graph of contribution hours logged in monthly</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={contributionData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 40]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
