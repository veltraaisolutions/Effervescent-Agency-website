"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ArrowRight, Globe, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Our shot-sales service is offered on a commission-only basis, ensuring you can access our expertise without any upfront fees. Entertainment and other staffing service packages can be discussed on our introductory call.",
  },
  {
    question: "Is my business suitable?",
    answer:
      "We work with a diverse range of hospitality businesses, from high-end nightclubs and bars to large-scale events and festivals. If you're looking to enhance guest experience and increase revenue, we're likely a great fit.",
  },
  {
    question: "How do I know Effervescent is different?",
    answer:
      "Unlike traditional staffing agencies, we focus on performance-driven sales. Our teams are trained professionals who are incentivised to perform, ensuring high standards of service and measurable results for your venue.",
  },
  {
    question: "What services do Effervescent provide?",
    answer:
      "We specialise in premium shot-sales teams, promotional staff, and through Effervescent Entertainment, a wide variety of experiential services including hostesses, performers, and bespoke entertainment packages.",
  },
  {
    question: "What benefits can a shot-sales team bring to my venue?",
    answer:
      "Beyond the immediate revenue increase, our teams enhance the atmosphere, provide professional customer engagement, and operate with zero financial risk to your venue.",
  },
  {
    question: "How can Effervescent Entertainment help increase my business revenue?",
    answer:
      "By providing high-quality entertainment and professional sales staff, we increase dwell time, encourage higher spend per head, and create memorable moments that drive organic marketing for your business.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="flex flex-col min-h-screen">

      {/* Hero Section — matches global gradient */}
      <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
        {/* Decorative star */}
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Badge — 5 Star Rated */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 md:py-2 rounded-3xl md:rounded-full border border-white/20 mb-8 mx-auto w-fit"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-white text-white" />
                ))}
              </div>              <div className="h-4 w-px bg-white/20 hidden md:block" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white text-center md:text-left leading-relaxed">
              5/5 BY 400+ VENUES <span className="mx-1 md:mx-2 opacity-30">•</span> Short-Sellers <span className="mx-1 md:mx-2 opacity-30">•</span> Hostesses <span className="mx-1 md:mx-2 opacity-30">•</span> Entertainment <span className="mx-1 md:mx-2 opacity-30">•</span> Trust Partner
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-6xl md:text-9xl font-serif text-white italic tracking-tight mb-6"
          >
            FAQs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-xl md:text-2xl font-medium italic max-w-2xl mx-auto"
          >
            Partnering with Effervescent — answered.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion — pink section */}
      <section className="py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="border-b border-white/20"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-xl md:text-2xl font-serif transition-colors ${
                      activeIndex === index
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      activeIndex === index
                        ? "bg-white text-[#C874E2] border-white"
                        : "border-white/20 text-white/60 group-hover:border-white group-hover:text-white"
                    }`}
                  >
                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-12">
                        <p className="text-white/90 text-lg leading-relaxed md:text-xl font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section — full global gradient, white card form */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Decorative star */}
        <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
          <div className="w-20 h-20 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

            {/* Left — content */}
            <div className="space-y-12 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                  Still got <br />
                  <span className="italic underline decoration-white/30 underline-offset-8">
                    questions?
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-white/90 font-medium italic max-w-xl leading-relaxed">
                  Use the contact form and a member of our team will be happy to help!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-white">
                    <Globe size={20} className="opacity-70" />
                    <h4 className="font-black uppercase tracking-widest text-sm">Global Coverage</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">UK • Spain • Dubai</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-white">
                    <Users size={20} className="opacity-70" />
                    <h4 className="font-black uppercase tracking-widest text-sm">Trusted By</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">400+ Venues Worldwide</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-black shadow-2xl transition-all hover:scale-105 hover:shadow-white/20 flex items-center justify-center gap-2"
                >
                  New Booking <ArrowRight size={20} className="text-[#C874E2]" />
                </Link>
              </div>
            </div>

            {/* Right — white card form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-1 md:p-4 shadow-2xl relative z-10 overflow-hidden order-1 lg:order-2"
            >
              <div className="p-8 md:p-16">
                <div className="mb-12">
                  <h3 className="text-3xl font-serif text-slate-900 mb-4">Send a Message</h3>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>

                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="premium-input"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="premium-input"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <select className="premium-input appearance-none cursor-pointer">
                        <option>Instagram</option>
                        <option>LinkedIn</option>
                        <option>Referral</option>
                        <option>Search Engine</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what's on your mind..."
                      className="premium-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 py-6 rounded-2xl text-white font-black text-lg shadow-premium hover:bg-slate-800 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    Send Message <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


    </main>
  );
}
