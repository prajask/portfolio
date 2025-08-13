import { ProjectHeroData } from "@/types/componentData/ProjectHeroData";
import Image from "next/image";
import Link from "next/link";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type ProjectHeroProps = {
	project: ProjectHeroData;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
	return (
		<section className="w-full py-20">
			<div
				className="w-11/12 max-w-7xl mx-auto
					flex flex-col space-y-4"
			>
				<div className="flex flex-col space-y-4">
					<h1 className="font-semibold font-plex-sans tracking-wide text-4xl">
						{project.name}
					</h1>
					<h2 className="font-plex-mono font-medium tracking-wide text-2xl">
						{project.description}
					</h2>
				</div>
				<figure className="w-full aspect-video relative ">
					<Image
						className="object-cover"
						src={project.image}
						alt=""
						fill
					/>
				</figure>
				<div className="p-4 w-full flex flex-col space-y-4 lg:flex-row justify-between border-[1.5px] border-border-secondary rounded-2xl">
					<div className="flex flex-col space-y-2">
						<h3
							className="font-plex-sans font-medium text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Skills
						</h3>
						<ul className="font-plex-mono">
							{project.skills.map((skill) => {
								return <li key={skill}>{skill}</li>;
							})}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<h3
							className="font-plex-sans font-medium text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Tools
						</h3>
						<ul className="w-full flex flex-col font-plex-mono">
							{project.tools.map((tool) => {
								return <li key={tool.name}>{tool.name}</li>;
							})}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<h3
							className="font-plex-sans font-medium text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Team
						</h3>
						<ul className="font-plex-mono">
							{project.team.map((member) => {
								return <li key={member}>{member}</li>;
							})}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<h3
							className="font-plex-sans font-medium text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Duration
						</h3>
						<p className="font-plex-mono">{project.duration}</p>
					</div>
				</div>
				<div className="w-full mt-2 flex flex-col lg:flex-row lg:items-center lg:justify-end space-y-6 lg:space-y-0 lg:space-x-6">
					{project.prototypeLinks &&
						project.prototypeLinks.map((link, index) => {
							return (
								<Link
									key={index}
									href={link.link}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 flex items-center justify-center space-x-2 bg-background-secondary text-text-primary font-medium font-plex-mono
										border-[1.5px] border-border-secondary
										rounded-2xl
										hover:scale-95
										transition-all ease-out duration-300"
										style={{
											borderColor: "var(--project-color)",
											backgroundColor: "var(--project-color-accent)"
										}}
								>
									<DynamicIcon size="20" icon={link.icon} />
									<span>{link.name}</span>
									<DynamicIcon
										size="16"
										icon={{
											name: "BiLinkExternal",
											iconPack: "bi",
										}}
									/>
								</Link>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default ProjectHero;
