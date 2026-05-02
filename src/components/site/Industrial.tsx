import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Factory, Beaker, Cog } from "lucide-react";
import img from "@/assets/industrial-plant.jpg";

const items = [
  { icon: Factory, title: "RO Plants", desc: "Large-capacity reverse osmosis for industrial demand." },
  { icon: Beaker, title: "Demineralization Plants", desc: "Ultra-pure water for labs and process lines." },
  { icon: Cog, title: "Custom Setups", desc: "Engineered to your site, source water and load." },
];

export function Industrial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section
      id="industrial"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-deep text-deep-foreground overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-primary-glow blur-3xl animate-blob" />
        <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-primary blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10"
        >
          <motion.img
            style={{ y: yImg, scale: 1.15 }}
            src={img}
            alt="Industrial water treatment plant with blue RO tanks and stainless steel piping"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full h-full object-cover aspect-[4/3] will-change-transform"
          />
          {/* Stronger overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-deep/80 via-deep/30 to-primary-glow/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />

          {/* Floating chip */}
          <div className="absolute bottom-6 left-6 glass-dark rounded-2xl px-4 py-3 text-deep-foreground">
            <div className="text-xs uppercase tracking-widest text-primary-glow">Engineered</div>
            <div className="font-semibold">Hospital & Industrial Grade</div>
          </div>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-widest text-primary-glow uppercase"
          >
            Industrial Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-bold text-balance leading-[1.05]"
          >
            Advanced Industrial Water Treatment Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-deep-foreground/70 max-w-lg leading-relaxed"
          >
            Engineered, installed and maintained by experts. Built for hospitals, laboratories, and manufacturing.
          </motion.p>

          <div className="mt-8 space-y-3">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:bg-white/10 hover:border-primary-glow/40 transition-all"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary-glow/20 flex items-center justify-center group-hover:bg-primary-glow/30 group-hover:scale-110 transition-all">
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
            transition={{ duration: 0.5, delay: 0.7 }}
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Request Site Visit
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
