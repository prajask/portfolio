import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const plexSans = IBM_Plex_Sans({
	variable: "--font-plex-sans",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
	variable: "--font-plex-mono",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
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
				className={`${plexSans.variable} ${plexMono.variable} antialiased bg-background-primary scroll-smooth`}
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
