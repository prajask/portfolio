import HeroLinks from "@/app/components/HeroLinks/HeroLinks";
import Link from "next/link";
import React from "react";

const SFTechWeek = () => {
	return (
		<section className="py-12 w-full">
			<div className="w-11/12 max-w-7xl mx-auto">
				<h1 className="font-montserrat font-semibold text-4xl text-text-primary tracking-wide leading-12">
					Hey!
					<br />
					Nice meeting you at SF Tech Week.
				</h1>
				<p className="mt-4 font-nunito text-3xl tracking-wide text-text-secondary">
					Glad you found your way here.
				</p>
				<h2 className="mt-12 font-montserrat font-semibold text-3xl text-text-primary tracking-wide">
					Stay in Touch
				</h2>
				<HeroLinks />
				<p className="mt-14 font-montserrat font-semibold text-3xl text-text-primary tracking-wide">
					Look around and get to know my work a little better.
				</p>
				<Link
					href={"/"}
					className="mt-4 block px-6 py-2 w-max font-montserrat font-semibold text-lg tracking-wide text-white bg-gradient-to-r from-highlight-primary/80 to-highlight-secondary/80 hover:scale-95 rounded-lg transition-transform ease-in duration-150"
				>
					Start Exploring
				</Link>
			</div>
		</section>
	);
};

export default SFTechWeek;
