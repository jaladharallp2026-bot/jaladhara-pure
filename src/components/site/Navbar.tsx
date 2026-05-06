import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industrial", label: "Industrial" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <a href="#top" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Jaladhara KEMFRE Water Purification Technologies"
              className="h-14 md:h-18 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919633035611"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
            >
              <Phone className="h-4 w-4" />
              9633035611
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-1 pt-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-foreground/80 hover:bg-secondary text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
