import { Languages as LanguagesIcon } from "lucide-react";

const Languages = () => {
  const languages = [
    { name: "English", proficiency: "Fluent", level: 95 },
    { name: "Hindi", proficiency: "Native", level: 100 },
    { name: "Italian", proficiency: "Proficiency Level", level: 80 },
  ];

  return (
    <section id="languages" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<Languages />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="card-gradient p-6 rounded-xl border border-border hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <LanguagesIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{lang.name}</h3>
                    <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-semibold">{lang.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-code-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
