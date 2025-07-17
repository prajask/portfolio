import { ProjectCardData } from "@/types/componentData/ProjectCardData";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
	project: ProjectCardData;
};

const ProjectCard = ({project}: ProjectCardProps) => {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="block w-full h-full
			flex-col
			bg-background-secondary
			border-2 border-border-primary
			hover:shadow-project-card-hover
			group
			shadow-project-card
			transition-all ease-out duration-300"
		>
			<h2
				className="p-4
				border-b border-border-primary
				font-plex-sans font-semibold
				text-text-primary"
			>
				{project.description}
			</h2>
			<figure
				className="w-full aspect-video relative
				border-b border-border-primary"
			>
				<Image
					className="object-cover"
					src={project.image}
					alt=""
					fill
				/>
			</figure>
			<ul
				className="w-full flex flex-wrap gap-2
				p-4
				font-plex-mono text-sm text-text-secondary"
			>
				{project.tags.map((tag, index, { length }) => {
					return (
						<>
							<li>{tag}</li>
							{index != length - 1 && <span>{"//"}</span>}
						</>
					);
				})}
			</ul>
		</Link>
	);
};

export default ProjectCard;
