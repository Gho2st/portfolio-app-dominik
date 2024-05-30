import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://www.dominikjojczyk.pl"),
  title: {
    default: "Dominik Jojczyk - strony internetowe, portfolio",
    template: "%s - portfolio Dominik Jojczyk",
  },
  description:
    "Hej, jestem Dominik Jojczyk! Projektuję i pozycjonuję tanie, nowoczesne, responsywne strony internetowe według Twoich potrzeb.",
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
