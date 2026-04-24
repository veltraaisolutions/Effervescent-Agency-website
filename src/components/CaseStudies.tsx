import Image from "next/image";

const CaseStudies = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dot-grid"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-20 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Proof of Concept</span>
          <h2 className="text-5xl md:text-8xl font-serif text-slate-900 leading-none tracking-tighter">
            Market <br />
            <span className="text-primary italic">Dominance.</span>
          </h2>
          <p className="text-xl text-slate-500 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Record-Breaking Revenue Generated for UK & International Venues in 2025.
          </p>
        </div>

        {/* Revenue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {[
            { id: 1, amount: "£166,905", date: "Partner since Sept 2022" },
            { id: 2, amount: "£98,462", date: "Partner since Aug 2022" },
            { id: 3, amount: "£69,607", date: "Partner since Apr 2023", note: "Seasonal venue (6 months)" }
          ].map((venue) => (
            <div key={venue.id} className="saas-card p-10 flex flex-col items-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 font-black text-xs mb-8 border border-slate-100 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                CASE {venue.id}
              </div>
              <h3 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter group-hover:scale-110 transition-transform">
                {venue.amount}
              </h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{venue.date}</p>
              {venue.note && <p className="text-primary/60 text-[10px] mt-2 italic font-bold">{venue.note}</p>}
            </div>
          ))}
        </div>

        {/* Visual Showcase */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] md:h-[550px] rounded-[3.5rem] overflow-hidden shadow-premium border-[12px] border-slate-50 group">
            <Image
              src="/fungala-girl.png"
              alt="Venue Success"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
          </div>

          <div className="text-left space-y-10 lg:pl-12">
            <div className="space-y-6">
              <h4 className="text-4xl font-serif text-slate-900">Measuring Impact</h4>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                Our approach combines professional sales talent with data-driven venue management, resulting in unprecedented revenue growth for hospitality brands.
              </p>
            </div>
            
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black italic">!</div>
                <p className="text-lg font-bold text-slate-900">Key Performance Metric</p>
              </div>
              <p className="text-slate-500 italic">"On average, our partners see a 40% increase in shot sales within the first 30 days of roster deployment."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
