import { KeyInsight } from "./KeyInsight";
import { ReactIcon } from "./ReactIcon";
import { SanityImage } from "./SanityImage";

type _method = {
	icon: ReactIcon;
	method: string;
};

type _resources = {
	icon: ReactIcon;
	resources: string;
};

export type ResearchMethod = {
	goal: string;
	method: _method;
	resources: _resources;
	image: SanityImage;
	keyInsights: KeyInsight[];
};
