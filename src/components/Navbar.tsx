"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import AnnouncementBar from "./AnnouncementBar";

const partnerCtas = [
  { label: "Become a Shot Seller", href: "/apply" },
  { label: "Enquires", href: "/referrals" },
  { label: "Discuss Your Venue", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [partnerCtaIndex, setPartnerCtaIndex] = useState(0);
  const pathname = usePathname();
  const navIsSolid = isScrolled || mobileMenuOpen;
  const activePartnerCta = partnerCtas[partnerCtaIndex];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPartnerCtaIndex((current) => (current + 1) % partnerCtas.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  const InstagramIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const FacebookIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <AnnouncementBar />
      <nav
        className={`transition-all duration-500 ${navIsSolid
          ? "bg-white/95 backdrop-blur-xl py-2 shadow-soft border-b border-slate-100"
          : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center gap-4 relative">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="h-14 w-28 md:h-20 md:w-40 relative transition-transform duration-500 group-hover:scale-110">
                <AnimatePresence mode="wait">
                  {!navIsSolid ? (
                    <motion.div
                      key="white-logo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src="/effervescent-side-log-1.jpeg"
                        alt="Effervescent"
                        fill
                        sizes="(max-width: 768px) 112px, 160px"
                        className="object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                        priority
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="pink-logo"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 scale-[1.8]"
                    >
                      <Image
                        src="/effervescent-pink.png"
                        alt="Effervescent"
                        fill
                        sizes="(max-width: 768px) 112px, 160px"
                        className="object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                        priority
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            {/* Mobile Rotating CTA (Centered) */}
            <div className="xl:hidden absolute left-1/2 -translate-x-1/2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="bg-primary text-white px-3 py-2 rounded-xl text-sm font-black shadow-md flex items-center justify-center gap-1 whitespace-nowrap overflow-hidden min-w-[112px] max-w-[128px]"
                >
                  <span className="overflow-hidden">
                    Get in Touch
                  </span>
                  <ChevronDown size={14} className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white rounded-xl shadow-premium border border-slate-100 overflow-hidden flex flex-col"
                    >
                      {partnerCtas.map((cta, index) => (
                        <Link
                          key={`${cta.label}-${index}`}
                          href={cta.href}
                          onClick={() => setMobileDropdownOpen(false)}
                          className="px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 border-b border-slate-50 last:border-b-0"
                        >
                          {cta.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden xl:flex items-center gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Case Studies", href: "/venues" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-black hover:bg-slate-100 hover:text-black"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden xl:flex items-center gap-3">
              <div className="flex items-center gap-3 mr-2">
                <Link href="https://instagram.com/effervescent.agency" target="_blank" className="text-slate-900 hover:text-primary transition-colors">
                  <InstagramIcon size={18} />
                </Link>
                <Link href="https://tiktok.com/@effervescent.agency" target="_blank" className="text-slate-900 hover:text-primary transition-colors">
                  <TikTokIcon size={18} />
                </Link>
                <Link href="https://linkedin.com/company/effervescent-agency" target="_blank" className="text-slate-900 hover:text-primary transition-colors">
                  <LinkedInIcon size={18} />
                </Link>
                <Link href="https://facebook.com/effervescent.agency" target="_blank" className="text-slate-900 hover:text-primary transition-colors">
                  <FacebookIcon size={18} />
                </Link>
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-sm font-black shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap overflow-hidden min-w-[252px]"
                >
                  Get in Touch
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-3 w-64 bg-white rounded-xl shadow-premium border border-slate-100 overflow-hidden flex flex-col"
                    >
                      {partnerCtas.map((cta, index) => (
                        <Link
                          key={`${cta.label}-${index}`}
                          href={cta.href}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 border-b border-slate-50 last:border-b-0"
                        >
                          {cta.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 p-2 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`xl:hidden bg-white absolute inset-x-0 top-full border-t border-slate-100 shadow-premium transition-all duration-500 ease-in-out z-50 overflow-hidden ${mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-6 py-6 space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Case Studies", href: "/venues" },
              { name: "FAQ", href: "/faq" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-center py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${isActive
                    ? "bg-primary text-white shadow-lg"
                    : "bg-slate-50 text-slate-600 border border-slate-100"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 space-y-3">



              <div className="flex justify-center gap-8 pt-4">
                <Link href="https://instagram.com/effervescent.agency" target="_blank" className="text-slate-500 hover:text-primary transition-colors">
                  <InstagramIcon size={28} />
                </Link>
                <Link href="https://tiktok.com/@effervescent.agency" target="_blank" className="text-slate-500 hover:text-primary transition-colors">
                  <TikTokIcon size={28} />
                </Link>
                <Link href="https://linkedin.com/company/effervescent-agency" target="_blank" className="text-slate-500 hover:text-primary transition-colors">
                  <LinkedInIcon size={28} />
                </Link>
                <Link href="https://facebook.com/effervescent.agency" target="_blank" className="text-slate-500 hover:text-primary transition-colors">
                  <FacebookIcon size={28} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
