"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <AnnouncementBar />
      <nav
        className={`transition-all duration-500 ${isScrolled || mobileMenuOpen
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
                  {!isScrolled ? (
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
                      className="absolute inset-0 scale-[1.3]"
                    >
                      <Image
                        src="/effervescent-pink.png"
                        alt="Effervescent"
                        fill
                        className="object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                        priority
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            {/* Mobile Action Dropdown (Centered) */}
            <div className="xl:hidden absolute left-1/2 -translate-x-1/2">
              <div className="relative">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-black shadow-md flex items-center gap-1 whitespace-nowrap"
                >
                  Partner With Us <ChevronDown size={14} className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-white rounded-xl shadow-premium border border-slate-100 overflow-hidden flex flex-col"
                    >
                      <Link href="/apply" onClick={() => setMobileDropdownOpen(false)} className="px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 border-b border-slate-50">Become a shot seller</Link>
                      <Link href="/referrals" onClick={() => setMobileDropdownOpen(false)} className="px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 border-b border-slate-50">Referral section</Link>
                      <Link href="/contact" onClick={() => setMobileDropdownOpen(false)} className="px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50">Discuss your venue with Us</Link>
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
                { name: "Shot-Sellers", href: "/shot-sellers" },
                { name: "Venues", href: "/venues" },
                { name: "FAQ", href: "/faq" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-xs font-black shadow-lg transition-all hover:scale-105 active:scale-95 group whitespace-nowrap"
              >
                Discuss Your Venue with Us<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-xs font-black shadow-lg transition-all hover:scale-105 active:scale-95 group whitespace-nowrap"
              >
                Start Making £ Today<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
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
              { name: "What is a Shot-Seller?", href: "/shot-sellers" },
              { name: "Venues", href: "/venues" },
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
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
