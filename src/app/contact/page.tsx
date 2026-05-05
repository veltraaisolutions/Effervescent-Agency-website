"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  venueInquirySchema,
  venuePositionOptions,
  type VenueInquiry,
  type VenueInquiryInput,
} from "@/lib/validations/venue";

type VenueInquiryFormState = Omit<VenueInquiryInput, "position"> & {
  position: VenueInquiry["position"] | "";
};
type VenueFieldErrors = Partial<Record<keyof VenueInquiryFormState, string>>;

const B = "#FDB8D7";

const onFocusBrand = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) => {
  e.currentTarget.style.boxShadow = `0 0 0 2px ${B}55`;
  e.currentTarget.style.borderColor = B;
};

const onBlurBrand = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) => {
  e.currentTarget.style.boxShadow = "";
  e.currentTarget.style.borderColor = "";
};

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
      {children}
      {required && (
        <span
          style={{ color: B }}
          className="ml-0.5"
        >
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
      <AlertCircle className="w-3 h-3 flex-shrink-0" />
      {message}
    </p>
  );
}

function TextInput({
  value,
  onChange,
  placeholder = "",
  type = "text",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      required
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocusBrand}
      onBlur={onBlurBrand}
      style={{ colorScheme: "light" }}
      className="w-full px-3 py-2.5 border border-[#FDB8D7] rounded-xl text-sm bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:opacity-50 transition-all"
    />
  );
}

function TextareaInput({
  value,
  onChange,
  placeholder = "",
  rows = 4,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      required
      value={value}
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocusBrand}
      onBlur={onBlurBrand}
      className="w-full px-3 py-2.5 border border-[#FDB8D7] rounded-xl text-sm bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none resize-none transition-all"
    />
  );
}

function SelectInput({
  options,
  value,
  onChange,
  placeholder = "Select...",
}: {
  options: readonly string[];
  value: string;
  onChange: (value: VenueInquiry["position"]) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value as VenueInquiry["position"])}
        onFocus={onFocusBrand}
        onBlur={onBlurBrand}
        style={{ colorScheme: "light" }}
        className="w-full appearance-none px-3 py-2.5 border border-[#FDB8D7] rounded-xl text-sm bg-slate-50 text-slate-900 focus:outline-none transition-all"
      >
        <option value="" className="text-slate-400">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-slate-900 bg-white">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<VenueInquiryFormState>({
    name: "",
    email: "",
    phone: "",
    position: "",
    venueName: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<VenueFieldErrors>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ─── Optimization & Sanitization ──────────────────────────────────────────
    const sanitizedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.replace(/[\s\-\(\)]/g, ""),
      venueName: formData.venueName.trim(),
      message: formData.message.trim(),
    };

    const parsed = venueInquirySchema.safeParse(sanitizedData);

    if (!parsed.success) {
      const nextErrors = Object.fromEntries(
        Object.entries(parsed.error.flatten().fieldErrors).map(([key, value]) => [
          key,
          value?.[0] ?? "",
        ]),
      ) as VenueFieldErrors;

      setFieldErrors(nextErrors);
      setError("Please check the highlighted fields.");
      return;
    }

    setSubmitting(true);
    setError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/venue-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        if (result?.fieldErrors) {
          const nextErrors = Object.fromEntries(
            Object.entries(result.fieldErrors).map(([key, value]) => [
              key,
              Array.isArray(value) ? value[0] ?? "" : "",
            ]),
          ) as VenueFieldErrors;

          setFieldErrors(nextErrors);
        }

        throw new Error(result?.error ?? "Failed to send inquiry");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        venueName: "",
        message: "",
      });
    } catch {
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
            <div className="relative z-10 order-1 lg:order-2">
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-2xl">
                <div
                  className="px-6 py-5"
                  style={{ background: "linear-gradient(135deg, #ffffff, #fff1f7)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#be185d" }}
                  >
                    Venue enquiry
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#0f172a" }}
                  >
                    Discuss your venue with us
                  </h3>
                </div>

                {submitted ? (
                  <div className="text-center px-6 py-12 space-y-6">
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Inquiry Sent!</h4>
                    <p className="text-slate-500 font-light">Thank you for reaching out. Maddison will be in touch shortly to discuss your venue's growth.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold text-sm hover:underline pt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel required>Name</FieldLabel>
                        <TextInput
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={(value) => setFormData({ ...formData, name: value })}
                        />
                        <FieldError message={fieldErrors.name} />
                      </div>
                      <div>
                        <FieldLabel required>Email</FieldLabel>
                        <TextInput
                          type="email"
                          placeholder="email@venue.com"
                          value={formData.email}
                          onChange={(value) => setFormData({ ...formData, email: value })}
                        />
                        <FieldError message={fieldErrors.email} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <FieldLabel required>Phone</FieldLabel>
                        <TextInput
                          type="tel"
                          placeholder="+44 7700 000000"
                          value={formData.phone}
                          onChange={(value) => setFormData({ ...formData, phone: value })}
                        />
                        <FieldError message={fieldErrors.phone} />
                      </div>
                      <div>
                        <FieldLabel required>Position</FieldLabel>
                        <SelectInput
                          options={venuePositionOptions}
                          placeholder="Choose your position"
                          value={formData.position}
                          onChange={(value) => setFormData({ ...formData, position: value })}
                        />
                        <FieldError message={fieldErrors.position} />
                      </div>
                    </div>
                    <div>
                      <FieldLabel required>Venue or brand name</FieldLabel>
                      <TextInput
                        placeholder="Venue or brand"
                        value={formData.venueName}
                        onChange={(value) => setFormData({ ...formData, venueName: value })}
                      />
                      <FieldError message={fieldErrors.venueName} />
                    </div>
                    <div>
                      <FieldLabel required>Enquiry info</FieldLabel>
                      <TextareaInput
                        rows={5}
                        placeholder="Tell us about your enquiry..."
                        value={formData.message}
                        onChange={(value) => setFormData({ ...formData, message: value })}
                      />
                      <FieldError message={fieldErrors.message} />
                    </div>

                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600 font-medium">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{ backgroundColor: B, color: "#1a0a10" }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:opacity-90"
                    >
                      {submitting ? (
                        <>Processing... <Loader2 className="animate-spin" size={16} /></>
                      ) : (
                        <>Send Inquiry <ArrowRight size={16} /></>
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
