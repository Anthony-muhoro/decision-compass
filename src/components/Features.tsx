
import {
  Brain,
  LineChart,
  Shield,
  Zap,
  Database,
  Mail,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze your data to provide intelligent insights",
    icon: Brain,
  },
  {
    title: "Data Visualization",
    description: "Interactive charts and graphs for better understanding",
    icon: LineChart,
  },
  {
    title: "Secure Access",
    description: "Enterprise-grade security to protect your sensitive data",
    icon: Shield,
  },
  {
    title: "Real-time Processing",
    description: "Get instant insights as your data changes",
    icon: Zap,
  },
  {
    title: "Data Integration",
    description: "Connect with multiple data sources seamlessly",
    icon: Database,
  },
  {
    title: "Automated Reports",
    description: "Receive detailed analysis reports via email",
    icon: Mail,
  },
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Smart Decisions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive toolkit helps you make data-driven decisions with
            confidence.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-insight-600 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-insight-100 text-insight-600 group-hover:bg-insight-200 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
