import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'radial-gradient(circle at 90% 10%, #C874E2 0%, transparent 50%), radial-gradient(circle at 10% 90%, #C874E2 0%, transparent 50%), #fbcfe8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center group">
              <div className="h-16 w-16 bg-primary rounded-full overflow-hidden relative flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-2xl border border-white/20">
                <Image
                  src="/effervescent-side-logo.jpeg"
                  alt="Effervescent"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <p className="text-white/80 max-w-sm text-lg leading-relaxed font-light">
              Transforming hospitality revenue through professional sales talent across the UK, Spain, and Dubai.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/effervescent.agency" className="bg-white/10 hover:bg-white hover:text-primary p-4 rounded-2xl transition-all border border-white/10 text-white group">
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
              <Link href="https://wa.me/971585216771" className="bg-white/10 hover:bg-white hover:text-primary p-4 rounded-2xl transition-all border border-white/10 text-white">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-white font-bold text-lg">For Partners</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/venues" className="text-white/60 hover:text-white transition-all font-medium">Venue Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-all font-medium">Partner With Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold text-lg">The Team</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/apply" className="text-white/60 hover:text-white transition-all font-medium">Start Making £ Today</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-all font-medium">Management</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold text-lg">Company</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="#" className="text-white/60 hover:text-white transition-all font-medium">About Us</Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-white transition-all font-medium">Global Locations</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-white/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Effervescent Agency. Built for impact.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
