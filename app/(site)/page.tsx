import Image from "next/image";
import HeroLinks from "../components/HeroLinks/HeroLinks";
import Work from "../components/Work/Work";

export default function Home() {
	return (
		<>
			<section className="py-20 w-full border-b border-border-primary">
				<div className=" relative w-11/12 max-w-7xl mx-auto overflow-hidden">
					<div className="w-full min-h-[400px] flex flex-col justify-between">
						<div className="w-full flex flex-col space-y-4 z-10">
							<h2 className="font-plex-mono font-medium text-text-secondary tracking-wider text-2xl">
								Prajas Kadepurkar
							</h2>
							<p className="font-plex-sans font-semibold text-text-primary text-3xl tracking-widest text-shadow-primary leading-10">
								Building Human-centered interfaces <br /> from
								initial concepts to implementation.
							</p>
						</div>
						<HeroLinks/>
					</div>
					<figure className="absolute right-0 top-1/2 translate-x-[40%] xl:translate-x-0 -translate-y-1/2 w-[350px] aspect-square opacity-10 lg:opacity-90 filter blur-[1px] lg:blur-none">
						<Image
							className="object-contain animate-hero will-change-transform"
							src="/hero.png"
							alt=""
							fill
							priority
						/>
					</figure>
				</div>
			</section>
			<Work/>
		</>
	);
}
