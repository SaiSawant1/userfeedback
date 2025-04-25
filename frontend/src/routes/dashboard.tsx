import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axiosInstance from "@/lib/axios";
import { useState } from "react";

interface Feedback {
  id: string;
  userName: string;
  email: string;
  feedback: string;
  category: string;
  createdAt: string;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "suggestion":
      return "bg-blue-100 text-blue-800";
    case "bug":
      return "bg-red-100 text-red-800";
    case "feature":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const fetchFeedbacks = async (): Promise<Feedback[]> => {
  const { data } = await axiosInstance.get("/api/feedback");
  return data.feedbacks;
};

type SortOption = "date-asc" | "date-desc";
type CategoryFilter = "all" | "feature" | "bug" | "suggestion";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  loader: () => fetchFeedbacks(),
});

function Dashboard() {
  const routeApi = getRouteApi("/dashboard");
  const feedbacks = routeApi.useLoaderData();
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  const filteredFeedbacks = feedbacks.filter((f: Feedback) => 
    categoryFilter === "all" ? true : f.category === categoryFilter
  );

  const sortedFeedbacks = [...filteredFeedbacks].sort((a, b) => {
    switch (sortBy) {
      case "date-asc":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "date-desc":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Feedback Dashboard
        </h1>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Total: {feedbacks.length}
          </Badge>
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Features: {feedbacks.filter((f: Feedback) => f.category === "feature").length}
          </Badge>
          <Badge variant="outline" className="bg-red-100 text-red-800">
            Bugs: {feedbacks.filter((f: Feedback) => f.category === "bug").length}
          </Badge>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Select
              value={categoryFilter}
              onValueChange={(value) => setCategoryFilter(value as CategoryFilter)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="feature">Features</SelectItem>
                <SelectItem value="bug">Bugs</SelectItem>
                <SelectItem value="suggestion">Suggestions</SelectItem>
              </SelectContent>
            </Select>
          </TooltipTrigger>
          <TooltipContent>
            <p>Filter feedback by category</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as SortOption)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Newest First</SelectItem>
                <SelectItem value="date-asc">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sort feedback by date</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedFeedbacks.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{item.userName}</CardTitle>
                <Badge className={getCategoryColor(item.category)}>
                  {item.category}
                </Badge>
              </div>
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{item.feedback}</p>
              <p className="text-sm text-gray-500 mt-2">{item.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
