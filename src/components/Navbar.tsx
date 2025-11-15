import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-foreground">Vyom</span>
            <span className="text-primary">Garud</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#capabilities" className="text-foreground hover:text-primary transition-colors">Capabilities</a>
            <a href="#highlights" className="text-foreground hover:text-primary transition-colors">Highlights</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          <Button variant="hero" size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
