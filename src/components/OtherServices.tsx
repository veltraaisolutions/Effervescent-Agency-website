"use client";

import { useState } from "react";
import Image from "next/image";

const OtherServices = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 items-center">

          {/* Left Column - Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Full Roster</span>
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-tight tracking-tighter">
                Beyond <br />
                <span className="text-primary italic">Shots.</span>
              </h2>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                Effervescent provides your complete event contractor needs, from <span className="text-slate-900 font-medium italic underline decoration-primary underline-offset-8">hostesses & promoters</span> to festival stewards and VIP guides.
              </p>
              
              <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl text-white group hover:-translate-y-1 transition-all duration-500">
                <p className="text-lg leading-relaxed font-light italic">
                  &ldquo;We've helped cover high-profile expos for icons like <span className="text-primary font-bold not-italic">Mike Tyson</span> and provided elite guides for festivals across the UK.&rdquo;
                </p>
              </div>

              <div className="flex gap-8 items-center pt-4">
                <div className="w-16 h-px bg-slate-200"></div>
                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-xs">Elite Event Staffing</p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Stack */}
          <div className="relative h-[500px] md:h-[650px] group">
            
            {/* Card 1 - Hostess Service */}
            <div
              onClick={() => handleCardClick(1)}
              className={`absolute top-0 right-0 h-[350px] md:h-[450px] w-full max-w-[450px] rounded-[3.5rem] overflow-hidden shadow-premium border-[12px] border-white cursor-pointer transition-all duration-700
              ${activeCard === 1 ? "z-50 -translate-y-12 scale-105 shadow-glow" : "z-30 hover:z-50 hover:-translate-y-4 shadow-soft"}`}
            >
              <Image
                src="/HostessService.jpeg"
                alt="VIP Hostess Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-700 ${activeCard === 1 ? "opacity-0" : "opacity-0 group-hover:opacity-10"}`}></div>
            </div>

            {/* Card 2 - Promoters Service */}
            <div
              onClick={() => handleCardClick(2)}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] md:h-[350px] w-[90%] max-w-[400px] rounded-[3rem] overflow-hidden shadow-premium rotate-6 border-[10px] border-white cursor-pointer transition-all duration-700
              ${activeCard === 2 ? "z-50 -translate-y-[65%] scale-105 shadow-glow rotate-0" : "z-20 hover:z-50 hover:scale-105 hover:rotate-0"}`}
            >
              <Image
                src="/HostessService2.jpeg"
                alt="Festival Promoters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-700 ${activeCard === 2 ? "opacity-0" : "opacity-0 group-hover:opacity-10"}`}></div>
            </div>

            {/* Card 3 - Event Atmosphere */}
            <div
              onClick={() => handleCardClick(3)}
              className={`absolute bottom-0 left-0 h-[250px] md:h-[320px] w-[85%] max-w-[350px] rounded-[3rem] overflow-hidden shadow-premium -rotate-3 border-[8px] border-white cursor-pointer transition-all duration-700
              ${activeCard === 3 ? "z-50 -translate-y-12 scale-105 shadow-glow rotate-0" : "z-10 hover:z-50 hover:-translate-y-4 shadow-soft"}`}
            >
              <Image
                src="/party-confetti-girl.png"
                alt="Event Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-700 ${activeCard === 3 ? "opacity-0" : "opacity-0 group-hover:opacity-10"}`}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Luminous Beam */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-900/[0.02] skew-x-[15deg] translate-x-1/2 pointer-events-none"></div>
    </section>
  );
};

export default OtherServices;
