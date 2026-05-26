import { BsBoundingBox, BsTerminal } from "react-icons/bs";
import Work from "../components/Work/Work";
// import Link from "next/link";
// import { PiBezierCurveThin, PiCodeThin, PiCursorClickThin } from "react-icons/pi";

export default function Home() {
	return (
		<article className="w-full">
			<section className="relative w-full">
				<div
					className="relative
					py-18
					w-11/12 max-w-7xl
					mx-auto
					flex flex-col"
				>
					<div
						className="w-full
					flex flex-col justify-end space-y-8"
					>
						<h1
							className="flex flex-col space-y-4 font-rubik-dirt font-bold text-4xl lg:text-5xl text-text-primary tracking-wider"
							aria-label="user experience designer and engineer"
						>
							<span>User Experience</span>
							<span>Design & Engineering</span>
						</h1>
						<h2 className="font-montserrat font-medium text-3xl text-text-secondary tracking-wide leading-12">
							I build Human-Centered Experiences <br/>
							for Digital & Tangible Interfaces
						</h2>
					</div>
				</div>
			</section>
			<Work />
		</article>
	);
}
