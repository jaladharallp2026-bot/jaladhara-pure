import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Droplets, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Get in touch
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance">
              Let's plan your water solution
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Drop us your number — we'll call back with a tailored recommendation and quote.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+919633035611" className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Call us</div>
                  <div className="font-semibold text-foreground">
                    +91 9633035611 · +91 9747817440
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Our address</div>
                  <div className="font-semibold text-foreground leading-relaxed">
                    CV Junction, Near Masjid Salam
                    <br />
                    Ponnani, Malappuram — 679577
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Service across Kerala</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Service & support</div>
                  <div className="font-semibold text-foreground">
                    AMC · Installation · Maintenance
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-gradient-card border border-border p-8 shadow-elegant"
          >
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="h-5 w-5 text-primary" />
              <h3 className="font-display font-bold text-xl">Quick Enquiry</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="+91 ••••• •••••"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full rounded-xl bg-gradient-primary text-primary-foreground py-3.5 font-semibold shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5 disabled:opacity-80"
              >
                {submitted ? (
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> We'll call you back!
                  </span>
                ) : (
                  "Request Callback"
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. No spam — just a friendly callback.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
