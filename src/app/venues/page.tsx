import CorporateDefinition from "@/components/CorporateDefinition";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";

export default function VenuesPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden pt-20 md:pt-32">
      {/* Subtle overlays for depth, allowing global background to shine through */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[#C874E2] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[#C874E2] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        <HowItWorks />
        <CorporateDefinition />
        <CaseStudies />
        <OtherServices />
      </div>
    </div>
  );
}
