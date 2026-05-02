import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-water-system.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="top" ref={ref} className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden bg-gradient-mesh">
      {/* Soft drifting blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary-glow/25 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-accent/40 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />

        {[
          { l: "12%", t: "28%", d: 0, s: 0.8 },
          { l: "82%", t: "18%", d: 1.5, s: 0.6 },
          { l: "68%", t: "72%", d: 2.5, s: 1 },
          { l: "22%", t: "78%", d: 0.8, s: 0.7 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-glow/20 blur-xl animate-float-drop"
            style={{
              left: d.l,
              top: d.t,
              width: `${70 * d.s}px`,
              height: `${70 * d.s}px`,
              animationDelay: `${d.d}s`,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y }} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted across Kerala since years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-foreground text-balance"
          >
            Pure Water Solutions for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Homes, Hospitals & Industries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Advanced water purification systems with reliable service support across Kerala. From RO purifiers to demineralization plants — we engineer clean water.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+919633035611"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span><strong className="text-foreground">9633035611</strong></span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span><strong className="text-foreground">+91 9747817440</strong></span>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-primary rounded-[2rem] blur-3xl opacity-20" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border">
            <img
              src={heroImg}
              alt="Industrial RO water purification system with stainless steel membranes"
              width={1280}
              height={1280}
              className="w-full h-full object-cover aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -left-4 sm:-left-8 bottom-8 glass rounded-2xl px-5 py-4 shadow-elegant"
          >
            <div className="text-3xl font-bold text-primary font-display">40+</div>
            <div className="text-xs text-muted-foreground mt-0.5">Hospitals & Labs</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
