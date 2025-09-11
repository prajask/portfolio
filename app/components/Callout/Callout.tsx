import { Callout } from "@/types/Callout";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type CalloutPros = {
	callout: Callout;
};

const CalloutComponent = ({ callout }: CalloutPros) => {
	return (
		<div
			className="p-4 w-full flex flex-col space-y-4 border-1 border-border-secondary rounded-2xl"
			style={{
				borderColor: "var(--project-color-border)",
			}}
		>
			<div className="w-full flex items-center space-x-2">
				<DynamicIcon icon={callout.icon} size="32" />
				<p className="font-nunito font-semibold text-lg text-text-primary">
					{callout.title}
				</p>
			</div>
			<p className="font-nunito text-lg text-text-secondary">
				{callout.body}
			</p>
		</div>
	);
};

export default CalloutComponent;
