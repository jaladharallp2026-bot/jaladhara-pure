import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const clients = [
  "Neethilab",
  "Sabeen Hospital, Muvattupuzha",
  "St. James Hospital, Chalakudy",
  "Carewell Hospital",
  "Neo Hospital, Pandikkad",
  "Janatha Lab",
  "Shankar Lab",
  "Sai Hospital, Palakkad",
  "Ganapathy Lab",
  "Jeevan Lab",
];

export function Clients() {
  // Duplicate the list for seamless marquee loop
  const loop = [...clients, ...clients];

  return (
    <section className="py-24 md:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Network</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Trusted by 40+ Hospitals & Laboratories
          </h2>
          <p className="mt-4 text-muted-foreground">
            Healthcare institutions across Kerala rely on our purification systems for safe, consistent water.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-14 marquee-pause relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/80 to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-4 md:gap-5">
          {loop.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="group w-64 shrink-0 rounded-2xl bg-gradient-card border border-border p-5 shadow-soft hover:shadow-glow hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-gradient-primary transition-colors">
                <Building2 className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="text-sm font-semibold text-foreground leading-snug">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
