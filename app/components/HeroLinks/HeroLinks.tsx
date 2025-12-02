import Link from "next/link";
import React from "react";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import { getSocialLinks } from "@/sanity/sanity-utils";

const HeroLinks = async () => {
	const socialLinks = await getSocialLinks();
	return (
		<div className="mt-4 w-full flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
			{socialLinks.map((link, index) => {
				return (
					!(
						link.name == "Instagram" ||
						link.name == "Resume" ||
						link.name == "Github"
					) && (
						<Link
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center space-x-2 text-text-primary text-2xl font-medium font-nunito hover:scale-105 transition-all duration-100 ease-in"
						>
							<DynamicIcon size="24" icon={link.icon} color="var(--color-text-secondary)" />
							<span>{link.name == "Email" ? "kadepurkarprajas@gmail.com" : link.name}</span>
						</Link>
					)
				);
			})}
		</div>
	);
};

export default HeroLinks;
