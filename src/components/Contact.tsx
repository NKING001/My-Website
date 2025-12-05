import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "niharkumarpatel01@gmail.com",
      href: "mailto:niharkumarpatel01@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/niharkumarpatel01",
      href: "https://linkedin.com/in/niharkumarpatel01",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/NKING001",
      href: "https://github.com/NKING001",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98269 68139",
      href: "tel:+919826968139",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-slide-up text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{'<Contact />'}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect if you share similar interests or opportunities in IoT, Formula 1, Engineering, 
            Innovation, Motorsports, or Smart Tech!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-gradient p-6 rounded-xl border border-border hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{contact.label}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-code-bg rounded-lg border border-border">
            <p className="text-sm text-muted-foreground font-mono">
              Built with <span className="text-primary">React</span> +{" "}
              <span className="text-secondary">TypeScript</span> +{" "}
              <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>
          <p className="text-muted-foreground mt-6">
            © 2025 Nihar Kumar Patel. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
