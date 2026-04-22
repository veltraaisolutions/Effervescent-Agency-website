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
      {/* Faded Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      {/* What Can a Shot Seller Do for Me? */}
      <section className="py-20 brand-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-16 leading-tight">
            What Can a <span className="italic underline decoration-white/30 underline-offset-8">Shot Seller</span> Do for Me?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-start">
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-5 w-10 relative flex-shrink-0 opacity-100 invert brightness-0">
                      <Image
                        src="/effervescent-sign1.png"
                        alt="Signature Bullet"
                        fill
                        className="object-contain"
                        sizes="50px"
                      />
                    </div>
                    <p className="text-xl font-medium text-white italic">{item.title}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-[450px] md:h-[500px] group mt-8">
                <div className="absolute top-0 left-0 h-[350px] md:h-[400px] w-[85%] md:w-full max-w-[450px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-all duration-500 group-hover:-translate-y-4 z-10 border-4 border-white/10">
                  <Image
                    src="/shot-seller-in-party.jpeg"
                    alt="Shot Seller at Venue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xl font-serif italic text-white">Atmosphere</p>
                  </div>
                </div>

                <div className="absolute top-20 left-10 md:top-24 md:left-24 h-[300px] md:h-[350px] w-[85%] md:w-full max-w-[400px] rounded-[3rem] overflow-hidden shadow-2xl -rotate-3 border-4 border-white/20 transition-all duration-700 group-hover:-translate-y-36 z-0 group-hover:z-20">
                  <Image
                    src="/Party-efficencyy.jpeg"
                    alt="Party Efficiency"
                    fill
                    className="object-cover mix-blend-multiply"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-10 shadow-2xl rounded-[3rem] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-xl text-slate-900 leading-relaxed font-bold relative z-10">
                  Shot sellers can be a valuable addition to your venue, <span className="text-primary italic underline decoration-primary/30 underline-offset-8">positively impacting customer experience</span> and bringing revenue to new heights, at no additional cost to yourselves.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-10 shadow-2xl rounded-[3rem] hover:scale-[1.02] transition-all duration-500">
                <p className="text-xl text-slate-900 leading-relaxed font-bold">
                  Beyond that, <span className="text-primary italic">shot sellers</span> excel at creating an engaging and enjoyable experience for customers, fostering a vibrant and social atmosphere.
                </p>
              </div>

              <div className="flex gap-4 items-center pl-4">
                <div className="w-16 h-[2px] bg-primary"></div>
                <p className="text-slate-500 font-medium italic">Transform your nightlife experience today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHighlights;
