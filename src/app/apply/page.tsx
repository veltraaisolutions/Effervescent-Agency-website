"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Clock, Trophy, ArrowRight } from "lucide-react";
import ApplyForm from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <section className="relative py-24 md:py-48 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[50%] h-full" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Vision & Benefits */}
            <div className="lg:col-span-5 space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 text-white text-sm font-black tracking-[0.3em] uppercase">
                  <Zap size={14} fill="currentColor" className="text-white" /> Join The Elite
                </div>
                <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight tracking-tighter">
                  Start Making <br />
                  <span className="italic underline decoration-white/30 underline-offset-8">£ Today </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 font-medium italic leading-relaxed max-w-md">
                  Step into the spotlight and join the world's leading network of professional sales talent.
                </p>
              </motion.div>

              <div className="space-y-10">
                {[
                  {
                    icon: <Zap size={24} />,
                    title: "Uncapped Revenue",
                    desc: "Industry-leading commission structures that reward high-performance talent."
                  },
                  {
                    icon: <Clock size={24} />,
                    title: "Total Flexibility",
                    desc: "Our dedicated app allows you to choose your schedule with zero commitment."
                  },
                  {
                    icon: <Trophy size={24} />,
                    title: "Elite Venues",
                    desc: "Represent Effervescent at the most exclusive clubs and events globally."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20 text-white group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">{item.title}</h4>
                      <p className="text-white/70 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Quote - White Card Style */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-white shadow-3xl relative overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 text-primary/10 pointer-events-none">
                  <span className="text-9xl font-serif font-bold">&ldquo;</span>
                </div>
                <p className="text-xl font-serif italic text-slate-900 mb-8 relative z-10 leading-relaxed">
                  &ldquo;The support and revenue potential at Effervescent is truly in a league of its own. It's more than a job, it's a career.&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">SA</div>
                  <div>
                    <p className="font-bold text-slate-900">Sarah Anderson</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Elite Talent • Manchester</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <ApplyForm />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Decorative Star - Bottom Right */}
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
