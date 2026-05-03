import { useRef, useState, useEffect } from "react";

const FRAME_COUNT = 162;
const frameSrc = (i: number) => `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

function CanvasSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

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

export function PurificationProcess() {
  return <CanvasSection />;
}
