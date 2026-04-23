"use client";

import { useState } from "react";
import { MessageSquare, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";
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
    <div className="pt-20 overflow-x-hidden">
      <section className="py-20 md:py-48 bg-slate-900 relative overflow-hidden text-white text-center">
        {/* Immersive Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-image-200,000.jpeg"
            alt="Effervescent Success"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 brand-gradient opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-slate-900/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-serif mb-6 md:mb-8 drop-shadow-2xl text-balance">Get in Touch</h1>
          <p className="text-lg md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg px-2">
            Ready to transform your venue's revenue? Let's discuss how the <span className="text-primary-light italic">Effervescent roster</span> can elevate your business.
          </p>
        </div>
        <div className="absolute top-0 right-0 p-24 opacity-10 w-[300px] h-[200px] md:w-[400px] md:h-[300px] pointer-events-none hidden sm:block">
          <Image src="/effervescent-sign1.png" alt="Signature Decor" fill className="object-contain brightness-0 invert" />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* Contact Info */}
            <div className="space-y-12 md:space-y-16">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8 italic">Meet Our Management</h2>
                <div className="flex items-center gap-5 md:gap-6 p-6 md:p-8 bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 max-w-sm mx-auto lg:mx-0 shadow-sm">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl md:text-2xl flex-shrink-0">M</div>
                  <div className="text-left">
                    <p className="text-xl md:text-2xl font-bold text-slate-900 leading-none mb-1">Maddison</p>
                    <p className="text-primary font-medium italic text-sm md:text-base">Agency Founder</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 md:space-y-10 flex flex-col items-center lg:items-start">
                <a href="https://wa.me/971585216771" target="_blank" className="flex items-center gap-5 md:gap-6 group w-full max-w-md lg:max-w-none">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary transition-all shadow-lg group-hover:scale-110 flex-shrink-0">
                    <Phone size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-400">WhatsApp / Phone</p>
                    <p className="text-lg md:text-2xl font-medium text-slate-900 truncate">+971 58 521 6771</p>
                  </div>
                </a>

                <a href="mailto:maddison@effervescent.agency" className="flex items-center gap-5 md:gap-6 group w-full max-w-md lg:max-w-none">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary transition-all shadow-lg group-hover:scale-110 flex-shrink-0">
                    <Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="overflow-hidden text-left">
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-400">Email</p>
                    <p className="text-lg md:text-2xl font-medium text-slate-900 truncate">maddison@effervescent.agency</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-4 md:pt-6">
                  <a href="https://instagram.com/effervescent.agency" target="_blank" className="w-12 h-12 md:w-14 md:h-14 border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:w-6 md:h-6"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* B2B Inquiry Form */}
            <div className="bg-slate-50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-slate-200 shadow-xl relative overflow-hidden w-full max-w-[600px] mx-auto lg:mx-0">
               <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-8 text-center lg:text-left">B2B Inquiry Form</h3>
                
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Inquiry Sent!</h4>
                    <p className="text-slate-600">Thank you for reaching out. Maddison will be in touch shortly to discuss your venue's needs.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Venue Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="The Grand Palace" 
                          value={formData.venueName}
                          onChange={(e) => setFormData({...formData, venueName: e.target.value})}
                          className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@venue.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm md:text-base" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+44 7000 000000" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm md:text-base" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Message</label>
                      <textarea 
                        required
                        rows={4} 
                        placeholder="How can we help your venue grow?" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white border border-slate-200 px-6 py-4 rounded-3xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none text-sm md:text-base"
                      ></textarea>
                    </div>
                    
                    {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
                    
                    <button 
                      type="submit" 
                      disabled={submitting}
                      className="w-full bg-primary py-5 rounded-full text-white font-black text-lg md:text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {submitting ? (
                        <>Sending... <Loader2 className="animate-spin" size={20} /></>
                      ) : (
                        <>Send Inquiry <MessageSquare size={20} /></>
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
