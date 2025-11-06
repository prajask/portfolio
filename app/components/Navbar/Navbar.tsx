"use client";

import { getResumeLink } from "@/sanity/sanity-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
				{LINKS.map((link) => {
					return (
						<li key={link.name}>
							<Link
								href={link.url}
								target={link.target}
								rel="noreferrer noopener"
								className={`hover:border-b border-highlight-secondary ${PATHNAME === link.url ? "border-b" : ""}`}
							>
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
