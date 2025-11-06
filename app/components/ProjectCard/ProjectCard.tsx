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
			border-1
			rounded-md
			hover:scale-101 hover:shadow-project-card-hover
			transition-all ease-in duration-150"
			style={{
				borderColor: "var(--project-color-border)",
			}}
		>
			<figure className="w-full aspect-video relative rounded-t-sm overflow-hidden">
				<Image
					className="object-cover"
					src={project.image}
					alt=""
					fill
				/>
			</figure>
			<h3 className="px-4 mt-4 font-montserrat font-semibold tracking-wider text-xl text-text-primary">
				{project.name}
			</h3>
			<p className="px-4 py-2 font-nunito font-medium text-lg tracking-wide text-text-secondary">
				{project.description}
			</p>
			<ul
				className="w-full flex flex-wrap gap-2
				px-4 py-4
				font-nunito font-semibold text-xs text-text-secondary uppercase tracking-wider"
			>
				{project.tags.map((tag, index, { length }) => {
					return (
						<li
							key={tag}
							style={{
								color: "var(--project-color)",
							}}
						>
							{tag} &nbsp;
							{index != length - 1 && (
								<span>&nbsp;&middot;&nbsp;</span>
							)}
						</li>
					);
				})}
			</ul>
		</Link>
	);
};

export default ProjectCard;
