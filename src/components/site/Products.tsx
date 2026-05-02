import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import home from "@/assets/product-home-ro.jpg";
import commercial from "@/assets/product-commercial.jpg";
import lab from "@/assets/product-lab.jpg";

const products = [
  { img: home, name: "Kitchen RO Purifier", feature: "Compact, multi-stage RO with TDS controller" },
  { img: commercial, name: "Wall-Mount Commercial RO", feature: "Higher output for offices and clinics" },
  { img: lab, name: "Lab-Grade DM Unit", feature: "Ultra-pure water with digital monitoring" },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">For Home & Commercial</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance">
              Purifiers built for everyday clean water
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Reliable models for kitchens, clinics and offices — all backed by on-site service.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-5 right-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs uppercase tracking-widest text-primary-glow font-bold">Product</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.feature}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Enquire <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
