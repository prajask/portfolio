import { ProjectGoal } from "@/types/ProjectGoal";
import DynamicIcon from "../DynamicIcon/DynamicIcon";

type ProjectGoalCardProps = {
	goal: ProjectGoal;
};

const ProjectGoalCard = ({ goal }: ProjectGoalCardProps) => {
	return (
		<div className="p-4 w-full h-full flex flex-col space-y-4 bg-background-secondary border-2 border-border-primary shadow-project-card">
			<DynamicIcon size="48" icon={goal.icon} />
			<p className="font-plex-sans font-semibold text-lg text-text-primary">{goal.goal}</p>
		</div>
	);
};

export default ProjectGoalCard;
