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
					!(link.name == "Instagram" || link.name == "Resume" || link.name == "Email") && (
						<Link
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center space-x-2 text-text-primary text-lg font-medium font-nunito hover:scale-105 transition-all duration-100 ease-in"
						>
							<DynamicIcon size="20" icon={link.icon} />
							<span
								className={`underline`}
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
