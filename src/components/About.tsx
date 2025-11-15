const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-gradient">VyomGarud</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            VyomGarud is at the forefront of unmanned aerial vehicle technology, delivering 
            military-grade drone systems engineered for the most demanding operational environments.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to empower defense and security forces with cutting-edge UAV platforms 
            that combine precision engineering, advanced autonomy, and uncompromising reliability. 
            From surveillance to tactical operations, VyomGarud systems are built to exceed expectations 
            where failure is not an option.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
