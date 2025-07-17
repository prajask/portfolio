import { Quote } from "@/types/Quote";
import { RiDoubleQuotesL } from "react-icons/ri";

type QuoteCardProps = {
	quote: Quote;
};
const QuoteCard = ({ quote }: QuoteCardProps) => {
	return (
		<div className="p-4 w-full h-full flex flex-col space-y-2 bg-background-secondary border-2 border-border-primary shadow-project-card">
			<RiDoubleQuotesL size={32} />
			<q className="font-plex-mono text-text-secondary">
				{quote.quote}
			</q>
		</div>
	);
};

export default QuoteCard;
