import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-primary">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 dot-grid mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center lg:text-left space-y-4">
          <span className="text-white font-black uppercase tracking-[0.4em] text-xs opacity-80">Our Process</span>
          <h2 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none text-balance">
            Seamless <br />
            <span className="italic">Integration.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 items-center">

          {/* Left Column - Steps */}
          <div className="space-y-12">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Arrival",
                  text: "The contractor arrives at the venue bringing all their own professional equipment.",
                },
                {
                  step: "02",
                  title: "Service",
                  text: "You provide the product to the shot-sellers, and they begin their elite service.",
                },
                {
                  step: "03",
                  title: "Settlement",
                  text: "Instant payment is made to your venue for all products sold, via your preferred method.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/15 transition-all group shadow-soft">
                  <div className="flex gap-8 items-start">
                    <span className="text-3xl font-serif italic text-white/40 group-hover:text-white transition-colors">{item.step}</span>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                      <p className="text-lg text-white/80 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-8 items-center pl-6">
              <div className="w-20 h-px bg-white/20"></div>
              <p className="text-white/60 font-black uppercase tracking-[0.4em] text-xs">Zero friction integration</p>
            </div>
          </div>

          {/* Right Column - Portrait Card */}
          <div className="relative group lg:justify-self-end w-full max-w-[480px] mx-auto lg:mx-0">
            <div className="relative w-full rounded-[3.5rem] overflow-hidden shadow-premium rotate-3 group-hover:rotate-0 transition-all duration-700 border-[12px] border-white">
              <Image
                src="/boy-shot.jpeg"
                alt="Efficiency in Action"
                width={2016}
                height={2128}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>

            {/* Quote Bubble */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-premium max-w-[280px] hidden md:block group-hover:-translate-y-4 transition-transform duration-500 border border-slate-100">
              <p className="text-slate-900 font-serif italic text-lg leading-relaxed mb-4">"The integration was flawless. We saw immediate uplift in revenue."</p>
              <p className="text-primary font-black uppercase tracking-widest text-[10px]">Operations Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
