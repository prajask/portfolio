import { Metric } from "@/types/Metric";

type MetricCardProps = {
	metric: Metric;
};
const MetricCard = ({ metric }: MetricCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-2 border-1 border-border-secondary"
			style={{
				backgroundColor: "var(--project-color-accent)",
				borderColor: "var(--project-color-border)",
			}}
		>
			<p className="font-montserrat font-semibold text-2xl text-text-primary">
				{metric.value}
			</p>
			<p className="font-nunito text-lg text-text-secondary">
				{metric.metric}
			</p>
		</div>
	);
};

export default MetricCard;
