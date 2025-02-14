
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import {
  FileText,
  Download,
  Mail,
  Calendar,
  RefreshCw,
  Filter,
} from "lucide-react";
import { toast } from "sonner";

// Mock data - replace with API calls later
const mockReports = [
  {
    id: 1,
    name: "Q1 Performance Analysis",
    date: "2024-03-15",
    type: "Performance",
    status: "Completed",
  },
  {
    id: 2,
    name: "Market Trend Analysis",
    date: "2024-03-14",
    type: "Market",
    status: "Processing",
  },
  {
    id: 3,
    name: "Customer Behavior Report",
    date: "2024-03-13",
    type: "Customer",
    status: "Completed",
  },
];

export default function Reports() {
  const [reportType, setReportType] = useState("all");
  const [dateRange, setDateRange] = useState("7d");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Report generated successfully");
    } catch (error) {
      toast.error("Failed to generate report");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEmailReport = async (reportId: number) => {
    toast.promise(
      // Simulate API call
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Sending report...",
        success: "Report sent successfully",
        error: "Failed to send report",
      }
    );
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
                <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
                <Button
                  onClick={handleGenerateReport}
                  disabled={isGenerating}
                  className="bg-insight-600 hover:bg-insight-700"
                >
                  {isGenerating ? (
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <FileText className="h-4 w-4 mr-2" />
                  )}
                  Generate New Report
                </Button>
              </div>

              {/* Filters */}
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="reportType">Report Type</Label>
                    <Select
                      value={reportType}
                      onValueChange={setReportType}
                    >
                      <SelectTrigger id="reportType">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="performance">Performance</SelectItem>
                        <SelectItem value="market">Market Analysis</SelectItem>
                        <SelectItem value="customer">Customer Behavior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="dateRange">Date Range</Label>
                    <Select
                      value={dateRange}
                      onValueChange={setDateRange}
                    >
                      <SelectTrigger id="dateRange">
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="search">Search Reports</Label>
                    <Input
                      id="search"
                      placeholder="Search by name or type..."
                    />
                  </div>
                </div>
              </Card>

              {/* Reports List */}
              <Card className="p-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Report Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockReports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell className="font-medium">
                            {report.name}
                          </TableCell>
                          <TableCell>{report.date}</TableCell>
                          <TableCell>{report.type}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                report.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {report.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEmailReport(report.id)}
                              >
                                <Mail className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
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
