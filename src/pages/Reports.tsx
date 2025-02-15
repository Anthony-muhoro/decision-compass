import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { FileText, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { ReportFilters } from "@/components/reports/ReportFilters";
import { ReportsList } from "@/components/reports/ReportsList";
import { ReportMetrics } from "@/components/reports/ReportMetrics";

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
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl font-semibold">Reports</h1>
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
            <ReportFilters
              reportType={reportType}
              setReportType={setReportType}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />

            {/* Metrics */}
            <ReportMetrics />

            {/* Reports List */}
            <ReportsList 
              reports={mockReports}
              onEmailReport={handleEmailReport}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
