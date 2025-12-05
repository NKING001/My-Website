import { Code2, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-[120px] opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-6">
          <Terminal className="w-4 h-4" />
          <span className="font-mono">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="block text-gradient">NIHAR KUMAR</span>
          <span className="block text-gradient mt-2">PATEL</span>
        </h1>

        <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-muted-foreground font-mono">
          <Code2 className="w-5 h-5 text-primary" />
          <span>Computer Science Engineer</span>
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Building the future at the intersection of{" "}
          <span className="text-primary font-semibold">smart technology</span>,{" "}
          <span className="text-secondary font-semibold">motorsports engineering</span>, and{" "}
          <span className="text-primary font-semibold">digital innovation</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:glow-effect transition-all duration-300 hover:-translate-y-1"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-12">
          {['IoT', 'F1 Engineering', 'Smart Tech', 'Innovation'].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 bg-code-bg border border-border rounded-md text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
