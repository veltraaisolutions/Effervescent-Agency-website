"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Partners from "@/components/Partners";

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
          {/* Trust Badge */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < 4 ? "fill-primary text-primary" : "text-white/30"} />
              ))}
            </div>
            <div className="h-4 w-px bg-white/20" />
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-white">
              4.8/5 <span className="text-white/60">by 400+ venues</span> <span className="mx-2 opacity-30">•</span> Trust Partner
            </p>
          </motion.div>

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

      {/* Impact/Revenue Section - Exact Match Design */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Saturated Brand Pink Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-image-200,000.jpeg"
            alt="Impact"
            fill
            className="object-cover"
          />
          {/* Layer 1: Tint the darks */}
          <div
            className="absolute inset-0 mix-blend-color opacity-100"
            style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}
          />
          {/* Layer 2: Add solid brightness */}
          <div
            className="absolute inset-0 opacity-75"
            style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}
          />
        </div>

        {/* Content - 3 Lines Exact Match */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif text-white font-bold leading-[1.2] tracking-normal"
          >
            Over £2,000,000 generated <br />
            for hospitality businesses through <br />
            our risk free, shot-sales service
          </motion.h2>
        </div>

        {/* Decorative Star - Bottom Right */}
        <div className="absolute bottom-12 right-12 opacity-90 scale-125">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* What Can a Shot-Seller Do for Me? Section */}


      {/* Testimonial Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-[#fbcfe8]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Base Glows */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 20%, #C874E2 0%, transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 80%, #C874E2 0%, transparent 60%)' }} />

          {/* Diagonal Line and Shape Overlay */}
          <div className="absolute -top-[30%] right-[-10%] w-[80%] h-[160%] bg-[#d690eb]/20 transform rotate-[35deg] border-l-2 border-white/30" />

          {/* Dotted Texture Overlay in Top Right */}
          <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />

          {/* Subtle Flare */}
          <div className="absolute top-[20%] right-[30%] w-32 h-32 bg-white/30 blur-[40px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start gap-4 md:gap-10"
          >
            {/* Giant Quote Mark */}
            <span className="text-[10rem] md:text-[14rem] font-serif text-white/30 leading-none -mt-10 md:-mt-16 font-bold tracking-tighter">
              “
            </span>

            {/* Quote Content */}
            <div className="flex flex-col gap-10 mt-4 md:mt-0">
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif text-white italic tracking-wide leading-[1.15]">
                It’s been great, <br className="hidden md:block" />
                unreal difference <br className="hidden md:block" />
                your Shot-Sellers have made <br className="hidden md:block" />
                versus other companies.”
              </h2>

              <div className="text-white font-serif text-xl md:text-2xl mt-2">
                <p className="font-bold opacity-100 tracking-wide">The Cavendish, Sheffield</p>
                <p className="opacity-90 tracking-wide mt-1">Partner since 2023</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Star - Bottom Right */}
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      <Partners />

      {/* Other Services Section */}


      {/* Final CTA Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>

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
                  className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Become a Shot-Seller <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
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

