import Image from "next/image";
import CorporateDefinition from "@/components/CorporateDefinition";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";

export default function VenuesPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-32 md:py-48 text-center relative overflow-hidden">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/partner-bg.jpeg"
            alt="Venue Partnership"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 brand-gradient opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-2xl">For Venues</h1>
          <p className="text-xl md:text-3xl text-white font-medium leading-relaxed drop-shadow-lg">
            Seamless integration, industry-leading compliance, and <span className="text-primary-light italic">guaranteed revenue growth.</span>
          </p>
        </div>
      </div>
      
      <HowItWorks />
      <CorporateDefinition />
      <CaseStudies />
      <OtherServices />
    </div>
  );
}
