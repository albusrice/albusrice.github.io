import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "7", label: "Published Papers" },
  { value: "1", label: "Patent" },
];

const skills = [
  "Python", "C/C++", "CUDA", "MATLAB", "C#",
  "Tensorflow", "PyQt", "Deep Learning", "Optimization",
  "Signal Processing", "Polar Codes", "Turbo Decoding",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-16 bg-tiffany">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              Mathematics meets <span className="italic text-primary">engineering</span>.
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm a PhD student at McGill University under Prof. Warren J. Gross,
                researching channel coding and Ising models for communications systems.
                I also hold a position as Member of Technical Staff at DSO National
                Laboratories in Singapore, specializing in signal processing,
                high-performance computing, and autonomous optimization.
              </p>
              <p>
                I hold a BSc (Hons) in Mathematical Sciences from NTU, graduating
                with Highest Distinction. My academic background in applied mathematics
                fuels my approach to solving complex engineering problems — from
                polar code decoding to deep learning classification.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-body tracking-wide text-foreground/80 border border-border rounded-md hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
