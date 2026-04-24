"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Check } from "lucide-react";

export function SuccessScreen() {
  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FDb8D7", "#ffffff"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FDb8D7", "#ffffff"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="bg-white py-20 px-10 rounded-[3rem] text-center shadow-2xl border border-slate-100 max-w-2xl mx-auto">
      <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
        <Check size={48} strokeWidth={3} />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
        Application <span className="italic">Received!</span>
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
        Thanks for applying! Our team is reviewing your details. We'll be in
        touch via WhatsApp or Email within 24-48 hours.
      </p>
      <div className="mt-12 h-1 w-20 bg-slate-100 mx-auto rounded-full"></div>
    </div>
  );
}
