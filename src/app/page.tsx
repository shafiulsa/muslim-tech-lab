import ScrollCanvas from "@/components/ScrollCanvas";
import BentoGallery from "@/components/BentoGallery";
import PremiumServices from "@/components/premium/PremiumServices";
import PremiumWhyChooseUs from "@/components/premium/PremiumWhyChooseUs";
import PremiumPortfolio from "@/components/premium/PremiumPortfolio";
import PremiumTestimonials from "@/components/premium/PremiumTestimonials";
import PremiumInteractive from "@/components/premium/PremiumInteractive";
import PremiumFAQ from "@/components/premium/PremiumFAQ";
import PremiumContact from "@/components/premium/PremiumContact";
import PremiumCTA from "@/components/premium/PremiumCTA";
import PremiumFooter from "@/components/premium/PremiumFooter";

export default function Home() {
  return (
    <main className="w-full bg-[var(--background)]">
      {/* Phase 2 intro — 5 cinematic words (40% of total load window) */}
      <ScrollCanvas />

      {/* Bento Flip Gallery Section */}
      <BentoGallery />

      {/* Premium Sections Start Here */}
      <PremiumServices />
      <PremiumWhyChooseUs />
      <PremiumPortfolio />
      <PremiumTestimonials />
      <PremiumInteractive />
      <PremiumFAQ />
      <PremiumContact />
      <PremiumCTA />
      <PremiumFooter />
    </main>
  );
}
