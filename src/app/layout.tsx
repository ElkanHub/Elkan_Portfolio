import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomCursor from "@/components/cursor";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Elkanah Donkor — Freelance Designer & Developer",
  description:
    "Recreation of Dennis Snellenberg design style. Premium Portfolio of Elkanah Donkor - Full-Stack Developer & UI Designer specializing in high-performance web applications and fluid motion design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-[#0e0e0e] text-[#efefef] font-sans antialiased overflow-x-hidden selection:bg-white selection:text-black">
        {/* Custom cursor for desktop screens */}
        <CustomCursor />

        {/* Smooth scroll wrapper */}
        <SmoothScroll>
          <div className="relative flex flex-col min-h-screen">
            {/* Header / Navigation */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 w-full">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </SmoothScroll>

        <Toaster />
      </body>
    </html>
  );
}
