import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"]
});

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
	title: "Prajas Kadepurkar",
	description: "Prajas Kadepurkar | UX Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${nunito.variable} antialiased bg-background-primary scroll-smooth`}
			>
				<header
					className="w-full"
				>
					<Navbar />
				</header>
				<main>{children}</main>
				<Footer/>
			</body>
		</html>
	);
}
