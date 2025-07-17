import { Metric } from "@/types/Metric";

type MetricCardProps = {
	metric: Metric;
};
const MetricCard = ({ metric }: MetricCardProps) => {
	return (
		<div className="p-4 w-full h-full flex flex-col space-y-2 bg-background-secondary border-2 border-border-primary shadow-project-card">
			<p className="font-plex-sans font-semibold text-xl text-text-primary">
				{metric.value}
			</p>
			<p className="font-plex-mono text-text-secondary">{metric.metric}</p>
		</div>
	);
};

export default MetricCard;
