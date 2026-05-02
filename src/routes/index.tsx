import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { Services } from "@/components/site/Services";
import { Industrial } from "@/components/site/Industrial";
import { Products } from "@/components/site/Products";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaladhara (KEMFRE) — Water Purification, RO & DM Plants in Kerala" },
      {
        name: "description",
        content:
          "Jaladhara (KEMFRE) provides RO water purifiers, demineralization plants, water treatment, installation and AMC services for homes, hospitals, labs and industries across Kerala.",
      },
      { property: "og:title", content: "Jaladhara (KEMFRE) — Pure Water Solutions" },
      {
        property: "og:description",
        content:
          "Advanced water purification systems with reliable service support across Kerala.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Industrial />
        <Products />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
