import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "My First Shadcn App",
  description: "Learning Next.js with shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 overflow-x-hidden">
        {/* Header */}
        <Header />
        {/* Page Content */}
        <main className="flex-1 container mx-auto p-6">
          {children}
          <Toaster />
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
