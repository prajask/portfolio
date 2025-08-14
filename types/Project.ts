import { ProjectSection } from "./ProjectSection";
import { ProjectTool } from "./ProjectTool";
import { PrototypeLink } from "./PrototypeLink";

export type Project = {
	_id: string;
	order: number;
	name: string;
	description: string;
	tags: string[];
	image: string;
	color: string;
	team: string[];
	duration: string;
	tools: ProjectTool[];
	skills: string[];
	prototypeLinks: PrototypeLink[];
	content: ProjectSection[];
};
