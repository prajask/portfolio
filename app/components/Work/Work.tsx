import { getProjects } from "@/sanity/sanity-utils";
import { CSSProperties } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Work = async () => {
	const projects = await getProjects();
	return (
		<section className="py-12 w-full" id="work">
			<div className="w-11/12 max-w-7xl mx-auto">
				{/* <h3 className="mb-16 font-montserrat font-bold text-3xl text-text-primary tracking-wider">
					<span className="text-highlight-primary">F</span>
					eatured&nbsp;
					<span className="text-highlight-primary">W</span>ork
				</h3> */}
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
											"--project-color-accent":
												project.color + "0D",
											"--project-color-border":
												project.color + "1A",
											"--project-color-gradient":
												project.color + "1A",
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
