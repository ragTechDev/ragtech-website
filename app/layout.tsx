import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ragtechdev.com'),
  title: "ragTech - Bytes & Banter podcast",
  description: "Where bytes meet banter! Making technology fun, engaging, and accessible through our podcast, Techie Taboo game, and workshops. Join Saloni, Victoria, and Natasha on this tech adventure!",
  keywords: ["ragTech", "Techie Taboo", "tech podcast", "Bytes & Banter", "technology", "innovation", "workshops"],
  authors: [{ name: "ragTech Team" }],
  icons: {
    icon: "/assets/logo/ragtech-logo.png",
    shortcut: "/assets/logo/ragtech-logo.png",
    apple: "/assets/logo/ragtech-logo.png",
  },
  openGraph: {
    title: "ragTech - Bytes & Banter podcast",
    description: "Where bytes meet banter! Making technology fun, engaging, and accessible through our podcast, Techie Taboo game, and workshops.",
    url: "https://ragtechdev.com",
    siteName: "ragTech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ragTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ragTech - Bytes & Banter podcast",
    description: "Where bytes meet banter! Making technology fun, engaging, and accessible through our podcast, Techie Taboo game, and workshops.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
