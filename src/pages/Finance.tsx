
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "Feb", revenue: 52000, expenses: 35000, profit: 17000 },
  { month: "Mar", revenue: 61000, expenses: 38000, profit: 23000 },
  { month: "Apr", revenue: 58000, expenses: 36000, profit: 22000 },
  { month: "May", revenue: 65000, expenses: 39000, profit: 26000 },
];

const categoryPerformance = [
  { category: "Electronics", revenue: 25000, profit: 8000 },
  { category: "Clothing", revenue: 18000, profit: 6000 },
  { category: "Home", revenue: 15000, profit: 4500 },
  { category: "Beauty", revenue: 12000, profit: 3800 },
];

export default function Finance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full">
        <DashboardSidebar />
        <main className="flex-1 min-w-0 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Financial Metrics</h1>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6">
                  <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">$281,000</p>
                  <p className="mt-2 text-sm text-green-600">+12.5% vs last period</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-sm font-medium text-gray-600">Total Profit</h3>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">$101,000</p>
                  <p className="mt-2 text-sm text-green-600">+15.2% vs last period</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-sm font-medium text-gray-600">Profit Margin</h3>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">35.9%</p>
                  <p className="mt-2 text-sm text-green-600">+2.1% vs last period</p>
                </Card>
              </div>

              {/* Revenue & Expenses Chart */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue & Expenses Overview</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        name="Revenue"
                      />
                      <Area
                        type="monotone"
                        dataKey="expenses"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        name="Expenses"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Category Performance */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Category Performance</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                      <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
