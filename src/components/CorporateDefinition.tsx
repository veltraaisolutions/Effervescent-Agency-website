import Image from "next/image";

const CorporateDefinition = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fd88d7 0%, #e879a0 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">

          {/* Left Column */}
          <div className="space-y-10">
            <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tight">
              The Effervescent Standard
            </h2>

            {/* Definition Purple Card */}
            <div className="bg-[#c084fc]/80 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-xl max-w-lg">
              <h3 className="text-3xl font-serif text-white mb-2">Effervescent</h3>
              <p className="text-white/80 italic text-sm mb-4">Definition:</p>
              <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                lively, energetic, and impossible to ignore <br />
                - just like the contractors we provide.
              </p>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-xl text-white/90 leading-relaxed font-light">
                We are a leading nightlife sales agency delivering high-performing <span className="font-bold">shot-sellers and promotional contractors</span> to venues across the <span className="font-bold">UK, Spain, and Dubai.</span>
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                <span className="font-bold italic">Performance-Driven:</span> Unlike standard promotional services, our contractors are <span className="font-bold">commission-based and fully incentivised</span> to sell and maximise results every single shift.
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                <span className="font-bold italic">Additional Event Contractors:</span> Beyond shot sales, Effervescent is equipped to provide all your additional event contracting needs, including hostesses, promoters, festival stewards, and VIP guides.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Tilted Main Image Card */}
            <div className="relative h-[450px] md:h-[550px] w-full max-w-[500px] lg:ml-auto group rounded-[3.5rem] overflow-hidden shadow-2xl -rotate-6 border-[12px] border-white/10 transition-transform duration-500 hover:rotate-0 hover:scale-105">
              <Image
                src="/effervescent-definition.jpeg"
                alt="The Effervescent Experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>

            <div className="space-y-8 max-w-xl lg:ml-auto">
              <p className="text-xl text-white/90 leading-relaxed font-light">
                <span className="font-bold italic">Fully Trained & Compliant:</span> We combine <span className="font-bold">industry-leading sales training</span> with <span className="font-bold">responsible service education</span>. All shot-sellers are trained in <span className="font-bold">Challenge 25 and Drinkaware</span>, ensuring they represent both your venue and the wider industry to the highest possible standard.
              </p>
              
              <div className="space-y-2 pt-4">
                <p className="text-xl font-bold text-white leading-relaxed">
                  Ready to elevate your events and maximise your sales?
                </p>
                <p className="text-xl font-bold text-white">
                  Choose Effervescent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Signature Decorator */}
        <div className="absolute right-8 bottom-8 opacity-20 hidden lg:block w-80 h-32">
          <Image 
            src="/effervescent-sign1.png" 
            alt="Effervescent Signature" 
            fill 
            className="object-contain brightness-0 invert" 
          />
        </div>
      </div>
    </section>
  );
};

export default CorporateDefinition;
