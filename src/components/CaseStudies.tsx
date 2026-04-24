import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 min-h-[500px]">
      {/* Immersive Background Image - Full Width Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/case-studies-bg.jpeg"
          alt="Case Studies Success Story"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="absolute inset-0 brand-gradient opacity-50"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.05] rotate-12 z-1 w-[400px] h-[300px] hidden md:block">
        <Image src="/effervescent-sign1.png" alt="Signature Decor" fill className="object-contain brightness-0 invert" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white text-center">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-6">Case Studies</h2>
          <p className="text-xl md:text-3xl text-white/90 font-medium max-w-3xl mx-auto text-balance leading-relaxed">
            Record-Breaking Revenue Generated <br className="hidden md:block" />
            for UK Venues in 2025
          </p>
        </div>

        {/* Revenue Cards Grid - Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 md:mb-24">
          {[
            { id: 1, amount: "£166,905", date: "Client since September 2022" },
            { id: 2, amount: "£98,462", date: "Client since August 2022" },
            { id: 3, amount: "£69,607", date: "Client since April 2023", note: "(Seasonal venue, trading 6 months per year only)" }
          ].map((venue) => (
            <div key={venue.id} className="text-center group flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105 w-full max-w-[320px]">
                <div className="bg-slate-900/90 py-3 text-white font-bold text-lg border-b border-white/10">
                  Venue No.{venue.id}
                </div>
                <div className="bg-primary/90 py-6 text-white text-4xl font-black tracking-tight">
                  {venue.amount}
                </div>
              </div>
              <p className="text-white/80 font-medium italic text-sm">{venue.date}</p>
              {venue.note && <p className="text-white/60 text-[10px] mt-1 italic max-w-[200px]">{venue.note}</p>}
            </div>
          ))}
        </div>

        {/* Harmonized Signature Image Stack - Responsive Layout */}
        <div className="relative min-h-[450px] md:h-[500px] max-w-[1200px] mx-auto flex flex-col items-center md:block">
          
          {/* Front Card */}
          <div className="relative md:absolute top-0 left-0 h-[300px] md:h-[380px] w-full max-w-[550px] md:max-w-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-2 md:rotate-3 transition-transform duration-500 z-10 border-2 border-white/10 hover:scale-[1.03] mb-8 md:mb-0">
            <Image
              src="/fungala-girl.png"
              alt="Venue Success"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 600px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-lg md:text-xl font-serif italic text-white">Venue Results</p>
            </div>
          </div>

          {/* Back Overlapping Card */}
          <div className="relative md:absolute top-12 md:top-24 left-0 md:left-[550px] h-[250px] md:h-[300px] w-[90%] md:w-full max-w-[420px] md:max-w-[480px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl -rotate-2 md:-rotate-6 border-4 border-white/20 z-0 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:md:-translate-y-12 hover:md:rotate-0 hover:z-20">
            <Image
              src="/case-study-card-2.png"
              alt="Case Study Detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 480px, 480px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Signature Icon */}
          <div className="absolute right-0 bottom-0 opacity-20 p-8 z-30 w-48 h-24 md:w-64 md:h-32 hidden md:block">
            <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
