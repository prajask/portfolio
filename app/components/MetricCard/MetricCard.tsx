import { Metric } from "@/types/Metric";

type MetricCardProps = {
	metric: Metric;
};
const MetricCard = ({ metric }: MetricCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-2 rounded-2xl border-[1.5px] border-border-secondary"
			style={{
				backgroundColor: "var(--project-color-accent)",
			}}
		>
			<p className="font-plex-sans font-semibold text-3xl text-text-primary">
				{metric.value}
			</p>
			<p className="font-plex-mono text-text-secondary">
				{metric.metric}
			</p>
		</div>
	);
};

export default MetricCard;
