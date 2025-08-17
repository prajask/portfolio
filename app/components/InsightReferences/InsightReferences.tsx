import { InsightReference } from "@/types/InsightReference";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type InsightReferencesProps = {
	insightReferences: InsightReference;
};

const InsightReferences = ({ insightReferences }: InsightReferencesProps) => {
	return (
		<div className="w-full">
			<ul
				className="flex items-center space-x-4 space-y-4 md:space-y-0 flex-wrap"
			>
				{insightReferences.reference.map((insight, index) => {
					return (
						<li
							key={index}
							className="p-2 flex items-center space-x-2 rounded-2xl border-[1.5px] border-border-secondary"
							// style={{
							// 	borderColor: "var(--project-color-accent)"
							// }}
						>
							<DynamicIcon icon={insight.icon} size="20" />
							<span className="font-nunito text-text-secondary">
								{insight.tag}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default InsightReferences;
