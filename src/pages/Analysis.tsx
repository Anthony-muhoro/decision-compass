
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";

export default function Analysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full">
        <DashboardSidebar />
        <main className="flex-1 min-w-0 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-900">Analysis</h1>
            <div className="mt-6">
              <Card className="p-6">
                <p>Analysis page content will go here</p>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
