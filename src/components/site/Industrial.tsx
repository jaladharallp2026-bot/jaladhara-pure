import { motion } from "framer-motion";
import { ArrowRight, Factory, Beaker, Cog } from "lucide-react";
import img from "@/assets/industrial-plant.jpg";

const items = [
  { icon: Factory, title: "RO Plants", desc: "Large-capacity reverse osmosis for industrial demand." },
  { icon: Beaker, title: "Demineralization Plants", desc: "Ultra-pure water for labs and process lines." },
  { icon: Cog, title: "Custom Setups", desc: "Engineered to your site, source water and load." },
];

export function Industrial() {
  return (
    <section id="industrial" className="relative py-20 md:py-28 bg-gradient-deep text-deep-foreground overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
        <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10"
        >
          <img
            src={img}
            alt="Industrial water treatment plant with blue RO tanks and stainless steel piping"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full h-full object-cover aspect-[4/3]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-deep/60 via-transparent to-transparent" />
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-primary-glow uppercase"
          >
            Industrial Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-3xl md:text-5xl font-bold text-balance"
          >
            Advanced Industrial Water Treatment Systems
          </motion.h2>
          <p className="mt-5 text-lg text-deep-foreground/70 max-w-lg">
            Engineered, installed and maintained by experts. Built for hospitals, laboratories, and manufacturing.
          </p>

          <div className="mt-8 space-y-3">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:bg-white/10 transition-colors"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary-glow/20 flex items-center justify-center">
                  <it.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-deep-foreground/60">{it.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Request Site Visit
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
