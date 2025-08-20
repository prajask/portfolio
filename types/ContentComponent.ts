import { PortableTextBlock } from "sanity";
import { TargetUser } from "./TargetUser";
import { SanityImage } from "./SanityImage";
import { Quote } from "./Quote";
import { Metric } from "./Metric";
import { KeyInsight } from "./KeyInsight";
import { InsightReference } from "./InsightReference";
import { ResearchMethod } from "./ResearchMethod";
import { ProjectGoal } from "./ProjectGoal";
import { Callout } from "./Callout";

export type ContentComponentSchema = {
	type: string;
	richTextContent: PortableTextBlock[];
	image: SanityImage;
	targetUser: TargetUser;
	researchMethod: ResearchMethod;
	quote: Quote;
	metric: Metric;
	keyInsight: KeyInsight;
	insightReference: InsightReference;
	projectGoal: ProjectGoal;
	callout: Callout;
};
