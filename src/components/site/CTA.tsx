import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-deep text-deep-foreground">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary-glow/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
          Need Clean Water Solutions?
        </h2>
        <p className="mt-5 text-lg text-deep-foreground/70 max-w-2xl mx-auto">
          Talk to our team — we'll recommend the right system, install it, and stand behind it.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="tel:+919633035611"
            className="inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-3.5 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 hover:shadow-glow transition-all"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href="https://wa.me/919747817440"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.18_150)] text-white px-7 py-3.5 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary-glow/20 border border-white/20 text-white px-7 py-3.5 text-sm font-semibold hover:bg-primary-glow/30 transition-all"
          >
            <FileText className="h-4 w-4" /> Get Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
}
