import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Footer from "@/components/Footer";
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-900">
        {/* Full-Screen Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/tray-girl.jpeg"
            alt="Effervescent Agency Experience"
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="100vw"
          />
          {/* Brand & Readability Overlays - Lighter Version */}
          <div className="absolute inset-0 bg-slate-900/20"></div>
          <div className="absolute inset-0 brand-gradient opacity-45"></div>
        </div>

        {/* Animated Orbs/Signatures */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse z-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse delay-700 z-1"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-8">
            <Star size={16} fill="white" /> Global Nightlife Leaders
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="h-32 md:h-64 w-full max-w-[1000px] relative mb-4">
              <Image
                src="/hero-section1.png"
                alt="Effervescent"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </div>

          <p className="text-xl md:text-3xl text-white font-medium mb-12 max-w-3xl mx-auto">
            Transforming Venues and Events Around the Globe
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Partner With Us <ArrowRight size={22} className="text-primary" />
            </Link>
            <Link
              href="/apply"
              className="bg-slate-900 text-white px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 border border-white/10"
            >
              Join The Roster
            </Link>
          </div>
        </div>
      </section>

      <Milestones />
      <Partners />
      <ServiceHighlights />

      {/* Final CTA Banner */}
      <section className="py-32 brand-gradient relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase">
                <div className="w-6 h-4 relative">
                  <Image src="/effervescent-sign1.png" alt="Icon" fill className="object-contain brightness-0 invert" />
                </div> Take the next step
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1]">
                Ready to <span className="italic underline decoration-white/30 underline-offset-8">transform</span> <br /> your venue?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 font-medium italic max-w-xl leading-relaxed">
                Join the elite network of venues and shot-sellers redefining the global nightlife experience.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105 hover:shadow-white/20 flex items-center gap-2"
                >
                  Partner With Us <ArrowRight size={22} className="text-primary" />
                </Link>
                <Link
                  href="/apply"
                  className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all hover:scale-105"
                >
                  Join The Roster
                </Link>
              </div>
            </div>

            {/* Image Side - Pushed to Right Most Corner */}
            <div className="relative group lg:justify-self-end w-full max-w-[650px]">
              <div className="relative h-[350px] md:h-[450px] w-full rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-3xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-white/10">
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
              <div className="absolute -bottom-10 -right-10 opacity-30 animate-pulse hidden md:block w-64 h-32">
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
