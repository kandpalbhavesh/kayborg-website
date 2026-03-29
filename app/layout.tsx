import type { Metadata } from "next";
import { Syne, DM_Sans, Instrument_Serif, Figtree, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-figtree",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KayBorg AI — Advertising. Reinvented.",
  description:
    "Brand products embedded directly inside creator videos at pixel level. Every viewer sees a different product. Unblockable. Launching 2026 in India.",
  openGraph: {
    title: "KayBorg AI — Advertising. Reinvented.",
    description: "The ad that cannot be blocked.",
    url: "https://kayborgai.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KayBorg AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KayBorg AI — Advertising. Reinvented.",
    description: "The ad that cannot be blocked.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${instrumentSerif.variable} ${figtree.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
