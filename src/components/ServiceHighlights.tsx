import Image from "next/image";

const highlights = [
  { title: "Additional revenue, no extra costs" },
  { title: "Improved customer service" },
  { title: "Less pressure on bar operations" },
  { title: "Shorter waiting times" },
  { title: "Interactive & engaging" },
  { title: "Regular customers" },
];

const ServiceHighlights = () => {
  return (
    <>
      {/* Strategic Impact Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Dot Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="mb-20 space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">The Advantage</span>
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 leading-none tracking-tighter">
              Strategic <br />
              <span className="text-primary italic">Impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 items-start">
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(253,184,215,0.5)]"></div>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-[500px] md:h-[650px] group">
                {/* Main Image */}
                <div className="absolute top-0 left-0 h-[450px] md:h-[550px] w-full max-w-[480px] rounded-[3.5rem] overflow-hidden shadow-premium z-20 transition-all duration-700 hover:scale-[1.02] border-[12px] border-white">
                  <Image
                    src="/shot-seller-in-party.jpeg"
                    alt="Shot Seller at Venue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Secondary Tilted Image */}
                <div className="absolute bottom-0 right-0 h-[350px] md:h-[450px] w-full max-w-[400px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-[10px] border-white z-10 transition-all duration-1000 group-hover:rotate-0 group-hover:translate-x-4">
                  <Image
                    src="/Party-efficencyy.jpeg"
                    alt="Party Efficiency"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12 lg:pt-24">
              <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-premium relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-slate-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-2xl text-slate-900 leading-relaxed font-serif italic relative z-10">
                  Shot sellers can be a valuable addition to your venue, <span className="text-primary not-italic font-bold underline decoration-primary/20 underline-offset-8">positively impacting customer experience</span> and bringing revenue to new heights, at no additional cost to yourselves.
                </p>
              </div>

              <div className="bg-slate-900 p-12 md:p-16 rounded-[3.5rem] shadow-2xl hover:-translate-y-2 transition-all duration-500 border-8 border-white">
                <p className="text-2xl text-white leading-relaxed font-bold italic">
                  &ldquo;Beyond that, shot sellers excel at creating an engaging and enjoyable experience for customers, fostering a vibrant and social atmosphere.&rdquo;
                </p>
              </div>

              <div className="flex gap-8 items-center pl-6">
                <div className="w-24 h-px bg-slate-200"></div>
                <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-xs">Transform your venue</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHighlights;
