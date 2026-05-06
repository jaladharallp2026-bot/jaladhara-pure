import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  { src: "/popup-1.png", alt: "Jaladhara Watertech – Pure and Hygienic Water" },
  { src: "/popup-2.png", alt: "D Mineralization Water Plant – Jaladhara" },
];

const INTERVAL = 3500;

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!open || paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [open, paused]);

  const prev = () => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % IMAGES.length);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.78)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 28 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="relative w-full max-w-xl sm:max-w-2xl"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-4 -right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Slider frame */}
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-black">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={current}
                  src={IMAGES[current].src}
                  alt={IMAGES[current].alt}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.22 }}
                  className="w-full h-auto block max-h-[80vh] object-contain"
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-4 px-1">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/35 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 22 : 8,
                      height: 8,
                      background: i === current ? "#fff" : "rgba(255,255,255,0.38)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/35 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
