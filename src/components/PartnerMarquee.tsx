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
  { name: "Venues Independent", src: "/venues_independent.webp" },
  { name: "Boxpark", src: "/box_park.png" },
];

const PartnerMarquee = () => {
  // Duplicate icons once for seamless loop
  const duplicatedPartners = [...partnersConfig, ...partnersConfig];

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-8 h-8 relative mb-2 opacity-80">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain brightness-0 invert" />
          </div>
          <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Trusted Industry Partners
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-white italic">The World&apos;s Leading Venues</h3>
        </div>
      </div>
      
      <div className="flex whitespace-nowrap relative z-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex gap-20 md:gap-40 items-center py-4 w-fit"
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
    </section>
  );
};

export default PartnerMarquee;
