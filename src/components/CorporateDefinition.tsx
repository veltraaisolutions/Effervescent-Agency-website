"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CorporateDefinition = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Row: Title & Image */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-white tracking-tight z-20"
          >
            Why Effervescent?
          </motion.h2>

          {/* Tilted Image Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            className="w-[280px] h-[350px] md:w-[350px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl absolute top-12 -right-8 md:-top-20 md:right-10 z-10 border-4 border-white/20 group"
          >
            <Image src="/effervescent-definition1.jpeg" alt="Why Effervescent" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-20 mt-40 md:mt-20">

          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {/* Definition Box */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#B47EE5] text-white p-8 md:p-10 rounded-r-[2rem] shadow-xl w-[calc(100%+1.5rem)] md:w-[calc(100%+6rem)] relative -left-6 md:-left-24"
            >
              <h3 className="text-3xl md:text-4xl font-serif mb-1">Effervescent</h3>
              <p className="italic text-white/90 text-lg mb-3 font-serif">Definition:</p>
              <p className="text-lg md:text-xl font-medium leading-snug">
                lively, energetic, and impossible to ignore<br className="hidden md:block" />
                - just like the teams we provide.
              </p>
            </motion.div>

            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="space-y-6 text-white/95 text-lg md:text-xl font-medium leading-relaxed pr-0 md:pr-10"
            >
              <p>
                Effervescent is a leading nightlife sales agency delivering high-performing shot sellers and promotional staff to venues across the <span className="font-bold text-xl">UK, Spain, and Dubai.</span> Our teams are trained sales professionals whose focus is simple: <span className="font-bold text-xl">increase your venue’s revenue.</span>
              </p>
              <p>
                Unlike standard promotional services, Effervescent are <span className="font-bold text-xl">performance-driven and commission-based</span>, meaning they’re fully incentivised to sell and maximise results every shift.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="space-y-8 text-white/95 text-lg md:text-xl font-medium leading-relaxed pt-0 md:pt-32"
          >
            <p>
              We combine <span className="font-bold text-xl">industry-leading sales training with responsible service education</span>, including <span className="font-bold text-xl">Challenge 25 and Drinkaware</span>, ensuring our staff represent both your venue and the wider industry to the highest standard.
            </p>
            <p>
              Trusted by venues <span className="font-bold text-xl">nationwide</span>, from major hospitality groups to independent operators, Effervescent consistently delivers <span className="font-bold text-xl">higher sales, stronger customer engagement, and measurable results.</span>
            </p>
            <p className="font-bold text-xl md:text-2xl mt-8">
              Ready to elevate your events and maximise your sales? <br />
              Choose Effervescent.
            </p>
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

export default CorporateDefinition;
