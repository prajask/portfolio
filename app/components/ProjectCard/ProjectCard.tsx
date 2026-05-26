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
			className="
			pb-8
			w-full h-full
			flex flex-col
			hover:-translate-y-2
			transition-all ease-[cubic-bezier(0.18,0.89,0.32,1.28)] duration-200
			noise-texture"
			style={{
				backgroundColor:
					"color-mix(in srgb, var(--project-color) 20%, var(--color-background-primary))",
			}}
		>
			<figure className="w-full aspect-video relative overflow-hidden p-8">
				<Image
					className="object-cover group-hover:rounded-b-none"
					src={project.image}
					alt=""
					width={1920}
					height={1080}
				/>
			</figure>
			<ul
				className="px-8 py-4 w-full
				flex flex-wrap gap-1
				font-plex-mono text-xs text-text-secondary uppercase tracking-widest"
			>
				{project.tags.map((tag, index, { length }) => {
					return (
						<li key={tag}>
							{tag} &nbsp;
							{index != length - 1 && <span>&middot;&nbsp;</span>}
						</li>
					);
				})}
			</ul>
			<h3 className="px-8 mt-2 font-montserrat font-semibold tracking-wider text-xl text-text-primary">
				{project.name}
			</h3>
			<p className="px-8 pt-2 font-montserrat tracking-wider text-text-secondary">
				{project.description}
			</p>
		</Link>
	);
};

export default ProjectCard;
