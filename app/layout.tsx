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
    default: "Sahil Mane — Product-Focused Full-Stack Engineer",
    template: "%s — Sahil Mane",
  },
  description:
    "Mumbai-based full-stack engineer building web products, cloud systems and connected-device experiences.",
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
    title: "Sahil Mane — Product-Focused Full-Stack Engineer",
    description:
      "Full-stack engineer building reliable products across web, cloud and connected devices.",
    siteName: "Sahil Mane",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mane — Product-Focused Full-Stack Engineer",
    description:
      "Full-stack engineer building reliable products across web, cloud and connected devices.",
  },
  other: {
    "codex-preview": "development",
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
