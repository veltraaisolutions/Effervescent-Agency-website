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
        ? "bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-pink-100"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-pink-200">
              <Image
                src="/logo1.jpeg"
                alt="Effervescent Agency Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
                Effervescent
              </span>
              <div className="h-4 w-16 relative">
                <Image
                  src="/effervescent-sign1.png"
                  alt="Signature"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/venues"
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
            >
              For Venues
            </Link>
            <Link
              href="/marketing"
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
            >
              Marketing & Network
            </Link>
            <Link
              href="/apply"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-pink-200 transition-all hover:scale-105 active:scale-95"
            >
              Become a Shot-Seller
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors border-2 border-slate-900/10 px-5 py-2.5 rounded-full"
            >
              Contact
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-50 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/venues"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-900 hover:bg-pink-50 rounded-lg"
            >
              For Venues
            </Link>
            <Link
              href="/marketing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-900 hover:bg-pink-50 rounded-lg"
            >
              Marketing & Network
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-bold text-primary"
            >
              Become a Shot-Seller
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-900 bg-slate-50 rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
