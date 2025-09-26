import { urlFor } from "@/sanity/sanity-utils";
import { TargetUser } from "@/types/TargetUser";
import Image from "next/image";

type TargetUserCardProps = {
	targetUser: TargetUser;
};

const TargetUserCard = ({ targetUser }: TargetUserCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-4 border-1 rounded-lg"
			style={{
				borderColor: "var(--project-color-border)",
			}}
		>
			<div className="flex space-x-4">
				<figure className="w-1/3 aspect-square rounded-sm relative"
				style={{backgroundColor: "var(--project-color-accent)"}}>
					<Image
						className="w-full object-contain"
						src={urlFor(targetUser.avatar)}
						fill
						alt=""
					/>
				</figure>
				<div className="w-full self-stretch flex flex-col justify-end space-y-1">
					<p className="font-montserrat font-medium text-text-primary">
						{targetUser.name}
					</p>
					<p className="font-montserrat font-medium text-lg text-text-primary">
						{targetUser.background}
					</p>
				</div>
			</div>
			<q className="font-nunito text-text-secondary text-lg">
				{targetUser.quote}
			</q>
		</div>
	);
};

export default TargetUserCard;
