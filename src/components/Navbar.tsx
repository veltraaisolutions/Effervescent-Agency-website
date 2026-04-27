"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          ? "bg-white/95 backdrop-blur-xl py-4 shadow-soft border-b border-slate-100"
          : "bg-transparent py-8"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Full Logo - Left aligned */}
            <Link href="/" className="flex items-center group">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-full overflow-hidden relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm border border-white/20">
                <Image
                  src="/effervescent-side-logo.jpeg"
                  alt="Effervescent"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>
            {/* Center Navigation - Desktop only */}
            <div className="hidden lg:flex items-center gap-10">
              {[
                { name: "Home", href: "/" },
                { name: "What is a Shot-Seller?", href: "/shot-sellers" },
                { name: "Venues", href: "/venues" },
              ].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold transition-colors relative group py-2 ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Right Actions - Desktop only */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-3 mr-2">
                <Link href="https://instagram.com/effervescent.agency" className="text-slate-900 hover:text-primary transition-colors">
                  <InstagramIcon size={18} />
                </Link>
                <Link href="https://tiktok.com/@effervescent.agency" className="text-slate-900 hover:text-primary transition-colors">
                  <TikTokIcon size={18} />
                </Link>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-black shadow-lg transition-all hover:scale-105 active:scale-95 group"
              >
                Partner With Us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 bg-slate-900/20 backdrop-blur-md text-slate-900 border-2 border-slate-900/30 px-6 py-2.5 rounded-full text-sm font-black shadow-lg transition-all hover:scale-105 active:scale-95 group"
              >
                Start Making £ Today <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
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
          className={`lg:hidden bg-white absolute inset-x-0 top-full border-t border-slate-100 shadow-premium transition-all duration-500 ease-in-out z-50 overflow-hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-6 py-4 space-y-0.5">
            {[
              { name: "Home", href: "/" },
              { name: "What is a Shot-Seller?", href: "/shot-sellers" },
              { name: "Venues", href: "/venues" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-serif transition-colors py-2.5 border-b border-slate-50 last:border-0 ${isActive ? "text-primary" : "text-slate-900 hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 pb-1 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full bg-white text-slate-900 border border-slate-200 text-center py-3.5 rounded-xl font-black text-sm shadow-lg ${pathname === "/contact" ? "ring-4 ring-primary/20" : ""
                  }`}
              >
                Partner With Us
              </Link>
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full bg-primary text-white text-center py-3.5 rounded-xl font-black text-sm shadow-lg ${pathname === "/apply" ? "ring-4 ring-white/30" : ""
                  }`}
              >
                Start Making £ Today
              </Link>

              <div className="flex justify-center gap-6 pt-2">
                <Link href="https://instagram.com/effervescent.agency" className="text-slate-500 hover:text-primary transition-colors">
                  <InstagramIcon size={24} />
                </Link>
                <Link href="https://tiktok.com/@effervescent.agency" className="text-slate-500 hover:text-primary transition-colors">
                  <TikTokIcon size={24} />
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
