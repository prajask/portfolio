import { FiCpu, FiUsers } from "react-icons/fi";
import Work from "../components/Work/Work";

export default function Home() {
	return (
		<>
			<section className="pt-16 w-full">
				<div className=" relative w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col items-start space-y-8">
						<div className="w-full flex flex-col space-y-4 z-10">
							<h2 className="font-montserrat font-bold text-4xl tracking-wider leading-16 bg-gradient-to-r from-[#129490] via-[#EF7B45] to-[#129490] text-transparent bg-clip-text animate-text-gradient bg-[length:200%]">
								Systems-driven UX Designer & Engineer
								{/* <br />Sipmlyfying Complex Tech with
								Human-Centered Experiences. */}
							</h2>
							<h3 className="font-montserrat font-medium text-text-primary text-xl tracking-wide leading-12">
								Drawing on a background in &nbsp;
								<span className="inline-flex items-center space-x-2 bg-[#EF7B451f] leading-5">
									&nbsp;
									<FiUsers />{" "}
									<span>Human-Computer Interaction</span>
									&nbsp;
								</span>
								&nbsp; and &nbsp;
								<span className="inline-flex items-center space-x-2 bg-[#1294901f] leading-6">
									&nbsp;
									<FiCpu /> <span>Computer Engineering</span>
									&nbsp;
								</span>
								<br />I have growing experience across&nbsp;
								<span className="font-semibold text-[#129490]">
									User Research&nbsp;&middot;&nbsp;
								</span>
								<span className="font-semibold text-[#129490]">
									Experience Design&nbsp;&middot;&nbsp;
								</span>
								<span className="font-semibold text-[#129490]">
									Coded Prototyping&nbsp;&middot;&nbsp;
								</span>
								<span className="font-semibold text-[#129490]">
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
