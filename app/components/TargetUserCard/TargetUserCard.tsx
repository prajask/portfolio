import { urlFor } from "@/sanity/sanity-utils";
import { TargetUser } from "@/types/TargetUser";
import Image from "next/image";

type TargetUserCardProps = {
	targetUser: TargetUser;
};

const TargetUserCard = ({ targetUser }: TargetUserCardProps) => {
	return (
		<div
			className="w-full h-full flex items-end"
			style={{
				borderColor: "var(--project-color-border)",
				backgroundColor: "var(--project-color-accent)",
			}}
		>
			<figure className="relative w-1/3 aspect-[719/850]" style={{}}>
				<Image
					src={urlFor(targetUser.avatar)}
					alt=""
					aria-hidden
					width={720}
					height={850}
					className="w-full"
				/>
			</figure>
			<div className="pt-8 pb-4 px-6 w-full flex flex-col space-y-4">
				<q className="font-montserrat text-text-primary">{targetUser.quote}</q>
				<div className="w-full flex flex-col space-y-1">
					{/* <p className="font-plex-mono text-text-secondary">{targetUser.name}</p> */}
					<p className="font-plex-mono text-text-secondary">{targetUser.background}</p>
				</div>
			</div>
		</div>
	);
};

export default TargetUserCard;
