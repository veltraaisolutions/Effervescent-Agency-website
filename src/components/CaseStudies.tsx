"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden">
      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/case-studies-bg.jpeg"
          alt="Case Studies Background"
          fill
          className="object-cover"
        />
        {/* Layer 1: Tint */}
        <div
          className="absolute inset-0 mix-blend-color opacity-100"
          style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}
        />
        {/* Layer 2: Brightness */}
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-tight drop-shadow-sm"
          >
            Case Studies
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white max-w-5xl tracking-tight leading-[1.1] drop-shadow-sm"
          >
            Record-Breaking Revenue Generated <br className="hidden md:block" />
            for UK Venues in 2025
          </motion.h2>
        </div>

        {/* Data Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32">
          {/* Card 1 */}
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="flex flex-col text-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="bg-[#483c51] py-5">
                <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-wide">Venue No.1</span>
              </div>
              <div className="bg-[#a97bf0] py-5">
                <span className="text-white font-serif text-4xl md:text-5xl italic tracking-tight">£166,905</span>
              </div>
            </div>
            <p className="text-white/95 mt-5 font-serif text-xl md:text-2xl drop-shadow-sm">Client since September 2022</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col text-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="bg-[#483c51] py-5">
                <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-wide">Venue No.2</span>
              </div>
              <div className="bg-[#a97bf0] py-5">
                <span className="text-white font-serif text-4xl md:text-5xl italic tracking-tight">£98,462</span>
              </div>
            </div>
            <p className="text-white/95 mt-5 font-serif text-xl md:text-2xl drop-shadow-sm">Client since August 2022</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col text-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="bg-[#483c51] py-5">
                <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-wide">Venue No.3</span>
              </div>
              <div className="bg-[#a97bf0] py-5">
                <span className="text-white font-serif text-4xl md:text-5xl italic tracking-tight">£69,607</span>
              </div>
            </div>
            <p className="text-white/95 mt-5 font-serif text-xl md:text-2xl flex flex-col drop-shadow-sm">
              <span>Client since April 2023</span>
              <span className="text-sm md:text-base opacity-80 mt-1">(Seasonal venue, trading 6 months per year only)</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Image Collage - Mobile Optimized & Touch to End */}
      <div className="relative w-full h-[450px] md:h-[650px] mt-20">
        {/* Left Image */}
        <div className="absolute bottom-0 left-0 w-[75%] md:w-[45%] h-full rounded-tr-[3.5rem] md:rounded-tr-[6rem] overflow-hidden shadow-3xl z-20 border-r border-white/10 group">
          <Image
            src="/fungala-girl.png"
            alt="Outdoor Event"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* Right Overlapping Image */}
        <div className="absolute bottom-6 md:bottom-12 right-0 md:left-[35%] w-[60%] md:w-[40%] h-[85%] md:h-[95%] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-3xl transform rotate-[3deg] md:rotate-[6deg] border-4 border-white/20 z-10 group">
          <Image
            src="/case-study-card-2.png"
            alt="Event Talent"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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

export default CaseStudies;
