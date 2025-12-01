import { ProjectHeroData } from "@/types/componentData/ProjectHeroData";
import Image from "next/image";
import Link from "next/link";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type ProjectHeroProps = {
	project: ProjectHeroData;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
	return (
		<section className="relative w-full py-12 bg-texture">
			<div
				className="w-11/12 max-w-7xl mx-auto
					flex flex-col space-y-8"
			>
				<div className="w-full flex flex-col lg:flex-row lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
					<div className="w-full flex flex-col space-y-4">
						<h1
							className="font-semibold font-montserrat tracking-wide text-2xl lg:text-3xl"
							style={{
								color: "color-mix(in srgb, var(--project-color) 80%, var(--color-text-primary))",
							}}
						>
							{project.name}
						</h1>
						<h2 className="font-montserrat font-medium tracking-wide text-lg/relaxed text-text-primary">
							{project.description}
						</h2>
						<div className="w-full mt-4 max-w-7xl mx-auto flex items-center flex-wrap gap-x-8 gap-y-6">
							{project.prototypeLinks &&
								project.prototypeLinks.map((link, index) => {
									return (
										<Link
											key={index}
											href={link.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center justify-center gap-x-2 text-text-secondary font-medium font-plex-mono
										hover:scale-95
										transition-all ease-out duration-300"
										>
											<DynamicIcon
												size="20"
												icon={link.icon}
												color="var(--color-text-secondary)"
											/>
											<span>{link.name}</span>
											<DynamicIcon
												size="16"
												icon={{
													name: "BiLinkExternal",
													iconPack: "bi",
												}}
												color="var(--color-text-secondary)"
											/>
										</Link>
									);
								})}
						</div>
					</div>
					<figure className="w-full max-w-7xl mx-auto flex items-center justify-center aspect-video relative project-gradient">
						<Image
							className="w-full object-cover"
							src={project.image}
							alt={project.description}
							width={1920}
							height={1080}
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default ProjectHero;
