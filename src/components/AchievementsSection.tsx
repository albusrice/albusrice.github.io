import { motion } from "framer-motion";

const achievements = [
  "Thales Gold Medal — Top Student in Cohort (NYP, 2013)",
  "Thales Award for Outstanding Project Work (NYP, 2013)",
  "NTU President Research Scholar — Distinction (2016–17)",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-6 lg:px-16 bg-tiffany">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Achievements
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Awards & honours.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="font-body text-sm text-foreground/80">{ach}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
