import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RESUME_URL } from "@/lib/links";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nihar Kumar Patel" },
      {
        name: "description",
        content:
          "Get in touch with Nihar Kumar Patel — email, LinkedIn, GitHub. Available for internships and SDE roles.",
      },
      { property: "og:title", content: "Contact — Nihar Kumar Patel" },
      {
        property: "og:description",
        content: "Get in touch — email, LinkedIn, GitHub. Available for internships and SDE roles.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const EMAIL = "niharkumarpatel01@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="eyebrow mb-6">§ /contact · direct line</div>
      <h1 className="font-display font-extrabold uppercase text-6xl md:text-[11rem] leading-[0.82] tracking-tight">
        Let&apos;s build<br />
        <span className="text-gold italic font-normal">something.</span>
      </h1>
      <p className="mt-10 max-w-2xl text-lg md:text-xl text-bone/85">
        Open to internships and early-career roles in software, AI/ML, and data — worldwide.
        Also happy to chat about simulation, IoT, and motorsport-adjacent projects.{" "}
        <span className="text-gold">Email or LinkedIn</span> works best.
      </p>

      <div className="mt-20 border-t-2 border-bone">
        <div className="border-b-2 border-bone py-8 grid grid-cols-12 gap-4 items-baseline group hover:bg-carbon transition-colors">
          <div className="col-span-12 md:col-span-2 font-mono-ui text-[11px] uppercase tracking-widest text-gold">
            /email
          </div>
          <div className="col-span-12 md:col-span-8">
            <a
              href={`mailto:${EMAIL}`}
              className="font-display font-bold uppercase text-2xl md:text-5xl tracking-tight break-all gold-underline gold-underline-hover"
            >
              {EMAIL}
            </a>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <button
              onClick={copy}
              aria-label={copied ? "Email address copied to clipboard" : "Copy email address"}
              className="border-2 border-bone px-4 py-2 font-mono-ui text-[11px] uppercase tracking-widest hover:bg-gold hover:text-noir hover:border-gold transition-colors min-h-11"
            >
              <span aria-hidden="true">{copied ? "Copied ✓" : "Copy"}</span>
            </button>
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </div>
        </div>

        <ContactRow
          label="/linkedin"
          value="linkedin.com/in/niharkumarpatel01"
          href="https://www.linkedin.com/in/niharkumarpatel01"
        />
        <ContactRow
          label="/github"
          value="github.com/NKING001"
          href="https://github.com/NKING001"
        />
        <ContactRow
          label="/resume"
          value="View Resume (Google Drive) ↗"
          href={RESUME_URL}
        />
        <ContactRow label="/location" value="Bhopal, Madhya Pradesh · India" />
      </div>

      <div className="mt-20 grid grid-cols-12 gap-6">
        <a
          href={`mailto:${EMAIL}?subject=Hello%20Nihar`}
          className="col-span-12 md:col-span-8 border-2 border-gold bg-gold text-noir p-8 md:p-12 hover:bg-noir hover:text-gold transition-colors group"
        >
          <div className="font-mono-ui text-[11px] uppercase tracking-widest mb-6">
            → compose · new_message
          </div>
          <div className="font-display font-extrabold uppercase text-4xl md:text-7xl leading-[0.9]">
            Send<br />
            an email<span className="text-noir group-hover:text-gold">→</span>
          </div>
        </a>
        <div className="col-span-12 md:col-span-4 border-2 border-bone p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="font-mono-ui text-[11px] uppercase tracking-widest text-gold mb-4">
              /availability
            </div>
            <div className="font-display font-bold uppercase text-2xl leading-tight">
              Open to<br />internships<br />worldwide
            </div>
          </div>
          <div className="mt-6 flex items-baseline justify-between font-mono-ui text-xs">
            <span className="text-muted-foreground">Status</span>
            <span className="text-gold">● Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="border-b-2 border-bone py-8 grid grid-cols-12 gap-4 items-baseline hover:bg-carbon transition-colors">
      <div className="col-span-12 md:col-span-2 font-mono-ui text-[11px] uppercase tracking-widest text-gold">
        {label}
      </div>
      <div className="col-span-12 md:col-span-10">
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-display font-bold uppercase text-2xl md:text-5xl tracking-tight break-all gold-underline gold-underline-hover"
          >
            {value}
          </a>
        ) : (
          <span className="font-display font-bold uppercase text-2xl md:text-5xl tracking-tight">{value}</span>
        )}
      </div>
    </div>
  );
}
