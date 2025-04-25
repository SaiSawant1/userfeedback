import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data - replace with actual API calls later
const mockFeedback = [
  {
    id: 1,
    category: "suggestion",
    userName: "John Doe",
    email: "john@example.com",
    feedback: "Add dark mode support",
    createdAt: "2024-04-25T10:00:00Z",
  },
  {
    id: 2,
    category: "bug",
    userName: "Jane Smith",
    email: "jane@example.com",
    feedback: "Form validation not working on mobile",
    createdAt: "2024-04-24T15:30:00Z",
  },
  {
    id: 3,
    category: "feature",
    userName: "Bob Wilson",
    email: "bob@example.com",
    feedback: "Add export functionality for feedback data",
    createdAt: "2024-04-23T09:15:00Z",
  },
];

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

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Feedback Dashboard
        </h1>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-blue-100 text-blue-800">
            Total: {mockFeedback.length}
          </Badge>
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Features:{" "}
            {mockFeedback.filter((f) => f.category === "feature").length}
          </Badge>
          <Badge variant="outline" className="bg-red-100 text-red-800">
            Bugs: {mockFeedback.filter((f) => f.category === "bug").length}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockFeedback.map((item) => (
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
