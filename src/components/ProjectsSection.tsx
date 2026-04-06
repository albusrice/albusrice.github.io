import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "DSO National Laboratories",
    category: "Member of Technical Staff",
    description:
      "High-performance signal processing, turbo decoders in CUDA, 5G polar codes, autonomous optimization systems, and satellite modem evaluation.",
    period: "Aug 2019 — Present",
  },
  {
    title: "NTU — URECA / FYP",
    category: "Research",
    description:
      "Multi-agent control optimization using ultra-wideband localization with particle swarm optimization.",
    period: "Aug 2018 — May 2019",
  },
  {
    title: "Nanyang Polytechnic",
    category: "Intern / FYP",
    description:
      "Mapping and localization using C++ and ICP algorithm for an autonomous aerial vehicle. Achieved overall 2nd place at SAFMC.",
    period: "Jul 2012 — Mar 2013",
  },
];

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleExperiences = expanded ? experiences : experiences.slice(0, 1);

  return (
    <section id="work" className="py-20 px-6 lg:px-16 bg-tiffany-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Career highlights.
          </h2>
        </motion.div>

        <div className="space-y-0 mb-8">
          <AnimatePresence initial={false}>
            {visibleExperiences.map((exp) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="group border-t border-border py-10 md:py-14">
                  <div className="grid md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-5">
                      <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="font-body text-xs tracking-[0.15em] uppercase text-primary/70 mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <p className="font-body text-sm uppercase tracking-[0.15em] text-muted-foreground md:col-span-3">
                      {exp.category}
                    </p>
                    <p className="font-body text-sm text-muted-foreground md:col-span-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="border-t border-border" />
        </div>

        {experiences.length > 1 && (
          <motion.button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-body text-sm tracking-wide text-primary hover:text-primary/80 transition-colors mt-4"
            whileTap={{ scale: 0.97 }}
          >
            {expanded ? "Show less" : `Show ${experiences.length - 1} more`}
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

export default ProjectsSection;
