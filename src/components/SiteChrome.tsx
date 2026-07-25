import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { RESUME_URL } from "@/lib/links";

const nav = [
  { to: "/work", label: "Work", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/contact", label: "Contact", num: "03" },
] as const;

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-noir text-bone flex flex-col overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-gold focus:text-noir focus:px-3 focus:py-2 focus:font-mono-ui focus:text-xs focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>
      <Ticker />
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Ticker() {
  const items = [
    "OPEN TO INTERNSHIPS · 2026",
    "SOFTWARE · AI · DATA",
    "BHOPAL · IN",
    "B.TECH CSE · UG",
    "PYTHON · C++ · JS",
    "IoT · ML · SIMULATION",
  ];
  const line = items.join("  ///  ");
  return (
    <div className="border-b-2 border-bone bg-gold text-noir overflow-hidden" aria-hidden="true">
      <div className="flex whitespace-nowrap font-mono-ui text-[11px] font-bold tracking-[0.2em] py-2 motion-safe:animate-[marquee_40s_linear_infinite]">
        <span className="px-6">{line}</span>
        <span className="px-6">{line}</span>
        <span className="px-6">{line}</span>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-bone bg-noir/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 gap-4">
        <Link to="/" className="group flex items-baseline gap-3 min-w-0" aria-label="Nihar Kumar Patel — home">
          <span className="font-display font-extrabold text-2xl tracking-tighter shrink-0">
            NKP<span className="text-gold">/</span>001
          </span>
          <span className="font-mono-ui text-[10px] text-muted-foreground tracking-widest hidden sm:inline truncate">
            NIHAR KUMAR PATEL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-baseline gap-1.5 px-3 py-2 min-h-11"
              activeOptions={{ exact: false }}
            >
              {({ isActive }) => (
                <>
                  <span className="font-mono-ui text-[10px] text-gold">{item.num}</span>
                  <span
                    aria-current={isActive ? "page" : undefined}
                    className={`font-display font-semibold text-sm uppercase tracking-wider ${
                      isActive ? "text-gold" : "text-bone group-hover:text-gold"
                    } transition-colors`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-[6px] left-3 right-3 h-[3px] bg-gold" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="sm:hidden border-2 border-bone p-2 min-h-11 min-w-11 flex items-center justify-center hover:bg-gold hover:text-noir hover:border-gold transition-colors"
        >
          <span className="font-mono-ui text-xs uppercase tracking-widest">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="sm:hidden border-t-2 border-bone bg-noir"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.to} className="border-b-2 border-bone last:border-b-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 px-6 py-5 hover:bg-carbon min-h-14"
                  activeOptions={{ exact: false }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="font-mono-ui text-[10px] text-gold w-8">{item.num}</span>
                      <span
                        aria-current={isActive ? "page" : undefined}
                        className={`font-display font-bold text-2xl uppercase tracking-tight ${
                          isActive ? "text-gold" : "text-bone"
                        }`}
                      >
                        {item.label}
                      </span>
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-bone mt-24 md:mt-32 bg-noir">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          <div className="md:col-span-6">
            <div className="font-display font-extrabold text-5xl sm:text-6xl md:text-8xl leading-[0.85] uppercase">
              Let&apos;s<br />
              <span className="text-gold italic">build.</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 font-mono-ui text-xs">
              <div className="eyebrow">Contact</div>
              <a href="mailto:niharkumarpatel01@gmail.com" className="hover:text-gold transition-colors break-all">
                niharkumarpatel01@gmail.com
              </a>
              <div className="text-muted-foreground">Bhopal · IN</div>
            </div>
            <div className="flex flex-col gap-3 font-mono-ui text-xs">
              <div className="eyebrow">Elsewhere</div>
              <a href="https://www.linkedin.com/in/niharkumarpatel01" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                LinkedIn ↗
              </a>
              <a href="https://github.com/NKING001" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                GitHub ↗
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="View resume (opens in Google Drive)" className="hover:text-gold transition-colors">
                Resume ↗
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-hairline flex flex-wrap justify-between gap-4 font-mono-ui text-[11px] text-muted-foreground uppercase tracking-widest">
          <span>© {new Date().getFullYear()} · Nihar Kumar Patel</span>
          <span>React · TanStack · Tailwind</span>
          <span className="text-gold">Bhopal → Global</span>
        </div>
      </div>
    </footer>
  );
}
