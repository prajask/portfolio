import { getResumeLink } from "@/sanity/sanity-utils";
import Link from "next/link";

const Navbar = async () => {
	const RESUME_LINK = await getResumeLink();

	return (
		<nav
			className="py-6
            w-11/12 max-w-7xl mx-auto
            flex items-center justify-between"
		>
			<Link
				className="font-montserrat text-2xl font-bold tracking-wider text-text-primary"
				href="/"
			>
				Prajas K.
			</Link>
			<ul className="flex space-x-8 font-nunito text-lg text-text-secondary">
				<li>
					<Link
						href="/about"
						className={`transition-all duration-100 ease-linear hover:border-b border-highlight-seconday`}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						href={RESUME_LINK.url}
						target="_blank"
						rel="noreferrer noopener"
						className="transition-all duration-100 ease-linear hover:border-b border-highlight-seconday"
					>
						Resume
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
