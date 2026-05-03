import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-water-system.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleId = useRef(0);

  const spawnRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = rippleId.current++;
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };

  return (
    <section id="top" ref={ref} className="relative pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden bg-gradient-mesh">
      {/* Noise texture overlay for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Soft drifting blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* blob 1 — top-left, water-oval shape */}
        <div
          className="absolute -top-32 -left-20 h-[560px] w-[420px] bg-primary/30 blur-[72px] animate-blob"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />
        {/* blob 2 — top-right */}
        <div
          className="absolute top-40 -right-32 h-[600px] w-[440px] bg-primary/25 blur-[80px] animate-blob"
          style={{ animationDelay: "4s", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
        />
        {/* blob 3 — bottom-center */}
        <div
          className="absolute bottom-0 left-1/3 h-[480px] w-[380px] bg-primary-glow/30 blur-[64px] animate-blob"
          style={{ animationDelay: "8s", borderRadius: "60% 40% 40% 60% / 50% 60% 40% 50%" }}
        />

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

      <motion.div style={{ y }} className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
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
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-glow transition-shadow hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="tel:+919633035611"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={spawnRipple}
              className="relative inline-flex items-center gap-2 rounded-full bg-card border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-all overflow-hidden"
            >
              <Phone className="h-4 w-4" />
              Call Now
              {ripples.map((r) => (
                <span
                  key={r.id}
                  aria-hidden
                  className="absolute rounded-full bg-primary/20 animate-ripple-click pointer-events-none"
                  style={{ width: 10, height: 10, left: r.x - 5, top: r.y - 5 }}
                />
              ))}
            </motion.a>
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

        {/* Image column — scroll parallax (outer) + CSS float (inner) */}
        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="animate-float-gentle">
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
              {/* Shimmer sweep — light reflection on metallic surfaces */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none animate-shimmer-sweep"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, oklch(1 0 0 / 0.15) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </div>

          {/* Floating stat card — anchored to outer motion.div, not the float wrapper */}
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
