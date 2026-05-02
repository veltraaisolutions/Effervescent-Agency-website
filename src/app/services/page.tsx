"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, UserCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Shot-Sales People",
      description: "Shot-sellers ARE a valuable addition to your venue, positively impacting customer experience and bringing revenue to new heights, at no additional cost to yourselves.",
      extra: "Beyond that, shot-sellers excel at creating an engaging and enjoyable experience for customers, fostering a vibrant and social atmosphere. Customers also benefit from shorter wait times streamlining your service, taking pressure off bar staff and improving customer satisfaction overall.",
      image: "/tray-girl.jpeg",
      icon: <Zap className="text-white" size={24} />,
      align: "left"
    },
    {
      title: "Bottle Service",
      description: "Our dedicated bottle service teams are trained to deliver high-energy, premium presentations that drive sales and enhance the VIP experience.",
      extra: "From synchronized sparkler entries to expert table management, we ensure your high-spending guests receive the attention and spectacle they expect, maximizing your table revenue.",
      image: "/HostessService.jpeg",
      icon: <UserCheck className="text-white" size={24} />,
      align: "right"
    },
    {
      title: "Hostesses",
      description: "Effervescent provides professional hostesses and promo-staff to ensure a seamless guest journey from the moment they arrive.",
      extra: "Whether it's front-of-house greeting, guestlist management, or atmospheric promotion, our hostesses represent your brand with elegance and professional excellence.",
      image: "/Promtoers-Services.jpeg",
      icon: <UserCheck className="text-white" size={24} />,
      align: "left"
    },
    {
      title: "Dancers & Multi Skilled Performers",
      description: "Through our sister business, Effervescent Entertainment, we offer a variety of additional experiences to enrich your venue.",
      extra: "From fire performers to specialized dancers, we're committed to creating tailored performance packages that guarantee unique and unforgettable experiences for your guests.",
      image: "/fungala-girl.png",
      icon: <Sparkles className="text-white" size={24} />,
      align: "right"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Subtle overlays for depth, allowing global background to shine through */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[#C874E2] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[#C874E2] blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 z-[1]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center pt-20 md:pt-24">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/20 mb-6 mx-auto w-fit"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-white text-white" />
                ))}
              </div>
              <div className="h-4 w-px bg-white/20 hidden md:block" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white text-center md:text-left leading-relaxed">
              5/5 BY 400+ VENUES <span className="mx-1 md:mx-2 opacity-30">•</span> Shot-Sellers <span className="mx-1 md:mx-2 opacity-30">•</span> Hostesses <span className="mx-1 md:mx-2 opacity-30">•</span> Entertainment
            </p>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tighter mb-4"
          >
            Our <span className="italic underline decoration-white/30 underline-offset-8">Services</span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg md:text-2xl text-white font-serif italic tracking-tight max-w-3xl mx-auto leading-relaxed"
          >
            Transforming hospitality revenue through professional talent and unforgettable guest experiences.
          </motion.p>
        </div>

        <div className="absolute bottom-8 right-8 opacity-40">
          <div className="w-12 h-12 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((service, idx) => (
        <section
          key={idx}
          className="relative py-8 md:py-12 overflow-hidden"
        >
          {/* Dotted Texture */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-[1]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${service.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

              <motion.div
                initial={{ opacity: 0, x: service.align === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`space-y-4 ${service.align === 'right' ? 'lg:order-2' : ''}`}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-xl">
                  {service.icon}
                </div>

                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  {service.title.split(' & ').map((part, i, arr) => (
                    Part(part, i, arr)
                  ))}
                </h2>

                <div className="space-y-3">
                  <p className="text-base md:text-lg text-white font-serif italic leading-relaxed opacity-95">
                    {service.description}
                  </p>
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {service.extra}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get in Touch <ArrowRight size={14} className="text-primary" />
                  </Link>
                  <Link
                    href="https://effervescent-agency.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Join The Team <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative group ${service.align === 'right' ? 'lg:order-1' : ''}`}
              >
                <div className="relative h-[250px] md:h-[350px] w-full rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Decorative Star Footer */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-[1]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 relative mx-auto mb-4">
              <Image src="/effervescent-sign1.png" alt="Star" fill className="object-contain" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif italic text-white tracking-tight">
              Excellence in every detail.
            </h3>
            <div className="mt-6 h-px w-16 bg-white/30 mx-auto" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Part(part: string, i: number, arr: any[]) {
  return (
    <span key={i}>
      {part}{i < arr.length - 1 ? <><br /><span className="text-primary/40">&</span><br /></> : ""}
    </span>
  );
}
