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
        className={`inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap ${buttonClassName}`}
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
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-80 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-premium border border-white/20 p-2 flex flex-col gap-2 z-[500]"
          >
            {partnerCtas.map((cta, index) => (
              <Link
                key={`${cta.label}-${index}`}
                href={cta.href}
                onClick={() => setIsOpen(false)}
                className="group relative block w-full text-center py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all overflow-hidden bg-slate-50 text-slate-600 hover:text-white"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">{cta.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
