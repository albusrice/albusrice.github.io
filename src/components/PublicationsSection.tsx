import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

const papers = [
  {
    title: "Automorphism Ensemble Decoding of Polar Codes with Reduced Number of Routes",
    authors: "J Li, H Zhou, R Seah, WJ Gross",
    venue: "2025 13th International Symposium on Topics in Coding (ISTC), 1-5",
    year: 2025,
    citations: 1,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:Y0pCki6q_DkC",
  },
  {
    title: "Simplified Early-Stopping for AED-SC of Polar Codes",
    authors: "J Li, R Seah, WJ Gross",
    venue: "2025 IEEE Workshop on Signal Processing Systems (SiPS), 1-5",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:eQOLeE2rZwMC",
  },
  {
    title: "Enhanced Simulated Bifurcation for MIMO Detection",
    authors: "R Seah, T Zhang, WJ Gross",
    venue: "2025 IEEE 55th International Symposium on Multiple-Valued Logic (ISMVL), 15-20",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rXrh48QAAAAJ&citation_for_view=rXrh48QAAAAJ:Tyk-4Ss8FVUC",
  },
  {
    title: "Decoding of Polar Codes Using Quadratic Unconstrained Binary Optimization",
    authors: "H Zhou, R Seah, M Jalaleddine, WJ Gross",
    venue: "IEEE Journal on Selected Areas in Communications 42 (11), 3204-3216",
    year: 2024,
    citations: 2,
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

const PublicationCard = ({ pub, i }: { pub: typeof papers[0]; i: number }) => (
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
        <BookOpen className="w-4 h-4 text-primary mt-1 shrink-0" />
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

const PublicationsSection = () => {
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

        {/* Papers */}
        <div className="mt-12">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Papers
          </p>
          <div className="space-y-4">
            {papers.map((pub, i) => (
              <PublicationCard key={i} pub={pub} i={i} />
            ))}
          </div>
        </div>

        {/* Patents */}
        <div className="mt-16">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
            Patents
          </p>
          <div className="space-y-4">
            {patents.map((pub, i) => (
              <PublicationCard key={i} pub={pub} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
