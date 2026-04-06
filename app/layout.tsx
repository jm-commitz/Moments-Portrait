import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Moments & Portraits — Photography Studio",
  description:
    "Wedding photography and videography in the Philippines — framing emotion, capturing memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${playfair.variable} h-full scroll-smooth overflow-x-hidden antialiased`}
    >
      <body className="min-h-full" style={{ backgroundColor: "#faf9f6" }}>
        {children}
      </body>
    </html>
  );
}
