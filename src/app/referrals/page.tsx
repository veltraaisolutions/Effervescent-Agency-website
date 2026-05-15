"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import GetInTouchButton from "@/components/GetInTouchButton";

export default function ReferralsPage() {
  const highlights = [
    "Earn commission-based income with no ceiling",
    "Flexible shifts - work when you want, take time off when you need it",
    "Build unshakeable confidence with every shift",
    "Get paid to party in vibrant, high-energy venues",
    "Create genuine connections and build your personal brand",
    "Work in premium clubs and bars across the UK and beyond"
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-transparent">
      {/* Subtle overlays for depth - Fixed to stay in background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[#C874E2] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[#C874E2] blur-[100px] rounded-full" />
      </div>

      {/* Dotted Texture Overlay - Spans whole page for continuity */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      {/* Hero Section - Significantly reduced padding and height */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center pt-20 md:pt-28">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mb-4"
          >
            <div className="w-4 h-2.5 relative">
              <Image src="/star.png" alt="Icon" fill className="object-contain brightness-0 invert" />
            </div>
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-white">
              Enquiries <span className="mx-2 opacity-30">•</span> Recruitment
            </p>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tighter mb-6 md:mb-8"
          >
            Join the <br /> <span className="italic underline decoration-white/30 underline-offset-8">Effervescent</span> Team
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl w-full text-left">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-500 group shadow-md"
              >
                <span className="text-primary text-xl group-hover:rotate-12 transition-transform duration-500">✱</span>
                <p className="text-white/90 text-[13px] md:text-sm font-medium leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <Link 
              href="/apply"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Apply Now <ArrowRight className="ml-2" size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Details Section - Minimalist padding */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            
            {/* What is a Shot Seller? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1] tracking-tighter">
                  What is a <br />
                  <span className="italic underline decoration-white/30 underline-offset-8">Shot Seller?</span>
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-medium italic leading-relaxed max-w-lg">
                  You&apos;re 18+, confident, energetic, and sales-driven, someone who thrives in busy social settings and genuinely loves meeting new people.
                </p>
              </div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg font-light">
                On the venue floor, you engage with guests to promote shots while driving revenue and creating an unforgettable nightlife experience. You&apos;re motivated by earning serious commissions based on your performance.
              </p>
            </motion.div>

            {/* What You'll Do - Blended and Tighter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-premium overflow-hidden group">
                {/* Subtle gradient glow inside card */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-colors duration-1000" />
                
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 md:mb-8 relative z-10">What You&apos;ll Do</h3>
                
                <div className="space-y-4 md:space-y-6 relative z-10">
                  {[
                    "Read the room. Approach guests and sell.",
                    "Use persuasive techniques and mini games to encourage higher-volume purchases and repeat orders.",
                    "Hit your targets and maximise your commission.",
                    "Build genuine rapport with guests and keep the vibe electric.",
                    "Work alongside venue staff to ensure everything runs smoothly."
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 items-start group/item">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 group-hover/item:border-primary/50 transition-all duration-500 shadow-inner">
                        <CheckCircle2 size={14} className="text-primary" />
                      </div>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final CTA - Completely integrated and compact */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        {/* Background glow with masking for perfect blend */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 100%, #C874E2 0%, transparent 70%)',
            opacity: 0.15,
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
          }}
        />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6 md:space-y-8">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.95] tracking-tighter"
          >
            Ready to start <br /> <span className="italic underline decoration-white/50 underline-offset-8">your journey?</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
          >
            <Link 
              href="/apply"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Start Application
            </Link>
            <GetInTouchButton 
              buttonClassName="bg-white/5 border border-white/20 backdrop-blur-md text-white hover:bg-white/10 px-10 py-4 text-[10px]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
