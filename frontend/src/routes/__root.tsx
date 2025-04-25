import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-900">FeedbackHub</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium [&.active]:border-blue-500 [&.active]:text-gray-900 [&:not(.active)]:border-transparent [&:not(.active)]:text-gray-500 [&:not(.active)]:hover:border-gray-300 [&:not(.active)]:hover:text-gray-700"
                >
                  New Feedback
                </Link>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium [&.active]:border-blue-500 [&.active]:text-gray-900 [&:not(.active)]:border-transparent [&:not(.active)]:text-gray-500 [&:not(.active)]:hover:border-gray-300 [&:not(.active)]:hover:text-gray-700"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
});
