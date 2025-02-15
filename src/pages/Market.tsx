import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const trendData = [
  { month: "Jan", trend: 82, competitors: 75 },
  { month: "Feb", trend: 85, competitors: 78 },
  { month: "Mar", trend: 90, competitors: 80 },
  { month: "Apr", trend: 87, competitors: 82 },
  { month: "May", trend: 92, competitors: 85 },
];

const marketShareData = [
  { name: "Your Store", value: 35 },
  { name: "Competitor A", value: 25 },
  { name: "Competitor B", value: 20 },
  { name: "Others", value: 20 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Market() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">Market Trends</h1>
              <div className="w-48">
                <Label htmlFor="timeframe">Timeframe</Label>
                <Select defaultValue="6m">
                  <SelectTrigger id="timeframe">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">Last Month</SelectItem>
                    <SelectItem value="3m">Last 3 Months</SelectItem>
                    <SelectItem value="6m">Last 6 Months</SelectItem>
                    <SelectItem value="1y">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Market Performance vs Competitors</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="trend" 
                      stroke="#8884d8" 
                      name="Your Performance"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="competitors" 
                      stroke="#82ca9d" 
                      name="Competitor Avg"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Market Share Distribution</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketShareData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Competitive Analysis</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-700">Strengths</h4>
                    <ul className="mt-2 text-sm text-green-600">
                      <li>• Higher customer satisfaction rates</li>
                      <li>• Unique product offerings</li>
                      <li>• Competitive pricing strategy</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-700">Opportunities</h4>
                    <ul className="mt-2 text-sm text-yellow-600">
                      <li>• Emerging market segments</li>
                      <li>• New product categories</li>
                      <li>• International expansion</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
