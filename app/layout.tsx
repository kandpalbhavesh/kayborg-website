import type { Metadata } from "next";
import { Syne, DM_Sans, Instrument_Serif, Figtree, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: false, // only used in footer — non-critical
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-figtree",
  display: "swap",
  preload: false, // only used in footer — non-critical
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
  preload: false, // only used in footer — non-critical
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kayborgai.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KayBOrg AI — The Ad That Lives Inside the Story.",
  description:
    "KayBOrg AI embeds brand products inside creator videos at the pixel level — frame by frame, unblockable by design. Launching 2026 in India.",
  openGraph: {
    title: "KayBOrg AI — The Ad That Lives Inside the Story.",
    description: "Brand placement at the pixel level. Unblockable by design.",
    url: siteUrl,
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
    title: "KayBOrg AI — The Ad That Lives Inside the Story.",
    description: "Brand placement at the pixel level. Unblockable by design.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${syne.variable} ${dmSans.variable} ${instrumentSerif.variable} ${figtree.variable} ${dmMono.variable}`}
    >
      <head>
        {/* Preconnect to Google Fonts to reduce DNS + TLS latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics if added later */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
