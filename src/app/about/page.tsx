"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { label: "Average Client ROI", value: "150%" },
    { label: "Returning Clients", value: "100%" },
    { label: "Venues Worldwide", value: "400+" },
    { label: "Sales Generated", value: "£2M+" },
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Subtle overlays for depth, allowing global background to shine through */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[#C874E2] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[#C874E2] blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center pt-20 md:pt-24">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20 mb-6"
          >
            <div className="w-5 h-3 relative">
              <Image src="/effervescent-sign1.png" alt="Icon" fill className="object-contain brightness-0 invert" />
            </div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-white">
              The Agency <span className="mx-2 opacity-30">•</span> Global Impact
            </p>
          </motion.div>
          <motion.h1 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tighter mb-6"
          >
            About <span className="italic underline decoration-white/30 underline-offset-8">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg md:text-2xl text-white font-serif italic tracking-tight max-w-3xl mx-auto leading-relaxed"
          >
            Our extensive experience equips us with the insights needed to tailor shot girl services that deliver exceptional results.
          </motion.p>
        </div>
        <div className="absolute bottom-8 right-8 opacity-40">
          <div className="w-12 h-12 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-[50%] h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Proven Success <br />
                <span className="italic underline decoration-white/50 underline-offset-8">Across Borders</span>
              </h2>
              <p className="text-base md:text-lg text-white font-serif italic leading-relaxed opacity-90">
                With a proven track record of success nationwide across the UK, in Ibiza & Dubai, we've demonstrated our ability to excel in diverse markets.
              </p>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed max-w-xl">
                We work seamlessly with both corporate brands like Stonegate and cherished family-owned businesses, bringing a standard of excellence that is unmatched in the hospitality industry.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3">
                  <Globe className="text-white" size={16} />
                  <span className="font-black text-white uppercase tracking-widest text-[9px]">UK • Ibiza • Dubai</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group w-full"
            >
              <div className="relative h-[250px] md:h-[350px] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-700">
                <Image 
                  src="/case-studies-bg.jpeg" 
                  alt="Global Experience" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Winning Approach */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[30%] right-[-10%] w-[80%] h-[160%] bg-[#d690eb]/10 transform rotate-[35deg] border-l-2 border-white/20" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] space-y-2 transition-transform hover:-translate-y-1 duration-500 shadow-xl">
                    <p className="text-3xl md:text-4xl font-serif text-white font-bold leading-none">{stat.value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/50 text-[9px] font-black uppercase tracking-[0.3em] text-center lg:text-left">
                (Safe to say we are trusted by our clients)
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                A Results <br />
                <span className="italic underline decoration-white/50 underline-offset-8">Driven</span> Approach
              </h2>
              <div className="space-y-4 text-base md:text-lg text-white font-serif italic leading-relaxed opacity-90">
                <p>We provide comprehensive sales training and our innovative commission-based pay structure is designed to drive results.</p>
                <p>This means that our shot-sellers are not just servers, but motivated sales professionals incentivised to sell, ensuring they are as committed to your venue's success as you are.</p>
              </div>
              <div className="pt-2">
                <div className="h-px w-12 bg-white/30 mb-4" />
                <p className="text-white text-sm font-light leading-relaxed max-w-xl opacity-80">
                  Choose our company for a winning combination of industry expertise, dedicated training, and an unwavering commitment on both your success and the satisfaction of your customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 opacity-60 scale-100 z-30">
          <div className="w-12 h-12 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight tracking-tight text-balance">
              Ready to scale your <br /> revenue with the <span className="italic underline decoration-white/50 underline-offset-8">elite</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link 
                href="/contact"
                className="bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                Get in Touch <ArrowRight size={20} className="text-primary" />
              </Link>
              <Link 
                href="https://effervescent-agency.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full text-lg font-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group"
              >
                Join The Team <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-12 right-12 opacity-60 scale-100 z-30">
          <div className="w-16 h-16 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
