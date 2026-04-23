"use client";

import { useState } from "react";
import Image from "next/image";

const OtherServices = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-32 brand-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20 items-center">

          {/* Left Column - Content */}
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Other Services: {" "}
              <span className="italic font-light opacity-90 text-[0.8em]">Hostesses & Promoters</span>
            </h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                Effervescent is able to provide all your additional event contractor needs from <span className="font-black italic underline decoration-white/30 underline-offset-4">hostesses & promoters, to festival stewards & VIP guides.</span>
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                We've helped cover big expos for the likes of <span className="font-black">Mike Tyson</span> and provided VIP Hostess & Guides for festivals and private events across the country.
              </p>
            </div>
          </div>

          {/* Right Column - Diamond Corners Triple Stack */}
          <div className="relative h-[650px]">
            {/* Top Right Main Card */}
            <div
              onClick={() => handleCardClick(1)}
              className={`absolute top-0 right-0 lg:-right-32 h-[400px] w-full lg:w-[650px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 cursor-pointer transition-all duration-700 
              ${activeCard === 1 ? "z-50 -translate-y-20 scale-105 shadow-white/30" : "z-10 translate-y-0 hover:-translate-y-8 hover:z-30 hover:shadow-white/10"}`}
            >
              <Image
                src="/HostessService.jpeg"
                alt="VIP Hostess Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            {/* Center Offset Card - Festival Tray */}
            <div
              onClick={() => handleCardClick(2)}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-[300px] w-full max-w-[420px] rounded-[3rem] overflow-hidden shadow-2xl rotate-6 border-4 border-white/30 cursor-pointer transition-all duration-700
              ${activeCard === 2 ? "z-50 -translate-y-[90%] scale-110 shadow-white/30" : "z-20 -translate-y-1/2 hover:scale-105 hover:-translate-y-[55%] hover:z-30"}`}
            >
              <Image
                src="/Promtoers-Services21.png"
                alt="Festival Promoters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Bottom Left Support Card - Fun Gala Girl (Wider) */}
            <div
              onClick={() => handleCardClick(3)}
              className={`absolute bottom-0 left-0 h-[320px] w-full max-w-[500px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-4 border-white/20 cursor-pointer transition-all duration-700
              ${activeCard === 3 ? "z-50 -translate-y-32 scale-105 shadow-white/30" : "z-10 translate-y-0 hover:-translate-y-8 hover:z-30 hover:shadow-white/10"}`}
            >
              <Image
                src="/party-confetti-girl.png"
                alt="Event Atmosphere"
                fill
                className="object-cover transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            {/* Signature Decorator */}
            <div className="absolute -right-8 -bottom-8 opacity-20 p-8 w-80 h-40 pointer-events-none">
              <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Luminous Beam */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-white/[0.02] skew-x-[15deg] translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default OtherServices;
