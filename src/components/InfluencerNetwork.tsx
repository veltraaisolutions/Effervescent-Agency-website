import Image from "next/image";

const InfluencerNetwork = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-10 dot-grid mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center lg:text-left space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Amplification</span>
          <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-none">
            Exponential <br />
            <span className="text-primary italic">Reach.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8 max-w-xl">
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                At Effervescent, our support goes beyond the venue floor. Through our network of promoters and influencers, we actively help our partners <span className="text-white font-medium italic underline decoration-primary underline-offset-8">drive awareness and ticket sales.</span>
              </p>
              
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl group hover:bg-white/10 transition-all duration-500">
                <p className="text-4xl md:text-6xl font-black text-primary mb-2">7.65M+</p>
                <p className="text-white font-black uppercase tracking-widest text-xs opacity-60">Combined Social Reach</p>
              </div>

              <p className="text-lg text-white/60 leading-relaxed font-light">
                We capture live content during events, creating engaging social media posts that are shared across our channels to further promote the venue and atmosphere — <span className="text-white font-bold italic">completely free of charge.</span>
              </p>
            </div>
          </div>

          {/* Right Column - Image Stack */}
          <div className="relative h-[500px] md:h-[650px] group">
            {/* Main Card */}
            <div className="absolute top-0 right-0 h-[400px] md:h-[500px] w-full max-w-[500px] rounded-[3.5rem] overflow-hidden shadow-premium z-20 border-[12px] border-white/5 transition-all duration-700 hover:scale-[1.02]">
              <Image
                src="/HostessService2.jpeg"
                alt="Influencer Impact"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>

            {/* Secondary Tilted Card */}
            <div className="absolute bottom-0 left-0 h-[350px] md:h-[450px] w-full max-w-[400px] rounded-[3rem] overflow-hidden shadow-2xl -rotate-6 border-[10px] border-white/10 z-10 transition-all duration-1000 group-hover:rotate-0 group-hover:translate-x-4">
              <Image
                src="/fungala-girl.png"
                alt="Event Results"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerNetwork;
