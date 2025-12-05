import { Code, Database, Wrench, Cloud, Brain, Boxes } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C", "C++" ],
    },
    // {
    //   title: "Web Development",
    //   icon: Boxes,
    //   skills: ["React", "Node.js", "Next.js", "HTML/CSS", "REST APIs"],
    // },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB",  "MySQL"],
    },
    // {
    // //   title: "IoT & Hardware",
    // //   icon: Wrench,
    // //   skills: ["Arduino", "Raspberry Pi", "Sensors", "Embedded Systems"],
    // // },
    // // {
    // //   title: "Cloud & Tools",
    // //   icon: Cloud,
    // //   skills: ["Git", "Docker", "AWS", "Linux", "VS Code"],
    // },
    {
      title: "AI & Data",
      icon: Brain,
      skills: ["Machine Learning", "Data Analysis", "TensorFlow", "Pandas"],
    },
      {
      title: "Libraries",
      icon: Brain,
      skills: ["Numpy", "Sci-kit Learn", "Tkinter", "Streamlit","Matplotlib","Fast F1"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative bg-code-bg/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<Skills />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="text-muted-foreground font-mono text-sm">
            {`// Technical expertise and tools`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card-gradient p-6 rounded-xl border border-border hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-background/50 border border-border rounded-md text-sm text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Code snippet decoration */}
        <div className="mt-12 p-6 bg-code-bg rounded-xl border border-border font-mono text-sm overflow-x-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <pre className="text-muted-foreground">
            <code>
              <span className="text-secondary">const</span>{" "}
              <span className="text-foreground">skills</span> ={" "}
              <span className="text-primary">{'{'}</span>{"\n"}
              {"  "}passion: <span className="text-accent">'unlimited'</span>,{"\n"}
              {"  "}learning: <span className="text-accent">'continuous'</span>,{"\n"}
              {"  "}innovation: <span className="text-accent">'always'</span>,{"\n"}
              <span className="text-primary">{'}'}</span>;
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Skills;
