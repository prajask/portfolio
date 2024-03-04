import { DM_Sans, Comic_Neue } from "next/font/google";
import "./globals.css";

import Nav from "./components/nav";
import Footer from "./components/footer";

const dmsans = DM_Sans({ subsets: ["latin"] });
const comicneue = Comic_Neue({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: "Prajas Kadepurkar",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
