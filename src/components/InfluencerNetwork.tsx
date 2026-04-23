import Image from "next/image";

const InfluencerNetwork = () => {
  return (
    <section className="py-20 md:py-32 brand-gradient relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-12 md:mb-20 leading-tight text-center lg:text-left text-balance">
          More Tickets Sold <span className="italic font-light opacity-90 text-[0.7em] block md:inline mt-4 md:mt-0">Using Effervescent’s Influencer Network</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-12 text-center lg:text-left order-2 lg:order-1">

            <div className="space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                At Effervescent, our support goes beyond the venue floor. Through our network of promoters and influencers, we actively help our partners <span className="font-black italic underline decoration-white/30 underline-offset-4">drive awareness, engagement, and ticket sales.</span>
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                With a combined social media reach of <span className="font-black">over 1.5 million across our platforms</span>, we share marketing materials, event announcements, and ticket links to help maximise visibility and attendance.
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                We also capture <span className="font-black italic">live content during events</span>, creating engaging social media posts that are shared across our channels to further promote the venue and atmosphere.
              </p>
              <div className="pt-6 border-t border-white/20">
                <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                  This support is provided <span className="font-black not-italic underline decoration-white/30 underline-offset-8">completely free of charge</span> - because when our partners win, we win too.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Overlapping Stack (Desktop) / Vertical Stack (Mobile) */}
          <div className="relative min-h-[500px] md:h-[650px] flex flex-col items-center lg:block order-1 lg:order-2">
            
            {/* Card 1 - Hostess Service 2 */}
            <div className="relative lg:absolute top-0 right-0 h-[280px] md:h-[350px] w-full max-w-[500px] lg:max-w-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-1 md:rotate-2 transition-all duration-500 hover:scale-[1.03] hover:lg:-translate-y-4 z-20 border-4 border-white/10 mb-8 lg:mb-0">
              <Image
                src="/HostessService2.jpeg"
                alt="Influencer Impact"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Card 2 - Fungala Girl */}
            <div className="relative lg:absolute top-12 md:top-24 left-0 md:left-12 lg:left-12 h-[280px] md:h-[320px] w-[90%] md:w-full max-w-[450px] md:max-w-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 md:-rotate-6 border-4 border-white/30 z-10 transition-all duration-700 hover:scale-[1.03] hover:lg:-translate-y-44 hover:lg:z-30 hover:lg:rotate-0">
              <Image
                src="/fungala-girl.png"
                alt="Event Results"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute left-0 bottom-0 opacity-20 p-8 w-64 h-32 md:w-80 md:h-40 pointer-events-none hidden md:block">
              <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerNetwork;
