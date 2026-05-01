"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ArrowRight, Globe, Users, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

      {/* Hero Section — matches global background */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Decorative star */}
        <div className="absolute bottom-8 right-12 opacity-40 scale-100 z-30">
          <div className="w-16 h-16 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Badge — 5 Star Rated */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20 mb-6 mx-auto w-fit"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-white text-white" />
                ))}
              </div>
              <div className="h-4 w-px bg-white/20 hidden md:block" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white text-center md:text-left leading-relaxed">
              5/5 BY 400+ VENUES <span className="mx-1 md:mx-2 opacity-30">•</span> Shot-Sellers <span className="mx-1 md:mx-2 opacity-30">•</span> Hostesses <span className="mx-1 md:mx-2 opacity-30">•</span> Entertainment
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-8xl font-serif text-white italic tracking-tight mb-4"
          >
            FAQs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl font-medium italic max-w-xl mx-auto"
          >
            Partnering with Effervescent — answered.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-lg md:text-xl font-serif transition-colors ${activeIndex === index
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                      }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeIndex === index
                        ? "bg-white text-primary border-white"
                        : "border-white/10 text-white/60 group-hover:border-white group-hover:text-white"
                      }`}
                  >
                    {activeIndex === index ? <Minus size={14} /> : <Plus size={14} />}
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
                      <div className="pb-6 pr-8">
                        <p className="text-white/80 text-base leading-relaxed md:text-lg font-medium">
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

      {/* CTA / Contact Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Decorative star */}
        <div className="absolute bottom-8 right-12 opacity-60 scale-100 z-30">
          <div className="w-16 h-16 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left — content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Still got <br />
                  <span className="italic underline decoration-white/30 underline-offset-8">
                    questions?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-xl leading-relaxed">
                  Use the contact form and a member of our team will be happy to help!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-white">
                    <Globe size={18} className="opacity-70" />
                    <h4 className="font-black uppercase tracking-widest text-[10px]">Global Coverage</h4>
                  </div>
                  <p className="text-white/60 text-[10px] leading-relaxed">UK • Spain • Dubai</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-white">
                    <Users size={18} className="opacity-70" />
                    <h4 className="font-black uppercase tracking-widest text-[10px]">Trusted By</h4>
                  </div>
                  <p className="text-white/60 text-[10px] leading-relaxed">400+ Venues Worldwide</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-white text-slate-900 px-8 py-4 rounded-full text-base font-black shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get in Touch <ArrowRight size={18} className="text-primary" />
                </Link>
              </div>
            </div>

            {/* Right — white card form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-1 md:p-2 shadow-2xl relative z-10 overflow-hidden order-1 lg:order-2"
            >
              <div className="p-6 md:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2">Send a Message</h3>
                  <div className="w-12 h-0.5 bg-primary rounded-full" />
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="premium-input text-sm py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="premium-input text-sm py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <select className="premium-input appearance-none cursor-pointer text-sm py-3">
                        <option>Instagram</option>
                        <option>LinkedIn</option>
                        <option>Referral</option>
                        <option>Search Engine</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what's on your mind..."
                      className="premium-input resize-none text-sm py-3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 py-4 rounded-xl text-white font-black text-base shadow-premium hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={18} />
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
