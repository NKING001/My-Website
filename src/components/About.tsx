import { Cpu, Zap, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "IoT Expertise",
      description: "Hands-on exposure through Siemens professional training",
    },
    {
      icon: Zap,
      title: "Project-Based Learning",
      description: "Experienced in interdisciplinary collaboration",
    },
    {
      icon: Rocket,
      title: "Motorsport Enthusiast",
      description: "Keen follower of F1 engineering and performance analytics",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<About />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in">
            <div className="card-gradient p-8 rounded-xl border border-border hover-lift">
              <p className="text-lg leading-relaxed text-foreground">
                I'm currently pursuing my <span className="text-primary font-semibold">B.Tech in Computer Science Engineering</span>, 
                with a strong interest in smart technologies, motorsports engineering, and digital innovation.
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                My passion lies at the intersection of <span className="text-secondary font-semibold">speed</span>, 
                <span className="text-primary font-semibold"> precision</span>, and 
                <span className="text-secondary font-semibold"> technology</span> — and I'm actively working toward 
                contributing to advanced automotive systems, especially in the world of <span className="text-primary font-semibold">Formula 1</span>.
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                I'm building my profile to gain real-world experience, connect with industry experts, and unlock opportunities 
                in the automotive and tech sectors. Whether it's data-driven design, connected devices, or performance 
                optimization — I aim to be a part of the future that moves 
                <span className="text-secondary font-semibold"> faster</span>, 
                <span className="text-primary font-semibold"> smarter</span>, and 
                <span className="text-secondary font-semibold"> cleaner</span>.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-gradient p-6 rounded-xl border border-border hover-lift group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
