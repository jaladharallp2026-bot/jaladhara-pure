import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-deep text-deep-foreground">
      {/* Animated blobs */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-primary-glow/25 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full bg-primary/30 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      </div>

      {/* Light sweep */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/2 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="glass-dark rounded-3xl px-6 py-12 md:px-12 md:py-16 text-center shadow-elegant">
          <span className="inline-block text-xs font-bold tracking-widest text-primary-glow uppercase">
            Ready when you are
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Need Clean Water Solutions?
          </h2>
          <p className="mt-5 text-lg text-deep-foreground/75 max-w-2xl mx-auto">
            Talk to our team — we'll recommend the right system, install it, and stand behind it.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919633035611"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-deep px-7 py-3.5 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" /> Call Now
            </a>
            <a
              href="https://wa.me/919747817440"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.18_150)] text-white px-7 py-3.5 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 hover:shadow-glow transition-all"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <FileText className="h-4 w-4" /> Get Quote
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
