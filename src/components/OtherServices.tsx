"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OtherServices = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-[500px] md:min-h-[700px] flex flex-col">

        {/* Top Row: Text + Top Right Image */}
        <div className="flex flex-col md:flex-row justify-between w-full relative z-20">
          {/* Text Content */}
          <div className="w-full md:w-[48%] mb-12 md:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-2"
            >
              Other Services:
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[5.5rem] font-serif text-white tracking-tight leading-[1.1] mb-8"
            >
              Hostesses & Promoters
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/95 text-lg md:text-xl font-medium leading-relaxed"
            >
              Effervescent is able to provide all your additional event staffing needs from <span className="font-bold">hostesses & promoters</span>, to <span className="font-bold">festival stewards & VIP guides</span>. We’ve helped cover big expos for the likes of <span className="font-bold">Mike Tyson</span> and provided VIP Hostess & Guides for festivals and private events across the country.
            </motion.p>
          </div>

          {/* Top Right Image Container - Anchored to the right screen edge */}
          <div className="hidden md:block absolute top-0 right-[-15vw] w-[calc(40%+15vw)] h-[380px] group overflow-hidden rounded-tl-[4rem] rounded-bl-[2rem] shadow-3xl">
            <Image
              src="/HostessService.jpeg"
              alt="VIP Guides"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Row Images - Mobile Optimized & Touch to End */}
        <div className="relative w-full h-[350px] md:h-[450px] mt-8 md:mt-10">
          {/* Bottom Left Image - Anchored to the left screen edge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-[-15vw] w-[80%] md:w-[calc(35%+15vw)] h-[250px] md:h-[380px] z-10 group overflow-hidden rounded-tr-[3rem] md:rounded-tr-[5rem] shadow-2xl"
          >
            <Image
              src="/party-confetti-girl.png"
              alt="Party"
              fill
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          {/* Middle Tilted Image - Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block absolute bottom-[20%] md:bottom-[15%] right-0 md:left-[30%] w-[65%] md:w-[45%] h-[220px] md:h-[300px] z-20 transform -rotate-[5deg] md:-rotate-[10deg] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-3xl border-[6px] border-white/20 group"
          >
            <Image src="/shot-seller-in-party.jpeg" alt="Hostess" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </div>

      </div>

      {/* Decorative Star - Bottom Right */}
      <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-40">
        <div className="w-20 h-20 relative">
          <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
