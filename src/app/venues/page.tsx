import Image from "next/image";
import CorporateDefinition from "@/components/CorporateDefinition";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";

export default function VenuesPage() {
  return (
    <div className="flex flex-col bg-white">

      <HowItWorks />
      <CorporateDefinition />
      <CaseStudies />
      <OtherServices />
    </div>
  );
}
