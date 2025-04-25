import { createFileRoute } from "@tanstack/react-router";
import { FeedbackForm } from "../components/feedback-form";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Share Your Feedback
        </h1>
        <p className="text-gray-500">
          Help us improve by sharing your thoughts, reporting bugs, or
          suggesting new features
        </p>
      </div>
      <div className="flex justify-center">
        <FeedbackForm />
      </div>
    </div>
  );
}
