import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { FloatingFiverrCTA } from "@/components/ui/FloatingFiverrCTA";
import "./globals.css";

const title = "Muhammad Tallal Aamir - Senior Shopify Developer";
const description =
  "Senior Shopify Developer and development lead building Shopify storefronts, product experiences, AJAX carts, metafield systems, and scalable e-commerce delivery for clients, agencies, and remote teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tallalaamir.dev"),
  title,
  description,
  keywords: [
    "Shopify Developer",
    "Senior Shopify Developer",
    "Shopify Plus Developer",
    "Liquid Developer",
    "Shopify Theme Developer",
    "Shopify Expert",
    "E-commerce Developer",
    "Remote Shopify Developer",
    "Shopify 2.0",
    "Metafields",
    "Metaobjects",
    "AJAX Cart"
  ],
  authors: [{ name: "Muhammad Tallal Aamir" }],
  creator: "Muhammad Tallal Aamir",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 864,
        alt: "Premium dark e-commerce developer interface artwork"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CursorFollower />
        <div className="site-ambient" aria-hidden="true" />
        <Header />
        {children}
        <FloatingFiverrCTA />
      </body>
    </html>
  );
}
