"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const partnerCtas = [
  { label: "Become a Shot Seller", href: "/apply" },
  { label: "Discuss Your Venue", href: "/contact" },
  { label: "Enquiries", href: "/referrals" },
];

interface GetInTouchButtonProps {
  className?: string;
  buttonClassName?: string;
}

export default function GetInTouchButton({ 
  className = "", 
  buttonClassName = "" 
}: GetInTouchButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className} ${isOpen ? "z-[600]" : "z-10"}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-sm font-black shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap ${buttonClassName}`}
      >
        Get in Touch
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-0 lg:left-0 top-full mt-3 w-64 bg-white lg:bg-white/25 lg:backdrop-blur-2xl rounded-2xl shadow-premium lg:shadow-[0_20px_50px_rgba(200,116,226,0.3),inset_0_0_20px_rgba(255,255,255,0.1)] border border-slate-100 lg:border-white/30 overflow-hidden flex flex-col z-[500]"
          >
            {partnerCtas.map((cta, index) => (
              <Link
                key={`${cta.label}-${index}`}
                href={cta.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 text-base font-black text-slate-600 lg:text-slate-900 text-center bg-slate-50 lg:bg-transparent hover:bg-slate-100 lg:hover:bg-primary/30 transition-colors border-b border-slate-100 lg:border-white/10 last:border-b-0"
              >
                {cta.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
