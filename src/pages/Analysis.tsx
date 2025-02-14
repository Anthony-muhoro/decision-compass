
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataVisualization } from "@/components/DataVisualization";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LineChart, RefreshCw, Filter, Download } from "lucide-react";
import { toast } from "sonner";

// Mock data - replace with actual API calls later
const mockData = [
  { id: 1, metric: "Revenue", value: 150000, trend: "+12%", confidence: 0.89 },
  { id: 2, metric: "Conversion", value: 2500, trend: "+5%", confidence: 0.92 },
  { id: 3, metric: "Churn Rate", value: 450, trend: "-2%", confidence: 0.85 },
];

export default function Analysis() {
  const [timeRange, setTimeRange] = useState("7d");
  const [metric, setMetric] = useState("all");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAnalyze = async () => {
    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Analysis completed successfully");
    } catch (error) {
      toast.error("Failed to process analysis");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full">
        <DashboardSidebar />
        <main className="flex-1 min-w-0 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">Analysis</h1>
                <div className="flex gap-2">
                  <Button
                    onClick={handleAnalyze}
                    disabled={isProcessing}
                    className="bg-insight-600 hover:bg-insight-700"
                  >
                    {isProcessing ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <LineChart className="h-4 w-4 mr-2" />
                    )}
                    Run Analysis
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="timeRange">Time Range</Label>
                    <Select
                      value={timeRange}
                      onValueChange={setTimeRange}
                    >
                      <SelectTrigger id="timeRange">
                        <SelectValue placeholder="Select time range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="metric">Metric</Label>
                    <Select
                      value={metric}
                      onValueChange={setMetric}
                    >
                      <SelectTrigger id="metric">
                        <SelectValue placeholder="Select metric" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Metrics</SelectItem>
                        <SelectItem value="revenue">Revenue</SelectItem>
                        <SelectItem value="conversion">Conversion</SelectItem>
                        <SelectItem value="churn">Churn Rate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="confidence">Min. Confidence</Label>
                    <Input
                      id="confidence"
                      type="number"
                      placeholder="0.8"
                      min="0"
                      max="1"
                      step="0.1"
                    />
                  </div>
                </div>
              </Card>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <DataVisualization />
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
                  <div className="h-[300px]">
                    {/* Add additional chart here */}
                  </div>
                </Card>
              </div>

              {/* Results Table */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Analysis Results</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Trend</TableHead>
                        <TableHead>Confidence</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockData.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.metric}</TableCell>
                          <TableCell>{row.value.toLocaleString()}</TableCell>
                          <TableCell
                            className={
                              row.trend.startsWith("+")
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {row.trend}
                          </TableCell>
                          <TableCell>
                            {(row.confidence * 100).toFixed(1)}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
