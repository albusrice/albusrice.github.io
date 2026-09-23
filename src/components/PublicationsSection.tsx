import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, FileCode, Lightbulb } from "lucide-react";

// SlideShare-style brand icon for conference papers (replaces lucide Hash)
const ConferenceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 640 640" className={className} fill="currentColor" aria-hidden="true">
    <path d="M251.9 217.7C217.9 217.7 190.2 243.4 190.2 275.4C190.2 307.1 217.9 333.1 251.9 333.1C285.9 333.1 313.6 307.1 313.6 275.4C313.6 243.4 285.9 217.7 251.9 217.7zM395.3 217.7C361.3 217.7 333.6 243.4 333.6 275.4C333.6 307.1 361.3 333.1 395.3 333.1C429.6 333.1 457 307.1 457 275.4C457.1 243.4 429.6 217.7 395.3 217.7zM551.9 307.7L545.9 312L545.9 113.7C545.9 86.3 525.3 64 499.9 64L140.8 64C115.4 64 94.8 86.3 94.8 113.7L94.8 312C92.8 310.6 90.5 309.1 88.5 307.7C73.4 297.1 63.4 311.7 72.5 325.4C90.8 348 125.6 375.7 178.8 397.4C122.5 589.1 316.2 619.7 313.1 521.5C313.1 520.8 313.4 464.9 313.4 424.9C318.5 426 322.8 427.2 327.1 428C327.1 467.7 327.4 520.8 327.4 521.5C324.3 619.8 518 589.2 461.7 397.5C514.8 375.8 549.7 348.1 568 325.5C577.1 311.7 567.1 297.2 551.9 307.7zM521.4 326.9C452.5 364.3 393.1 358 360.8 356.6C337.1 355.7 328.2 365.7 327.1 381.5C316.8 373.8 308.5 366 306.8 364.4C301.7 359 293.1 356.4 279.7 356.7C248 357.8 190 364.1 122.3 328.7L122.3 136.3C122.3 101.4 131.2 90.6 162.9 90.6L480.6 90.6C510.9 90.6 521.5 103.5 521.5 136.3L521.5 326.9L521.4 326.9z" />
  </svg>
);

const papers = [
  {
    title: "Low-Latency Ising Solvers for Large-Scale MIMO Detection in Next-Generation Communications",
    authors: "R Seah, T Zhang, WJ Gross",
    venue: "IEEE Journal on Emerging and Selected Topics in Circuits and Systems",
    year: 2026,
    citations: 1,
    link: "https://doi.org/10.1109/JETCAS.2026.3701055",
  },
  {
    title: "Speculative Successive Cancellation Decoding of Polar Codes",
    authors: "R Seah, M Rübenacke, WJ Gross",
    venue: "arXiv preprint arXiv:2608.02760",
    year: 2026,
    citations: 1,
    link: "https://arxiv.org/abs/2608.02760",
  },
  {
    title: "Improved Acceptance Criteria for Speculative Successive Cancellation Decoding of Polar Codes",
    authors: "M Rübenacke, R Seah, WJ Gross",
    venue: "arXiv preprint arXiv:2608.09660",
    year: 2026,
    citations: 0,
    link: "https://arxiv.org/abs/2608.09660",
  },
  {
    title: "Improved Ising Model Formulation for Polar Codes",
    authors: "R Seah, WJ Gross",
    venue: "2026 IEEE 56th International Symposium on Multiple-Valued Logic (ISMVL), 147-151",
    year: 2026,
    citations: 0,
    link: "https://doi.org/10.1109/ISMVL68998.2026.00034",
  },
  {
    title: "An Area-Efficient Routing Solution for Automorphism Ensemble Decoding of Polar Codes",
    authors: "J Li, H Zhou, R Seah, M Jalaleddine, WJ Gross",
    venue: "IEEE Transactions on Communications 74, 6843-6858",
    year: 2026,
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:ufrVoPGSRksC",
  },
  {
    title: "Automorphism Ensemble Decoding of Polar Codes with Reduced Number of Routes",
    authors: "J Li, H Zhou, R Seah, WJ Gross",
    venue: "2025 13th International Symposium on Topics in Coding (ISTC), 1-5",
    year: 2025,
    citations: 2,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:Y0pCki6q_DkC",
  },
  {
    title: "Simplified Early-Stopping for AED-SC of Polar Codes",
    authors: "J Li, R Seah, WJ Gross",
    venue: "2025 IEEE Workshop on Signal Processing Systems (SiPS), 1-5",
    year: 2025,
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:eQOLeE2rZwMC",
  },
  {
    title: "Enhanced Simulated Bifurcation for MIMO Detection",
    authors: "R Seah, T Zhang, WJ Gross",
    venue: "2025 IEEE 55th International Symposium on Multiple-Valued Logic (ISMVL), 15-20",
    year: 2025,
    citations: 2,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:Tyk-4Ss8FVUC",
  },
  {
    title: "Decoding of Polar Codes Using Quadratic Unconstrained Binary Optimization",
    authors: "H Zhou, R Seah, M Jalaleddine, WJ Gross",
    venue: "IEEE Journal on Selected Areas in Communications 42 (11), 3204-3216",
    year: 2024,
    citations: 7,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:9yKSN-GCB0IC",
  },
  {
    title: "LAMA: Leakage Abuse Attacks Against Microsoft Always Encrypted",
    authors: "R Seah, D Khu, A Hoover, R Ng",
    venue: "SECRYPT 2024",
    year: 2024,
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:qjMakFHDy7sC",
  },
  {
    title: "XSA: A binary cross-entropy simulated annealing polar decoder",
    authors: "R Seah, H Zhou, M Jalaleddine, WJ Gross",
    venue: "2023 12th International Symposium on Topics in Coding (ISTC), 1-5",
    year: 2023,
    citations: 2,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:d1gkVwhDpl0C",
  },
  {
    title: "Ultrawide band-based navigation for multi-agents",
    authors: "RMY Seah",
    venue: "NTU Final Year Project",
    year: 2019,
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:u5HHmVD_uO8C",
  },
];

