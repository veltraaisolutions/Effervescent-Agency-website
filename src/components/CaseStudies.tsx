import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-900 min-h-[500px]">
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
      <div className="absolute top-0 right-0 p-24 opacity-[0.05] rotate-12 z-1 w-[400px] h-[300px]">
        <Image src="/effervescent-sign1.png" alt="Signature Decor" fill className="object-contain brightness-0 invert" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Case Studies</h2>
          <p className="text-2xl md:text-3xl text-white/90 font-medium max-w-3xl mx-auto">
            Record-Breaking Revenue Generated <br />
            for UK Venues in 2025
          </p>
        </div>

        {/* Revenue Cards Grid - Compact Model */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { id: 1, amount: "£166,905", date: "Client since September 2022" },
            { id: 2, amount: "£98,462", date: "Client since August 2022" },
            { id: 3, amount: "£69,607", date: "Client since April 2023", note: "(Seasonal venue, trading 6 months per year only)" }
          ].map((venue) => (
            <div key={venue.id} className="text-center group">
              <div className="mb-4 overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <div className="bg-slate-900/90 py-2 text-white font-bold text-lg border-b border-white/10">
                  Venue No.{venue.id}
                </div>
                <div className="bg-primary/90 py-4 text-white text-3xl font-black tracking-tight">
                  {venue.amount}
                </div>
              </div>
              <p className="text-white/80 font-medium italic text-sm">{venue.date}</p>
              {venue.note && <p className="text-white/60 text-[10px] mt-1 italic">{venue.note}</p>}
            </div>
          ))}
        </div>

        {/* Harmonized Signature Image Stack - Diamond Corners Style */}
        <div className="relative h-[500px] group max-w-[600px] mx-auto md:mx-0">
          {/* Front Card */}
          <div className="absolute top-0 left-0 h-[450px] w-full max-w-[400px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transition-all duration-500 group-hover:-translate-y-6 z-10 border-2 border-white/10">
            <Image
              src="/fungala-girl.png"
              alt="Venue Success"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-serif italic text-white">Venue Results</p>
            </div>
          </div>

          {/* Back Overlapping Card */}
          <div className="absolute top-24 left-12 md:left-24 h-[400px] w-full max-w-[380px] rounded-[3rem] overflow-hidden shadow-2xl -rotate-6 border-4 border-white/20 z-0 transition-all duration-700 group-hover:-translate-y-40 group-hover:z-20">
            <Image
              src="/case-study-card-2.png"
              alt="Case Study Detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Signature Icon */}
          <div className="absolute right-0 bottom-0 opacity-20 p-8 z-30 w-64 h-32">
            <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
