import { motion } from "framer-motion";
import { Users, Zap, Award, BadgeIndianRupee, Settings2 } from "lucide-react";

const items = [
  { icon: Users, title: "40+ Clients", desc: "Hospitals, labs and homes across Kerala." },
  { icon: Zap, title: "Fast Service", desc: "Quick response and on-site support." },
  { icon: Award, title: "Experienced Team", desc: "Years of water-treatment expertise." },
  { icon: BadgeIndianRupee, title: "Affordable Solutions", desc: "Honest pricing, real value." },
  { icon: Settings2, title: "Custom Installations", desc: "Designed for your space and load." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Why choose us</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance">
            Reasons clients keep coming back
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group text-center rounded-3xl bg-gradient-card border border-border p-6 shadow-soft hover:shadow-elegant transition-all"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
                className="mx-auto h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft"
              >
                <it.icon className="h-6 w-6 text-primary-foreground" />
              </motion.div>
              <h3 className="mt-4 font-bold text-foreground">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
