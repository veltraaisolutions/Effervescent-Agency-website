"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CorporateDefinition from "@/components/CorporateDefinition";
import CaseStudies from "@/components/CaseStudies";
import HowItWorks from "@/components/HowItWorks";

export default function VenuesPage() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden pt-20 md:pt-32">
      {/* Subtle overlays for depth, allowing global background to shine through */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[#C874E2] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[#C874E2] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Shot Sellers Section (Information for Venues) */}
        <section className="relative pb-16 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Title */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-white text-center mb-12 md:mb-16 tracking-tight"
            >
              What is a Shot-Seller?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 mb-16 md:mb-20">
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
                className="space-y-4 md:space-y-6 text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-lg"
              >
                <p>
                  Shot-sellers ARE a valuable addition to your venue, positively impacting customer experience and bringing revenue to new heights, at no additional cost to yourselves.
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
          <div className="relative w-full h-[350px] md:h-[450px] px-6 md:px-0">
            {/* Main Image - Centered on mobile, anchored left on desktop */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-[90%] md:w-[35%] h-full rounded-[2rem] md:rounded-none md:rounded-tr-[5rem] overflow-hidden shadow-2xl z-10 border border-white/10 group"
            >
              <Image
                src="/tray-girl.jpeg"
                alt="Shot seller at work"
                fill
                className="object-cover object-top md:object-center transition-transform duration-700 group-hover:scale-105"
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
        </section>

        <HowItWorks />
        <CorporateDefinition />
        <CaseStudies />
      </div>
    </div>
  );
}
