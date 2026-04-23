import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fd88d7 0%, #e879a0 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tighter leading-none mb-20">
          A Seamless Integration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">

          {/* Left Column - Steps */}
          <div className="space-y-8">

            <div className="space-y-8">
              {[
                { step: "Step 1 (Arrival)", text: "The contractor arrives at the venue bringing all their own equipment." },
                { step: "Step 2 (Service)", text: "You provide the product to the shot-sellers, and they begin to work." },
                { step: "Step 3 (Settlement)", text: "Instant payment is made to your venue at the end of the night for all the products sold, using your preferred payment method." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <p className="text-3xl font-serif text-white">{item.step}</p>
                  <div className="bg-[#c084fc]/80 backdrop-blur-md px-8 py-2.5 rounded-[2rem] shadow-lg inline-block w-full max-w-2xl">
                    <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-white/90 leading-relaxed font-light max-w-2xl pt-4">
              Our service is designed to be entirely seamless, ensuring a smooth transition of our contractors into your venue. The contractors are managed by our in-house management team who work around the clock to ensure your partnership with Effervescent is effortlessly integrated.
            </p>
          </div>

          {/* Right Column - Portrait Card Pushed to Absolute Top Right */}
          <div className="relative group lg:justify-self-end w-full max-w-[420px]">
            <div className="relative h-[550px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl -rotate-3 border-[12px] border-white/10 transition-all duration-700 group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-white/10">
              <Image
                src="/boy-shot.jpeg"
                alt="Efficiency in Action"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>

            {/* Global Signature Decorator */}
            <div className="absolute right-0 bottom-0 opacity-20 hidden lg:block w-80 h-32">
              <Image
                src="/effervescent-sign1.png"
                alt="Effervescent Signature"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
