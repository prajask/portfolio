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
			rounded-xl
			border-2 border-border-secondary
			hover:scale-102
			transition-all ease-out duration-350"
			style={{
					borderColor: "var(--project-color-border)",
				}}
		>
			<figure className="w-full aspect-video relative">
				<Image
					className="object-cover rounded-t-xl"
					src={project.image}
					alt=""
					fill
				/>
			</figure>
			<h2
				className="p-4 mt-4 font-montserrat font-semibold tracking-wide text-text-primary"
				style={{
					backgroundColor: "var(--project-color-accent)",
				}}
			>
				{project.description}
			</h2>
			<ul
				className="w-full flex flex-wrap gap-2
				p-4
				font-nunito text-sm text-text-secondary"
			>
				{project.tags.map((tag, index, { length }) => {
					return (
						<>
							<li>{tag}</li>
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
