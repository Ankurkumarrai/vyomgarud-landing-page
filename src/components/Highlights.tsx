import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Military-grade construction with ruggedized components for extreme environments",
  "Advanced AI-powered autonomous navigation and mission execution",
  "Encrypted communication systems with anti-jamming capabilities",
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center">
            Why Choose <span className="text-gradient">VyomGarud</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
