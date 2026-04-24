import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 pt-32 pb-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="w-16 h-16 rounded-[1.5rem] overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-premium border border-slate-100">
                <Image
                  src="/logo1.jpeg"
                  alt="Effervescent"
                  width={64}
                  height={64}
                  className="object-cover h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl tracking-tighter leading-none mb-1">Effervescent.</span>
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">The Elite Roster</span>
              </div>
            </Link>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed font-light">
              Transforming hospitality revenue through professional sales talent across the UK, Spain, and Dubai.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/effervescent.agency" className="bg-slate-50 hover:bg-primary hover:text-white p-4 rounded-2xl transition-all border border-slate-100 group">
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
              <Link href="https://wa.me/971585216771" className="bg-slate-50 hover:bg-primary hover:text-white p-4 rounded-2xl transition-all border border-slate-100">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold text-lg">For Partners</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/venues" className="text-slate-500 hover:text-primary transition-all font-medium">Venue Services</Link>
                </li>
                <li>
                  <Link href="/marketing" className="text-slate-500 hover:text-primary transition-all font-medium">Marketing Network</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-500 hover:text-primary transition-all font-medium">Partner With Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold text-lg">The Team</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/apply" className="text-slate-500 hover:text-primary transition-all font-medium">Become a Shot-Seller</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-500 hover:text-primary transition-all font-medium">Management</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold text-lg">Company</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="#" className="text-slate-500 hover:text-primary transition-all font-medium">About Us</Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-500 hover:text-primary transition-all font-medium">Global Locations</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Effervescent Agency. Built for impact.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
