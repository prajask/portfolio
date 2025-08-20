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
				prose-p:m-0 prose-p:font-nunito prose-p:text-lg/relaxed prose-p:text-text-secondary
				prose-strong:font-bold
				prose-h4:m-0 prose-h4:font-nunito prose-h4:font-semibold prose-h4:text-xl prose-h4:text-text-primary
				prose-h5:font-nunito prose-h5:tracking-wider prose-h5:uppercase prose-h5:text-text-secondary
				prose-h6:font-nunito prose-h6:font-medium prose-h6:text-lg prose-h6:text-text-primary
				prose-ul:font-nunito prose-ul:text-text-secondary prose-ul:text-lg
				prose-ol:font-nunito prose-ol:text-text-secondary prose-ol:text-lg"
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
