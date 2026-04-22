import Image from "next/image";

const Milestones = () => {
  return (
    <>
      {/* Faded Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative z-10"></div>

      {/* Milestone Section - Full Width Immersive Pink */}
      <section className="relative min-h-[600px] flex items-center justify-center py-24 overflow-hidden brand-gradient">
        {/* Background Image with Pink Tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-image-200,000.jpeg"
            alt="Success Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-2xl">
            Over <span className="italic font-black">£2,000,000</span> generated <br />
            for hospitality businesses through <br />
            our risk free, shot sales service
          </h2>
        </div>

        {/* Decorative Icon at Bottom Right */}
        <div className="absolute bottom-10 right-10 opacity-30 drop-shadow-lg w-48 h-20">
          <Image src="/effervescent-sign1.png" alt="Signature" fill className="object-contain brightness-0 invert" />
        </div>
      </section>
    </>
  );
};

export default Milestones;
