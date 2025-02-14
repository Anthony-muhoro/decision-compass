
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-insight-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Make Better Decisions
            <br />
            <span className="text-insight-600">Powered by AI</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your decision-making process with data-driven insights and
            AI-powered recommendations.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              onClick={() => navigate("/dashboard")}
              size="lg"
              className="bg-insight-600 hover:bg-insight-700 text-white px-8 py-6 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-2"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-insight-200/20 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-insight-300/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>
    </div>
  );
}
