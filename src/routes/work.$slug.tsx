import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectBySlug, projects, type Project } from "../content/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Nihar Kumar Patel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    const title = `${p.title} — Nihar Kumar Patel`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="eyebrow mb-4">Error / 404</div>
      <h1 className="font-display font-extrabold uppercase text-6xl tracking-tight">Project not found.</h1>
      <Link
        to="/work"
        className="mt-8 inline-block border-2 border-bone px-5 py-2 font-mono-ui text-xs uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors"
      >
        ← All work
      </Link>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];
  const isVenture = project.kind === "venture";
  const caseLabel = isVenture ? "Venture · Product Build" : "Case";

  return (
    <article className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <Link
        to="/work"
        className="inline-flex items-center gap-2 font-mono-ui text-xs uppercase tracking-widest text-gold hover:text-bone transition-colors"
      >
        ← /work · index
      </Link>

      <header className="mt-10 pb-14 border-b-2 border-bone relative">
        <div className="font-mono-ui text-xs text-gold uppercase tracking-widest mb-6 flex flex-wrap items-center gap-3">
          <span>{caseLabel} /{project.index} · {project.year}</span>
          {isVenture && (
            <span className="border-2 border-gold px-2 py-1 text-[10px] text-gold">
              Not a code repository
            </span>
          )}
        </div>
        <h1 className="font-display font-extrabold uppercase leading-[0.85] text-6xl md:text-[9rem] tracking-tight">
          {project.title}
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-bone/85 max-w-3xl">{project.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="sticker">{s}</span>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6 md:gap-10 mt-16">
        <div className="col-span-12 md:col-span-8 space-y-16">
          <section>
            <div className="eyebrow mb-4">§ Problem</div>
            <p className="font-display font-semibold text-2xl md:text-4xl leading-[1.15] text-bone">
              {project.problem}
            </p>
          </section>

          {project.constraints && project.constraints.length > 0 && (
            <section>
              <div className="eyebrow mb-6">§ Constraints</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-hairline">
                {project.constraints.map((c, i) => (
                  <li
                    key={i}
                    className="border-b border-hairline md:[&:nth-last-child(-n+2):nth-child(odd)]:md:border-b-0 py-5 md:pr-6 md:[&:nth-child(even)]:md:pl-6 md:[&:nth-child(even)]:md:border-l md:[&:nth-child(even)]:md:border-hairline text-bone/85 flex gap-4"
                  >
                    <span className="font-mono-ui text-[11px] text-gold uppercase tracking-widest pt-1">
                      C{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <div className="eyebrow mb-6">§ Approach</div>
            <ul className="space-y-0">
              {project.approach.map((line, i) => (
                <li key={i} className="flex gap-6 border-t border-hairline py-6">
                  <span className="font-display font-extrabold text-3xl md:text-5xl text-gold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-bone/85 leading-relaxed text-lg pt-1">{line}</span>
                </li>
              ))}
              <li className="border-t border-hairline" />
            </ul>
          </section>

          {project.decisions && project.decisions.length > 0 && (
            <section>
              <div className="eyebrow mb-6">§ Key decisions</div>
              <ul className="space-y-4">
                {project.decisions.map((d, i) => (
                  <li key={i} className="border-2 border-bone p-5 md:p-6 bg-carbon">
                    <div className="font-mono-ui text-[10px] text-gold uppercase tracking-widest">
                      Decision · {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 font-display font-bold uppercase text-xl md:text-2xl leading-tight">
                      {d.title}
                    </div>
                    <p className="mt-3 text-bone/80 leading-relaxed">{d.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.themes && project.themes.length > 0 && (
            <section>
              <div className="eyebrow mb-4">§ Engineering themes</div>
              <div className="flex flex-wrap gap-2">
                {project.themes.map((t) => (
                  <span
                    key={t}
                    className="border-2 border-bone px-3 py-1.5 font-mono-ui text-[11px] uppercase tracking-widest text-bone/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.nextSteps && project.nextSteps.length > 0 && (
            <section>
              <div className="eyebrow mb-6">§ What I&apos;d improve next</div>
              <ul className="space-y-0">
                {project.nextSteps.map((n, i) => (
                  <li key={i} className="flex gap-6 border-t border-hairline py-5">
                    <span className="font-mono-ui text-[11px] text-gold uppercase tracking-widest pt-1">
                      →{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-bone/80 leading-relaxed">{n}</span>
                  </li>
                ))}
                <li className="border-t border-hairline" />
              </ul>
            </section>
          )}

          {project.evidenceNote && (
            <section>
              <div className="border-l-2 border-gold pl-4 py-2 text-sm text-bone/70 leading-relaxed font-mono-ui">
                <span className="text-gold uppercase tracking-widest text-[10px] block mb-1">
                  Note on evidence
                </span>
                {project.evidenceNote}
              </div>
            </section>
          )}
        </div>

        <aside className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-28 border-2 border-bone p-6 bg-carbon relative">
            <span className="absolute -top-3 left-4 bg-noir px-2 font-mono-ui text-[10px] uppercase tracking-widest text-gold">
              /outcomes
            </span>
            <dl className="space-y-5 mt-2">
              {project.outcomes.map((o) => (
                <div key={o.label} className="border-b border-hairline pb-4 last:border-0">
                  <dt className="font-mono-ui text-[10px] uppercase tracking-widest text-muted-foreground">
                    {o.label}
                  </dt>
                  <dd className="font-display font-extrabold text-3xl md:text-4xl text-gold mt-1 leading-none">
                    {o.value}
                  </dd>
                </div>
              ))}
            </dl>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center border-2 border-bone px-4 py-3 font-mono-ui text-xs uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors min-h-11"
              >
                View repository ↗
              </a>
            ) : isVenture ? (
              <div className="mt-6 border-2 border-dashed border-bone/50 px-4 py-3 text-center font-mono-ui text-[10px] uppercase tracking-widest text-bone/70">
                Private build · repo not public
              </div>
            ) : (
              <a
                href="https://github.com/NKING001"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center border-2 border-bone px-4 py-3 font-mono-ui text-xs uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors min-h-11"
              >
                Browse GitHub profile ↗
              </a>
            )}
          </div>
        </aside>
      </div>

      <div className="mt-28 border-t-2 border-bone pt-10 grid grid-cols-12 gap-4 items-baseline">
        <div className="col-span-12 md:col-span-2 eyebrow">Next case</div>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="col-span-12 md:col-span-10 group flex items-baseline justify-between gap-4"
        >
          <span className="font-display font-extrabold uppercase text-3xl md:text-6xl tracking-tight group-hover:text-gold transition-colors">
            {next.title}
          </span>
          <span className="font-display font-extrabold text-3xl md:text-5xl text-gold group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
