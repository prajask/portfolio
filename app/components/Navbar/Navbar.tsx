"use client";

import { getResumeLink } from "@/sanity/sanity-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
	const [RESUME_LINK, setResumeLink] = useState(String);

	useEffect(() => {
		async function fetchNavLinks() {
			const res = await getResumeLink();
			if (res.url) setResumeLink(res.url);
		}
		fetchNavLinks();
	}, []);

	const LINKS = [
		{
			name: "About",
			url: "/about",
			target: "_self",
		},
		{
			name: "Resume",
			url: RESUME_LINK,
			target: "_blank",
		},
	];

	const PATHNAME = usePathname();

	return (
		<nav
			className="py-4
			w-11/12 max-w-7xl mx-auto
            flex items-center justify-between"
		>
			<Link
				className="py-2 font-montserrat text-2xl font-bold tracking-wider text-text-primary"
				href="/"
			>
				Prajas K.
			</Link>
			<ul className="flex space-x-8 font-plex-mono text-text-secondary">
				{LINKS.map((link) => {
					return (
						<li key={link.name}>
							<Link
								href={link.url}
								target={link.target}
								rel="noreferrer noopener"
								className={`py-2 flex items-center space-x-2 hover:border-b border-highlight-primary ${PATHNAME === link.url && "border-b"} ${link.name === "Resume" && "bg-highlight-primary/25 hover:border-none hover:scale-95 transition-transform ease-in duration-100 px-4"}`}
							>
								<span>{link.name}</span>
								{link.name === "Resume" && <BsArrowUpRight/>}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
