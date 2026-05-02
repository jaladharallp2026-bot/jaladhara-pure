import { Phone } from "lucide-react";
import logo from "@/assets/jaladhara-logo.png";

export function Footer() {
  return (
    <footer className="bg-deep text-deep-foreground/80 py-14 pb-28 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="inline-block rounded-xl bg-white/95 p-2 shadow-soft">
              <img
                src={logo}
                alt="Jaladhara KEMFRE Water Purification Technologies"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-4 text-sm max-w-sm leading-relaxed">
              Trusted water purification systems for homes, hospitals, laboratories and industries across Kerala.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#industrial" className="hover:text-white transition-colors">Industrial</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 9633035611</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 9747817440</li>
              <li className="text-deep-foreground/60 mt-3 text-xs">Service across Kerala</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-deep-foreground/50 flex flex-col md:flex-row justify-between gap-3">
          <div>© {new Date().getFullYear()} Jaladhara (KEMFRE). All rights reserved.</div>
          <div>Pure Water · Trusted Service</div>
        </div>
      </div>
    </footer>
  );
}
