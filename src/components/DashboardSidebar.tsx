
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart,
  FileText,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Analysis",
    href: "/dashboard/analysis",
    icon: BarChart,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-gray-600/75 lg:hidden",
          collapsed ? "hidden" : "block"
        )}
        onClick={() => setCollapsed(true)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:w-auto flex flex-col",
          collapsed ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/dashboard" className="text-xl font-semibold text-insight-600">
            DecisionCompass
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(true)}
            className="lg:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === item.href
                  ? "bg-insight-50 text-insight-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(false)}
        className={cn(
          "fixed left-4 top-4 z-50 lg:hidden",
          !collapsed && "hidden"
        )}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  );
}
