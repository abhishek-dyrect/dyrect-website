import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dyrect | Warranty Management Software for D2C Brands",
  description:
    "The most seamless warranty management software. Registration, claims management, and tracking unified in one system. Reduce the cost of every claim and turn warranty into revenue.",
  keywords: [
    "warranty management",
    "warranty software",
    "product registration",
    "claims management",
    "D2C brands",
    "Shopify warranty",
  ],
  openGraph: {
    title: "Dyrect | Warranty Management Software",
    description:
      "The most seamless warranty management software for D2C brands, Shopify merchants, retailers, and manufacturers.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2437F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} bg-background`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
