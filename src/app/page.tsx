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
    <div className="flex flex-col bg-white min-h-screen">
      {/* Modern SaaS-Style Hero Section - Final Atmosphere Branding */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        {/* Decorative Floating Star from the image */}
        <div className="absolute bottom-12 right-12 opacity-60">
          <div className="w-24 h-24 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-[1000px] h-64 md:h-96 mb-8"
          >
            <div className="relative w-full h-full">
              <Image
                src="/hero-section1.png"
                alt="Effervescent"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-5xl text-white font-serif italic tracking-tight"
          >
            Transforming Venues and Events Around the Globe
          </motion.p>
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

