import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Hem" },
    { path: "/services", label: "Tjänster" },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-warm-gray-50/90 backdrop-blur-sm border-b border-warm-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <button className="text-2xl font-bold text-warm-gray-900 hover:text-skerry-orange-500 transition-colors">
                Skerry
              </button>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-warm-gray-900 font-semibold"
                      : "text-warm-gray-600 hover:text-warm-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-warm-gray-600 hover:text-warm-gray-900"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-warm-gray-50 border-t border-warm-gray-200">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left py-2 transition-colors ${
                      isActive(item.path)
                        ? "text-warm-gray-900 font-semibold"
                        : "text-warm-gray-600 hover:text-warm-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
