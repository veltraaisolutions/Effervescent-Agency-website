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
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero Section - Clean SaaS Style */}
      <section className="min-h-[60vh] flex items-center pt-32 pb-20 relative overflow-hidden bg-slate-50">
        {/* Subtle Background Pattern - Dot Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-16 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-black tracking-[0.3em] uppercase">
              Support & Inquiries
            </div>
            <h1 className="text-6xl md:text-9xl font-serif text-slate-900 leading-[0.85] tracking-tighter">
              Get in <br />
              <span className="text-primary italic">Touch.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 font-sans font-light leading-relaxed">
              Ready to transform your venue's revenue? Let's discuss how the <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">Effervescent roster</span> can elevate your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Contact Info */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 italic">Meet Our Management</h2>
                <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-soft group hover:-translate-y-1 transition-all duration-500">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary font-black text-2xl border border-primary/10 shadow-glow">M</div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 mb-1">Maddison</p>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Agency Founder</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <a href="https://wa.me/971585216771" target="_blank" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary transition-all shadow-premium group-hover:scale-110 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-1">WhatsApp / Phone</p>
                    <p className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary">+971 58 521 6771</p>
                  </div>
                </a>

                <a href="mailto:maddison@effervescent.agency" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary transition-all shadow-premium group-hover:scale-110 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Email Inquiry</p>
                    <p className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary truncate">maddison@effervescent.agency</p>
                  </div>
                </a>
              </div>
            </div>

            {/* B2B Inquiry Form */}
            <div className="saas-card p-1 md:p-4">
              <div className="p-8 md:p-16">
                <div className="mb-12">
                  <h3 className="text-3xl font-serif text-slate-900 mb-4">Partner Inquiry</h3>
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
                          className="premium-input"
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
                          className="premium-input"
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
                          className="premium-input"
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
                          className="premium-input"
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
                        className="premium-input resize-none"
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
      </section>
    </div>
  );
}
