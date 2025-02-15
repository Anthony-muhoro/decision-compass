
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  ChartBar,
  DollarSign,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    name: "Sales Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products Performance",
    href: "/dashboard/analysis",
    icon: ShoppingCart,
  },
  {
    name: "Customer Analytics",
    href: "/dashboard/reports",
    icon: Users,
  },
  {
    name: "Market Trends",
    href: "/dashboard/market",
    icon: ChartBar,
  },
  {
    name: "Financial Metrics",
    href: "/dashboard/finance",
    icon: DollarSign,
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
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:w-auto flex flex-col",
          collapsed ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b bg-insight-600 text-white">
          <Link to="/dashboard" className="text-xl font-semibold">
            EcomDecisions
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(true)}
            className="lg:hidden text-white hover:bg-insight-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-1 bg-gradient-to-b from-gray-50 to-white">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                location.pathname === item.href
                  ? "bg-insight-50 text-insight-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="px-4 py-3 bg-insight-50 rounded-lg">
            <p className="text-sm font-medium text-insight-600">Decision Hub</p>
            <p className="text-xs text-gray-600 mt-1">
              Make data-driven decisions for your e-commerce business
            </p>
          </div>
        </div>
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
