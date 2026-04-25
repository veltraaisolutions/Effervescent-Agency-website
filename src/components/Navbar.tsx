"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 backdrop-blur-xl py-4 shadow-soft border-b border-slate-100"
        : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-center lg:justify-between">
          {/* Logo - Centered on mobile, Left on desktop */}
          <Link href="/" className="flex items-center gap-4 group lg:ml-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
              <Image
                src="/logo1.jpeg"
                alt="Effervescent"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-serif text-xl md:text-2xl tracking-tighter text-slate-900 group-hover:text-primary transition-colors">Effervescent.</span>
          </Link>

          {/* Center Navigation - Desktop only */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { name: "Home", href: "/" },
              { name: "What is a Shot-Seller?", href: "/shot-sellers" },
              { name: "Venues", href: "/venues" },
              { name: "Marketing", href: "/marketing" },
              { name: "Contact", href: "/contact" }
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
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/apply"
              className={`bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-2xl text-sm font-black shadow-[0_15px_30px_rgba(253,184,215,0.3)] transition-all hover:scale-105 active:scale-95 ${pathname === "/apply" ? "ring-4 ring-primary/30 scale-105" : ""
                }`}
            >
              Become a Shot-Seller
            </Link>
          </div>

          {/* Mobile menu button - Absolute Right */}
          <div className="lg:hidden absolute right-0 flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 p-2 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden bg-white fixed inset-x-0 top-full border-t border-slate-100 shadow-premium transition-all duration-500 ease-in-out z-40 overflow-hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-4 space-y-0.5">
          {[
            { name: "Home", href: "/" },
            { name: "What is a Shot-Seller?", href: "/shot-sellers" },
            { name: "Venues", href: "/venues" },
            { name: "Marketing", href: "/marketing" },
            { name: "Contact", href: "/contact" }
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
          <div className="pt-3 pb-1">
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full bg-primary text-white text-center py-3.5 rounded-xl font-black text-sm shadow-lg ${pathname === "/apply" ? "ring-4 ring-white/30" : ""
                }`}
            >
              Become a Shot-Seller
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
