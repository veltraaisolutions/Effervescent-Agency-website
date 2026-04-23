"use client";

import { useState } from "react";
import Image from "next/image";

const OtherServices = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 brand-gradient relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight text-balance">
              Other Services: {" "}
              <span className="italic font-light opacity-90 text-[0.8em] block md:inline mt-2 md:mt-0">Hostesses & Promoters</span>
            </h2>

            <div className="space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                Effervescent is able to provide all your additional event contractor needs from <span className="font-black italic underline decoration-white/30 underline-offset-4">hostesses & promoters, to festival stewards & VIP guides.</span>
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                We've helped cover big expos for the likes of <span className="font-black">Mike Tyson</span> and provided VIP Hostess & Guides for festivals and private events across the country.
              </p>
            </div>
          </div>

          {/* Right Column - Diamond Corners Triple Stack (Desktop) / Vertical Stack (Mobile) */}
          <div className="relative min-h-[500px] md:h-[650px] flex flex-col items-center lg:block">
            
            {/* Card 1 - Hostess Service */}
            <div
              onClick={() => handleCardClick(1)}
              className={`relative lg:absolute lg:top-0 lg:right-0 lg:-right-32 h-[350px] md:h-[400px] w-full max-w-[450px] md:max-w-[500px] lg:w-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 cursor-pointer transition-all duration-700 mb-8 lg:mb-0
              ${activeCard === 1 ? "z-50 lg:-translate-y-20 lg:scale-105 shadow-white/30" : "z-30 lg:hover:z-50 hover:scale-[1.02] lg:hover:-translate-y-8 lg:hover:shadow-white/10"}`}
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

            {/* Card 2 - Promoters Service */}
            <div
              onClick={() => handleCardClick(2)}
              className={`relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 h-[280px] md:h-[300px] w-[95%] max-w-[400px] md:max-w-[450px] lg:w-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-2 lg:rotate-6 border-4 border-white/30 cursor-pointer transition-all duration-700 mb-8 lg:mb-0
              ${activeCard === 2 ? "z-50 lg:-translate-y-[90%] lg:scale-110 shadow-white/30" : "z-20 lg:hover:z-50 hover:scale-[1.02] lg:-translate-y-1/2 lg:hover:scale-105 lg:hover:-translate-y-[55%]"}`}
            >
              <Image
                src="/HostessService2.jpeg"
                alt="Festival Promoters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Card 3 - Event Atmosphere */}
            <div
              onClick={() => handleCardClick(3)}
              className={`relative lg:absolute lg:bottom-0 lg:left-0 h-[250px] md:h-[320px] w-[90%] max-w-[380px] md:max-w-[420px] lg:w-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 lg:rotate-3 border-4 border-white/20 cursor-pointer transition-all duration-700
              ${activeCard === 3 ? "z-50 lg:-translate-y-32 lg:scale-105 shadow-white/30" : "z-10 lg:hover:z-50 hover:scale-[1.02] lg:hover:-translate-y-8 lg:hover:shadow-white/10"}`}
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
            <div className="absolute -right-8 -bottom-8 opacity-20 p-8 w-64 h-32 md:w-80 md:h-40 pointer-events-none hidden md:block">
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
