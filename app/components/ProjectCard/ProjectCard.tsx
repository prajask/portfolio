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
			className="block
			p-8
			w-full h-full
			flex-col
			border-1
			hover:-translate-y-1 hover:rotate-1 hover:scale-101
			transition-all ease-[cubic-bezier(0.18,0.89,0.32,1.28)] duration-200
			project-gradient"
			style={{
				borderColor: "var(--project-color-border)",
			}}
		>
			<figure className="w-full aspect-video relative overflow-hidden">
				<Image
					className="object-cover group-hover:rounded-b-none"
					src={project.image}
					alt=""
					width={1920}
					height={1080}
				/>
			</figure>
			<ul
				className="py-4 w-full
				flex flex-wrap gap-2
				font-plex-mono text-xs text-text-secondary uppercase tracking-widest"
			>
				{project.tags.map((tag, index, { length }) => {
					return (
						<li key={tag}>
							{tag} &nbsp;
							{index != length - 1 && (
								<span>&nbsp;&middot;&nbsp;</span>
							)}
						</li>
					);
				})}
			</ul>
			<h3 className="mt-2 font-montserrat font-semibold tracking-wider text-xl text-text-primary">
				{project.name}
			</h3>
			<p className="pt-2 font-montserrat font-medium tracking-wider text-text-secondary">
				{project.description}
			</p>
		</Link>
	);
};

export default ProjectCard;
