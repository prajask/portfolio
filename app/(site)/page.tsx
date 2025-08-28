import { FiCpu, FiUsers } from "react-icons/fi";
import Work from "../components/Work/Work";

export default function Home() {
	return (
		<>
			<section className="py-20 w-full bg-gradient-to-br from-highlight-primary-accent via-background-primary to-highlight-secondary-accent bg-size-[200%_200%] animate-gradient">
				<div className=" relative w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col items-start space-y-8">
						<div className="w-full flex flex-col space-y-4 z-10">
								<h2 className="font-montserrat font-bold text-4xl tracking-wider leading-16 text-text-primary">
								Systems-driven UX Designer & Engineer
							</h2>
							<h3 className="w-full font-montserrat font-medium text-text-primary text-xl tracking-wide leading-12">
								Drawing on a background in &nbsp;
								<span className="inline-flex items-center space-x-2 bg-highlight-secondary-accent leading-6">
									&nbsp;
									<FiUsers />{" "}
									<span>Human-Computer Interaction</span>
									&nbsp;
								</span>
								&nbsp; and &nbsp;
								<span className="inline-flex items-center space-x-2 bg-highlight-primary-accent leading-6">
									&nbsp;
									<FiCpu /> <span>Computer Engineering</span>
									&nbsp;
								</span>
								<br />I have growing experience across&nbsp;
								<span className="inline font-medium italic">
									User Research&nbsp;&middot;&nbsp;
								</span>
								<span className="inline font-medium italic">
									Experience Design&nbsp;&middot;&nbsp;
								</span>
								<span className="inline font-medium italic">
									Coded Prototyping&nbsp;&middot;&nbsp;
								</span>
								<span className="inline font-medium italic">
									Product Strategy
								</span>
								&nbsp;contributing to user-centered experiences
								in diverse and complex domains.
							</h3>
						</div>
						{/* <HeroLinks /> */}
					</div>
				</div>
			</section>
			<Work />
		</>
	);
}
