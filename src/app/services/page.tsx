"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, UserCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Shot-Sales People",
      description: "Shot-sellers can be a valuable addition to your venue, positively impacting customer experience and bringing revenue to new heights, at no additional cost to yourselves.",
      extra: "Beyond that, shot-sellers excel at creating an engaging and enjoyable experience for customers, fostering a vibrant and social atmosphere. Customers also benefit from shorter wait times streamlining your service, taking pressure off bar staff and improving customer satisfaction overall.",
      image: "/shot-seller-in-party.jpeg",
      icon: <Zap className="text-white" size={24} />,
      align: "left"
    },
    {
      title: "Dancers & Multi Skilled Performers",
      description: "Through our sister business, Effervescent Entertainment, we offer a variety of additional experiences to enrich your venue.",
      extra: "We're committed to creating you tailored performance packages that will guarantee unique & unforgettable experiences that your guests will not forget.",
      image: "/fungala-girl.png",
      icon: <Sparkles className="text-white" size={24} />,
      align: "right"
    },
    {
      title: "Hostesses & Bottle Service",
      description: "Effervescent is able to provide all your additional event staffing needs from hostesses & promo-staff, to festival stewards & VIP hostesses.",
      extra: "We'll act as your VIP consultants, tailoring your service, packages and even sourcing signs and props to create those 'instagram-able' shows.",
      image: "/HostessService.jpeg",
      icon: <UserCheck className="text-white" size={24} />,
      align: "left"
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 mix-blend-color opacity-100"
            style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}
          />
          <div
            className="absolute inset-0 opacity-75"
            style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, transparent 50%), #fbcfe8' }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 z-[1]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center pt-32">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 md:py-2 rounded-3xl md:rounded-full border border-white/20 mb-8 mx-auto w-fit"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-white text-white" />
                ))}
              </div>              <div className="h-4 w-px bg-white/20 hidden md:block" />
            </div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-white text-center md:text-left leading-relaxed">
              5/5 BY 400+ VENUES <span className="mx-1 md:mx-2 opacity-30">•</span> Short-Sellers <span className="mx-1 md:mx-2 opacity-30">•</span> Hostesses <span className="mx-1 md:mx-2 opacity-30">•</span> Entertainment <span className="mx-1 md:mx-2 opacity-30">•</span> Trust Partner
            </p>
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-serif text-white leading-tight tracking-tighter mb-8"
          >
            Our <span className="italic underline decoration-white/30 underline-offset-8">Services</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-4xl text-white font-serif italic tracking-tight max-w-4xl mx-auto leading-relaxed"
          >
            “Transforming hospitality revenue through professional talent and unforgettable guest experiences.”
          </motion.p>
        </div>
        
        <div className="absolute bottom-12 right-12 opacity-60">
          <div className="w-24 h-24 relative">
            <Image src="/effervescent-sign1.png" alt="" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((service, idx) => (
        <section 
          key={idx} 
          className="relative py-24 md:py-40 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 mix-blend-color opacity-100"
              style={{ 
                background: idx % 2 === 0 
                  ? 'radial-gradient(circle at 0% 0%, #C874E2 0%, transparent 50%), #fbcfe8'
                  : 'radial-gradient(circle at 100% 100%, #C874E2 0%, transparent 50%), #fbcfe8'
              }}
            />
            <div
              className="absolute inset-0 opacity-75"
              style={{ 
                background: idx % 2 === 0 
                  ? 'radial-gradient(circle at 0% 0%, #C874E2 0%, transparent 50%), #fbcfe8'
                  : 'radial-gradient(circle at 100% 100%, #C874E2 0%, transparent 50%), #fbcfe8'
              }}
            />
          </div>
          
          {/* Dotted Texture */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-[1]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${service.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              <motion.div 
                initial={{ opacity: 0, x: service.align === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`space-y-8 ${service.align === 'right' ? 'lg:order-2' : ''}`}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                  {service.icon}
                </div>
                
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                  {service.title.split(' & ').map((part, i, arr) => (
                    Part(part, i, arr)
                  ))}
                </h2>
                
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed opacity-95">
                    “{service.description}”
                  </p>
                  <p className="text-lg text-white/80 font-light leading-relaxed">
                    {service.extra}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Link 
                    href="/contact"
                    className="bg-white text-slate-900 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    New Booking <ArrowRight size={18} className="text-primary" />
                  </Link>
                  <Link 
                    href="https://effervescent-agency.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    Join The Team <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative group ${service.align === 'right' ? 'lg:order-1' : ''}`}
              >
                <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-3xl transition-all duration-700">
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 mix-blend-color opacity-100"
            style={{ background: 'radial-gradient(circle at 50% 50%, #C874E2 0%, transparent 50%), #fbcfe8' }}
          />
          <div
            className="absolute inset-0 opacity-75"
            style={{ background: 'radial-gradient(circle at 50% 50%, #C874E2 0%, transparent 50%), #fbcfe8' }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-[1]" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 relative mx-auto mb-10">
              <Image src="/effervescent-sign1.png" alt="Star" fill className="object-contain" />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight">
              Excellence in every detail.
            </h3>
            <div className="mt-12 h-px w-32 bg-white/30 mx-auto" />
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
