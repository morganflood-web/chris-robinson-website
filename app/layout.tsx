import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chris Robinson | Comedian · Actor · Writer",
  description:
    "Chris Robinson is one of Canada's premier comics. Sirius XM Top Comic 2016, Just For Laughs alumni, star of Pillow Talk (Crave) and One More Time (CBC). Comedy specials 'Panning for Gold' (Apple TV) and 'Unruly' (YouTube) available now.",
  openGraph: {
    title: "Chris Robinson | Comedian · Actor · Writer",
    description:
      "One of Canada's premier comics. Comedy specials 'Panning for Gold' and 'Unruly' available now.",
    url: "https://www.chrisrobinsoncomedy.com",
    siteName: "Chris Robinson",
    images: [
      {
        url: "/images/photo-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Chris Robinson — Comedian",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Robinson | Comedian · Actor · Writer",
    description:
      "One of Canada's premier comics. Comedy specials 'Panning for Gold' and 'Unruly' available now.",
    images: ["/images/photo-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${inter.className}`}
        style={{ backgroundColor: "#1C3244", color: "#EEF5F8", margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
