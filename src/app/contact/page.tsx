"use client";

import { useState } from "react";
import { MessageSquare, Phone, Mail, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { WEBHOOK_URL } from "@/lib/apply-utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    venueName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "B2B_INQUIRY",
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to send inquiry");

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            {/* Content Side */}
            <div className="space-y-12 order-2 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                  Discuss Your <br />
                  <span className="italic underline decoration-white/30 underline-offset-8">Venue</span> With Us
                </h2>
                <p className="text-xl md:text-2xl text-white/90 font-medium italic max-w-xl leading-relaxed">
                  Join the elite network of venues transforming their guest experience and revenue streams through our premium shot-sales service.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {[
                  { title: "Boost Revenue", desc: "Immediate impact on your bottom line with no upfront costs." },
                  { title: "Pro Talent", desc: "Our sellers are trained professionals, not just staff." },
                  { title: "Global Scale", desc: "Proven success across the UK, Spain, and Dubai." },
                  { title: "Fully Managed", desc: "We handle recruitment, training, and management." }
                ].map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-6 border-t border-white/20">
                <div className="flex -space-x-3">
                  {[
                    { name: "XOYO", src: "/xoyo.png" },
                    { name: "Pop World", src: "/pop-world.png" },
                    { name: "The Nest", src: "/the-nest.png" }
                  ].map((partner) => (
                    <div key={partner.name} className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md overflow-hidden relative p-2">
                      <Image 
                        src={partner.src} 
                        alt={partner.name} 
                        fill 
                        className="object-contain p-2 brightness-0 invert" 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white/80 text-sm font-medium">
                  Trusted by <span className="text-white font-bold">400+ venues</span> worldwide.
                </p>
              </div>
            </div>

            {/* B2B Inquiry Form */}
            <div className="bg-white rounded-[3rem] p-1 md:p-4 shadow-2xl relative z-10 overflow-hidden order-1 lg:order-2">
              <div className="p-8 md:p-16">
                <div className="mb-12">
                  <h3 className="text-3xl font-serif text-slate-900 mb-4">Venue Inquiry</h3>
                  <div className="w-16 h-1 bg-primary rounded-full"></div>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto border border-green-100">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Inquiry Sent!</h4>
                    <p className="text-slate-500 font-light">Thank you for reaching out. Maddison will be in touch shortly to discuss your venue's growth.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-black uppercase tracking-widest text-xs hover:underline pt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="premium-input bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Venue Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Venue"
                          value={formData.venueName}
                          onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                          className="premium-input bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="email@venue.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="premium-input bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Phone</label>
                        <input
                          required
                          type="tel"
                          placeholder="Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="premium-input bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Project Details</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your venue's needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="premium-input bg-slate-50 border-slate-100 text-slate-900 placeholder:text-slate-400 resize-none"
                      ></textarea>
                    </div>

                    {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-slate-900 py-6 rounded-2xl text-white font-black text-lg shadow-premium hover:bg-slate-800 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {submitting ? (
                        <>Processing... <Loader2 className="animate-spin" size={20} /></>
                      ) : (
                        <>Send Inquiry <ArrowRight size={20} /></>
                      )}
                    </button>
                  </form>
                )}
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
