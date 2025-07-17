import { ProjectTool } from "../ProjectTool";
import { PrototypeLink } from "../PrototypeLink";

export type ProjectHeroData = {
	name: string;
	description: string;
	tags: string[];
	image: string;
	color: string;
	team: string[];
	duration: string;
	tools: ProjectTool[];
	prototypeLinks: PrototypeLink[];
	skills: string[];
};