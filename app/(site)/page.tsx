import Link from "next/link";
import HeroLinks from "../components/HeroLinks/HeroLinks";
import Work from "../components/Work/Work";

export default function Home() {
	return (
		<>
			<section className="pt-16 w-full">
				<div className=" relative w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col items-start space-y-8">
						<div className="w-full flex flex-col space-y-4 z-10">
							<h2 className="font-montserrat font-bold text-text-primary text-4xl tracking-wider leading-16">
								I Design & Prototype Human-Centered Experiences
								<br /> for Complex Technical Systems.
							</h2>
						</div>
						{/* <HeroLinks /> */}
					</div>
				</div>
			</section>
			<Work />
		</>
	);
}
