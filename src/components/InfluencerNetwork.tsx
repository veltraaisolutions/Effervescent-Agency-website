import Image from "next/image";

const InfluencerNetwork = () => {
  return (
    <section className="py-32 brand-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-20 leading-tight">
          More Tickets Sold <span className="italic font-light opacity-90 text-[0.7em] block md:inline mt-4 md:mt-0">Using Effervescent’s Influencer Network</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">

            <div className="space-y-8 max-w-xl">
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                At Effervescent, our support goes beyond the venue floor. Through our network of promoters and influencers, we actively help our partners <span className="font-black italic underline decoration-white/30 underline-offset-4">drive awareness, engagement, and ticket sales.</span>
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                With a combined social media reach of <span className="font-black">over 1.5 million across our platforms</span>, we share marketing materials, event announcements, and ticket links to help maximise visibility and attendance.
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                We also capture <span className="font-black italic">live content during events</span>, creating engaging social media posts that are shared across our channels to further promote the venue and atmosphere.
              </p>
              <div className="pt-6 border-t border-white/20">
                <p className="text-2xl font-serif italic text-white leading-relaxed">
                  This support is provided <span className="font-black not-italic underline decoration-white/30 underline-offset-8">completely free of charge</span> - because when our partners win, we win too.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] group mr-4">
            {/* Influencer Stack Card 1 */}
            <div className="absolute top-0 right-0 h-[450px] w-full max-w-[420px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-all duration-500 group-hover:-translate-y-4 z-10 border-4 border-white/10">
              <Image
                src="/tray-girl.jpeg"
                alt="Influencer Impact"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Influencer Stack Card 2 */}
            <div className="absolute top-32 right-12 md:right-32 h-[400px] w-full max-w-[380px] rounded-[3rem] overflow-hidden shadow-2xl -rotate-6 border-4 border-white/30 z-0 transition-all duration-700 group-hover:-translate-y-44 group-hover:z-20">
              <Image
                src="/boy-shot1.jpeg"
                alt="Live Content Capture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute left-0 bottom-0 opacity-20 p-8 w-80 h-40">
              <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerNetwork;
