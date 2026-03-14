import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Himalayan SIP — Beans & Beyond | Specialty Café in Lalitpur",
  description:
    "A nature-based specialty coffee café and plant nursery in Chyasal, Lalitpur. Experience premium handcrafted coffee, fresh food, and lush greenery at Himalayan SIP.",
  keywords: "specialty coffee, café, Lalitpur, Nepal, Chyasal, plant nursery, Himalayan SIP, artisan coffee",
  openGraph: {
    title: "Himalayan SIP — Beans & Beyond",
    description: "A nature-based specialty coffee café and plant nursery in Lalitpur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
