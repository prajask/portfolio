import { ResearchMethod } from "@/types/ResearchMethod";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity-utils";
import { getImageDimensions } from "@sanity/asset-utils";

type ResearchMethodCardProps = {
	researchMethod: ResearchMethod;
};

const ResearchMethodCard = ({ researchMethod }: ResearchMethodCardProps) => {
	let imageURL = "";
	let imageWidth = 0;
	let imageHeight = 0;
	if (researchMethod.image) {
		imageURL = urlFor(researchMethod.image);
		const { width, height } = getImageDimensions(imageURL);
		imageWidth = width;
		imageHeight = height;
	}
	return (
		<div className="w-full h-full flex flex-col divide-y divide-border-primary bg-background-secondary border-2 border-border-primary shadow-project-card">
			<div className="w-full p-4">
				<p className="font-plex-sans font-medium tracking-wider text-text-primary">
					{researchMethod.goal}
				</p>
			</div>
			<div className="px-4 py-2 w-full flex items-center space-x-4 font-plex-mono text-sm">
				<div className="flex items-center space-x-2">
					<DynamicIcon icon={researchMethod.method.icon} size="20" />
					<p className="font-plex-mono text-text-secondary">
						{researchMethod.method.method}
					</p>
				</div>

				<span className="font-plex-mono text-text-secondary">{"//"}</span>

				<div className="flex items-center space-x-2">
					<DynamicIcon
						icon={researchMethod.resources.icon}
						size="20"
					/>
					<p className="font-plex-mono text-text-secondary">
						{researchMethod.resources.resources}
					</p>
				</div>
			</div>
			<div className="w-full flex flex-col divide-y divide-border-primary">
				<p className="p-4 w-full font-plex-sans font-medium tracking-wider text-text-primary">
					Key Insights
				</p>
				<div className="w-full flex flex-col-reverse lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border-primary">
					{researchMethod.image && (
						<div className="w-full h-full">
							<figure className="w-full relative flex justify-center">
								<Image
									className="bg-background-secondary"
									src={imageURL}
									width={imageWidth}
									height={imageHeight}
									alt=""
								/>
							</figure>
						</div>
					)}
					<div className="w-full h-full flex flex-col divide-y divide-border-primary">
						{researchMethod.keyInsights &&
							researchMethod.keyInsights.map(
								(keyInsight, index) => {
									return (
										<div
											key={index}
											className="p-4 w-full h-full flex flex-col space-y-4"
											style={{
												backgroundColor:
													"var(--project-color-accent)",
											}}
										>
											<div className="flex items-center space-x-2">
												<DynamicIcon
													icon={keyInsight.icon}
													size="28"
												/>
												<p className="font-plex-sans font-medium text-lg text-text-primary">
													{keyInsight.title}
												</p>
											</div>
											<p className="font-plex-mono text-text-secondary">
												{keyInsight.body}
											</p>
											{keyInsight.cite && (
												<p className="font-plex-sans text-sm text-text-secondary">
													-{keyInsight.cite}
												</p>
											)}
										</div>
									);
								}
							)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchMethodCard;
