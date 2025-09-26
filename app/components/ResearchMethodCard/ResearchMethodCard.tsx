import { ResearchMethod } from "@/types/ResearchMethod";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
// import Image from "next/image";
// import { urlFor } from "@/sanity/sanity-utils";
// import { getImageDimensions } from "@sanity/asset-utils";

type ResearchMethodCardProps = {
	researchMethod: ResearchMethod;
};

const ResearchMethodCard = ({ researchMethod }: ResearchMethodCardProps) => {
	// let imageURL = "";
	// let imageWidth = 0;
	// let imageHeight = 0;
	// if (researchMethod.image) {
	// 	imageURL = urlFor(researchMethod.image);
	// 	const { width, height } = getImageDimensions(imageURL);
	// 	imageWidth = width;
	// 	imageHeight = height;
	// }
	return (
		<div
			className="w-full h-full flex flex-col divide-y divide-border-secondary bg-background-primary border-1 border-border-secondary rounded-lg"
			style={{
				borderColor: "var(--project-color-border)",
			}}
		>
			<div className="px-4 py-2 w-full flex flex-col items-start space-y-2 font-montserrat">
				<div className="flex items-center space-x-2">
					<DynamicIcon icon={researchMethod.method.icon} size="20" />
					<p className="font-montserrat text-text-secondary">
						{researchMethod.method.method}
					</p>
				</div>

				<span className="font-montserrat text-text-secondary hidden">
					{"/ /"}
				</span>

				<div className="flex items-center space-x-2">
					<DynamicIcon
						icon={researchMethod.resources.icon}
						size="20"
					/>
					<p className="font-montserrat text-text-secondary">
						{researchMethod.resources.resources}
					</p>
				</div>
			</div>
			{/* {researchMethod.keyInsights && (
				<div className="w-full flex flex-col divide-y divide-border-secondary">
					<p className="p-4 w-full font-montserrat font-medium tracking-wider text-text-primary">
						Key Insights
					</p>
					<div className="w-full flex flex-col-reverse lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border-secondary">
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
						<div className="w-full h-full flex flex-col divide-y divide-border-secondary">
							{researchMethod.keyInsights &&
								researchMethod.keyInsights.map(
									(keyInsight, index) => {
										return (
											<div
												key={index}
												className="px-4 py-6 w-full h-full flex flex-col justify-center space-y-4"
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
													<p className="font-montserrat font-medium text-lg text-text-primary">
														{keyInsight.title}
													</p>
												</div>
												{keyInsight.body && (
													<p className="font-nunito text-text-secondary">
														{keyInsight.body}
													</p>
												)}
												{keyInsight.cite && (
													<p className="font-nunito text-sm text-text-secondary">
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
			)} */}
			<div className="w-full p-4">
				<p className="font-nunito tracking-wider text-text-secondary text-sm">
					{researchMethod.goal}
				</p>
			</div>
		</div>
	);
};

export default ResearchMethodCard;
