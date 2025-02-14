
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { name: "Jan", reports: 4, completed: 3 },
  { name: "Feb", reports: 6, completed: 5 },
  { name: "Mar", reports: 8, completed: 7 },
  { name: "Apr", reports: 5, completed: 4 },
  { name: "May", reports: 7, completed: 6 },
];

export function ReportMetrics() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Report Generation Metrics</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="reports"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="completed"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
