import { ProjectHeroData } from "@/types/componentData/ProjectHeroData";
import Image from "next/image";
import Link from "next/link";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type ProjectHeroProps = {
	project: ProjectHeroData;
};

const ProjectHero = ({ project }: ProjectHeroProps) => {
	return (
		<section className="w-full py-12">
			<div
				className="w-11/12 max-w-7xl mx-auto
					flex flex-col space-y-4"
			>
				<figure className="w-full max-w-6xl mx-auto flex items-center justify-center aspect-video relative">
					<Image
						className="w-full object-cover"
						src={project.image}
						alt={project.description}
						fill
					/>
				</figure>
				<div className="pt-4 pb-8 flex flex-col space-y-4">
					<h1 className="font-semibold font-montserrat tracking-wide text-4xl text-text-primary">
						{project.name}
					</h1>
					<h2 className="font-nunito font-semibold tracking-wide text-2xl text-text-secondary">
						{project.description}
					</h2>
				</div>
				<div className="p-4 w-full flex flex-col space-y-4 lg:flex-row justify-between border-1 border-border-secondary rounded-2xl">
					<div className="flex flex-col space-y-2">
						<h3
							className="font-montserrat font-semibold text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Skills
						</h3>
						<ul className="font-nunito text-text-secondary">
							{project.skills.map((skill) => {
								return <li key={skill}>{skill}</li>;
							})}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<h3
							className="font-montserrat font-semibold text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Tools
						</h3>
						<ul className="font-nunito text-text-secondary">
							{project.tools.map((tool) => {
								return <li key={tool.name}>{tool.name}</li>;
							})}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<h3
							className="font-montserrat font-semibold text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Team
						</h3>
						<ul className="font-nunito text-text-secondary">
							{project.team.map((member) => {
								return <li key={member}>{member}</li>;
							})}
						</ul>
					</div>
					<div className="flex flex-col space-y-2">
						<h3
							className="font-montserrat font-semibold text-lg"
							style={{
								color: "var(--project-color)",
							}}
						>
							Duration
						</h3>
						<p className="font-nunito text-text-secondary">{project.duration}</p>
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
									className="p-2 flex items-center justify-center space-x-2 text-text-primary font-semibold font-nunito
										border-1
										rounded-2xl
										hover:scale-95
										transition-all ease-out duration-300"
										style={{
											backgroundColor: "var(--project-color-accent)",
											borderColor: "var(--project-color-border)"
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
