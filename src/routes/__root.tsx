import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteChrome } from "../components/SiteChrome";

function NotFoundComponent() {
  return (
    <SiteChrome>
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="eyebrow mb-6">Error / 404</div>
        <h1 className="font-display text-7xl leading-[0.95] tracking-tight md:text-9xl">
          Not found.
        </h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          The page you're looking for isn't here. It may have moved, or never existed.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium hover:text-ember hover:border-ember transition-colors"
          >
            ← Back to index
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <SiteChrome>
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="eyebrow mb-6">Error / Runtime</div>
        <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
          Something broke.
        </h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          The page didn't load. Try again, or head back to the index.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium hover:text-ember hover:border-ember transition-colors"
          >
            ↻ Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm text-muted-foreground hover:text-ink hover:border-ink transition-colors"
          >
            Go home
          </a>
        </div>
      </section>
    </SiteChrome>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0d0d0d" },
      { title: "Nihar Kumar Patel — Software, AI & Data Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nihar Kumar Patel — computer science engineering student building software, AI/ML systems, and data pipelines. Open to global internships.",
      },
      { name: "author", content: "Nihar Kumar Patel" },
      { property: "og:site_name", content: "Nihar Kumar Patel" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Nihar Kumar Patel — Software, AI & Data Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Nihar Kumar Patel — CS engineering student building software, AI/ML, and data systems.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nihar Kumar Patel — Software, AI & Data Engineer" },
      {
        name: "twitter:description",
        content:
          "CS engineering student building software, AI/ML, and data systems. Open to global internships.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nihar Kumar Patel",
          jobTitle: "Computer Science Engineering Student",
          email: "mailto:niharkumarpatel01@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bhopal",
            addressRegion: "MP",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Barkatullah University Institute of Technology (BUIT), Bhopal",
          },
          knowsAbout: [
            "Software Engineering",
            "Machine Learning",
            "Data Engineering",
            "Internet of Things",
            "Simulation",
          ],
          sameAs: [
            "https://www.linkedin.com/in/niharkumarpatel01",
            "https://github.com/NKING001",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </QueryClientProvider>
  );
}
