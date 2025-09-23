import { ProjectGoal } from "@/types/ProjectGoal";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type ProjectGoalCardProps = {
	goal: ProjectGoal;
};

const ProjectGoalCard = ({ goal }: ProjectGoalCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-4 rounded-lg border-1 border-border-secondary items-center"
			style={{
				backgroundColor: "var(--project-color-accent)",
				borderColor: "var(--project-color-border)",
			}}
		>
			<DynamicIcon size="48" icon={goal.icon} />
			<p className="font-montserrat font-semibold text-lg text-text-primary text-center">
				{goal.goal}
			</p>
		</div>
	);
};

export default ProjectGoalCard;
