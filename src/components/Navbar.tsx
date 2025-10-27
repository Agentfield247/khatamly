import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Add scroll listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Khatamly" className="h-7 sm:h-8 w-auto" />
            <span className="text-lg sm:text-xl font-bold text-foreground">Khatamly</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <div className="flex items-center py-2">
              <span className="text-foreground/80 mr-2">Theme:</span>
              <ThemeToggle />
            </div>
            <button
              onClick={() => scrollToSection("features")}
              className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Join Waitlist
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
