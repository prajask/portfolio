import Image from "next/image";
// import Link from "next/link";

const page = () => {
	return (
		<article className="w-full">
			<section className="w-full py-20">
				<div className="w-11/12 max-w-7xl mx-auto flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 items-start justify-start">
					<div className="w-full flex flex-col space-y-8">
						<h1 className="font-montserrat font-medium text-xl text-text-primary">
							Hello World!
						</h1>
						<p className="w-full font-nunito text-lg text-text-secondary leading-8">
							I design where tech meets real people. My focus is
							simple, make complex systems understandable and
							adaptable for humans. I care about clarity, moving
							quickly through iterations, and basing design on
							evidence.
						</p>
						<p className="w-full font-nunito text-lg text-text-secondary leading-8">
							I started as a software engineer, focused on
							building tech. Over time, my curiosity shifted
							toward the <i>&apos;who&apos;</i> and the{" "}
							<i>&apos;why&apos;</i>&nbsp; beyond the code, the
							people using these systems and the user problems
							they were meant to address. That shift led me to UX,
							where I now work at the intersection of engineering
							depth and human experience.
						</p>
						{/* <Link
							href={"/"}
							className="w-fit px-4 py-2 mt-4 font-montserrat text-text-primary font-medium border-1 border-text-primary hover:bg-text-primary hover:text-background-secondary rounded-lg transition-all ease-in duration-150"
						>
							Get in touch
						</Link> */}
					</div>
					<figure className="flex w-full xl:w-1/2 items-center justify-center relative aspect-square bg-radial from-highlight-primary/45 to-background-primary to-60% rounded-lg">
						<Image
							className="w-full px-16 max-w-5xl object-cover"
							src="/me.png"
							width="2213"
							height="2213"
							alt=""
						/>
					</figure>
				</div>
			</section>
		</article>
	);
};

export default page;
