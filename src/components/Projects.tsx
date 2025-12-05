import { Folder, Github, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction",
      description: "Customer Churn Prediction System using Python and Machine Learning (Random Forest). This project predicts whether a customer is likely to churn based on age, contract type, payment method, monthly charges, and internet service. Includes real-time user input prediction and data visualization.",
      tags: ["Python", "Machine Learning", "Random Forest", "Pandas"],
      github: "https://github.com/NKING001/Customer-Churn-Prediction",
      demo: "#",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Expense Tracker using Python & Matplotlib. Takes salary and expense inputs from the user, calculates savings or overspending, and visualizes monthly expenses using a pie chart.",
      tags: ["Python", "Matplotlib", "NumPy"],
      github: "https://github.com/NKING001/Expense-Tracker",
      demo: "#",
    },
    {
      id: 3,
      title: "Weather Forecast",
      description: "Weather Forecast Visualization using Python, MySQL, Pandas & Matplotlib. Fetches real-time weather data from a MySQL database and visualizes temperature & humidity trends over time.",
      tags: ["Python", "MySQL", "Pandas", "Matplotlib"],
      github: "https://github.com/NKING001/Weather-Forecast",
      demo: "#",
    },
    {
      id: 4,
      title: "Python GUI Calculator",
      description: "A Python GUI Calculator built using Tkinter with basic arithmetic operations, percentage, radian conversion, and binary & hexadecimal number conversion.",
      tags: ["Python", "Tkinter", "GUI"],
      github: "https://github.com/NKING001/Python-GUI-Calculator",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<Projects />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="card-gradient p-6 border border-border hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-code-bg border border-border rounded-md text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
