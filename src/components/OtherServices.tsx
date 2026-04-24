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
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-[850px] flex flex-col">

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

          {/* Top Right Image Container */}
          <div className="hidden md:block absolute top-0 right-[-5%] w-[50%] h-[400px]">
            <Image src="/HostessService.jpeg" alt="VIP Guides" fill className="object-cover rounded-tl-[3rem] rounded-bl-[1rem] shadow-2xl" />
          </div>
        </div>

        {/* Bottom Row Images */}
        <div className="relative w-full h-[500px] md:h-[450px] mt-10 md:mt-24">
          {/* Bottom Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-[-5%] w-[85%] md:w-[50%] h-[350px] md:h-[400px] z-10"
          >
            <Image src="/party-confetti-girl.png" alt="Party" fill className="object-cover rounded-tr-[3rem] rounded-br-[1rem] shadow-2xl" />
          </motion.div>

          {/* Middle Tilted Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-[40%] md:bottom-[25%] left-[15%] md:left-[45%] w-[75%] md:w-[45%] h-[280px] md:h-[380px] z-20 transform -rotate-[10deg] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white/20"
          >
            <Image src="/shot-seller-in-party.jpeg" alt="Hostess" fill className="object-cover" />
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
