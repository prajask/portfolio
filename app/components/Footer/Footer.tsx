import { getSocialLinks } from "@/sanity/sanity-utils";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import Link from "next/link";

const Footer = async () => {
	const LINKS = await getSocialLinks();
	const date = new Date();
    const year = date.getFullYear();

	return (
		<footer className="w-full border-y border-border-primary">
			<div
				className="py-4
				w-11/12 max-w-7xl mx-auto
            	flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between"
			>
				<h6 className="font-medium font-nunito">
					<span className="text-xl pt-1">&#169;</span> Prajas Kadepurkar {year}
				</h6>

				<ul className="mb-4 lg:mb-0 flex items-center lg:justify-start space-x-8">
					{LINKS.map((link) => {
						return (
							!(link.name === "Resume") && <li key={link.name}>
								<Link
									className="hover:scale-105 transition-all duration-100 ease-in"
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<DynamicIcon size="28" icon={link.icon} />
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
