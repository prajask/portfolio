import { getProjects } from "@/sanity/sanity-utils";
import { CSSProperties } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = async () => {
    const projects = await getProjects();
	return (
		<section
			className="py-10 w-full"
			id="work"
		>
			<div className="w-11/12 max-w-7xl mx-auto">
				<ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
					{projects &&
						projects.map((project) => {
							return (
								<li
									key={project._id}
									className="w-full self-stretch"
									style={
										{
											"--project-color": project.color,
											"--project-color-accent": project.color + "14"
										} as CSSProperties
									}
								>
									<ProjectCard project={project} />
								</li>
							);
						})}
				</ul>
			</div>
		</section>
	);
};

export default Work;
