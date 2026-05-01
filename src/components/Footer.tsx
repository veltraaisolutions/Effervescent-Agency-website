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

  const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const FacebookIcon = ({ size = 20 }: { size?: number }) => (
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Shot-Sellers", href: "/shot-sellers" },
    { name: "Case studies", href: "/venues" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center group w-fit">
              <div className="h-20 w-40 relative transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/effervescent-side-log-1.jpeg"
                  alt="Effervescent"
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </Link>
            <p className="text-white/70 max-w-sm text-lg leading-relaxed font-light">
              Transforming hospitality revenue through professional sales talent across the UK, Spain, and Dubai.
            </p>
            <div className="flex gap-3">
              <Link href="https://instagram.com/effervescent.agency" target="_blank" className="bg-white/5 hover:bg-white hover:text-primary p-3 rounded-xl transition-all border border-white/10 text-white group">
                <InstagramIcon size={20} />
              </Link>
              <Link href="https://tiktok.com/@effervescent.agency" target="_blank" className="bg-white/5 hover:bg-white hover:text-primary p-3 rounded-xl transition-all border border-white/10 text-white group">
                <TikTokIcon size={20} />
              </Link>
              <Link href="https://linkedin.com/company/effervescent-agency" target="_blank" className="bg-white/5 hover:bg-white hover:text-primary p-3 rounded-xl transition-all border border-white/10 text-white group">
                <LinkedInIcon size={20} />
              </Link>
              <Link href="https://facebook.com/effervescent.agency" target="_blank" className="bg-white/5 hover:bg-white hover:text-primary p-3 rounded-xl transition-all border border-white/10 text-white group">
                <FacebookIcon size={20} />
              </Link>
              <Link href="https://wa.me/971585216771" target="_blank" className="bg-white/5 hover:bg-white hover:text-primary p-3 rounded-xl transition-all border border-white/10 text-white">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl tracking-tight">Navigation</h4>
              <ul className="space-y-3">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/50 hover:text-white transition-all font-medium text-base">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl tracking-tight">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-white/50 hover:text-white transition-all font-medium text-base">Discuss your Venue</Link>
                </li>
                <li>
                  <Link href="/referrals" className="text-white/50 hover:text-white transition-all font-medium text-base">Enquiries</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/50 hover:text-white transition-all font-medium text-base">Management</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl tracking-tight">The Team</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/apply" className="text-white/50 hover:text-white transition-all font-medium text-base">Become a Shot Seller</Link>
                </li>
                <li>
                  <Link href="https://effervescent-agency.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-all font-medium text-base">Start Making £ Today</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Effervescent Agency. Built for impact.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
