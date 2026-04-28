"use client";
import Image from "next/image";
import { motion } from "framer-motion"
const HowItWorks = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column */}
        <div className="w-full lg:w-[60%] flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-10"
          >
            How it Works:
          </motion.h2>

          <div className="flex flex-col gap-6 md:gap-8 pl-0 md:pl-10">
            {/* Step 1 */}
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-3">Step 1</h3>
              <div className="bg-[#cca3f2] text-white px-6 py-4 rounded-[1.25rem] shadow-xl">
                <p className="text-lg md:text-xl font-serif tracking-wide leading-relaxed">Contractor arrives at the venue bringing all their own equipment.</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-3">Step 2</h3>
              <div className="bg-[#cca3f2] text-white px-6 py-4 rounded-[1.25rem] shadow-xl">
                <p className="text-lg md:text-xl font-serif tracking-wide leading-relaxed">You provide the product to the sellers and they begin to work.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-3">Step 3</h3>
              <div className="bg-[#cca3f2] text-white px-6 py-4 rounded-[1.25rem] shadow-xl">
                <p className="text-lg md:text-xl font-serif tracking-wide leading-relaxed">Instant payment is made to your venue at the end of the night for all the products sold. <span className="italic opacity-90 text-base md:text-lg block mt-1">(This is paid in your preferred payment method)</span></p>
              </div>
            </motion.div>

            {/* Conclusion Text */}
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="text-white/95 text-base md:text-lg font-medium leading-relaxed mt-4 pr-0 md:pr-10"
            >
              Our service is designed to be entirely seamless so you experience a smooth transition of our team into your venue. The sellers are managed by our in-house team who work around the clock to ensure your partnership with Effervescent is effortlessly integrated.
            </motion.p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full lg:w-[40%] relative mt-16 lg:mt-0 flex justify-end lg:justify-end items-start pt-0 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
            viewport={{ once: true }}
            className="w-[85%] md:w-[70%] lg:w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-[8deg] z-20 border-[6px] border-white/20 ml-auto"
          >
            <Image src="/boy-shot.jpeg" alt="How it Works" fill className="object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Star - Bottom Right */}
      <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
        <div className="w-20 h-20 relative">
          <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
