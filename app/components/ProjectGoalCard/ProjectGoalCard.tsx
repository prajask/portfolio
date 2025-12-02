import { ProjectGoal } from "@/types/ProjectGoal";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type ProjectGoalCardProps = {
	goal: ProjectGoal;
};

const ProjectGoalCard = ({ goal }: ProjectGoalCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-4"
			style={{
				backgroundColor: "var(--project-color-accent)",
			}}
		>
			<DynamicIcon size="40" icon={goal.icon} color="var(--project-color-icon)"/>
			<p className="font-montserrat font-medium text-text-primary">
				{goal.goal}
			</p>
		</div>
	);
};

export default ProjectGoalCard;
