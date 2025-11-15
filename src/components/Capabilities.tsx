import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield, Radar, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Precision Surveillance",
    description: "Advanced optical and thermal imaging systems for real-time intelligence gathering with pinpoint accuracy.",
  },
  {
    icon: Shield,
    title: "Autonomous Defense",
    description: "AI-powered autonomous flight systems with obstacle avoidance and adaptive mission planning capabilities.",
  },
  {
    icon: Radar,
    title: "Long-Range Operations",
    description: "Extended flight endurance and range for strategic reconnaissance and border patrol missions.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick-launch systems and modular design enabling rapid field deployment and mission flexibility.",
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-gradient">Capabilities</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Next-generation UAV systems designed for mission-critical operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {capability.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
