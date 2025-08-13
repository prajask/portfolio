import HeroLinks from "../components/HeroLinks/HeroLinks";
import Work from "../components/Work/Work";

export default function Home() {
	return (
		<>
			<section
				className="py-30 w-full"
			>
				<div className=" relative w-11/12 max-w-7xl mx-auto overflow-hidden">
					<div className="w-full flex flex-col space-y-12">
						<div className="w-full flex flex-col space-y-4 z-10">
							<h2 className="font-plex-sans font-semibold text-text-primary text-4xl tracking-widest leading-14">
								Building Human-Centered Interfaces <br /> from
								inital concepts to implementation.
							</h2>
						</div>
						<HeroLinks />
					</div>
				</div>
			</section>
			<Work />
		</>
	);
}
