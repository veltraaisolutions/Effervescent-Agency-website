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
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Trust & Excellence</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tight">Our Elite <span className="italic">Partners</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
          {partnersConfig.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center group">
              <div className="h-10 md:h-12 w-32 md:w-40 relative grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                <Image
                  src={partner.src}
                  alt={`${partner.name} Logo`}
                  fill
                  className={`object-contain ${partner.scale || ""}`}
                  sizes="(max-width: 768px) 120px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
