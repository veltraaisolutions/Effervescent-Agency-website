import Image from "next/image";
import { Zap, Clock, Trophy } from "lucide-react";
import ApplyForm from "@/components/ApplyForm";

export default function ApplyPage() {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/party-confetti-girl.png"
            alt="Join the Roster"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 brand-gradient mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-8xl font-serif text-white mb-6 md:mb-8 leading-tight text-balance">
            Bring the Energy. <br className="hidden md:block" />
            <span className="italic font-light opacity-90 text-[0.8em]">Reap the Rewards.</span>
          </h1>
          <p className="text-lg md:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Join the UK’s highest-performing nightlife sales roster. We provide the venue partnerships, the training, and the product. You bring the vibe and take home industry-leading commission.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
            {[
              { step: "Step 1", title: "Submit Application", desc: "Fill out our quick online form with your details, location preferences, and any previous experience." },
              { step: "Step 2", title: "Instant Invite", desc: "We move fast. Our automated system will instantly send you a WhatsApp message to book your interview." },
              { step: "Step 3", title: "Vibe Check", desc: "Jump on a quick call with us. if you're a fit, we'll schedule you for a paid Trial Shift at a premium venue." },
              { step: "Step 4", title: "Official Onboarding", desc: "Crushed your trial? Get access to our app where you simply tap the days you want to work." }
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:border-primary/20 transition-all group text-center lg:text-left">
                <p className="text-primary font-serif italic text-2xl mb-4">{s.step}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="space-y-10 md:space-y-12 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight text-center lg:text-left text-balance">
                Why Work With <br className="hidden md:block" />
                <span className="text-primary italic">Effervescent?</span>
              </h2>

              <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                {[
                  { icon: <Zap className="text-primary" />, title: "Uncapped Earnings", desc: "The harder you work, the more you take home. Our industry-leading commission structure rewards high performance." },
                  { icon: <Clock className="text-primary" />, title: "Total Flexibility", desc: "You are an independent contractor. Tap the days you want to work on our app and manage your own schedule." },
                  { icon: <Trophy className="text-primary" />, title: "Premium Venues Only", desc: "We only partner with the best. You'll be working in the hottest venues across the UK, Spain, and Dubai." }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2 w-full max-w-[600px] mx-auto lg:mx-0">
              <div className="absolute -top-10 -right-10 opacity-10 w-[300px] h-[200px] pointer-events-none hidden md:block">
                <Image src="/effervescent-sign1.png" alt="Signature Decor" fill className="object-contain brightness-0 invert" />
              </div>

              <div className="relative z-10 w-full">
                <ApplyForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
