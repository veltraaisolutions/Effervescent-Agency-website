import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const academyBold = localFont({
  src: "../../public/fonts/AcademyC-Bold.otf",
  variable: "--font-academy",
});

export const metadata: Metadata = {
  title: "Effervescent Agency | Transforming Venues Around the Globe",
  description: "Over £2,000,000 generated for hospitality businesses through our risk-free, shot-sales service.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${academyBold.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbcfe8] relative">
        {/* Global Fixed Background to Ensure 100% Connectivity Across All Pages */}
        <div className="fixed inset-0 z-[-1] pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, #C874E2 0%, #C874E200 60%)' }} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
