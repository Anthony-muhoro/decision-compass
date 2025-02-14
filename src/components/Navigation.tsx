
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-semibold text-insight-600">
              DecisionCompass
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-insight-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-insight-600 transition-colors"
            >
              Dashboard
            </Link>
            <Button
              variant="default"
              className="bg-insight-600 hover:bg-insight-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-insight-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-insight-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Button
              variant="default"
              className="w-full bg-insight-600 hover:bg-insight-700 text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
