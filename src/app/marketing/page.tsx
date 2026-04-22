import Image from "next/image";
import InfluencerNetwork from "@/components/InfluencerNetwork";

export default function MarketingPage() {
  return (
    <div className="pt-20">
      <div className="bg-slate-900 py-32 md:py-48 text-center relative overflow-hidden">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/case-studies-bg.jpeg"
            alt="Marketing and Influencer Network"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 brand-gradient opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-2xl">Marketing & Network</h1>
          <p className="text-xl md:text-3xl text-white font-medium leading-relaxed drop-shadow-lg">
            Leveraging a <span className="text-primary-light italic">1.5M+ social reach</span> to drive ticket sales and atmosphere for our partners.
          </p>
        </div>
      </div>
      
      <InfluencerNetwork />
    </div>
  );
}
