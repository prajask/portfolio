import Link from "next/link";
import React from "react";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import { getSocialLinks } from "@/sanity/sanity-utils";

const HeroLinks = async () => {
    const socialLinks = await getSocialLinks();
	return (
		<div className="pb-2 w-full flex items-center space-x-8 z-10">
			{socialLinks.map((link, index) => {
				return (
					!(link.name == "Instagram" || link.name == "Resume") && (
						<Link
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="p-4 flex items-center justify-center md:space-x-2 bg-background-secondary text-text-primary font-medium font-plex-mono
										border-2 border-border-primary
										shadow-button
										hover:shadow-button-hover
										transition-all ease-out duration-300"
						>
							<DynamicIcon size="20" icon={link.icon} />
							<span
								className={`hidden md:block`}
							>
								{link.name}
							</span>
						</Link>
					)
				);
			})}
		</div>
	);
};

export default HeroLinks;
