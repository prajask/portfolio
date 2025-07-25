import { getResumeLink } from "@/sanity/sanity-utils";
import Link from "next/link";

const Navbar = async () => {
	const RESUME_LINK = await getResumeLink();

	return (
		<nav
			className="py-4
            w-11/12 max-w-7xl mx-auto
            flex items-center justify-between"
		>
			<h1 className="font-plex-sans text-xl font-semibold tracking-wider">
				<Link href="/">Prajas K.</Link>
			</h1>
			<ul className="flex space-x-8 font-plex-mono">
				<li>
					<Link href="/#work" className="transition-all duration-100 ease-linear hover:border-b border-border-primary">Work</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link
						href={RESUME_LINK.url}
						target="_blank"
						rel="noreferrer noopener"
					>
						Resume
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
