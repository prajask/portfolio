import { ProjectCardData } from "@/types/componentData/ProjectCardData";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
	project: ProjectCardData;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="block w-full h-full
			flex-col
			border-2
			rounded-lg
			hover:scale-102
			transition-all ease-out duration-350"
			style={{
				borderColor: "var(--project-color-border)",
			}}
		>
			<figure className="w-full aspect-video relative">
				<Image
					className="object-cover"
					src={project.image}
					alt=""
					fill
				/>
			</figure>
			<h2 className="px-4 mt-4 font-montserrat font-bold tracking-wider text-xl text-text-primary">
				{project.name}
			</h2>
			<h3 className="px-4 py-2 font-nunito font-semibold text-lg tracking-wide text-text-secondary">
				{project.description}
			</h3>
			<ul
				className="w-full flex flex-wrap gap-2
				p-4
				font-nunito font-semibold text-xs text-text-secondary uppercase tracking-wider"
			>
				{project.tags.map((tag, index, { length }) => {
					return (
						<>
							<li
								style={{
									color: "var(--project-color)",
								}}
							>
								{tag}
							</li>
							{index != length - 1 && (
								<span>&nbsp;&middot;&nbsp;</span>
							)}
						</>
					);
				})}
			</ul>
		</Link>
	);
};

export default ProjectCard;
