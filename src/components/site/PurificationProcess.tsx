import { useRef, useState, useEffect, CSSProperties } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// ─── Stage data ───────────────────────────────────────────────────────────────
const STAGES = [
  {
    number: "01",
    title: "Source Water",
    subtitle: "Raw Water Intake",
    description:
      "Water is collected from borewell, municipal supply, or river sources and pre-screened to remove large debris before entering the multi-stage purification system.",
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.18)",
  },
  {
    number: "02",
    title: "Sediment Pre-filter",
    subtitle: "5-Micron Polypropylene",
    description:
      "A spun polypropylene cartridge traps suspended particles — sand, silt, rust flakes, and turbidity — down to 5 microns, protecting membranes from premature damage.",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.14)",
  },
  {
    number: "03",
    title: "Activated Carbon",
    subtitle: "Chemical Adsorption",
    description:
      "High-grade granular activated carbon eliminates chlorine, chloramines, and volatile organic compounds (VOCs), improving taste and protecting the downstream RO membrane.",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.14)",
  },
  {
    number: "04",
    title: "RO Membrane",
    subtitle: "0.0001-Micron Barrier",
    description:
      "Reverse osmosis forces water through a semi-permeable membrane that rejects 99.9% of dissolved salts, heavy metals, bacteria, viruses, and other micro-contaminants.",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.14)",
  },
  {
    number: "05",
    title: "Pure Water",
    subtitle: "Ready for Delivery",
    description:
      "Crystal-clear, safe water exits the system — ready for drinking, medical use, laboratory analysis, and industrial applications across homes and facilities in Kerala.",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
  },
] as const;

type StageAccent = (typeof STAGES)[number]["accent"];

// ─── Shared sparkle star shape ───────────────────────────────────────────────
function SparkStar({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: color,
        clipPath:
          "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
      }}
    />
  );
}

// ─── Stage 1: Source Water ────────────────────────────────────────────────────
function SourceWaterVisual({ accent }: { accent: StageAccent }) {
  const dots = [
    { x: "14%", y: "20%", s: 9 },  { x: "80%", y: "17%", s: 7 },
    { x: "10%", y: "58%", s: 6 },  { x: "84%", y: "54%", s: 8 },
    { x: "23%", y: "80%", s: 5 },  { x: "72%", y: "78%", s: 6 },
    { x: "47%", y: "10%", s: 5 },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: `radial-gradient(circle, ${accent}25 0%, transparent 70%)` }} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Main droplet */}
        <div
          style={{
            width: 118,
            height: 158,
            borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
            background: `linear-gradient(155deg, #bfdbfe 0%, #3b82f6 45%, #1d4ed8 100%)`,
            boxShadow: `0 0 48px ${accent}70, 0 0 96px ${accent}35`,
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Highlight streak */}
          <div style={{ position: "absolute", top: 22, left: 26, width: 22, height: 46, borderRadius: "50%", background: "linear-gradient(145deg, rgba(255,255,255,0.65) 0%, transparent 100%)", transform: "rotate(-22deg)" }} />
        </div>

        {/* Ripple rings */}
        <div className="relative flex justify-center" style={{ marginTop: 6 }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute animate-water-ripple"
              style={{
                width: 56 + i * 52,
                height: 14 + i * 11,
                borderRadius: "50%",
                border: `1.5px solid ${accent}`,
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                animationDelay: `${(i - 1) * 0.72}s`,
              }}
            />
          ))}
          <div style={{ height: 32 }} />
        </div>
      </div>

      {/* Floating micro-droplets */}
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-drop"
          style={{ left: d.x, top: d.y, width: d.s, height: d.s, background: accent, opacity: 0.65, animationDelay: `${i * 0.38}s` }}
        />
      ))}
    </div>
  );
}

// ─── Stage 2: Sediment Pre-filter ─────────────────────────────────────────────
const SEDIMENT_PARTICLES = [
  { x: 28, delay: 0,    color: "#92400e", size: 5 },
  { x: 44, delay: 0.28, color: "#b45309", size: 4 },
  { x: 62, delay: 0.58, color: "#78350f", size: 6 },
  { x: 76, delay: 0.86, color: "#92400e", size: 4 },
  { x: 18, delay: 1.14, color: "#b45309", size: 5 },
  { x: 50, delay: 1.42, color: "#92400e", size: 3 },
  { x: 38, delay: 0.38, color: "#a16207", size: 4 },
  { x: 68, delay: 0.76, color: "#78350f", size: 5 },
];
const PASS_THROUGH = [
  { x: 32, delay: 0.22 },
  { x: 60, delay: 0.94 },
  { x: 48, delay: 1.38 },
];
const SEDIMENT_DOTS = Array.from({ length: 20 }, (_, i) => ({
  color: i % 3 === 0 ? "#92400e" : i % 3 === 1 ? "#b45309" : "#78350f",
}));

