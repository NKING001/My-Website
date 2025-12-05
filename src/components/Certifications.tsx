import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "C & C++ Progarmming Language ",
      issuer: "Xcel Analytics Computer Training Pvt. Ltd.",
      date: "September 2024",
      credentialId: "No. 1392",
      link: "https://drive.google.com/file/d/1rgOXJ5G_wbK3dacxTA1hsrKWAzxeYoxX/view?usp=sharing",
      description: "Skilled in C and C++ programming with a strong foundation in data structures, algorithms, and object-oriented programming. Experienced in developing efficient and optimized solutions using pointers, dynamic memory allocation, file handling, and the Standard Template Library (STL). Proficient in writing clean, maintainable code, debugging complex problems, and implementing both procedural and object-oriented programming concepts.",
    },
    {
      id: 2,
      title: "Internet of Things by SIEMENS",
      issuer: "NITTTR Bhopal-National Institute of Technical Teachers' Training and Research,Bhopal",
      date: "March 2025",
      credentialId: "NC-CONS74/2024-2025/14271",
      link: "https://drive.google.com/file/d/1lrf9OAzOgEQN_wNBMMuY4G_mWjPgkRK4/view?usp=sharing",
      description: "Completed a comprehensive course on Internet of Things (IoT) offered by NITTTR Bhopal in collaboration with SIEMENS , covering the fundamentals of IoT architecture, sensors and actuators, communication protocols, data acquisition, cloud integration, and real-time monitoring. Gained hands-on experience with IoT devices, embedded systems, and data analytics to develop smart solutions for real-world applications.",
    },
    {
      id: 3,
      title: "Google: Artificial Intelligence and Productivity",
      issuer: "Santander Open Academy",
      date: "June 2025",
      credentialId: "OA-2025-0810001565191",
      link: "https://drive.google.com/file/d/1Z3QHxRnlycQKd8RmIGJ_yA4C9h-yCmcI/view?usp=sharing",
      description: "Completed a 2-hour course comprising 2 modules with self-assessment, focused on leveraging Artificial Intelligence to enhance productivity and workflow efficiency. Gained practical insights into AI-powered tools, automation strategies, and their application in optimizing personal and professional tasks. Course delivered via Santander Open Academy, with content by Google.",
    },
    {
      id: 4,
      title: "Introduction to Data Science",
      issuer: "Santander Open Academy",
      date: "July 2025",
      credentialId: "OA-2025-0811001574652",
      link: "https://drive.google.com/file/d/1W0TseT1r7h1d96g6vjZjv_3MwN-WLihB/view?usp=sharing",
      description: "1. Completed a 6-hour program covering two modules with self-assessment.Gained foundational knowledge in data science concepts, including data analysis, visualization, and basic statistical methods. Content developed by IE University.",
    },
     {
      id: 5,
      title: "Introduction to Generative AI by Massachusetts Institute of Technology (MIT)",
      issuer: "Santander Open Academy",
      date: "August 2025",
      credentialId: "OA-2025-0812001582283",
      link: "https://drive.google.com/file/d/1pDQpSZHRgl_Qbr1bk_6NPP1wjrsqjJcF/view?usp=sharing",
      description: "Completed the 'Introduction to Generative IA' course offered by Santander Open Academy in collaboration with MIT Professional Education. This program provided an in-depth understanding of the fundamentals of Generative Artificial Intelligence, including its concepts, applications, ethical considerations, and future trends. The course covered practical use cases, emerging tools, and the role of generative AI in data-driven innovation.",
    },
    {
      id: 6,
      title: "High-Performance Leadership: Lessons from  Formula 1",
      issuer: "Santander Open Academy",
      date: "September 2025",
      credentialId: "OA-2025-0809001560339",
      link: "https://drive.google.com/file/d/14FH1tWahr-MHodNaiH5kSnJ3OCrHimtF/view?usp=sharing",
      description: "Completed an 8-hour, 2-module leadership program exploring high-pressure decision-making, teamwork, and continuous improvement, inspired by the principles of Formula 1®.Key topics: Controlling the controllables, prioritization using the Eisenhower Matrix, innovation sustainability, and resilience building.",
    },
     {
      id: 7,
      title: "Decentralized Voting",
      issuer: "Geeks of Gurukul",
      date: "October 2025",
      credentialId: "GOP-HKT-DCV-2025",
      link: "https://drive.google.com/file/d/1uq7MCKe40k1F36KeK47-oxrKh68lNgdT/view?usp=sharing",
      description: "Completed a Blockchain-based Decentralized Voting System project as part of the Core Ecosystem Hackathon by Geeks of Gurukul. Built a secure and transparent voting architecture using distributed ledgers and cryptographic validation.",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative bg-code-bg/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<Licenses & Certifications />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="card-gradient p-6 border border-border hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                </div>

                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Issued: {cert.date}</p>
                  {cert.credentialId && (
                    <p className="font-mono text-xs">{cert.credentialId}</p>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
