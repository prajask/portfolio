import { Quote } from "@/types/Quote";
import { RiDoubleQuotesL } from "react-icons/ri";

type QuoteCardProps = {
	quote: Quote;
};
const QuoteCard = ({ quote }: QuoteCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-2 rounded-lg border-1 border-border-secondary"
			style={{
				backgroundColor: "var(--project-color-accent)",
				borderColor: "var(--project-color-border)",
			}}
		>
			<RiDoubleQuotesL size={32} />
			<q className="font-nunito text-text-secondary">{quote.quote}</q>
		</div>
	);
};

export default QuoteCard;
