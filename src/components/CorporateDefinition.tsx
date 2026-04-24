import Image from "next/image";

const CorporateDefinition = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 items-center">

          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Standard</span>
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 tracking-tighter leading-tight">
                The Elite <br />
                <span className="text-primary italic">Standard.</span>
              </h2>
            </div>

            {/* Definition Card */}
            <div className="bg-slate-50 p-10 rounded-[3rem] shadow-soft max-w-lg border border-slate-100 group hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-3xl font-serif text-slate-900 mb-2">Effervescent</h3>
              <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-6 opacity-60">Definition:</p>
              <p className="text-xl text-slate-500 leading-relaxed font-light italic">
                "Lively, energetic, and impossible to ignore — <span className="text-slate-900 not-italic font-medium">just like the contractors we provide.</span>"
              </p>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                We are a leading hospitality sales agency delivering high-performing <span className="text-slate-900 font-bold underline decoration-primary/20 underline-offset-4">shot-sellers and promotional contractors</span> across the UK, Spain, and Dubai.
              </p>
              
              <div className="flex gap-8 items-center pt-4">
                <div className="w-16 h-px bg-slate-200"></div>
                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-xs uppercase tracking-widest">Industry Leading Performance</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            <div className="relative h-[500px] md:h-[650px] w-full max-w-[500px] lg:ml-auto group rounded-[3.5rem] overflow-hidden shadow-premium border-[12px] border-slate-50 transition-all duration-700 hover:scale-[1.02]">
              <Image
                src="/effervescent-definition1.jpeg"
                alt="The Effervescent Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 90vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            </div>

            <div className="space-y-10 max-w-xl lg:ml-auto">
              <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl text-white group hover:-translate-y-1 transition-all">
                <p className="text-xl leading-relaxed font-light">
                  <span className="text-primary font-bold italic">Fully Trained & Compliant:</span> We combine industry-leading sales training with responsible service education. All shot-sellers are trained in <span className="font-bold underline decoration-primary underline-offset-4">Challenge 25 and Drinkaware</span>.
                </p>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform shadow-glow">!</div>
                <p className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">Choose the Effervescent Standard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateDefinition;
