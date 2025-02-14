
import { Navigation } from "@/components/Navigation";
import { DataVisualization } from "@/components/DataVisualization";
import { Card } from "@/components/ui/card";
import {
  Brain,
  LineChart,
  Zap,
  TrendingUp,
  Activity,
  CheckCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Decisions",
    value: "1,234",
    change: "+12.3%",
    icon: Brain,
    trend: "up",
  },
  {
    title: "Accuracy Rate",
    value: "94.5%",
    change: "+2.1%",
    icon: CheckCircle,
    trend: "up",
  },
  {
    title: "Processing Time",
    value: "1.2s",
    change: "-0.3s",
    icon: Zap,
    trend: "down",
  },
  {
    title: "Active Projects",
    value: "23",
    change: "+3",
    icon: Activity,
    trend: "up",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.title}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="mt-2 text-3xl font-semibold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-3 rounded-full ${
                        stat.trend === "up"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-600"> vs last month</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <DataVisualization />
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Recent Decisions
                </h3>
                {/* Add decision list here */}
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
