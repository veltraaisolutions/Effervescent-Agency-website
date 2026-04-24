"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-[#FDb8D7]/20"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/logo1.jpeg"
                alt="Effervescent Agency Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/shot-sellers"
              className="text-sm font-bold text-primary px-4 py-2 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              What is a Shot-Seller?
            </Link>
            <Link
              href="/venues"
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
            >
              Venues
            </Link>
            <Link
              href="/marketing"
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
            >
              Marketing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/apply"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#FDb8D7]/30 transition-all hover:scale-105 active:scale-95"
            >
              Become a Shot-Seller
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white border-t border-[#FDb8D7]/10 fixed w-full shadow-2xl transition-all duration-500 ease-in-out z-40 ${mobileMenuOpen ? "top-[72px] opacity-100 pointer-events-auto" : "-top-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-10 space-y-6 flex flex-col items-center text-center">
          <Link
            href="/shot-sellers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-primary font-bold py-2 border-b border-primary/10 w-full"
          >
            What is a Shot-Seller?
          </Link>
          <Link
            href="/venues"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-slate-900 hover:text-primary transition-colors py-2 border-b border-[#FDb8D7]/10 w-full"
          >
            Venues
          </Link>
          <Link
            href="/marketing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-slate-900 hover:text-primary transition-colors py-2 border-b border-[#FDb8D7]/10 w-full"
          >
            Marketing
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-slate-900 hover:text-primary transition-colors py-2 border-b border-[#FDb8D7]/10 w-full"
          >
            Contact
          </Link>
          <Link
            href="/apply"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif font-black text-primary py-2 border-b border-[#FDb8D7]/10 w-full"
          >
            Become a Shot-Seller
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
