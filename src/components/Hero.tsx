import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Advanced UAV System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">Vyom</span>
            <span className="text-gradient">Garud</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-2xl font-light">
            Military-Grade UAV Systems Built for Precision, Reliability, and Advanced Autonomy
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto glow-effect"
            >
              Explore Capabilities
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
