import { ContentComponentSchema } from "@/types/ContentComponent";
import { PortableText } from "next-sanity";
import TargetUserCard from "../TargetUserCard/TargetUserCard";
import QuoteCard from "../Quote/QuoteCard";
import MetricCard from "../MetricCard/MetricCard";
import InsightReferences from "../InsightReferences/InsightReferences";
import ResearchMethodCard from "../ResearchMethodCard/ResearchMethodCard";
import ImageContentComponent from "../ImageContentComponent/ImageContentComponent";
import ProjectGoalCard from "../ProjectGoalCard/ProjectGoalCard";
import CalloutComponent from "../Callout/Callout";

type ContentComponentProps = {
	content: ContentComponentSchema;
};

const ContentComponent = ({ content }: ContentComponentProps) => {
	switch (content.type) {
		case "rich_text":
			return (
				<div
					className="max-w-none h-full
				prose
				prose-p:m-0 prose-p:pb-2 prose-p:font-montserrat prose-p:tracking-wider prose-p:leading-relaxed prose-p:text-text-secondary
				prose-strong:font-semibold prose-strong:text-text-secondary
				prose-a:font-montserrat prose-a:text-text-secondary
				prose-h5:m-0 prose-h5:pb-1 prose-h5:font-montserrat prose-h5:font-semibold prose-h5:text-lg prose-h5:text-text-primary
				prose-h6:font-montserrat prose-h6:tracking-wider prose-h6:font-medium prose-h6:text-lg prose-h6:text-text-secondary
				prose-ul:font-montserrat prose-ul:text-text-secondary prose-ul:list-['>']
				prose-ol:font-montserrat prose-ol:text-text-secondary
				prose-code:font-plex-mono prose-code:text-text-secondary"
				>
					<PortableText value={content.richTextContent} />
				</div>
			);

		case "target_user":
			return <TargetUserCard targetUser={content.targetUser} />;

		case "research_method":
			return (
				<ResearchMethodCard researchMethod={content.researchMethod} />
			);

		case "image":
			return <ImageContentComponent image={content.image} />;

		case "quote":
			return <QuoteCard quote={content.quote} />;

		case "metric":
			return <MetricCard metric={content.metric} />;

		case "insight_references":
			return (
				<InsightReferences
					insightReferences={content.insightReference}
				/>
			);

		case "project_goal":
			return <ProjectGoalCard goal={content.projectGoal} />;

		case "callout":
			return <CalloutComponent callout={content.callout} />;
	}

	return <div>ContentComponent</div>;
};

export default ContentComponent;
