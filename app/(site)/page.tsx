import { FiCpu, FiUsers } from "react-icons/fi";
import Work from "../components/Work/Work";

export default function Home() {
	return (
		<article className="w-full">
			<section className="py-16 w-full">
				<div className=" relative w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col items-start space-y-8">
						<div className="w-full flex flex-col space-y-4 z-10">
							<h1 className="font-montserrat font-semibold text-4xl tracking-wider leading-16">
								Systems-driven UX Designer & Engineer
							</h1>
							<h2 className="w-full font-nunito font-medium text-text-primary text-xl tracking-wide leading-12">
								Drawing on a background in &nbsp;
								<span className="inline-flex items-center space-x-2 leading-6 bg-highlight-primary/15">
									&nbsp;
									<FiUsers />{" "}
									<span>Human-Computer Interaction</span>
									&nbsp;
								</span>
								&nbsp; and &nbsp;
								<span className="inline-flex items-center space-x-2 leading-6 bg-highlight-secondary/15">
									&nbsp;
									<FiCpu /> <span>Computer Engineering</span>
									&nbsp;
								</span>
								<br />
								I have growing experience across User Research,
								Experience Design, Coded Prototyping &amp;
								Product Strategy
								<br />
								Contributing to User-Centered Experiences in
								diverse and complex domains.
							</h2>
						</div>
					</div>
				</div>
			</section>
			<Work />
		</article>
	);
}