const patents = [
  {
    title: "Polar decoder and associated method",
    authors: "Z Huayi, RMY Seah, M Jalaleddine, WJ Gross",
    venue: "US Patent 12,463,747",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:UeHWp8X0CEIC",
  },
];

// Classify each paper by venue into a category for the stats counter.
const classify = (venue: string): "journal" | "conference" | "arxiv" | "others" => {
  if (/final year project|thesis/i.test(venue)) return "others";
  if (/arxiv/i.test(venue)) return "arxiv";
  if (/journal|transactions/i.test(venue)) return "journal";
  return "conference";
};

const stats = [
  {
    label: "Journal Papers",
    count: papers.filter((p) => classify(p.venue) === "journal").length,
    icon: FileText,
  },
  {
    label: "Conference Papers",
    count: papers.filter((p) => classify(p.venue) === "conference").length,
    icon: ConferenceIcon,
  },
  {
    label: "arXiv Papers",
    count: papers.filter((p) => classify(p.venue) === "arxiv").length,
    icon: FileCode,
  },
  {
    label: "Patents",
    count: patents.length,
    icon: Lightbulb,
  },
];

// Pick the icon matching the paper's category so it matches the stats counter.
const getPaperIcon = (pub: typeof papers[0]) => {
  if (/patent/i.test(pub.venue)) return Lightbulb;
  const cat = classify(pub.venue);
  if (cat === "journal") return FileText;
  if (cat === "arxiv") return FileCode;
  if (cat === "conference") return ConferenceIcon;
  return BookOpen;
};

const PublicationCard = ({ pub, i }: { pub: typeof papers[0]; i: number }) => {
  const Icon = getPaperIcon(pub);
  return (
  <motion.a
    href={pub.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05 }}
    className="group block p-6 rounded-lg border border-transparent hover:border-primary/30 transition-all"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3 flex-1">
        <Icon className="w-4 h-4 text-primary mt-1 shrink-0" />
        <div>
          <h3 className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
            {pub.title}
          </h3>
          <p className="font-body text-xs text-muted-foreground mt-1">
            {pub.authors}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-0.5 italic">
            {pub.venue}, {pub.year}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        {pub.citations > 0 && (
          <span className="px-2 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full">
            {pub.citations} cited
          </span>
        )}
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </div>
  </motion.a>
  );
};

type FilterKey = "all" | "journal" | "conference" | "arxiv" | "patents" | "others";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "journal", label: "Journal" },
  { key: "conference", label: "Conference" },
  { key: "arxiv", label: "arXiv" },
  { key: "patents", label: "Patents" },
  { key: "others", label: "Others" },
];

const PublicationsSection = () => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredPapers = papers.filter((p) => {
    if (filter === "patents") return false;
    if (filter === "all") return true;
    return classify(p.venue) === filter;
  });
  const filteredPatents =
    filter === "all" || filter === "patents" ? patents : [];
  const hasItems = filteredPapers.length + filteredPatents.length > 0;

  return (
    <section id="publications" className="py-20 px-6 lg:px-16 bg-tiffany-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Publications
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Research & patents.
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            <a
              href="https://scholar.google.com/citations?user=rXrh48QAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              View Google Scholar profile <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </motion.div>

        {/* Stats counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-12">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center justify-center text-center py-6 px-4 rounded-lg border border-primary/20 bg-primary/5"
              >
                <Icon className="w-6 h-6 text-primary mb-3" />
                <span className="font-display text-3xl font-bold text-primary">
                  {s.count}
                </span>
                <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {s.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mt-8 mb-8">
          {filters.map((f) => {
            const active = filter === f.key;
            const count =
              f.key === "all"
                ? papers.length + patents.length
                : f.key === "patents"
                ? patents.length
                : papers.filter((p) => classify(p.venue) === f.key).length;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full font-body text-xs tracking-wide transition-all ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {f.label} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Filtered results */}
        {hasItems ? (
          <>
            {filteredPapers.length > 0 && (
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
                  Papers
                </p>
                <div className="space-y-4">
                  {filteredPapers.map((pub, i) => (
                    <PublicationCard key={i} pub={pub} i={i} />
                  ))}
                </div>
              </div>
            )}
            {filteredPatents.length > 0 && (
              <div className={filteredPapers.length > 0 ? "mt-16" : ""}>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
                  Patents
                </p>
                <div className="space-y-4">
                  {filteredPatents.map((pub, i) => (
                    <PublicationCard key={i} pub={pub} i={i} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="font-body text-sm text-muted-foreground py-8">
            No publications in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
