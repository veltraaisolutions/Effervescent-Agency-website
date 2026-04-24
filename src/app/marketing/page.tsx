'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function MarketingPage() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.15] max-w-4xl"
          >
            More Tickets Sold <br className="hidden md:block" />
            Using Effervescent’s Influencer Network
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-20">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-white/95 text-lg md:text-xl font-medium leading-relaxed max-w-lg"
          >
            <p>
              At Effervescent, our support goes beyond the venue floor. Through our network of promoters and influencers, we actively help our partners <span className="font-bold">drive awareness, engagement, and ticket sales.</span>
            </p>
            <p>
              With a combined <span className="font-bold">social media reach of over 1.5 million across our platforms</span>, we share marketing materials, event announcements, and ticket links to help maximise visibility and attendance.
            </p>
            <p>
              We also capture <span className="font-bold">live content during events</span>, creating engaging social media posts that are shared across our channels to further promote the venue and atmosphere.
            </p>
            <p>
              This support is provided <span className="font-bold">completely free of charge</span> - because when our partners win, we win too.
            </p>
          </motion.div>

          {/* Right Column - Images */}
          <div className="relative w-full h-[450px] md:h-[600px] mt-10 md:mt-0">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[85%] md:w-[80%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <Image src="/shot-seller-in-party.jpeg" alt="Influencer Network" fill className="object-cover" />
            </motion.div>

            {/* Bottom Tilted Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 md:left-4 w-[75%] md:w-[70%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl transform -rotate-[12deg] z-20 border-4 border-white/20"
            >
              <Image src="/Party-efficencyy.jpeg" alt="Live Event Content" fill className="object-cover" />
            </motion.div>
          </div>
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
}
