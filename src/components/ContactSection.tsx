import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:ryan.seah@mail.mcgill.ca" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ryanseah" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-16 bg-tiffany-light">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="italic text-gradient">connect</span>.
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto mb-4 leading-relaxed">
            Open to collaboration, research opportunities, and interesting engineering challenges.
          </p>
          <p className="font-body text-sm text-primary mb-12">
            ryan.seah@mail.mcgill.ca
          </p>

          <div className="flex justify-center gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors hover-lift"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto mt-32 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ryan Seah — All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Singapore
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
