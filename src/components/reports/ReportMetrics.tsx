
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
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const timelineData = [
  { name: "Jan", sales: 4500, customers: 350 },
  { name: "Feb", sales: 6200, customers: 420 },
  { name: "Mar", sales: 8100, customers: 550 },
  { name: "Apr", sales: 5300, customers: 380 },
  { name: "May", sales: 7400, customers: 480 },
];

const categoryData = [
  { type: "Electronics", revenue: 15000 },
  { type: "Clothing", revenue: 12000 },
  { type: "Home & Garden", revenue: 8000 },
  { type: "Beauty", revenue: 10000 },
];

export function ReportMetrics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Sales & Customer Growth</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                fill="#8884d8"
                name="Sales ($)"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="customers"
                stroke="#82ca9d"
                fill="#82ca9d"
                name="Customers"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Revenue by Category</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
