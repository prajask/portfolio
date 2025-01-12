import { DM_Sans } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

// const ibmPlexSans = IBM_Plex_Sans({
//   variable: "--font-ibm-plex-sans",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"]
// });

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Prajas Kadepurkar",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${DMSans.className} antialiased
        `}
      >
        <Nav/>
        
        <main>
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
