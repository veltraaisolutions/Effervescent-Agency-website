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
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* B2B Inquiry Form */}
            <div className="bg-white rounded-[3rem] p-1 md:p-4 shadow-2xl relative z-10 overflow-hidden">
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
