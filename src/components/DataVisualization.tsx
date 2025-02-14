
import { useEffect, useState } from "react";
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

// Mock data - replace with real data in production
const generateData = () => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push({
      date: `Day ${i + 1}`,
      decisions: Math.floor(Math.random() * 100),
      accuracy: Math.floor(Math.random() * 100),
    });
  }
  return data;
};

export function DataVisualization() {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Decision Analytics</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorDecisions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3894FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3894FF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="decisions"
              stroke="#3894FF"
              fillOpacity={1}
              fill="url(#colorDecisions)"
            />
            <Area
              type="monotone"
              dataKey="accuracy"
              stroke="#4CAF50"
              fillOpacity={1}
              fill="url(#colorAccuracy)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