function SedimentVisual({ accent }: { accent: StageAccent }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: 196, height: 340 }}>
        {/* Housing */}
        <div style={{ position: "absolute", inset: 0, border: `2px solid ${accent}40`, borderRadius: 18, background: "linear-gradient(180deg,oklch(0.18 0.06 250) 0%,oklch(0.14 0.05 255) 100%)", boxShadow: `0 0 32px ${accent}20` }} />

        {/* Filter band */}
        <div style={{ position: "absolute", top: "47%", left: 0, right: 0, height: 13, background: `linear-gradient(90deg,transparent,${accent}45 20%,${accent}60 50%,${accent}45 80%,transparent)`, borderTop: `1px solid ${accent}55`, borderBottom: `1px solid ${accent}55` }} />
        <div style={{ position: "absolute", top: "calc(47% + 16px)", left: "50%", transform: "translateX(-50%)", fontSize: 9, color: accent, fontWeight: 800, letterSpacing: "0.12em", whiteSpace: "nowrap" }}>5µm FILTER</div>

        {/* Particles above (dirty) */}
        <div style={{ position: "absolute", top: 16, left: 0, right: 0, height: "44%", overflow: "hidden" }}>
          {SEDIMENT_PARTICLES.map((p, i) => (
            <div key={i} className="absolute rounded-full animate-sediment-fall" style={{ width: p.size, height: p.size, left: `${p.x}%`, top: 0, background: p.color, animationDelay: `${p.delay}s` }} />
          ))}
        </div>

        {/* Collected sediment at filter */}
        <div style={{ position: "absolute", top: "calc(47% - 14px)", left: "8%", right: "8%", display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
          {SEDIMENT_DOTS.map((d, i) => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: d.color, opacity: 0.82 }} />
          ))}
        </div>

        {/* Particles below (clean) */}
        <div style={{ position: "absolute", bottom: 16, left: "20%", right: "20%", height: "34%", overflow: "hidden" }}>
          {PASS_THROUGH.map((p, i) => (
            <div key={i} className="absolute rounded-full animate-sediment-fall" style={{ width: 3, height: 3, left: `${p.x}%`, top: 0, background: "#93c5fd", opacity: 0.38, animationDelay: `${p.delay}s`, animationDuration: "2.4s" }} />
          ))}
        </div>

        {/* Arrows */}
        <div style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", color: "#60a5fa", fontSize: 20 }}>↓</div>
        <div style={{ position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)", color: accent, fontSize: 20 }}>↓</div>
      </div>
    </div>
  );
}

