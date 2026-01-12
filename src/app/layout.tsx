import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Equivvo",
    template: "%s | Equivvo",
  },
  description: "Equivvo — modern horse marketplace (MVP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen">
          <NavBar />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
          <footer className="border-t border-border/80">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted">
              © {new Date().getFullYear()} Equivvo
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
