import { motion } from "framer-motion";
import { Droplet, FlaskConical, Filter, Wrench, ShieldCheck, ArrowUpRight } from "lucide-react";

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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-gradient-card border border-border p-7 shadow-soft hover:shadow-card-hover transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />

              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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
