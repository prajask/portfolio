import { ResearchMethod } from "@/types/ResearchMethod";
import DynamicIcon from "../DynamicIcon/DynamicIcon";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
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
			className="w-full flex flex-col"
			style={{
				backgroundColor: "var(--project-color-accent)",
			}}
		>
			<div className="p-4 w-full flex flex-col items-start space-y-4 font-montserrat">
				<div className="flex items-end space-x-2">
					<DynamicIcon icon={researchMethod.method.icon} size="28" color="var(--project-color-icon)"/>
					<p className="font-montserrat text-text-primary">
						{researchMethod.method.method}
					</p>
				</div>

				<div className="flex items-end space-x-2">
					<DynamicIcon
						icon={researchMethod.resources.icon}
						size="28"
						color="var(--project-color-icon)"
					/>
					<p className="font-montserrat text-text-primary">
						{researchMethod.resources.resources}
					</p>
				</div>
			</div>
			<Accordion type="single" collapsible>
				<AccordionItem value={researchMethod.method.method}>
					<AccordionTrigger className="px-4 font-plex-mono text-sm text-text-secondary">Details</AccordionTrigger>
					<AccordionContent>
						<p className="px-4 font-montserrat tracking-wider text-text-secondary text-sm">
							{researchMethod.goal}
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default ResearchMethodCard;
