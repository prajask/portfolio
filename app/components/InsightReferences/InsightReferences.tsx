import { InsightReference } from "@/types/InsightReference";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type InsightReferencesProps = {
	insightReferences: InsightReference;
};

const InsightReferences = ({ insightReferences }: InsightReferencesProps) => {
	return (
		<div className="w-full">
			<ul className="flex items-center gap-4 md:space-y-0 flex-wrap">
				{insightReferences.reference.map((insight, index) => {
					return (
						<li
							key={index}
							className="p-2 flex items-center space-x-2 border-1"
							style={{
								borderColor: "var(--project-color-border)",
							}}
						>
							<DynamicIcon icon={insight.icon} size="20" color="var(--project-color-icon)"/>
							<span className="font-plex-mono text-text-secondary">
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
