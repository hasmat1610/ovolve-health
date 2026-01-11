import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import "@/assets/fonts/icomoon/style.css";
import "@/app/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ovolve Health",
  description: "Ovolve Health - Your partner in mental wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
