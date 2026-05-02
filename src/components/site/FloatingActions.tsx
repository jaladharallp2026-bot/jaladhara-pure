import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp - desktop & mobile (mobile shifts up to clear sticky bar) */}
      <motion.a
        href="https://wa.me/919747817440"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed right-5 z-40 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform bottom-24 md:bottom-6"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] animate-ripple" />
        <MessageCircle className="relative h-6 w-6" />
      </motion.a>

      {/* Sticky bottom bar - mobile only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-px bg-border/60 backdrop-blur-md border-t border-border shadow-elegant"
      >
        <a
          href="tel:+919633035611"
          className="flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground py-4 text-sm font-semibold"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href="https://wa.me/919747817440"
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 bg-[oklch(0.7_0.18_150)] text-white py-4 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </motion.div>
    </>
  );
}
