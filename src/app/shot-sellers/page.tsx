import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import CorporateDefinition from "@/components/CorporateDefinition";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";
import ServiceHighlights from "@/components/ServiceHighlights";

export default function ShotSellersPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Clean SaaS Style */}
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden bg-slate-50">
        {/* Subtle Background Pattern - Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-black tracking-[0.3em] uppercase">
              Service Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[0.85] tracking-tighter">
              What is a <br />
              <span className="text-primary italic">Shot-Seller?</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-sans font-light leading-relaxed">
              Boost revenue, enhance atmosphere, and provide a premium experience—all with <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">zero risk</span> and zero upfront costs for your venue.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <TrendingUp className="text-primary" size={32} />,
                title: "Instant Revenue",
                desc: "Our shot-sellers are trained to maximize sales in high-energy environments, turning quiet moments into peak profit."
              },
              {
                icon: <Users className="text-primary" size={32} />,
                title: "Electric Atmosphere",
                desc: "Beyond sales, our team brings infectious energy and a professional vibe that keeps guests engaged and excited."
              },
              {
                icon: <ShieldCheck className="text-primary" size={32} />,
                title: "Zero-Risk Partnership",
                desc: "We work on a commission-only basis. If we don't sell, you don't pay. A true win-win for your business."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="saas-card p-12 text-center group">
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{benefit.desc}</p>
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
