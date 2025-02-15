
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
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden",
          collapsed ? "hidden" : "block"
        )}
        onClick={() => setCollapsed(true)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-72 border-r bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:w-72",
          collapsed ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <Link to="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-insight-600">EcomDecisions</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(true)}
            className="lg:hidden ml-auto"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col h-[calc(100vh-4rem)]">
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-4">
            <div className="rounded-lg bg-insight-50 p-4">
              <p className="text-sm font-medium text-insight-600">Decision Hub</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Make data-driven decisions for your e-commerce business
              </p>
            </div>
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
