import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Dominik Jojczyk - portfolio",
  description:
    "Zawarte tutaj projekty to efekt mojej pasji do tworzenia nowoczesnych stron internetowych oraz projektowania intuicyjnych interfejsów użytkownika. W moim portfolio znajdziesz różnorodność umiejętności, od programowania po estetykę designu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
