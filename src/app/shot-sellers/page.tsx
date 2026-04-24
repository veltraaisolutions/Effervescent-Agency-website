"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function ShotSellersPage() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif text-white text-center mb-16 md:mb-24 tracking-tight"
        >
          What Can a Shot-Seller Do for Me?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">
          {/* Left Column - List */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ul className="space-y-4">
              {[
                "Additional revenue, no extra costs",
                "Improved customer service",
                "Less pressure on bar staff",
                "Shorter waiting times",
                "Interactive & engaging",
                "Regular customers"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-white text-xl md:text-3xl font-bold tracking-tight">
                  <span className="text-white text-2xl">✽</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8 text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg"
          >
            <p>
              Shot-sellers can be a valuable addition to your venue, positively impacting customer experience and bringing revenue to new heights, at no additional cost to yourselves.
            </p>
            <p>
              Beyond that, shot girls excel at creating an engaging and enjoyable experience for customers, fostering a vibrant and social atmosphere.
            </p>
            <p>
              Customers also benefit from shorter wait times at the bar, streamlining your service, taking pressure off bar staff and improving customer satisfaction overall.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Image Collage */}
      <div className="relative w-full h-[400px] md:h-[500px] mt-10">
        {/* Left Image */}
        <div className="absolute bottom-0 left-0 w-[60%] md:w-[45%] h-full rounded-tr-[3rem] overflow-hidden shadow-2xl">
          <Image
            src="/tray-girl.jpeg"
            alt="Shot seller at work"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Overlapping Image */}
        <div className="absolute bottom-10 left-[45%] md:left-[35%] w-[50%] md:w-[35%] h-[90%] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-[8deg] border-4 border-white/20">
          <Image
            src="/tray-girl2.jpeg"
            alt="Shot seller serving"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Decorative Star - Bottom Right */}
      <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-20">
        <div className="w-20 h-20 relative">
          <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
