import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WhatIsQbaDoo from "@/components/WhatIsQbaDoo";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import VisitorsSection from "@/components/VisitorsSection";
import BerrittaSection from "@/components/BerrittaSection";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <main className="page-shell">
      <div className="ar-glow-circle left-[-7rem] top-[28rem] h-64 w-64" />
      <div className="ar-glow-circle right-[-6rem] top-[62rem] h-52 w-52" />
      <SiteHeader />
      <Hero />
      <ProblemSection />
      <WhatIsQbaDoo />
      <BenefitsSection />
      <HowItWorks />
      <VisitorsSection />
      <BerrittaSection />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
