import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's in Computer Science",
      institution: "Barkatullah University Institute of Technology (BUIT), Bhopal",
      location: "Bhopal (M.P), India",
      duration: "2024 - 2028",
      description: "As a Computer Science Engineering student at BUIT, I am building a strong foundation in software development, programming, data structures, algorithms, databases, operating systems, and emerging technologies like AI/ML and data analytics. Along with core academics, I actively explore real-world projects in web development, IoT, software engineering, and data science that help me apply classroom knowledge into practical solutions.I am deeply passionate about technology, problem-solving, and innovation. My long-term goal is to work in high-performance engineering domains such as Formula 1, motorsport analytics, aviation systems, and advanced tech companies. Through continuous learning, hands-on projects, and self-driven exploration, I am shaping myself into a capable and future-ready engineer.",
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Bhopal Public School",
      location: "Bhopal (M.P), India",
      duration: "2023 - 2024",
      description: "Completed 12th grade in 2024, a year of both academic focus and active participation in school life.Engaged in subject-specific projects, inter-school competitions, and leadership roles while balancing rigorous board exam preparation. Took part in cultural programs, community outreach, and skill-building workshops, developing teamwork, communication, and organizational abilities that will support future academic and professional growth.",
    },
    {
      id: 3,
      degree: "Middle School Diploma",
      institution: "Sacred Heart Convent School",
      location: "Rewa (M.P), India",
      duration: "2021 - 2022",
      description: "Completed coursework through a mix of online and in-person learning, developing strong self-discipline and time management skills. Participated in school activities including class projects, sports, cultural events, and community service, while navigating the challenges of pandemic restrictions.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<Education />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid gap-6">
          {educationData.map((edu, index) => (
            <Card
              key={edu.id}
              className="card-gradient p-6 md:p-8 border border-border hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed border-l-2 border-primary pl-4">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
