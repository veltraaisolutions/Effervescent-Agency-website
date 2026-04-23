import Image from "next/image";

interface Partner {
  name: string;
  src: string;
  type: "mask" | "image";
  scale?: string;
  containerClass?: string;
}

const partnersConfig: Partner[] = [
  { name: "Groovebox", src: "/groverbox1.png", type: "mask", containerClass: "h-12 md:h-16 w-32 md:w-48" },
  { name: "Popworld", src: "/pp-world.png", type: "mask", scale: "scale-125" },
  { name: "R", src: "/r.png", type: "mask", scale: "scale-100" },
  { name: "XOYO", src: "/xoyo.png", type: "mask", scale: "scale-110" },
  { name: "Stonegate Group", src: "/stoneage-img.png", type: "mask" },
  { name: "The Nest", src: "/the-nest.png", type: "mask" },
  { name: "Live Tour", src: "/live-tour1.png", type: "mask" },
  { name: "The Cavendish", src: "/s&l1.png", type: "mask" },
  { name: "Live Republic", src: "/live-republic1.png", type: "mask", scale: "scale-110", containerClass: "h-16 md:h-24 w-64 md:w-80 relative" },
  { name: "Marston's", src: "/marteson1.png", type: "mask" },
  { name: "Breathe", src: "/breathe-icon2.png", type: "mask" },
  { name: "Binks Yard", src: "/bink-yard1.png", type: "mask" },
];

const Partners = () => {
  return (
    <>
      {/* Faded Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10"></div>

      {/* Partner Trust Bar - 30% Lighter Brand Pink Section */}
      <section className="relative min-h-[400px] flex items-center py-24 overflow-hidden brand-gradient">
        {/* Background Image with Lightened Brand Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/partner-bg.jpeg"
            alt="Venue Partners Gallery"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            sizes="100vw"
          />
          {/* Brand Overlay */}
          <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-none">Our Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 items-center justify-items-center">
            {partnersConfig.map((partner) => (
              <div key={partner.name} className="transition-all hover:scale-110 cursor-default flex items-center justify-center w-full">
                {partner.type === "mask" ? (
                  <div className={partner.containerClass || "h-16 md:h-20 w-40 md:w-56 relative flex items-center justify-center"}>
                    <div
                      className="w-full h-full bg-white shadow-xl"
                      style={{
                        maskImage: `url(${partner.src})`,
                        maskSize: 'contain',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: `url(${partner.src})`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat'
                      }}
                    />
                  </div>
                ) : (
                  <div className={partner.containerClass || "h-16 md:h-20 w-40 md:w-56 relative flex items-center justify-center"}>
                    <Image
                      src={partner.src}
                      alt={`${partner.name} Logo`}
                      fill
                      className={`object-contain brightness-0 invert shadow-xl ${partner.scale || ""}`}
                      sizes="300px"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
