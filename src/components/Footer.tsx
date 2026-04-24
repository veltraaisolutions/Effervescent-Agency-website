import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="w-14 h-14 overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/logo1.jpeg"
                  alt="Effervescent Agency Logo"
                  width={52}
                  height={52}
                  className="object-cover h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight leading-none mb-1">Effervescent</span>
                <div className="h-6 w-24 relative opacity-80 filter invert brightness-0 invert">
                  <Image
                    src="/effervescent-sign1.png"
                    alt="Signature"
                    fill
                    className="object-contain mix-blend-screen"
                  />
                </div>
              </div>
            </Link>
            <p className="text-white/90 max-w-sm text-lg leading-relaxed mb-6">
              Leading nightlife sales agency supplying high-performing shot-sellers and promotional contractors across the UK, Spain, and Dubai.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/effervescent.agency" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="https://wa.me/971585216771" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-colors">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">For Partners</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/venues" className="text-white/80 hover:text-white transition-colors">Venue Services</Link>
              </li>
              <li>
                <Link href="/marketing" className="text-white/80 hover:text-white transition-colors">Marketing Network</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Partner With Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legals */}
          <div>
            <h4 className="font-bold text-lg mb-6">Become a Shot-Seller</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/apply" className="text-white/80 hover:text-white transition-colors">Become a Shot-Seller</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact Management</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Effervescent Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
