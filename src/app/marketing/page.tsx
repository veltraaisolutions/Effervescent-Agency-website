import Image from "next/image";
import InfluencerNetwork from "@/components/InfluencerNetwork";

export default function MarketingPage() {
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
                Amplification Network
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.85] tracking-tighter">
                Marketing <br />
                <span className="text-primary italic">& Network.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-sans font-light max-w-xl leading-relaxed">
                Leveraging a <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">7.65M+ social reach</span> to drive ticket sales and electric atmospheres for our partners.
              </p>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-premium border-[10px] border-white group">
                <Image
                  src="/Party-efficencyy.jpeg"
                  alt="Party Efficiency"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </div>
          </div>
        </div>
      </section>
      
      <InfluencerNetwork />

      {/* Premium Reach Stats Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { label: "Total Reach", value: "7.65M+", desc: "Aggregated social media footprint." },
              { label: "Active Influencers", value: "150+", desc: "Premium content creators on call." },
              { label: "Weekly Impressions", value: "12M+", desc: "Driving consistent brand awareness." }
            ].map((stat, idx) => (
              <div key={idx} className="saas-card p-12 text-center group">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">{stat.label}</p>
                <h3 className="text-6xl font-serif text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-500">{stat.value}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
