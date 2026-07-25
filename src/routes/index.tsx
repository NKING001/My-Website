import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "../content/projects";
import { certifications } from "@/content/certifications";
import { experiences } from "@/content/experience";
import { RESUME_URL } from "@/lib/links";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nihar Kumar Patel — CS engineer, data & ML systems" },
      {
        name: "description",
        content:
          "Portfolio of Nihar Kumar Patel — computer science engineer building data-driven software and machine learning systems.",
      },
      { property: "og:title", content: "Nihar Kumar Patel — CS engineer, data & ML systems" },
      {
        property: "og:description",
        content:
          "Portfolio of Nihar Kumar Patel — computer science engineer building data-driven software and machine learning systems.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO — broken grid */}
      <section className="relative overflow-hidden border-b-2 border-bone">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <TelemetryTrace />
        {/* Rotated sticker */}
        <div className="hidden md:block absolute top-10 right-10 rotate-[8deg] z-10">
          <div className="brutal-border border-gold p-4 bg-noir font-mono-ui text-[10px] uppercase tracking-widest text-gold">
            <div>◆ Portfolio</div>
            <div>◆ 2026 Edition</div>
            <div>◆ v1.0.0</div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="h-px w-16 bg-gold" />
            <span className="eyebrow">Engineer · Student · Builder</span>
          </motion.div>

          <h1 className="font-display font-extrabold uppercase leading-[0.82] text-[18vw] md:text-[13rem] tracking-[-0.05em]">
            <MaskLine delay={0.05}>Nihar</MaskLine>
            <MaskLine delay={0.15}>
              <span className="inline-block">Ku</span>
              <span className="inline-block text-gold italic font-normal lowercase">mar</span>
            </MaskLine>
            <MaskLine delay={0.25}>
              <span className="inline-block">Patel</span>
              <span className="text-gold">.</span>
            </MaskLine>
          </h1>

          <div className="mt-14 grid grid-cols-12 gap-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="col-span-12 md:col-span-6 md:col-start-2 text-lg md:text-xl leading-relaxed text-bone/85"
            >
              Computer science undergrad shipping{" "}
              <span className="text-gold font-semibold">production-grade software</span>,{" "}
              <span className="text-gold font-semibold">AI/ML systems</span>, and{" "}
              <span className="text-gold font-semibold">data pipelines</span> — with a side interest in
              simulation and motorsports engineering. Open to global software, AI, and data internships.
            </motion.p>

            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="col-span-12 md:col-span-4 md:col-start-9 border-2 border-bone p-5 font-mono-ui text-xs bg-carbon relative"
            >
              <span className="absolute -top-3 left-4 bg-noir px-2 text-gold uppercase tracking-widest">
                /status
              </span>
              <Meta k="Role" v="CS Engineer · UG" />
              <Meta k="Based" v="Bhopal · IN" />
              <Meta k="Focus" v="Software · AI · Data" />
              <Meta k="Stack" v="Python · C++ · React" />
              <Meta k="Open to" v="Global internships" last />
            </motion.aside>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {["Software", "AI / ML", "Data", "IoT", "Simulation"].map((t) => (
              <span key={t} className="sticker">{t}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border-2 border-gold bg-gold text-noir px-5 py-3 font-mono-ui text-xs uppercase tracking-widest hover:bg-noir hover:text-gold transition-colors min-h-11"
            >
              See Work →
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume (opens in Google Drive)"
              className="inline-flex items-center gap-2 border-2 border-bone px-5 py-3 font-mono-ui text-xs uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors min-h-11"
            >
              View Resume ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* STATS strip */}
      <section className="border-b-2 border-bone bg-gold text-noir">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            [String(projects.length).padStart(2, "0"), "Shipped projects"],
            [String(certifications.length).padStart(2, "0"), "Certifications"],
            ["06", "Public repos · GitHub"],
            ["02", "Hands-on training / venture"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col">
              <div className="font-display font-extrabold text-4xl md:text-6xl leading-none">{n}</div>
              <div className="mt-2 font-mono-ui text-[10px] uppercase tracking-widest">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK — broken index */}
      <section className="border-b-2 border-bone">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-14 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="eyebrow mb-4">§ /01 Selected Work</div>
              <h2 className="font-display font-extrabold uppercase text-5xl md:text-7xl leading-[0.9]">
                Selected work.<br />
                <span className="text-gold italic font-normal">Shipped code.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border-2 border-bone px-5 py-2.5 font-mono-ui text-xs uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors min-h-11"
              >
                Index → {String(projects.length).padStart(2, "0")}
              </Link>
            </div>
          </div>

          <ul className="space-y-0">
            {featured.map((p, i) => (
              <li key={p.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className={`group block border-t-2 border-bone py-10 hover:bg-carbon transition-colors relative ${
                    i % 2 === 1 ? "md:pl-24" : ""
                  }`}
                >
                  <div className="grid grid-cols-12 gap-4 items-baseline">
                    <div className="col-span-2 md:col-span-1 font-display font-extrabold text-4xl md:text-6xl text-gold leading-none">
                      {p.index}
                    </div>
                    <div className="col-span-10 md:col-span-7">
                      <h3 className="font-display font-bold uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight">
                        <span className="gold-underline gold-underline-hover">{p.title}</span>
                      </h3>
                      <p className="mt-3 text-muted-foreground max-w-lg">{p.tagline}</p>
                    </div>
                    <div className="col-span-8 md:col-span-3 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map((s) => (
                        <span key={s} className="sticker">{s}</span>
                      ))}
                    </div>
                    <div className="col-span-4 md:col-span-1 text-right font-display font-extrabold text-3xl md:text-5xl text-bone group-hover:text-gold group-hover:translate-x-2 transition-all">
                      →
                    </div>
                  </div>
                </Link>
              </li>
            ))}
            <li className="border-t-2 border-bone" />
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b-2 border-bone scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-14 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="eyebrow mb-4">§ /02 Experience</div>
              <h2 className="font-display font-extrabold uppercase text-5xl md:text-7xl leading-[0.9]">
                Training &amp; <span className="text-gold italic font-normal">building.</span>
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Hands-on technical training and an ongoing founder build — the fastest paths
                I have to shipping and learning at the same time.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link
                to="/about"
                hash="experience"
                className="inline-flex items-center gap-2 border-2 border-bone px-5 py-2.5 font-mono-ui text-xs uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors min-h-11"
              >
                Full timeline →
              </Link>
            </div>
          </div>

          <ul className="grid grid-cols-12 gap-4 md:gap-6">
            {experiences.map((x) => (
              <li
                key={x.id}
                className="col-span-12 md:col-span-6 border-2 border-bone p-6 md:p-8 flex flex-col bg-carbon"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-mono-ui text-[10px] uppercase tracking-widest px-2 py-1 border ${
                      x.kind === "training"
                        ? "border-gold text-gold"
                        : "border-bone text-bone bg-noir"
                    }`}
                  >
                    {x.category}
                  </span>
                  <span className="font-mono-ui text-[10px] text-muted-foreground">
                    {x.period}
                  </span>
                </div>
                <h3 className="mt-6 font-display font-bold uppercase text-2xl md:text-3xl leading-[0.95]">
                  {x.role}
                </h3>
                <div className="mt-2 font-mono-ui text-xs text-gold uppercase tracking-widest">
                  {x.org}
                </div>
                <p className="mt-4 text-sm text-bone/80 leading-relaxed">{x.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {x.skills.slice(0, 5).map((s) => (
                    <span key={s} className="sticker !text-bone !border-bone">
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CREDENTIALS — bento */}
      <section className="border-b-2 border-bone">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="eyebrow mb-4">§ /03 Credentials</div>
          <h2 className="font-display font-extrabold uppercase text-5xl md:text-7xl leading-[0.9] mb-14">
            Trained where <span className="text-gold italic font-normal">it matters.</span>
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {certifications.map((c, i) => {
              const spans = [
                "col-span-12 md:col-span-7 md:row-span-2 md:min-h-64",
                "col-span-6 md:col-span-5",
                "col-span-6 md:col-span-5",
                "col-span-12 md:col-span-12",
              ];
              const span = spans[i] ?? "col-span-12 md:col-span-6";
              return (
                <div
                  key={c.title}
                  className={`border-2 border-bone p-6 md:p-8 flex flex-col justify-between hover:bg-gold hover:text-noir transition-colors group ${span}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono-ui text-[10px] uppercase tracking-widest text-gold group-hover:text-noir">
                      {c.org}
                    </span>
                    <span className="font-mono-ui text-[10px] text-muted-foreground group-hover:text-noir">
                      {String(i + 1).padStart(2, "0")} / {c.year}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold uppercase text-2xl md:text-4xl leading-[0.95] mt-8">
                      {c.title}
                    </div>
                    <div className="mt-5">
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-2 border-bone group-hover:border-noir px-3 py-2 font-mono-ui text-[10px] uppercase tracking-widest hover:bg-bone hover:!text-noir transition-colors"
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
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="eyebrow mb-4">§ /04 Contact</div>
              <h2 className="font-display font-extrabold uppercase text-6xl md:text-9xl leading-[0.85]">
                Got a role,<br />
                a project,<br />
                <Link to="/contact" className="text-gold italic font-normal hover:underline underline-offset-8 decoration-4">
                  or an idea?
                </Link>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Link
                to="/contact"
                className="block border-2 border-bone bg-noir p-6 hover:bg-gold hover:text-noir hover:border-gold transition-colors group"
              >
                <div className="font-mono-ui text-[10px] uppercase tracking-widest text-gold group-hover:text-noir mb-4">
                  → /contact
                </div>
                <div className="font-display font-bold text-2xl uppercase">
                  Start a conversation
                </div>
                <div className="mt-6 flex justify-between items-baseline">
                  <span className="font-mono-ui text-xs">Email · LinkedIn</span>
                  <span className="font-display font-extrabold text-3xl" aria-hidden>→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MaskLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Meta({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between py-2 ${last ? "" : "border-b border-hairline"}`}>
      <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{k}</span>
      <span className="text-bone">{v}</span>
    </div>
  );
}


function TelemetryTrace() {
  // Subtle F1-telemetry-style signal trace behind the hero.
  // Static path with a slow dash animation; disabled by prefers-reduced-motion via global CSS.
  const path =
    "M0,120 L60,120 L90,60 L130,60 L160,150 L210,150 L240,90 L300,90 L330,40 L380,40 L410,130 L470,130 L500,80 L560,80 L590,170 L650,170 L680,50 L740,50 L770,110 L830,110 L860,70 L920,70 L950,140 L1010,140 L1040,90 L1100,90 L1130,30 L1200,30";
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-56 w-full opacity-[0.14] md:opacity-[0.18] z-0 motion-reduce:opacity-[0.08]"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="telemetry-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0" />
          <stop offset="20%" stopColor="var(--color-gold)" stopOpacity="1" />
          <stop offset="80%" stopColor="var(--color-gold)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="url(#telemetry-fade)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        className="motion-safe:[animation:telemetry-dash_18s_linear_infinite]"
      />
    </svg>
  );
}

