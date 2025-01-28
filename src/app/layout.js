import { Geist, Geist_Mono, Nunito, PT_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptsans"
});

export const metadata = {
  title: "Prajas Kadepurkar",
  description: "UX Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased`}
      >
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
