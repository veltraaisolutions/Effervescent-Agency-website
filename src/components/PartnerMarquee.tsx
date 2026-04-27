"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partnersConfig = [
  { name: "Groovebox", src: "/groverbox1.png" },
  { name: "Live Republic", src: "/live-republic1.png" },
  { name: "Marteson", src: "/marteson1.png" },
  { name: "S&L", src: "/s&l1.png" },
  { name: "Pop World", src: "/pop-world.png" },
  { name: "XOYO", src: "/xoyo.png" },
  { name: "The Nest", src: "/the-nest.png" },
];

const PartnerMarquee = () => {
  // Duplicate icons for seamless loop
  const duplicatedPartners = [...partnersConfig, ...partnersConfig, ...partnersConfig, ...partnersConfig];

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/20" style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      {/* Background Overlay for texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-8 h-8 relative mb-2 opacity-80">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain brightness-0 invert" />
          </div>
          <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Trusted Industry Partners
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-white italic">The World's Leading Venues</h3>
        </div>
      </div>
      
      <div className="flex whitespace-nowrap relative z-10">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-20 md:gap-40 items-center"
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="relative w-32 h-14 md:w-56 md:h-20 group transition-all duration-500">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain brightness-0 invert opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative side fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fbcfe8] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fbcfe8] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default PartnerMarquee;
