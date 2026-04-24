import Image from "next/image";

const Milestones = () => {
  return (
    <>
      {/* Faded Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative z-10"></div>

      {/* Milestone Section - Clean SaaS Style */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Total Impact</span>
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-none tracking-tighter">
                £2.0M<span className="text-primary italic">+</span>
              </h2>
              <p className="text-slate-500 font-medium">Revenue Generated</p>
            </div>

            <div className="space-y-4 md:border-x border-slate-200">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Active Reach</span>
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-none tracking-tighter">
                500<span className="text-primary italic">+</span>
              </h2>
              <p className="text-slate-500 font-medium">Elite Roster Members</p>
            </div>

            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Market Share</span>
              <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-none tracking-tighter">
                3<span className="text-primary italic"></span>
              </h2>
              <p className="text-slate-500 font-medium">Countries Covered</p>
            </div>
          </div>

          <div className="mt-20 max-w-3xl mx-auto p-12 bg-white rounded-[3rem] shadow-soft border border-slate-100">
            <p className="text-2xl text-slate-900 font-serif italic leading-relaxed">
              "We provide high-performing shot-sellers to the world's most exclusive venues, ensuring <span className="text-primary">zero-risk revenue growth</span> for our partners."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Milestones;
