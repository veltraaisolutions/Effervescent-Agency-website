"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Clock, Trophy, ArrowRight } from "lucide-react";
import ApplyForm from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - Clean SaaS Style */}
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-black tracking-[0.3em] uppercase mb-10">
              <Zap size={12} fill="currentColor" /> Career Opportunities
            </div>
            <h1 className="text-6xl md:text-9xl font-serif text-white leading-[0.85] tracking-tighter mb-12">
              The <br />
              <span className="italic">Elite</span> Roster.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-sans font-light max-w-2xl leading-relaxed">
              Supplying high-performing sales stars to the world's most exclusive venues. <span className="text-white font-medium italic underline decoration-white/50 underline-offset-8">Bring the energy</span>, we provide the platform.
            </p>
          </motion.div>
        </div>

        {/* Decorative Star - Bottom Right */}
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Info & Form Section */}
      <section className="py-24 md:py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left: Benefits & Social Proof */}
            <div className="lg:col-span-5 space-y-20 lg:sticky lg:top-32">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
                  Why <span className="text-primary italic">Effervescent?</span>
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed max-w-md font-light">
                  We don't just hire staff; we build sales stars. Our infrastructure is designed to help you earn more than any other agency.
                </p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    icon: <Zap className="text-primary" size={24} />,
                    title: "Uncapped Earnings",
                    desc: "Industry-leading commission structure that rewards your drive and sales talent."
                  },
                  {
                    icon: <Clock className="text-primary" size={24} />,
                    title: "Absolute Freedom",
                    desc: "Our custom app lets you claim shifts with a single tap. Work when it suits you."
                  },
                  {
                    icon: <Trophy className="text-primary" size={24} />,
                    title: "A-List Venues",
                    desc: "Work in the most exclusive nightclubs across London, Manchester, and Spain."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-slate-100 shadow-soft">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <div className="p-12 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden shadow-premium group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-2xl font-serif italic mb-10 relative z-10 leading-relaxed">
                  &ldquo;The support and commission structure at Effervescent is unlike anything else in the industry.&rdquo;
                </p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary font-black border border-white/10">SA</div>
                  <div>
                    <p className="font-bold text-lg">Sarah Anderson</p>
                    <p className="text-sm text-white/50 italic font-medium uppercase tracking-widest">Top Seller • Manchester</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Application Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="saas-card p-1 md:p-4"
              >
                <div className="p-8 md:p-16">
                  <div className="mb-12">
                    <h3 className="text-4xl font-serif text-slate-900 mb-4">Apply Now</h3>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                  </div>
                  <ApplyForm />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
