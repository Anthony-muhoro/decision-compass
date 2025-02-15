
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
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp, Download, Target } from "lucide-react";
import { toast } from "sonner";

// Enhanced market trend data
const trendData = [
  { month: "Jan", trend: 82, competitors: 75, marketShare: 28, sentiment: 85 },
  { month: "Feb", trend: 85, competitors: 78, marketShare: 30, sentiment: 88 },
  { month: "Mar", trend: 90, competitors: 80, marketShare: 32, sentiment: 92 },
  { month: "Apr", trend: 87, competitors: 82, marketShare: 31, sentiment: 90 },
  { month: "May", trend: 92, competitors: 85, marketShare: 33, sentiment: 94 },
  { month: "Jun", trend: 95, competitors: 86, marketShare: 35, sentiment: 95 },
];

// Market share distribution
const marketShareData = [
  { name: "Your Store", value: 35, growth: "+5.2%" },
  { name: "Competitor A", value: 25, growth: "+2.1%" },
  { name: "Competitor B", value: 20, growth: "-1.5%" },
  { name: "Others", value: 20, growth: "-0.8%" },
];

// Competitive analysis radar data
const competitiveData = [
  { subject: 'Price', A: 85, B: 75, fullMark: 100 },
  { subject: 'Quality', A: 90, B: 80, fullMark: 100 },
  { subject: 'Selection', A: 78, B: 85, fullMark: 100 },
  { subject: 'Service', A: 92, B: 70, fullMark: 100 },
  { subject: 'Delivery', A: 88, B: 82, fullMark: 100 },
  { subject: 'UX', A: 85, B: 78, fullMark: 100 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Market() {
  const handlePredictTrends = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: 'Analyzing market trends...',
        success: 'Market trend prediction completed',
        error: 'Failed to analyze trends',
      }
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6">
          <div className="flex flex-col gap-6">
            {/* Header with Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Market Trends</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Analyze market position and competitive landscape
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handlePredictTrends}
                  className="bg-insight-600 hover:bg-insight-700"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Predict Trends
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Analysis
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Market Share</span>
                  <span className="text-2xl font-bold">35.2%</span>
                  <span className="text-sm text-green-600">+2.1% vs last month</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Customer Sentiment</span>
                  <span className="text-2xl font-bold">94.5%</span>
                  <span className="text-sm text-green-600">+1.5% vs last month</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Competitive Index</span>
                  <span className="text-2xl font-bold">8.5/10</span>
                  <span className="text-sm text-green-600">+0.3 vs last month</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">Growth Rate</span>
                  <span className="text-2xl font-bold">15.2%</span>
                  <span className="text-sm text-green-600">+3.2% vs last month</span>
                </div>
              </Card>
            </div>

            {/* Market Performance */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Market Performance Trends</h3>
                <Select defaultValue="6m">
                  <SelectTrigger className="w-[180px]">
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
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
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
                    <Line 
                      type="monotone" 
                      dataKey="sentiment" 
                      stroke="#ffc658" 
                      name="Customer Sentiment"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Market Share Distribution */}
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
                        label={({ name, value, growth }) => `${name} (${value}%) ${growth}`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Competitive Analysis Radar */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Competitive Analysis</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} data={competitiveData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Your Store"
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                      <Radar
                        name="Competition Avg"
                        dataKey="B"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            {/* Market Insights */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Market Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-700 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Growth Opportunities
                    </h4>
                    <ul className="mt-2 text-sm text-green-600 space-y-2">
                      <li>• Mobile commerce expansion potential (+25%)</li>
                      <li>• Untapped international markets (3 regions)</li>
                      <li>• New product category demand (Home Office)</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-700 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Trend Predictions
                    </h4>
                    <ul className="mt-2 text-sm text-blue-600 space-y-2">
                      <li>• Sustainable products demand increase</li>
                      <li>• Social commerce growth (+40% expected)</li>
                      <li>• AI-powered personalization adoption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
