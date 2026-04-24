import Image from "next/image";
import CorporateDefinition from "@/components/CorporateDefinition";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";

export default function VenuesPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Clean SaaS Style */}
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden bg-slate-50">
        {/* Subtle Background Pattern - Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-black tracking-[0.3em] uppercase">
                Venue Partnerships
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.85] tracking-tighter">
                For <br />
                <span className="text-primary italic">Venues.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-sans font-light max-w-xl leading-relaxed">
                Seamless integration, industry-leading compliance, and <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">guaranteed revenue growth</span> for your hospitality business.
              </p>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-premium border-[10px] border-white group">
              <Image
                src="/partner-bg.jpeg"
                alt="Venue Partnership"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <HowItWorks />
      <CorporateDefinition />
      <CaseStudies />
      <OtherServices />
    </div>
  );
}
