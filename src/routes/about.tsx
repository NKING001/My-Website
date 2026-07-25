import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/nihar-portrait.jpg";
import { certifications } from "@/content/certifications";
import { experiences } from "@/content/experience";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nihar Kumar Patel" },
      {
        name: "description",
        content:
          "Computer science engineering student at UIT Barkatullah Vishwavidyalaya, focused on machine learning, data systems and simulation.",
      },
      { property: "og:title", content: "About — Nihar Kumar Patel" },
      {
        property: "og:description",
        content:
          "Computer science engineering student focused on machine learning, data systems and simulation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const skills: { group: string; items: string[] }[] = [
  { group: "Programming", items: ["Python", "C", "C++"] },
  { group: "AI & Data", items: ["Machine Learning", "Data Analysis", "TensorFlow", "Pandas", "NumPy", "Scikit-Learn"] },
  { group: "Libraries", items: ["Tkinter", "Streamlit", "Matplotlib", "Fast F1"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Blockchain", items: ["Solidity", "Smart Contracts"] },
  { group: "IoT", items: ["Sensors", "Telemetry", "Data Acquisition", "Siemens Insight Hub"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
];

function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Hero */}
      <div className="grid grid-cols-12 gap-6 relative">
        <div className="col-span-12 md:col-span-8">
          <div className="eyebrow mb-6">§ /about · dossier</div>
          <h1 className="font-display font-extrabold uppercase text-6xl md:text-[10rem] leading-[0.82] tracking-tight">
            The <span className="text-gold italic font-normal">engineer</span><br />
            behind<br />
            the code<span className="text-gold">.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-bone/85 leading-relaxed">
            Computer Science Engineering student at BUIT, Bhopal. I build{" "}
            <span className="text-gold">software, AI/ML systems, and data pipelines</span> —
            from ETL workflows and predictive models to IoT prototypes and simulation tooling.
            I care about clean engineering, honest measurement, and shipping. On the side, I&apos;m
            fascinated by <span className="text-gold">Formula 1</span> telemetry and
            performance analytics — where software meets physics at the limit.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-4 md:pt-16">
          <div className="aspect-[4/5] brutal-border border-gold bg-carbon relative overflow-hidden">
            <img
              src={portrait}
              alt="Nihar Kumar Patel — portrait"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
              loading="eager"
            />
            <div className="absolute inset-0 grid-lines opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-3 right-3 font-mono-ui text-[10px] text-gold bg-noir/80 px-2 py-1 border border-gold">
              [ NKP-001 ]
            </div>
            <div className="absolute bottom-3 left-3 font-mono-ui text-[10px] text-bone bg-noir/80 px-2 py-1 border border-bone">
              ◆ Bhopal · IN
            </div>
          </div>
        </aside>
      </div>

      {/* Highlights */}
      <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6">
        {[
          ["Software & AI", "Ships ML models, data pipelines, and full-stack tools end-to-end."],
          ["IoT · Hands-on", "Industrial IoT training via NITTTR × Siemens: sensors, protocols, cloud."],
          ["Engineering Mindset", "Enjoys simulation and motorsport analytics as an applied playground."],
        ].map(([h, d]) => (
          <div key={h} className="col-span-12 md:col-span-4 border-2 border-bone p-6 hover:bg-gold hover:text-noir transition-colors group">
            <div className="font-mono-ui text-[10px] uppercase tracking-widest text-gold group-hover:text-noir">◆ Focus</div>
            <div className="mt-4 font-display font-bold uppercase text-2xl leading-tight">{h}</div>
            <div className="mt-3 text-sm text-muted-foreground group-hover:text-noir/70">{d}</div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div id="experience" className="mt-28 grid grid-cols-12 gap-6 scroll-mt-24">
        <div className="col-span-12 md:col-span-4">
          <div className="eyebrow mb-4">§ /01 Experience</div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[0.9]">
            Trained &amp;<br />
            <span className="text-gold italic font-normal">building.</span>
          </h2>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm">
            An honest split — professional technical training on one side, and an ongoing
            founder build on the other.
          </p>
        </div>
        <ol className="col-span-12 md:col-span-8 relative">
          {experiences.map((x) => (
            <li
              key={x.id}
              className="border-t-2 border-bone py-8 grid grid-cols-12 gap-4"
            >
              <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
                <span
                  className={`self-start font-mono-ui text-[10px] uppercase tracking-widest px-2 py-1 border ${
                    x.kind === "training"
                      ? "border-gold text-gold"
                      : "border-bone text-bone"
                  }`}
                >
                  {x.category}
                </span>
                <span className="font-mono-ui text-xs text-gold uppercase tracking-widest">
                  {x.period}
                </span>
                <span className="font-mono-ui text-[10px] text-muted-foreground uppercase tracking-widest">
                  {x.location}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="font-display font-bold uppercase text-2xl md:text-3xl leading-tight">
                  {x.role}
                </div>
                <div className="mt-2 text-muted-foreground">{x.org}</div>
                <p className="mt-4 text-bone/85 leading-relaxed max-w-2xl">{x.summary}</p>
                <ul className="mt-5 space-y-2 max-w-2xl">
                  {x.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-bone/80">
                      <span aria-hidden className="text-gold shrink-0">◆</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {x.skills.map((s) => (
                    <span key={s} className="sticker !text-bone !border-bone">
                      {s}
                    </span>
                  ))}
                </div>
                {x.disclaimer && (
                  <p className="mt-4 font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground max-w-2xl">
                    ◇ {x.disclaimer}
                  </p>
                )}
              </div>
            </li>
          ))}
          <li className="border-t-2 border-bone" />
        </ol>
      </div>

      {/* Education */}
      <div className="mt-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="eyebrow mb-4">§ /02 Education</div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[0.9]">
            Formation<span className="text-gold">.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <EducationRow
            degree="B.Tech · Computer Science Engineering"
            org="Barkatullah University Institute of Technology (BUIT), Bhopal"
            period="2024 → 2028"
            note="Ongoing · AI/ML · Data Analytics"
          />
          <EducationRow
            degree="High School Diploma · Mathematics Stream"
            org="Bhopal Public School, Bhopal"
            period="2023 — 2024"
            note="Mathematics · Physics · Chemistry"
          />
          <EducationRow
            degree="Middle School Diploma"
            org="Sacred Heart Convent School, Rewa"
            period="2021 — 2022"
            note="Foundation · Discipline · Time Management"
          />
          <div className="border-t-2 border-bone" />
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="eyebrow mb-4">§ /03 Certifications</div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[0.9]">
            Trained<span className="text-gold">.</span>
          </h2>
        </div>
        <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-4">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="flex flex-col justify-between border-2 border-bone p-5 hover:bg-gold hover:text-noir transition-colors group"
            >
              <div>
                <div className="font-mono-ui text-[10px] uppercase tracking-widest text-gold group-hover:text-noir">
                  {c.org} · {c.year}
                </div>
                <div className="mt-3 font-display font-bold uppercase text-2xl leading-tight">{c.title}</div>
                <div className="mt-3 text-xs text-muted-foreground group-hover:text-noir/70">{c.topics}</div>
                {c.credentialId && (
                  <div className="mt-2 font-mono-ui text-[10px] text-muted-foreground group-hover:text-noir/70">
                    ID · {c.credentialId}
                  </div>
                )}
              </div>
              <div className="mt-4">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-bone group-hover:border-noir px-3 py-2 font-mono-ui text-[10px] uppercase tracking-widest hover:bg-noir hover:!text-bone transition-colors"
                  >
                    View credential <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    title="Credential document link coming soon"
                    className="inline-flex items-center gap-2 border-2 border-dashed border-bone/50 group-hover:border-noir/40 px-3 py-2 font-mono-ui text-[10px] uppercase tracking-widest text-bone/60 group-hover:text-noir/60"
                  >
                    Credential on request
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

      </div>

      {/* Skills */}
      <div className="mt-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="eyebrow mb-4">§ /04 Technical</div>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[0.9]">
            Stack<span className="text-gold">.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          {skills.map((s) => (
            <div key={s.group} className="border-t-2 border-bone py-6 grid grid-cols-12 gap-4 items-baseline">
              <div className="col-span-12 md:col-span-4 font-mono-ui text-xs text-gold uppercase tracking-widest">
                /{s.group.toLowerCase().replace(/ & /g, "-")}
              </div>
              <div className="col-span-12 md:col-span-8 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span key={it} className="sticker !text-bone !border-bone">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t-2 border-bone" />
        </div>
      </div>

      {/* Languages + Interests */}
      <div className="mt-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <div className="eyebrow mb-4">§ /05 Languages</div>
          <ul>
            {[
              ["English", "Professional"],
              ["Hindi", "Native"],
              ["Italian", "Learning"],
            ].map(([lang, level]) => (
              <li key={lang} className="border-t border-hairline py-4 flex justify-between items-baseline gap-4">
                <span className="font-display font-bold uppercase text-2xl md:text-3xl">{lang}</span>
                <span className="font-mono-ui text-[11px] text-gold uppercase tracking-widest shrink-0">{level}</span>
              </li>
            ))}
            <li className="border-t border-hairline" />
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="eyebrow mb-4">§ /06 Interests</div>
          <ul>
            {[
              "AI & Machine Learning",
              "Data Analytics & Simulation",
              "Motorsport Telemetry",
              "Open-Source Development",
            ].map((it) => (
              <li key={it} className="border-t border-hairline py-4 font-display font-bold uppercase text-2xl md:text-3xl">
                → {it}
              </li>
            ))}
            <li className="border-t border-hairline" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function EducationRow({
  degree,
  org,
  period,
  note,
}: {
  degree: string;
  org: string;
  period: string;
  note: string;
}) {
  return (
    <div className="border-t-2 border-bone py-8 grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-3 font-mono-ui text-xs text-gold uppercase tracking-widest">
        {period}
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="font-display font-bold uppercase text-2xl md:text-3xl leading-tight">{degree}</div>
        <div className="mt-2 text-muted-foreground">{org}</div>
        <div className="mt-3 sticker">{note}</div>
      </div>
    </div>
  );
}
