import { motion } from "framer-motion";
import { Droplet, FlaskConical, Filter, Wrench, ShieldCheck, ArrowUpRight, Gauge, Plug } from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "RO Water Purifiers",
    desc: "High-performance reverse osmosis systems for homes, offices and commercial spaces.",
  },
  {
    icon: FlaskConical,
    title: "Demineralization Plant",
    desc: "DM plants engineered for laboratories, hospitals and industrial process water.",
  },
  {
    icon: Filter,
    title: "Water Treatment Solutions",
    desc: "End-to-end softening, filtration and treatment tailored to your source water.",
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    desc: "Certified installation and prompt servicing across Kerala — no guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "AMC Services",
    desc: "Annual maintenance contracts that keep your systems performing year after year.",
  },
  {
    icon: Gauge,
    title: "Automatic Water Level Controller",
    desc: "Smart controllers that automate tank filling, prevent overflow and protect your pump.",
  },
  {
    icon: Plug,
    title: "Electronics & Plumbing Works",
    desc: "Skilled electronics and plumbing services to support every water system installation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase">What we do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Complete water purification, from drop to deployment
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-gradient-card border border-border p-7 shadow-soft hover:shadow-card-hover hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 0 0 1px var(--primary-glow), 0 0 40px -8px var(--primary-glow)" }} />

              <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500" />

              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
