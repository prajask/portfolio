import { BsBoundingBox, BsTerminal } from "react-icons/bs";
import Work from "../components/Work/Work";
// import Link from "next/link";
// import { PiBezierCurveThin, PiCodeThin, PiCursorClickThin } from "react-icons/pi";

export default function Home() {
	return (
		<article className="w-full">
			<section className="relative w-full bg-texture">
				<div
					className="relative
					py-18
					w-11/12 max-w-7xl
					mx-auto
					flex flex-col"
				>
					<div
						className="w-full
					flex flex-col justifu-end space-y-8"
					>
						<h1
							className="flex flex-col space-y-4 font-montserrat font-bold text-4xl lg:text-5xl text-text-primary tracking-wider"
							aria-label="user experience designer and engineer"
						>
							<span className="font-plex-mono font-medium text-2xl lg:text-3xl">
								<span className="text-highlight-primary">
									u
								</span>
								ser e
								<span className="text-highlight-primary">
									x
								</span>
								perience
							</span>
							<span className="flex items-center flex-wrap gap-6">
								<span className="flex items-center space-x-4">
									<BsBoundingBox
										size={40}
										color="var(--color-text-primary)"
										aria-hidden="true"
									/>
									<span>
										<span className="text-highlight-primary">
											D
										</span>
										esigner
									</span>
								</span>

								<span className="font-plex-mono font-light text-text-secondary">
									&amp;
								</span>

								<span className="flex items-center space-x-4">
									<BsTerminal
										size={40}
										color="var(--color-text-primary)"
										aria-hidden="true"
									/>
									<span>
										<span className="text-highlight-primary">
											E
										</span>
										ngineer
									</span>
								</span>
							</span>
						</h1>
						<h2 className="font-montserrat font-medium text-2xl text-text-secondary tracking-wide leading-12">
							I build Human-Centered Experiences <br />
							for Digital & Tangible Interfaces
						</h2>
					</div>
				</div>
			</section>
			<Work />
		</article>
	);
}
