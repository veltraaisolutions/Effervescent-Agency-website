import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const Footer = () => {
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
    <footer className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center group">
              <div className="h-32 w-64 relative transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/effervescent-side-log-1.jpeg"
                  alt="Effervescent"
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </Link>
            <p className="text-white/80 max-w-sm text-xl leading-relaxed font-light">
              Transforming hospitality revenue through professional sales talent across the UK, Spain, and Dubai.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/effervescent.agency" target="_blank" className="bg-white/10 hover:bg-white hover:text-primary p-4 rounded-2xl transition-all border border-white/10 text-white group">
                <InstagramIcon size={24} />
              </Link>
              <Link href="https://tiktok.com/@effervescent.agency" target="_blank" className="bg-white/10 hover:bg-white hover:text-primary p-4 rounded-2xl transition-all border border-white/10 text-white group">
                <TikTokIcon size={24} />
              </Link>
              <Link href="https://wa.me/971585216771" target="_blank" className="bg-white/10 hover:bg-white hover:text-primary p-4 rounded-2xl transition-all border border-white/10 text-white">
                <MessageCircle size={24} />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-white font-bold text-2xl tracking-tight">For Partners</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/services" className="text-white/60 hover:text-white transition-all font-medium text-lg">Venue Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-all font-medium text-lg">Discuss Your Venue With Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold text-2xl tracking-tight">The Team</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="https://effervescent-agency.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all font-medium text-lg">Start Making £ Today</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-all font-medium text-lg">Management</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold text-2xl tracking-tight">Company</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/about" className="text-white/60 hover:text-white transition-all font-medium text-lg">About Us</Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/60 hover:text-white transition-all font-medium text-lg">Services</Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/60 hover:text-white transition-all font-medium text-lg">FAQ</Link>
                </li>
                <li>
                  <Link href="#" className="text-white/60 hover:text-white transition-all font-medium text-lg">Global Locations</Link>
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
