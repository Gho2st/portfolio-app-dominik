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
    default: "Dominik Jojczyk - strony internetowe, portfolio",
    template: "%s - portfolio Dominik Jojczyk",
  },
  description:
    "Hej, jestem Dominik! Mogę przygotować dla Ciebie Twoją stronę internetową według twoich potrzeb. Responsywna, nowoczesna - to jest to.",
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
