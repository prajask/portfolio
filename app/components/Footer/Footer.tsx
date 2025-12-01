"use client";

import { getSocialLinks } from "@/sanity/sanity-utils";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import Link from "next/link";
import { BsCheck2, BsCopy } from "react-icons/bs";
import { useEffect, useState } from "react";
import { SocialLink } from "@/types/SocialLink";
import {
	SiNextdotjs,
	SiSanity,
	SiShadcnui,
	SiTailwindcss,
} from "react-icons/si";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	const [LINKS, setLinks] = useState<SocialLink[]>([]);
	const [copiedToClipboard, setCopiedToClipboard] = useState<boolean>(false);

	const EMAIL = "kadepurkarprajas@gmail.com";

	useEffect(() => {
		async function fetchLinks() {
			const res = await getSocialLinks();
			if (res) setLinks(res);
		}
		fetchLinks();
	}, []);

	const copyEmailToClipboard = () => {
		navigator.clipboard.writeText(EMAIL);
		setCopiedToClipboard(true);
		setTimeout(() => setCopiedToClipboard(false), 2000);
	};

	return (
		<footer className="relative w-full bg-texture">
			<div
				className="py-8
				w-11/12 max-w-7xl mx-auto"
			>
				<div className="pb-8 w-full flex flex-col gap-y-12 lg:gap-y-0 lg:flex-row lg:items-center lg:justify-between border-b border-border-primary/10">
					<div className="w-full flex flex-col gap-y-4">
						<h3 className="font-montserrat font-medium text-2xl text-text-primary tracking-wide">
							<span className="text-highlight-primary">G</span>et
							in touch
						</h3>
						<span className="w-full flex items-center gap-2">
							<Link
								href={`mailto:${EMAIL}`}
								className="font-montserrat text-text-secondary"
							>
								{EMAIL}
							</Link>
							<button
								id="copy-email"
								type="button"
								className="cursor-pointer"
								onClick={copyEmailToClipboard}
							>
								<label htmlFor="copy-email" className="sr-only">
									Copy email to clipboard
								</label>
								{copiedToClipboard ? (
									<BsCheck2
										size={16}
										color="var(--color-highlight-primary)"
									/>
								) : (
									<BsCopy
										size={16}
										color="var(--color-text-secondary)"
									/>
								)}
							</button>
						</span>

						<nav className="w-full flex gap-x-8">
							{LINKS.map((link) => {
								return (
									!(
										link.name === "Resume" ||
										link.name === "Email"
									) && (
										<Link
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											key={link.name}
											className="hover:scale-110 transition-all duration-100 ease-in"
										>
											<DynamicIcon
												size="24"
												icon={link.icon}
												color="var(--color-text-primary)"
											/>
											<span className="sr-only">
												{link.name}
											</span>
										</Link>
									)
								);
							})}
						</nav>
					</div>

					<div className="self-stretch flex flex-col gap-y-4 justify-end">
						<p className="w-max font-plex-mono font-medium text-lg text-text-secondary tracking-wide">
							<span className="text-highlight-primary">B</span>
							uilt with
						</p>
						<ul className="flex gap-x-8">
							<li>
								<span className="sr-only">Next.js</span>
								<SiNextdotjs
									size={16}
									color="var(--color-text-secondary)"
								/>
							</li>
							<li>
								<span className="sr-only">Sanity CMS</span>
								<SiSanity
									size={16}
									color="var(--color-text-secondary)"
								/>
							</li>
							<li>
								<span className="sr-only">Tailwind CSS</span>
								<SiTailwindcss
									size={16}
									color="var(--color-text-secondary)"
								/>
							</li>
							<li>
								<span className="sr-only">ShadCN UI</span>
								<SiShadcnui
									size={16}
									color="var(--color-text-secondary)"
								/>
							</li>
						</ul>
					</div>
				</div>

				<p className="pt-8 font-medium font-montserrat text-sm text-text-secondary flex items-center gap-2">
					<span className="text-xl">&#169;</span>
					<span>{year} Prajas Kadepurkar</span>
				</p>
				{/* <p className="font-medium font-montserrat text-text-primary flex items-center gap-2">
					<span className="text-xl">&#169;</span>
					<span>{year} Prajas Kadepurkar</span>
				</p>

				<ul className="mb-4 lg:mb-0 flex items-center lg:justify-start space-x-8">
					{LINKS.map((link) => {
						return (
							!(link.name === "Resume") && (
								<li
									key={link.name}
									className="hover:scale-110 transition-all duration-100 ease-in"
								>
									<Link
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<DynamicIcon
											size="28"
											icon={link.icon}
											color="var(--color-text-primary)"
										/>
										<span className="sr-only">
											{link.name}
										</span>
									</Link>
								</li>
							)
						);
					})}
				</ul> */}
			</div>
		</footer>
	);
};

export default Footer;
