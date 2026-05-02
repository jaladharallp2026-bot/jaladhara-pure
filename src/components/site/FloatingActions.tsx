import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp - all screens */}
      <motion.a
        href="https://wa.me/919747817440"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_150)] animate-ripple" />
        <MessageCircle className="relative h-6 w-6" />
      </motion.a>

      {/* Sticky call - mobile only */}
      <motion.a
        href="tel:+919633035611"
        aria-label="Call"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2 }}
        className="md:hidden fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </>
  );
}
