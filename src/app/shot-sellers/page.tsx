import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import CorporateDefinition from "@/components/CorporateDefinition";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";
import ServiceHighlights from "@/components/ServiceHighlights";

export default function ShotSellersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/partner-bg.jpeg"
            alt="Shot Seller Impact"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 brand-gradient mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
            What a <span className="text-primary italic">Shot-Seller</span> <br /> Can Do For Your Venue
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Boost revenue, enhance atmosphere, and provide a premium experience—all with zero risk and zero upfront costs.
          </p>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <TrendingUp className="text-primary" size={40} />,
                title: "Instant Revenue Growth",
                desc: "Our shot-sellers are trained to maximize sales in a high-energy environment, turning quiet moments into peak profit."
              },
              {
                icon: <Users className="text-primary" size={40} />,
                title: "Enhanced Atmosphere",
                desc: "Beyond sales, our team brings infectious energy and a professional vibe that keeps guests engaged and excited."
              },
              {
                icon: <ShieldCheck className="text-primary" size={40} />,
                title: "Zero Risk Partnership",
                desc: "We work on a commission-only basis. If we don't sell, you don't pay. It's a true win-win for your business."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all text-center">
                <div className="mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Re-using existing sections that define the service */}
      <ServiceHighlights />
    </div>
  );
}
