import Image from "next/image";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-32 brand-gradient relative overflow-hidden">
      {/* Decorative Dots Pattern */}
      <div className="absolute top-0 right-0 w-[600px] h-full opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Large Background Quote Icon */}
          <div className="absolute -top-10 -left-10 text-white/10 pointer-events-none">
            <Quote size={300} fill="currentColor" />
          </div>

          <div className="relative space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">
              &ldquo;It&rsquo;s been great, <br />
              unreal difference <br />
              your Shot-Sellers have made <br />
              versus other companies.&rdquo;
            </h2>

            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-white font-serif italic">The Cavendish, Sheffield</p>
              <p className="text-lg text-white/70 font-medium tracking-wide">Partner since 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Decorator */}
      <div className="absolute bottom-12 right-12 opacity-20 animate-pulse w-64 h-24">
        <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
      </div>

      {/* Luminous Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonial;
