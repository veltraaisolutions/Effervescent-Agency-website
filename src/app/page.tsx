"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";
import Milestones from "@/components/Milestones";
import Partners from "@/components/Partners";
import ServiceHighlights from "@/components/ServiceHighlights";
import CaseStudies from "@/components/CaseStudies";
import InfluencerNetwork from "@/components/InfluencerNetwork";
import CorporateDefinition from "@/components/CorporateDefinition";
import Testimonial from "@/components/Testimonial";
import HowItWorks from "@/components/HowItWorks";
import OtherServices from "@/components/OtherServices";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Modern SaaS-Style Hero Section - Exact Design Layout */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
        {/* Subtle Background Pattern - Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column: Content */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-black tracking-[0.3em] uppercase">
                <Star size={12} fill="currentColor" /> Global Nightlife Leaders
              </div>

              <div className="relative w-full max-w-[500px] h-32 md:h-48 mb-8">
                <Image
                  src="/effervescent-sign1.png"
                  alt="Effervescent"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              <p className="text-xl md:text-2xl text-slate-500 font-sans font-light max-w-2xl leading-relaxed">
                Transforming <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">venues</span> and <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">events</span> with the world’s most elite hospitality sales roster.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-[0_20px_50px_rgba(253,184,215,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Partner With Us <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/apply"
                  className="bg-slate-950 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-3"
                >
                  Become a Shot-Seller <ArrowRight size={20} />
                </Link>
              </div>

              {/* Decorative Brand Note */}
              <div className="hidden md:block pl-4">
                <p className="text-primary font-serif italic text-sm border-l-2 border-primary/20 pl-4 py-1">
                  Building Enterprise Growth: <br />
                  An Efficient Blueprint
                </p>
              </div>
            </motion.div>

            {/* Right Column: Image with Floating Elements */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-8 border-white">
                <Image
                  src="/tray-girl.jpeg"
                  alt="Effervescent Experience"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stat Card 1: Top Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:right-0 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-slate-100 z-20 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                    <Image src="/logo1.jpeg" alt="" fill className="object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">EA</div>
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900 leading-none">7.65m+</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Global Reach</p>
                </div>
              </motion.div>

              {/* Floating Tag 2: Bottom Left */}
              <div className="absolute bottom-10 -left-6 md:left-10 space-y-3 z-20">
                <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-xl border border-white/50 text-slate-900 text-xs font-black">
                  Built to scale with your needs
                </div>
                <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-xl border border-white/50 text-slate-900 text-xs font-black translate-x-4">
                  Affordable & scalable plans
                </div>
                <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-xl border border-white/50 text-slate-900 text-xs font-black translate-x-8">
                  Plans that fit every stage
                </div>
              </div>

              {/* Decorative Greenish Icon (Matching the image's vibe) */}
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-[#b5ff3d] rounded-2xl flex items-center justify-center shadow-xl border-4 border-white z-20 -rotate-12">
                <Zap size={24} className="text-slate-900" fill="currentColor" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Milestones />
      <Partners />
      {/* Final CTA Banner */}
      <section className="py-20 md:py-32 brand-gradient relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/party-confetti-girl.png"
            alt="Success Background"
            fill
            className="object-cover opacity-10 mix-blend-overlay"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
          {/* Decorative Dot Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content Side */}
            <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase mx-auto lg:mx-0">
                <div className="w-6 h-4 relative">
                  <Image src="/effervescent-sign1.png" alt="Icon" fill className="object-contain brightness-0 invert" />
                </div> Take the next step
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] text-balance">
                Ready to <span className="italic underline decoration-white/50 underline-offset-8">transform</span> <br className="hidden md:block" /> your venue?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 font-medium italic max-w-xl leading-relaxed mx-auto lg:mx-0">
                Join the elite network of venues and shot-sellers redefining the global nightlife experience.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-6 pt-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 hover:shadow-white/20 flex items-center justify-center gap-2"
                >
                  Partner With Us <ArrowRight size={22} className="text-primary" />
                </Link>
                <Link
                  href="/apply"
                  className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 text-center"
                >
                  Become a Shot-Seller
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative group lg:justify-self-end w-full max-w-[650px] mx-auto lg:mx-0 order-1 lg:order-2">
              <div className="relative h-[300px] md:h-[450px] w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-3xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-white/10">
                <Image
                  src="/Promtoers-Services.jpeg"
                  alt="Effervescent Promoters"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Decorative Floating Signature */}
              <div className="absolute -bottom-10 -right-10 opacity-30 animate-pulse hidden lg:block w-64 h-32">
                <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
              </div>
            </div>
          </div>
        </div>

        {/* Luminous Glow Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent opacity-50"></div>
      </section>
    </div>
  );
}

