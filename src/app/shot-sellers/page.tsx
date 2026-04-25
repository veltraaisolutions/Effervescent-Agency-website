"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function ShotSellersPage() {
  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif text-white text-center mb-16 md:mb-24 tracking-tight"
        >
          What is a Shot-Seller?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 mb-20 md:mb-32">
          {/* Left Column - List */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ul className="space-y-4 md:space-y-6">
              {[
                "Additional revenue, no extra costs",
                "Improved customer service",
                "Less pressure on bar staff",
                "Shorter waiting times",
                "Interactive & engaging",
                "Regular customers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-white text-lg md:text-3xl font-bold tracking-tight">
                  <span className="text-white text-xl md:text-2xl mt-1">✽</span> {item}
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
            className="space-y-6 md:space-y-8 text-white/90 text-base md:text-xl font-medium leading-relaxed max-w-lg"
          >
            <p>
              Shot-sellers can be a valuable addition to your venue, positively impacting customer experience and bringing revenue to new heights, at no additional cost to yourselves.
            </p>
            <p>
              Beyond that, Shot-Sellers excel at creating an engaging and enjoyable experience for customers, fostering a vibrant and social atmosphere.
            </p>
            <p>
              Customers also benefit from shorter wait times at the bar, streamlining your service, taking pressure off bar staff and improving customer satisfaction overall.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Image Collage - Compact & Mobile Optimized */}
      <div className="relative w-full h-[350px] md:h-[450px] mt-10">
        {/* Left Image - More visible on mobile */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[60%] md:w-[35%] h-full rounded-tr-[3rem] md:rounded-tr-[5rem] overflow-hidden shadow-2xl z-10 border-r border-white/10 group"
        >
          <Image
            src="/tray-girl.jpeg"
            alt="Shot seller at work"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Right Overlapping Image - Hidden on mobile, visible on desktop */}
        <motion.div
          initial={{ y: 60, opacity: 0, rotate: 0 }}
          whileInView={{ y: 0, opacity: 1, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block absolute bottom-6 md:bottom-12 right-0 md:left-[25%] w-[50%] md:w-[30%] h-[80%] md:h-[90%] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-3xl transform rotate-[4deg] md:rotate-[8deg] border-4 border-white/20 z-20 group"
        >
          <Image
            src="/tray-girl2.jpeg"
            alt="Shot seller serving"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
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
