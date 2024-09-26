import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://dominikjojczyk.pl"),
  title: {
    default: "Strony Internetowe Nowy Sącz | Dominik Jojczyk Portfolio",
  },
  description:
    "Profesjonalne strony internetowe w Nowym Sączu - zaprojektowane według Twoich potrzeb! Oferuję nowoczesne, responsywne i tanie strony, wraz z pozycjonowaniem SEO. Skontaktuj się, aby stworzyć swoją idealną witrynę z Dominikiem Jojczykiem.",
  keywords: [
    "strony internetowe nowy sącz",
    " pozycjonowanie",
    " tanie strony internetowe",
    " projektowanie stron internetowych",
    " Dominik Jojczyk Niskowa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
