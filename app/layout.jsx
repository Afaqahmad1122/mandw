import "./globals.css";
import { Poppins, Source_Code_Pro } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const sourceSansPro = Source_Code_Pro({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});

export const metadata = {
  title: "M & W Dev",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${poppins.variable} ${sourceSansPro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
