import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isBackgroundPage } from "@/lib/pageConfig";

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  
  // Check if current page should have transparent navigation
  const isTransparentPage = isBackgroundPage(location);

  const navItems = [
    { path: "/", label: "Hem" },
    { 
      path: "/services", 
      label: "Tjänster",
      hasDropdown: true,
      dropdownItems: [
        { path: "/website", label: "Hemsidor" },
        { path: "/digital-marketing", label: "Digital Marknadsföring" },
        { path: "/automation", label: "Automation" },
      ]
    },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <nav className={`fixed top-0 w-full ${isTransparentPage ? 'bg-transparent' : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'} border-b border-white/10 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <button className="flex items-center gap-2 hover:text-skerry-orange-400 transition-colors group">
                <img src="/skerry logo.png" alt="Skerry Logo" className="h-8 w-8 object-contain group-hover:scale-110 transition-transform brightness-0 invert drop-shadow-lg" />
                <span className="text-2xl font-bold text-white" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}>Skerry</span>
              </button>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center gap-1 transition-all duration-300 h-10 px-3 py-2 rounded-lg font-medium ${
                        isActive(item.path)
                          ? "text-white bg-white/10 font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu with enhanced dark theme */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-1 z-50">
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div className="absolute -top-1 left-0 right-0 h-2 bg-transparent"></div>
                        <div className="w-56 bg-black/40 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 py-2 animate-fade-in-up">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link key={dropdownItem.path} href={dropdownItem.path}>
                              <button
                                className="block w-full text-left px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-skerry-orange-500/20 transition-all duration-200 rounded-lg mx-2"
                                onClick={() => setIsServicesDropdownOpen(false)}
                              >
                                {dropdownItem.label}
                              </button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.path}>
                    <button
                      className={`flex items-center transition-all duration-300 h-10 px-3 py-2 rounded-lg font-medium ${
                        isActive(item.path)
                          ? "text-white bg-white/10 font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
                    >
                      {item.label}
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/20 backdrop-blur-sm border-t border-white/20 animate-fade-in-up">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className={`flex items-center justify-between w-full text-left py-3 px-2 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? "text-white bg-white/10 font-semibold"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link key={dropdownItem.path} href={dropdownItem.path}>
                              <button
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsServicesDropdownOpen(false);
                                }}
                                className="block w-full text-left py-2 px-2 text-white/70 hover:text-white hover:bg-skerry-orange-500/20 rounded-lg transition-all duration-300"
                              >
                                {dropdownItem.label}
                              </button>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.path}>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left py-3 px-2 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? "text-white bg-white/10 font-semibold"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
