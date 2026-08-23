import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilmane.in"),
  title: {
    default: "Sahil Mane — Full-Stack Engineer & Engineering Lead",
    template: "%s — Sahil Mane",
  },
  description:
    "Mumbai-based full-stack engineer and engineering lead building scalable products, cloud systems and agentic workflows.",
  keywords: [
    "Sahil Mane",
    "Full-Stack Engineer",
    "Product Engineer",
    "DevOps Engineer",
    "Mumbai",
  ],
  authors: [{ name: "Sahil Mane", url: "https://sahilmane.in" }],
  openGraph: {
    type: "website",
    url: "https://sahilmane.in",
    title: "Sahil Mane — Full-Stack Engineer & Engineering Lead",
    description:
      "Full-stack engineer and engineering lead building scalable products, cloud systems and agentic workflows.",
    siteName: "Sahil Mane",
    images: [
      {
        url: "https://sahil-portfolio-v3.sahilmane025.chatgpt.site/og.png",
        width: 1200,
        height: 630,
        alt: "Sahil Mane — Full-Stack Engineer and Engineering Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mane — Full-Stack Engineer & Engineering Lead",
    description:
      "Full-stack engineer and engineering lead building scalable products, cloud systems and agentic workflows.",
    images: ["https://sahil-portfolio-v3.sahilmane025.chatgpt.site/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
