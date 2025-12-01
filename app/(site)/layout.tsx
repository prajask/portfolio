import type { Metadata } from "next";
import { IBM_Plex_Mono, Montserrat, Nunito } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
});

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
});

const plex_mono = IBM_Plex_Mono({
	variable: "--font-plex-mono",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
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
		<html lang="en" className="scroll-smooth">
			<body
				className={`${montserrat.variable} ${nunito.variable} ${plex_mono.variable} antialiased bg-background-primary selection:bg-highlight-secondary/25 flex flex-col min-h-screen`}
			>
				<header className="relative w-full bg-texture">
					<Navbar />
				</header>
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