// ─── Stage 3: Activated Carbon ────────────────────────────────────────────────
const CARBON_PORES = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i % 6) * 18 + 2}%`,
  top:  `${Math.floor(i / 6) * 25 + 5}%`,
}));
const ABSORBED_PARTICLES = [
  { x: "28%", y: "22%", delay: 0 },
  { x: "64%", y: "42%", delay: 0.68 },
  { x: "38%", y: "63%", delay: 1.36 },
  { x: "72%", y: "18%", delay: 0.36 },
  { x: "22%", y: "52%", delay: 1.04 },
];

function CarbonVisual({ accent }: { accent: StageAccent }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: 176, height: 316 }}>
        {/* Glow */}
        <div style={{ position: "absolute", inset: -48, background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)` }} />

        {/* Carbon block */}
        <div style={{ position: "absolute", inset: 0, borderRadius: 22, background: "linear-gradient(135deg,#1a1a2e 0%,#0a0a16 50%,#1a1a2e 100%)", border: `2px solid ${accent}30`, boxShadow: `0 0 44px ${accent}25, inset 0 0 32px rgba(0,0,0,0.8)`, overflow: "hidden" }}>
          {/* Porous texture */}
          {CARBON_PORES.map((p, i) => (
            <div key={i} style={{ position: "absolute", width: 3, height: 3, borderRadius: "50%", background: accent, opacity: 0.18, left: p.left, top: p.top }} />
          ))}
        </div>

        {/* Vertical label */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: `${accent}70`, fontSize: 8, fontWeight: 800, letterSpacing: "0.18em", writingMode: "vertical-rl", textOrientation: "mixed", userSelect: "none" }}>
          ACTIVATED CARBON
        </div>

        {/* In-flow (top) */}
        <div style={{ position: "absolute", top: -38, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{ width: 2, height: 28, background: "linear-gradient(180deg,#60a5fa50,#60a5fa)" }} />
          <div style={{ fontSize: 8, color: "#60a5fa70", letterSpacing: "0.1em" }}>IN</div>
        </div>

        {/* Out-flow (bottom) */}
        <div style={{ position: "absolute", bottom: -38, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column-reverse", alignItems: "center", gap: 3 }}>
          <div style={{ width: 2, height: 28, background: `linear-gradient(180deg,${accent},${accent}50)` }} />
          <div style={{ fontSize: 8, color: accent, letterSpacing: "0.1em" }}>OUT</div>
        </div>

        {/* Absorbed particles */}
        {ABSORBED_PARTICLES.map((p, i) => (
          <div key={i} className="absolute rounded-full animate-particle-absorb" style={{ width: 5, height: 5, left: p.x, top: p.y, background: accent, animationDelay: `${p.delay}s` }} />
        ))}
      </div>
    </div>
  );
}

// ─── Stage 4: RO Membrane ─────────────────────────────────────────────────────
const REJECTED_PARTICLES = [
  { x: "18%", y: "24%", s: 5 }, { x: "56%", y: "40%", s: 4 },
  { x: "32%", y: "62%", s: 6 }, { x: "72%", y: "18%", s: 4 },
  { x: "44%", y: "74%", s: 5 }, { x: "14%", y: "52%", s: 3 },
];
const SPARKLE_POSITIONS_MEM = [
  { x: "22%", y: "28%", delay: 0 },   { x: "62%", y: "48%", delay: 0.5 },
  { x: "38%", y: "68%", delay: 1.0 }, { x: "78%", y: "20%", delay: 0.7 },
  { x: "15%", y: "62%", delay: 1.3 },
];

function MembraneVisual({ accent }: { accent: StageAccent }) {
  const panelBase: CSSProperties = { flex: 1, position: "relative", overflow: "hidden" };
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div>
        {/* Labels above panels */}
        <div className="flex justify-between px-2 mb-1" style={{ width: 316 }}>
          <span style={{ fontSize: 9, color: "#fbbf24", letterSpacing: "0.1em" }}>← REJECTED</span>
          <span style={{ fontSize: 9, color: accent, letterSpacing: "0.1em" }}>PERMEATE →</span>
        </div>

        <div className="flex items-stretch" style={{ width: 316, height: 260 }}>
          {/* Left: feed water */}
          <div style={{ ...panelBase, borderRadius: "16px 0 0 16px", background: "linear-gradient(180deg,oklch(0.18 0.06 250),oklch(0.15 0.05 252))", border: `1.5px solid oklch(0.3 0.05 250)`, borderRight: "none" }}>
            <div style={{ position: "absolute", inset: 0, background: "oklch(0.22 0.08 255 / 0.28)" }} />
            {REJECTED_PARTICLES.map((p, i) => (
              <div key={i} className="absolute rounded-full animate-particle-bounce" style={{ left: p.x, top: p.y, width: p.s, height: p.s, background: "#fbbf24", opacity: 0.75, animationDelay: `${i * 0.34}s` }} />
            ))}
            <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontSize: 8, color: "#60a5fa60", letterSpacing: "0.1em" }}>FEED</div>
          </div>

          {/* Membrane */}
          <div className="animate-membrane-glow" style={{ width: 10, background: `linear-gradient(180deg,${accent}55,${accent},${accent}55)`, boxShadow: `0 0 24px ${accent}, 0 0 48px ${accent}55`, position: "relative", flexShrink: 0 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ position: "absolute", left: "50%", top: `${8 + i * 11}%`, transform: "translateX(-50%)", width: 3, height: 3, borderRadius: "50%", background: "#000", opacity: 0.55 }} />
            ))}
          </div>

          {/* Right: pure permeate */}
          <div style={{ ...panelBase, borderRadius: "0 16px 16px 0", background: `linear-gradient(180deg,oklch(0.18 0.07 235),oklch(0.22 0.08 230))`, border: `1.5px solid ${accent}30`, borderLeft: "none" }}>
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${accent}08,transparent 50%,${accent}05)` }} />
            {SPARKLE_POSITIONS_MEM.map((p, i) => (
              <div key={i} className="absolute animate-sparkle-twinkle" style={{ left: p.x, top: p.y, animationDelay: `${p.delay}s` }}>
                <SparkStar color={accent} size={7} />
              </div>
            ))}
            <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontSize: 8, color: accent, letterSpacing: "0.1em" }}>PERMEATE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stage 5: Pure Water ──────────────────────────────────────────────────────
const BUBBLES = [
  { x: "24%", delay: 0 }, { x: "55%", delay: 0.8 },
  { x: "71%", delay: 0.4 }, { x: "40%", delay: 1.2 },
];
const SPARKLE_POSITIONS_PURE = [
  { x: "12%", y: "28%", delay: 0 },  { x: "82%", y: "24%", delay: 0.6 },
  { x: "8%",  y: "62%", delay: 1.2 }, { x: "88%", y: "58%", delay: 0.3 },
  { x: "50%", y: "8%",  delay: 0.9 },
];

function PureWaterVisual({ accent }: { accent: StageAccent }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, background: `radial-gradient(circle,${accent}22 0%,transparent 70%)` }} />

      {/* Sparkles */}
      {SPARKLE_POSITIONS_PURE.map((p, i) => (
        <div key={i} className="absolute animate-sparkle-twinkle" style={{ left: p.x, top: p.y, animationDelay: `${p.delay}s` }}>
          <SparkStar color={accent} size={9} />
        </div>
      ))}

      <div className="relative z-10" style={{ width: 128, height: 285 }}>
        {/* Bottle body */}
        <div style={{ position: "absolute", bottom: 0, left: "8%", right: "8%", height: "74%", borderRadius: "5px 5px 14px 14px", border: `2px solid ${accent}55`, background: "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))", boxShadow: `0 0 32px ${accent}35,inset 0 0 20px rgba(0,0,0,0.25)`, overflow: "hidden" }}>
          {/* Water body */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "82%", background: `linear-gradient(180deg,${accent}95,${accent})` }} />
          {/* Wave on surface */}
          <div className="animate-wave-flow" style={{ position: "absolute", bottom: "82%", left: "-8%", right: "-8%", height: 18, borderRadius: "50% 50% 0 0", background: `${accent}`, opacity: 0.85 }} />
          {/* Bubbles */}
          {BUBBLES.map((b, i) => (
            <div key={i} className="absolute rounded-full animate-bubble-rise" style={{ width: 4 + i, height: 4 + i, left: b.x, bottom: "12%", background: "transparent", border: `1px solid ${accent}90`, animationDelay: `${b.delay}s` }} />
          ))}
          {/* Inner shimmer */}
          <div style={{ position: "absolute", top: 0, left: "30%", width: "20%", bottom: 0, background: "linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))", borderRadius: 4 }} />
        </div>

        {/* Neck */}
        <div style={{ position: "absolute", bottom: "74%", left: "27%", right: "27%", height: "13%", border: `2px solid ${accent}55`, borderBottom: "none", borderRadius: "4px 4px 0 0", background: "rgba(255,255,255,0.03)" }} />

        {/* Cap */}
        <div style={{ position: "absolute", bottom: "87%", left: "20%", right: "20%", height: "7%", borderRadius: 5, background: `linear-gradient(135deg,${accent}90,${accent})`, boxShadow: `0 0 14px ${accent}60` }} />

        {/* Pure checkmark badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 300 }}
          style={{ position: "absolute", top: -4, right: -22, width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg,${accent},#1d4ed8)`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 22px ${accent}90`, fontSize: 17, color: "#fff" }}
        >
          ✓
        </motion.div>
      </div>
    </div>
  );
}

// ─── Visual switcher ──────────────────────────────────────────────────────────
const VISUALS = [SourceWaterVisual, SedimentVisual, CarbonVisual, MembraneVisual, PureWaterVisual] as const;

// ─── Mobile: simple scrolling cards ──────────────────────────────────────────
function PurificationProcessMobile() {
  return (
    <section className="py-20 px-4" style={{ background: "oklch(0.11 0.05 258)" }}>
      <div className="mx-auto max-w-sm">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="block text-[11px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#60a5fa" }}>How It Works</span>
          <h2 className="text-3xl font-bold text-white">From Source to <span style={{ backgroundImage: "linear-gradient(135deg,#93c5fd,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pure</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-10 bottom-10 w-px" style={{ left: 43, background: "linear-gradient(to bottom,#3b82f6,#0ea5e9,#3b82f6)", opacity: 0.22 }} />
          <div className="flex flex-col">
            {STAGES.map((stage, i) => {
              const Visual = VISUALS[i];
              return (
                <motion.div key={stage.number} initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.07 }} className="relative flex items-start gap-5 pb-10 last:pb-0">
                  <div className="shrink-0 rounded-2xl overflow-hidden" style={{ width: 88, height: 88, background: "oklch(0.17 0.06 258)", border: "1px solid oklch(0.28 0.07 255 / 0.4)" }}>
                    <Visual accent={stage.accent} />
                  </div>
                  <div className="pt-2 min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: stage.accent }}>Stage {stage.number}</span>
                    <h3 className="mt-1 text-lg font-bold text-white">{stage.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "oklch(0.65 0.04 240)" }}>{stage.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-14 text-center text-2xl font-bold text-white">
          Pure Water.{" "}
          <span style={{ backgroundImage: "linear-gradient(135deg,#93c5fd,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Perfectly Delivered.</span>
        </motion.p>
      </div>
    </section>
  );
}

// ─── Desktop pinned section — canvas frame sequencer ─────────────────────────
function DesktopSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const FRAME_COUNT = 162;
  const frameSrc = (i: number) => `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;



  // Preload all frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loaded = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i + 1);
      img.onload = () => {
        loaded++;
        if (loaded % 10 === 0 || loaded === FRAME_COUNT) {
          setLoadedCount(loaded);
        }
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;
  }, []);

  // rAF canvas render loop
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let lastFrame = -1;

    const draw = () => {
      const top = wrapper.getBoundingClientRect().top;
      const travel = wrapper.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -top / travel));
      const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));

      if (frameIdx !== lastFrame) {
        const img = imagesRef.current[frameIdx];
        if (img?.complete && img.naturalWidth > 0) {
          const dpr = window.devicePixelRatio || 1;
          const w = canvas.clientWidth;
          const h = canvas.clientHeight;
          if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          }
          const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
          const x = (w - img.naturalWidth * scale) / 2;
          const y = (h - img.naturalHeight * scale) / 2;
          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
          lastFrame = frameIdx;
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [loadedCount]);

  return (
    <div ref={wrapperRef} style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full" style={{ height: "100vh", background: "#000" }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Top gradient fade from hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 inset-x-0 h-24 z-10"
          style={{ background: "linear-gradient(to bottom, oklch(0.96 0.03 235), transparent)" }}
        />

        {/* Loading progress bar */}
        {loadedCount < FRAME_COUNT && (
          <div className="absolute bottom-0 inset-x-0 h-1 z-30" style={{ background: "oklch(0.36 0.14 264 / 0.2)" }}>
            <div
              className="h-full transition-all"
              style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%`, background: "oklch(0.62 0.18 250)" }}
            />
          </div>
        )}

        {/* Section heading */}
        <div className="absolute top-8 inset-x-0 text-center z-20 pointer-events-none select-none">
          <span className="block text-[11px] font-bold tracking-[0.22em] uppercase mb-1 text-white/50">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">From Source to Pure</h2>
        </div>


        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none text-white/40 text-xs flex flex-col items-center gap-1">
          <span className="animate-bounce">↓</span>
          <span>Scroll</span>
        </div>

        {/* Bottom gradient fade to next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 inset-x-0 h-20 z-10"
          style={{ background: "linear-gradient(to top, oklch(0.96 0.03 235), transparent)" }}
        />
      </div>
    </div>
  );
}

// ─── Main export — handles SSR + mobile detection ────────────────────────────
export function PurificationProcess() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // SSR / pre-hydration: render a height placeholder so layout doesn't jump
  if (isMobile === undefined) {
    return <div style={{ minHeight: "100vh", background: "oklch(0.11 0.05 258)" }} />;
  }

  if (isMobile) return <PurificationProcessMobile />;

  // Desktop: DesktopSection owns useScroll — only called on client
  return <DesktopSection />;
}
