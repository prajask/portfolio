import { getUpNext } from "@/sanity/sanity-utils";
import ProjectCard from "../ProjectCard/ProjectCard";
import { CSSProperties } from "react";

type UpNextProps = {
	currentProjectOrder: number;
};

const UpNext = async ({ currentProjectOrder }: UpNextProps) => {
	const nextProject = await getUpNext(currentProjectOrder);

	return (
		<section
			className="w-full py-20"
			style={
				{
					"--project-color-accent": nextProject.color + "1e",
				} as CSSProperties
			}
		>
			<div className="w-11/12 max-w-7xl mx-auto">
				<h2 className="w-full mb-8 font-plex-sans font-semibold tracking-wide text-3xl text-text-primary">
					Explore More Work
				</h2>
				<div className="w-full lg:w-1/2">
					<ProjectCard project={nextProject} />
				</div>
			</div>
		</section>
	);
};

export default UpNext;
