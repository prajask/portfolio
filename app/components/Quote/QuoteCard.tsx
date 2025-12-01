import { Quote } from "@/types/Quote";
import { RiDoubleQuotesL } from "react-icons/ri";

type QuoteCardProps = {
	quote: Quote;
};
const QuoteCard = ({ quote }: QuoteCardProps) => {
	return (
		<div
			className="p-4 w-full h-full flex flex-col space-y-2 border-1 border-border-secondary"
			style={{
				backgroundColor: "var(--project-color-accent)",
				borderColor: "var(--project-color-border)",
			}}
		>
			<RiDoubleQuotesL size={32} color="var(--project-color-icon)"/>
			<q className="font-montserrat text-lg text-text-primary">{quote.quote}</q>
			<cite className="mt-2 font-plex-mono not-italic text-sm text-text-secondary">{quote.cite}</cite>
		</div>
	);
};

export default QuoteCard;
