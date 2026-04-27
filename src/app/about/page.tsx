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
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center pt-32">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8"
          >
            <div className="w-6 h-4 relative">
              <Image src="/effervescent-sign1.png" alt="Icon" fill className="object-contain brightness-0 invert" />
            </div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-white">
              The Agency <span className="mx-2 opacity-30">•</span> Global Impact
            </p>
          </motion.div>
          <motion.h1 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-serif text-white leading-tight tracking-tighter mb-8"
          >
            About <span className="italic underline decoration-white/30 underline-offset-8">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-4xl text-white font-serif italic tracking-tight max-w-4xl mx-auto leading-relaxed"
          >
            “Our extensive experience equips us with the insights needed to tailor shot girl services that deliver exceptional results.”
          </motion.p>
        </div>
        <div className="absolute bottom-12 right-12 opacity-60">
          <div className="w-24 h-24 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="relative py-24 md:py-40 overflow-hidden" style={{ background: 'radial-gradient(circle at 0% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        <div className="absolute top-0 left-0 w-[50%] h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                Proven Success <br />
                <span className="italic underline decoration-white/50 underline-offset-8">Across Borders</span>
              </h2>
              <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed opacity-90">
                “With a proven track record of success nationwide across the UK, in Ibiza & Dubai, we've demonstrated our ability to excel in diverse markets.”
              </p>
              <p className="text-lg text-white/80 font-light leading-relaxed max-w-xl">
                We work seamlessly with both corporate brands like Stonegate and cherished family-owned businesses, bringing a standard of excellence that is unmatched in the hospitality industry.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/10 border border-white/20 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3">
                  <Globe className="text-white" size={20} />
                  <span className="font-black text-white uppercase tracking-widest text-xs">UK • Ibiza • Dubai</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group w-full"
            >
              <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-3xl transition-all duration-700">
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
      <section className="relative py-32 md:py-48 overflow-hidden bg-[#fbcfe8]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, #C874E2 0%, transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 80%, #C874E2 0%, transparent 60%)' }} />
          <div className="absolute -top-[30%] right-[-10%] w-[80%] h-[160%] bg-[#d690eb]/20 transform rotate-[35deg] border-l-2 border-white/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] space-y-3 transition-transform hover:-translate-y-2 duration-500 shadow-xl">
                    <p className="text-5xl md:text-6xl font-serif text-white font-bold leading-none">{stat.value}</p>
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-white/50 text-xs font-black uppercase tracking-[0.3em] text-center lg:text-left">
                (Safe to say we are trusted by our clients)
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 order-1 lg:order-2"
            >
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                A Results <br />
                <span className="italic underline decoration-white/50 underline-offset-8">Driven</span> Approach
              </h2>
              <div className="space-y-8 text-white text-xl md:text-2xl font-serif italic leading-relaxed opacity-90">
                <p>“We provide comprehensive sales training and our innovative commission-based pay structure is designed to drive results.”</p>
                <p>“This means that our shot-sellers are not just servers, but motivated sales professionals incentivised to sell, ensuring they are as committed to your venue's success as you are.”</p>
              </div>
              <div className="pt-6">
                <div className="h-px w-24 bg-white/30 mb-8" />
                <p className="text-white text-lg font-light leading-relaxed max-w-xl opacity-80">
                  Choose our company for a winning combination of industry expertise, dedicated training, and an unwavering commitment on both your success and the satisfaction of your customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-24 md:py-48 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-tight tracking-tight text-balance">
              Ready to scale your <br /> revenue with the <span className="italic underline decoration-white/50 underline-offset-8">elite?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link 
                href="/contact"
                className="bg-white text-slate-900 px-12 py-6 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                New Booking <ArrowRight size={20} className="text-primary" />
              </Link>
              <Link 
                href="https://effervescent-agency.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-12 py-6 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group"
              >
                Join The Team <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
