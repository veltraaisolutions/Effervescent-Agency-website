import Image from "next/image";

interface Partner {
  name: string;
  src: string;
  scale?: string;
}

const partnersConfig: Partner[] = [
  { name: "Groovebox", src: "/groverbox1.png", scale: "scale-110" },
  { name: "Popworld", src: "/pp-world.png", scale: "scale-110" },
  { name: "R", src: "/r.png", scale: "scale-150" },
  { name: "XOYO", src: "/xoyo.png", scale: "scale-110" },
  { name: "Stonegate Group", src: "/stoneage-img.png" },
  { name: "The Nest", src: "/the-nest.png", scale: "scale-150" },
  { name: "S&L", src: "/s&l1.png", scale: "scale-125" },
  { name: "Live Republic", src: "/live-republic1.png" },
  { name: "Marston's", src: "/marteson1.png" },
  { name: "Breathe", src: "/breathe-icon2.png", scale: "scale-150" },
  { name: "Binks Yard", src: "/bink-yard1.png" },
];

const Partners = () => {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-[#fbcfe8]">
      {/* Background Image & Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <Image
          src="/partner-bg.jpeg"
          alt="Our Partners Background"
          fill
          className="object-cover"
        />
        {/* Layer 1: Tint */}
        <div
          className="absolute inset-0 mix-blend-color opacity-100"
          style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}
        />
        {/* Layer 2: Brightness */}
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight drop-shadow-sm">
            Our Partners
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-24 items-center justify-items-center">
          {partnersConfig.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center relative w-full h-16 md:h-20">
              <Image
                src={partner.src}
                alt={`${partner.name} Logo`}
                fill
                className={`object-contain brightness-0 invert drop-shadow-md ${partner.scale || ""}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Star - Bottom Right */}
      <div className="absolute bottom-12 right-12 opacity-90 scale-125 z-30">
        <div className="w-20 h-20 relative">
          <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
