import { ContentComponentSchema } from "@/types/ContentComponent";
import { PortableText } from "next-sanity";
import TargetUserCard from "../TargetUserCard/TargetUserCard";
import QuoteCard from "../Quote/QuoteCard";
import MetricCard from "../MetricCard/MetricCard";
import InsightReferences from "../InsightReferences/InsightReferences";
import ResearchMethodCard from "../ResearchMethodCard/ResearchMethodCard";
import ImageContentComponent from "../ImageContentComponent/ImageContentComponent";
import ProjectGoalCard from "../ProjectGoalCard/ProjectGoalCard";

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
				prose-p:font-plex-sans prose-p:text-base/relaxed prose-p:text-text-secondary
				prose-h4:font-plex-sans prose-h4:font-medium prose-h4:text-xl prose-h4:text-text-primary
				prose-h5:font-plex-mono prose-h5:tracking-wider prose-h5:uppercase prose-h5:text-text-secondary
				prose-h6:font-plex-sans prose-h6:font-medium prose-h6:text-lg prose-h6:text-text-primary
				prose-ul:font-plex-sans prose-ul:text-text-secondary
				prose-ol:font-plex-sans prose-ol:text-text-secondary"
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
	}

	return <div>ContentComponent</div>;
};

export default ContentComponent;
