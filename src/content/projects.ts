export type ProjectKind = "code" | "venture";

export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string[];
  outcomes: { label: string; value: string }[];
  github?: string;
  liveUrl?: string;
  tags: ("Python" | "ML" | "Data" | "React" | "IoT" | "Blockchain" | "Venture")[];
  kind?: ProjectKind;
  featured?: boolean;
  constraints?: string[];
  decisions?: { title: string; detail: string }[];
  themes?: string[]; // engineering themes / skills demonstrated
  nextSteps?: string[];
  evidenceNote?: string; // e.g. "README sample run", not a benchmark claim
};

export const projects: Project[] = [
  {
    slug: "etl-pipeline",
    index: "01",
    title: "High-Dimensional ETL Pipeline",
    tagline: "Chunked, resumable ETL with streaming statistics and Parquet output.",
    year: "2025",
    stack: ["Python", "Pandas", "NumPy", "PyArrow", "Parquet"],
    summary:
      "A fault-tolerant ETL pipeline for high-dimensional datasets. Streams data in chunks, computes running statistics without materializing the full frame, checkpoints progress, and writes compressed Parquet.",
    problem:
      "Analytical workloads at scale hit memory ceilings. Loading a wide dataset into a single pandas frame is fragile, non-resumable, and hostile to iteration.",
    constraints: [
      "Bounded working memory — the full frame must never live in RAM.",
      "Recoverable — a crash mid-run must resume from the last committed chunk.",
      "Storage-efficient — output must be columnar, typed, and compressed.",
      "Correct — normalization must match a single-pass reference within tolerance.",
    ],
    approach: [
      "Chunk-based streaming reader with configurable batch size, so the working set stays bounded regardless of dataset size.",
      "Online (Welford-style) running mean and variance for streaming normalization, computed without ever materializing the full frame.",
      "Schema and column validation with null detection at chunk boundaries.",
      "Stats/progress checkpoints; on resume, completed chunks are skipped and processing continues.",
      "Atomic temp→final writes to prevent partial-file corruption; per-chunk Parquet partitions with ZSTD compression.",
    ],
    decisions: [
      {
        title: "Online statistics over two-pass",
        detail:
          "Welford's algorithm keeps mean/variance numerically stable in a single pass, so normalization does not require re-reading the dataset.",
      },
      {
        title: "Checkpointed chunks over monolithic run",
        detail:
          "Checkpoints on chunk boundaries make the pipeline recoverable and idempotent — a killed process resumes instead of restarting.",
      },
      {
        title: "Parquet + ZSTD over CSV",
        detail:
          "Columnar layout with typed schema and strong compression makes downstream reads cheap and preserves types across runs.",
      },
    ],
    themes: [
      "Streaming systems",
      "Memory-bounded compute",
      "Fault tolerance",
      "Storage engineering",
      "Numerical stability",
    ],
    outcomes: [
      { label: "Working memory", value: "bounded" },
      { label: "Recovery", value: "resumable" },
      { label: "Output", value: "Parquet · ZSTD" },
      { label: "Example config", value: "5 × 100K × 50" },
    ],
    evidenceNote:
      "README example configuration processes 5 chunks × 100,000 rows × 50 columns (500,000 rows) — an illustrative config, not a benchmark claim.",
    nextSteps: [
      "Parallel chunk processing with a worker pool.",
      "Pluggable transformer stages and schema evolution.",
      "Metrics/observability hooks for long-running batches.",
    ],
    github: "https://github.com/NKING001/High-Dimensional-ETL-Pipeline-with-Memory-Constraints",
    tags: ["Python", "Data"],
    featured: true,
  },
  {
    slug: "f1-telemetry",
    index: "02",
    title: "F1 Telemetry Simulator",
    tagline: "Interactive multi-car race simulation with an optional ML pace predictor.",
    year: "2025",
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "scikit-learn", "joblib"],
    summary:
      "Interactive Formula-1-style race simulator built in Streamlit. Models up to 8 cars with speed, throttle, brake, lap time, tyre wear, fuel, brake temperature, DRS, pit stops, safety cars, and a pluggable ML lap-time predictor.",
    problem:
      "Race strategy is a decision problem under uncertainty. Understanding it needs a sandbox that models the primitives — tyres, DRS, pit windows, safety cars — not a dashboard skin. This is an interactive systems and data simulation, not an official F1 physics model.",
    constraints: [
      "Interactive frame rate — the UI must update in real time inside Streamlit.",
      "Deterministic-ish — same seed and inputs should reproduce a run for comparison.",
      "Pluggable ML — the predictor is an optional stage, not a hard dependency.",
    ],
    approach: [
      "Per-car state machine with configurable aggression, tyre compounds, and pit strategy.",
      "Tyre wear curves that degrade grip and lap time; fuel burn that lightens the car and drops lap time.",
      "Brake heating and cooling model tied to braking events, feeding a temperature warning surface.",
      "DRS with threshold, activation chance, duration, and cooldown; pit requests, tyre changes and pit-time variation.",
      "Safety-car mode that compresses the field and interrupts strategy branches.",
      "Live leaderboard, speed/lap/brake-temp charts, tyre/metric tables, and CSV telemetry export.",
      "Optional ML module: synthetic race generator + Random Forest Regressor for average lap time, with R²/MAE and feature-importance readouts; model and predictions are downloadable.",
    ],
    decisions: [
      {
        title: "State machine over ad-hoc updates",
        detail:
          "Each car advances through a small state machine per tick, keeping tyre/fuel/brake/DRS/pit logic composable and testable.",
      },
      {
        title: "ML as a plug-in stage",
        detail:
          "The Random Forest predictor is optional and consumes the same feature frame the sim emits, so the sim stays usable without ML installed.",
      },
      {
        title: "CSV export as the primary contract",
        detail:
          "Emitting a clean telemetry stream turns the sim into a data source for notebooks and downstream analysis rather than a closed dashboard.",
      },
    ],
    themes: [
      "Simulation modeling",
      "State machines",
      "Real-time UI",
      "ML plumbing",
      "Data export contracts",
    ],
    outcomes: [
      { label: "Cars simulated", value: "up to 8" },
      { label: "Modelled systems", value: "tyres · fuel · DRS · pit · SC" },
      { label: "ML stage", value: "RF regressor" },
      { label: "Export", value: "CSV telemetry" },
    ],
    evidenceNote:
      "Interactive systems / data simulation. Not an official F1 physics model — vehicle dynamics are simplified.",
    nextSteps: [
      "Track-shape and sector modelling instead of aggregate lap time.",
      "Strategy optimizer that plans pit windows against predicted degradation.",
      "Replay mode reading exported CSVs.",
    ],
    github: "https://github.com/NKING001/F1-Telemetry-Simulator",
    tags: ["Python", "ML", "Data"],
    featured: true,
  },
  {
    slug: "churn-prediction",
    index: "03",
    title: "Customer Churn Prediction",
    tagline: "Random Forest churn classifier with live terminal inference.",
    year: "2025",
    stack: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    summary:
      "Predicts whether a customer is likely to churn from age, contract type, payment method, monthly charges, and internet service. Encodes categoricals with saved LabelEncoders, trains a Random Forest classifier, and supports live terminal input for inference.",
    problem:
      "Retention teams need ranking, not verdicts. A model that just says 'yes/no' hides the information the business actually acts on.",
    constraints: [
      "Small tabular dataset with mixed categorical and numeric features.",
      "Encoders must be reused at inference time — training and inference cannot drift.",
      "Zero-infra: the demo runs in a terminal, not a service.",
    ],
    approach: [
      "Load data.csv and encode categoricals with LabelEncoder, keeping the encoders for inference.",
      "90/10 train/test split with a Random Forest classifier.",
      "Live terminal input path that re-uses the saved encoders and returns a Yes/No prediction.",
      "Monthly-Charges-vs-Churn plot to eyeball feature behaviour.",
    ],
    decisions: [
      {
        title: "LabelEncoder over one-hot",
        detail:
          "The dataset is small and cardinality is low, so LabelEncoder keeps the code path simple and the inference input compact.",
      },
      {
        title: "Random Forest as a strong baseline",
        detail:
          "RF handles mixed feature types with minimal preprocessing and gives a usable importance signal for retention teams.",
      },
      {
        title: "Persist encoders alongside the model",
        detail:
          "Reusing the exact fitted encoders at inference prevents the silent 'unseen category' drift that breaks tabular pipelines.",
      },
    ],
    themes: [
      "Applied ML",
      "Tabular preprocessing",
      "Reproducible inference",
      "Baseline modeling",
    ],
    outcomes: [
      { label: "Model", value: "Random Forest" },
      { label: "Split", value: "90 / 10" },
      { label: "Inference", value: "live terminal" },
      { label: "README sample run", value: "acc ≈ 0.80" },
    ],
    evidenceNote:
      "The 0.80 accuracy figure is the README's sample run — not a generalized benchmark or a claim about production performance.",
    nextSteps: [
      "Web/GUI deployment and model persistence hooks (planned in the repo).",
      "Model comparison and hyperparameter sweep.",
      "Probability outputs and threshold tuning for retention workflows.",
      "Analytics dashboard for cohort views.",
    ],
    github: "https://github.com/NKING001/Customer-Churn-Prediction",
    tags: ["Python", "ML"],
    featured: true,
  },
  {
    slug: "expense-tracker",
    index: "04",
    title: "Expense Tracker",
    tagline: "Personal finance analyzer with visual expense breakdowns.",
    year: "2024",
    stack: ["Python", "Matplotlib", "NumPy"],
    summary:
      "Takes salary and expense inputs, calculates savings or overspending, and visualizes monthly expenses using a pie chart.",
    problem:
      "Budgeting is a data problem disguised as a discipline problem. A quick numeric read on where money leaks makes better decisions than any spreadsheet.",
    approach: [
      "Structured input capture for salary and per-category expenses.",
      "Balance computation with over/under detection and margin reporting.",
      "Matplotlib pie chart for at-a-glance category weighting.",
    ],
    themes: ["Applied Python", "Data visualization", "Personal tooling"],
    outcomes: [
      { label: "Visualization", value: "pie chart" },
      { label: "Output", value: "savings / overspend" },
    ],
    github: "https://github.com/NKING001/Expense-Tracker",
    tags: ["Python", "Data"],
  },
  {
    slug: "weather-forecast",
    index: "05",
    title: "Weather Forecast Visualization",
    tagline: "MySQL-backed temperature & humidity trend dashboard.",
    year: "2024",
    stack: ["Python", "MySQL", "Pandas", "Matplotlib"],
    summary:
      "Fetches weather data from a MySQL database and visualizes temperature and humidity trends over time.",
    problem:
      "Raw weather readings only become useful when you can see the trend line — a database dump doesn't answer 'is it getting hotter'.",
    approach: [
      "SQL layer pulling time-series records from MySQL.",
      "Pandas transforms for resampling and smoothing.",
      "Matplotlib line charts for temperature and humidity over time.",
    ],
    themes: ["SQL", "Time-series", "Data visualization"],
    outcomes: [
      { label: "Source", value: "MySQL" },
      { label: "Charts", value: "time-series" },
    ],
    github: "https://github.com/NKING001/Weather-Forecast",
    tags: ["Python", "Data"],
  },
  {
    slug: "decentralized-voting",
    index: "06",
    title: "Decentralized Voting System",
    tagline: "Blockchain-backed voting with cryptographic validation.",
    year: "2025",
    stack: ["Solidity", "Blockchain", "Smart Contracts"],
    summary:
      "Blockchain-based decentralized voting system built for the Core Ecosystem Hackathon by Geeks of Gurukul. Secure and transparent voting architecture using distributed ledgers and cryptographic validation.",
    problem:
      "Centralized voting systems require trust in a single authority. A ledger-based approach removes that assumption and makes every ballot auditable.",
    approach: [
      "Smart contract layer for immutable vote recording.",
      "Cryptographic validation ensuring one voter, one vote.",
      "Distributed ledger for tamper-evident, publicly verifiable results.",
    ],
    themes: ["Blockchain", "Smart contracts", "Trust-minimized systems"],
    outcomes: [
      { label: "Architecture", value: "on-chain" },
      { label: "Property", value: "auditable" },
      { label: "Context", value: "Hackathon" },
    ],
    github: "https://github.com/NKING001/Decentralized-Voting",
    tags: ["Blockchain"],
  },
  {
    slug: "tarunika",
    index: "07",
    title: "Tarunika — Premium Indian Food Brand",
    tagline: "Founder-led venture: product, brand system, and e-commerce build.",
    year: "Ongoing",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP / Framer Motion",
      "Supabase",
      "Razorpay",
      "Cloudinary",
    ],
    summary:
      "Tarunika is a premium Indian food and pickle brand I'm building end-to-end — product direction, catalog structure, brand system, and the storefront architecture. A venture case study, not a public code repository.",
    problem:
      "A premium food brand needs more than a logo — it needs a coherent product line, a catalog that scales, a payments-ready storefront, and a media pipeline that keeps quality on-brand across channels.",
    constraints: [
      "Solo founder — architectural choices must stay small-team maintainable.",
      "Premium positioning — visual and content system has to feel considered on every surface.",
      "Real business ops — payments, media, and catalog have to survive contact with actual customers.",
    ],
    approach: [
      "Owning product direction and catalog structure for the premium food line.",
      "Designing the brand system: type, palette, and content voice, applied consistently across surfaces.",
      "Architecting the e-commerce flow: catalog, content, payments, and media pipeline.",
      "Building the responsive storefront experience with a modern web stack and motion detail.",
      "Handling day-to-day business operations alongside the technical build.",
    ],
    decisions: [
      {
        title: "Next.js + TypeScript for the storefront",
        detail:
          "Server-rendered content routes for SEO on product pages, typed data models for catalog integrity.",
      },
      {
        title: "Supabase for data + auth",
        detail:
          "Postgres and row-level security cover catalog, orders, and future customer accounts without a bespoke backend.",
      },
      {
        title: "Razorpay + Cloudinary as the ops layer",
        detail:
          "Local-first payments and a managed media pipeline let the brand ship product photography and checkout without owning infra.",
      },
    ],
    themes: [
      "Product & brand",
      "E-commerce architecture",
      "Web engineering",
      "Founder operations",
    ],
    outcomes: [
      { label: "Role", value: "Founder" },
      { label: "Scope", value: "Product · Brand · Web" },
      { label: "Stage", value: "Ongoing build" },
    ],
    evidenceNote:
      "Venture / Product Build case study. Stack listed is the target architecture — deployment status evolves as the product ships. No revenue, customer, or growth metrics are claimed.",
    nextSteps: [
      "Ship the storefront MVP with full catalog and checkout.",
      "Content pipeline for product photography and editorial pages.",
      "Post-launch analytics and customer feedback loop.",
    ],
    tags: ["Venture"],
    kind: "venture",
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
