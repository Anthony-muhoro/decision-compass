
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface ReportFiltersProps {
  reportType: string;
  setReportType: (value: string) => void;
  dateRange: string;
  setDateRange: (value: string) => void;
}

export function ReportFilters({
  reportType,
  setReportType,
  dateRange,
  setDateRange,
}: ReportFiltersProps) {
  return (
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
  );
}
