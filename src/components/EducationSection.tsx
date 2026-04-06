import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronDown } from "lucide-react";

const education = [
  {
    school: "McGill University",
    degree: "PhD — Electrical & Computer Engineering",
    period: "2022 — Present",
    gpa: "",
    distinction: "In Progress",
    highlights: [
      "Supervisor: Prof. Warren J. Gross",
      "Research focus: Channel coding, Ising models for communications",
      "Polar codes, simulated annealing decoders, QUBO-based decoding",
    ],
  },
  {
    school: "Nanyang Technological University (NTU)",
    degree: "BSc (Hons) Mathematical Sciences (Applied Mathematics)",
    period: "2015 — 2019",
    gpa: "4.62 / 5.0",
    distinction: "Highest Distinction",
    highlights: [
      "NTU President Research Scholar — Distinction (2016–17)",
      "Deep Learning: Trained CNNs and RNNs for satellite image classification using Tensorflow",
      "Cryptography: Implemented SPECK cipher in C++ with ECB, CBC, and OFB modes",
      "Created a minimax AI for Pentago — top 8th in cohort",
    ],
  },
  {
    school: "Nanyang Polytechnic (NYP)",
    degree: "Diploma plus with Merit in Aerospace Systems & Management (Electrical)",
    period: "2010 — 2013",
    gpa: "4.0 / 4.0",
    distinction: "15 Distinctions, 30 As",
    highlights: [
      "Thales Gold Medal — Top Student in Cohort",
      "Thales Award for Outstanding Project Work — Best FYP in Cohort",
    ],
  },
];

const EducationSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleEducation = expanded ? education : education.slice(0, 2);

  return (
    <section id="education" className="py-20 px-6 lg:px-16 bg-tiffany">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Academic background.
          </h2>
        </motion.div>

        <div className="space-y-12">
          <AnimatePresence initial={false}>
            {visibleEducation.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-background rounded-lg p-8 border border-border shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                        <h3 className="font-display text-xl md:text-2xl font-bold">
                          {edu.school}
                        </h3>
                        <span className="font-body text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground mt-1">{edu.degree}</p>
                      <div className="flex gap-3 mt-3">
                        {edu.gpa && (
                          <span className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full">
                            GPA: {edu.gpa}
                          </span>
                        )}
                        <span className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full">
                          {edu.distinction}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="ml-14 space-y-2 mt-4">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="font-body text-sm text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {education.length > 2 && (
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-body text-sm tracking-wide text-primary hover:text-primary/80 transition-colors mt-8"
            whileTap={{ scale: 0.97 }}
          >
            {expanded ? "Show less" : `Show ${education.length - 2} more`}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
