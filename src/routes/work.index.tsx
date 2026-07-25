import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "../content/projects";

const filters = ["All", "Python", "ML", "Data", "Blockchain", "Venture"] as const;
type Filter = (typeof filters)[number];

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Nihar Kumar Patel" },
      {
        name: "description",
        content:
          "Selected engineering projects by Nihar Kumar Patel: ETL pipelines, F1 telemetry simulation, churn prediction, and more.",
      },
      { property: "og:title", content: "Work — Nihar Kumar Patel" },
      {
        property: "og:description",
        content:
          "Selected engineering projects: ETL pipelines, F1 telemetry simulation, churn prediction.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const list =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter as never));

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-12 gap-6 mb-14 items-end">
        <div className="col-span-12 md:col-span-9">
          <div className="eyebrow mb-4">§ Index · {String(projects.length).padStart(2, "0")} entries</div>
          <h1 className="font-display font-extrabold uppercase text-7xl md:text-[12rem] leading-[0.82] tracking-tight">
            Work<span className="text-gold">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-bone/80">
            Data pipelines, simulation systems, predictive models. Engineered to be
            <span className="text-gold"> resumable</span>,
            <span className="text-gold"> measured</span>, and honest about trade-offs.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right font-mono-ui text-xs text-muted-foreground">
          <div className="border-2 border-bone p-4 inline-block text-left">
            <div className="text-gold uppercase tracking-widest mb-2">/filter</div>
            <div>Showing {list.length} of {projects.length}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 border-t-2 border-bone pt-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`border-2 px-4 py-2 font-mono-ui text-xs uppercase tracking-widest transition-colors ${
              filter === f
                ? "border-gold bg-gold text-noir"
                : "border-bone text-bone hover:bg-bone hover:text-noir"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul>
        {list.map((p, i) => (
          <li key={p.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className={`group block border-t-2 border-bone py-10 hover:bg-carbon transition-colors ${
                i % 2 === 1 ? "md:pl-16" : ""
              }`}
            >
              <div className="grid grid-cols-12 gap-4 items-baseline">
                <div className="col-span-2 md:col-span-1 font-display font-extrabold text-4xl md:text-6xl text-gold leading-none">
                  {p.index}
                </div>
                <div className="col-span-10 md:col-span-6">
                  <h2 className="font-display font-bold uppercase text-3xl md:text-5xl tracking-tight leading-[0.95]">
                    <span className="gold-underline gold-underline-hover">{p.title}</span>
                    {p.kind === "venture" && (
                      <span className="ml-3 align-middle inline-block border-2 border-gold text-gold px-2 py-0.5 font-mono-ui text-[10px] uppercase tracking-widest">
                        Venture
                      </span>
                    )}
                  </h2>
                  <p className="mt-3 text-muted-foreground max-w-lg">{p.tagline}</p>
                </div>
                <div className="col-span-8 md:col-span-4 flex flex-wrap gap-1.5">
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
    </section>
  );
}
