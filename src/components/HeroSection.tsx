import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo-flipped.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tiffany-light" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              PhD Candidate · McGill University
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
            >
              Ryan
              <br />
              <span className="text-primary italic">Seah</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed mb-10"
            >
              PhD student at McGill University under Prof. Warren J. Gross, researching channel coding and Ising models for communications. Member of Technical Staff at DSO National Laboratories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-body font-medium text-sm tracking-wide hover-lift rounded-md"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-border text-foreground font-body font-medium text-sm tracking-wide hover-lift rounded-md hover:border-primary/50 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={profilePhoto}
                alt="Ryan Seah"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
