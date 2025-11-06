import { FiCpu, FiUsers } from "react-icons/fi";
import Work from "../components/Work/Work";
import ToolTip from "../components/ToolTip/ToolTip";
import Image from "next/image";

export default function Home() {
	return (
		<article className="w-full">
			<section className="py-16 w-full">
				<div className="relative w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col items-start space-y-8">
						<div className="w-full flex flex-col space-y-10 z-10">
							<h1 className="inline-block font-montserrat font-bold text-4xl tracking-wider leading-16 text-text-primary">
								Systems-driven Product Designer
							</h1>
							<h2 className="w-full font-nunito font-medium text-text-primary text-2xl tracking-wide leading-12">
								Drawing on a background in &nbsp;
								<span
									className="relative inline-flex items-center space-x-2 leading-6 bg-highlight-primary/15 cursor-default group"
									aria-describedby="degree-hci"
								>
									<ToolTip
										className="bg-highlight-primary/15 border-highlight-primary"
										id="degree-hci"
									>
										<Image
											className="w-52 aspect-[4/1] object-contain"
											src="/ucsc.png"
											width="1635"
											height="319"
											alt=""
										/>
										<p className="font-montserrat text-sm font-semibold text-text-primary">
											M.S. Human-Computer Interaction
										</p>
										<p className="font-nunito text-sm text-text-secondary">
											University of California, Santa Cruz
										</p>
									</ToolTip>
									&nbsp;
									<FiUsers />{" "}
									<span>Human-Computer Interaction</span>
									&nbsp;
								</span>
								&nbsp; and &nbsp;
								<span
									className="relative inline-flex items-center space-x-2 leading-6 bg-highlight-secondary/15 cursor-default group"
									aria-describedby="degree-ce"
								>
									<ToolTip
										className="bg-highlight-secondary/15"
										id="degree-ce"
									>
										<Image
											className="w-20 aspect-[16/18] object-contain"
											src="/mu.png"
											width="612"
											height="723"
											alt=""
										/>
										<p className="font-montserrat text-sm font-semibold text-text-primary">
											B.E. Computer Engineering
										</p>
										<p className="font-nunito text-sm text-text-secondary">
											University of Mumbai
										</p>
									</ToolTip>
									&nbsp;
									<FiCpu /> <span>Computer Engineering</span>
									&nbsp;
								</span>
								<br />I blend&nbsp;
								<span className="font-bold">
									UX Design, Interactive Prototyping &amp;
									Product Strategy
								</span>
								<br />
								To shape user-centered experiences across
								diverse tech domains.
							</h2>
						</div>
					</div>
				</div>
			</section>
			<Work />
		</article>
	);
}
