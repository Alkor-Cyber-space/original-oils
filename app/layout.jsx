import "./globals.css";
import { Playfair_Display, Inter, UnifrakturCook } from "next/font/google";
import Navbar from "@/components/Navbar";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-gothic",
});

export const metadata = {
  title: "True Kerala Coconut Oil",
  description: "60 Years in Oil Milling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${playfair.variable}
          ${inter.variable}
          ${unifraktur.variable}
          bg-white
        
          overflow-x-hidden
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
