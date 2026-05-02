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
  return (
    <section className="py-20 md:py-24 bg-card relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Network</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Trusted by 40+ Hospitals & Laboratories
          </h2>
          <p className="mt-4 text-muted-foreground">
            Healthcare institutions across Kerala rely on our purification systems for safe, consistent water.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-gradient-card border border-border p-4 md:p-5 shadow-soft hover:shadow-elegant hover:border-primary/30 transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground leading-snug">{c}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
