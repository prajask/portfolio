import Image from "next/image";

const page = () => {
	return (
		<article className="w-full">
			<section className="w-full py-20 border-b border-border-primary">
				<div className="w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between">
						<div className="w-full lg:w-1/2 flex flex-col space-y-4">
							<h2 className="font-plex-mono font-semibold text-text-primary text-2xl">
								Hey there! I am Prajas...
							</h2>
							<h3 className="font-plex-mono font-medium text-xl text-text-secondary">
								a UX Engineer based in San Francisco,
								California.
							</h3>
							<p className="font-plex-sans text-text-secondary leading-7">
								I enjoy building Human-Centered Interfaces,
								starting with user research, shaping early
								concepts, prototyping interactions quickly, and
								turning them into functional, testable
								experiences.
							</p>
						</div>
						<figure className="w-full lg:w-1/3 aspect-square relative border-2 border-border-primary shadow-project-card">
							<Image
								className="object-cover"
								src="/about.JPG"
								alt=""
								fill
							/>
						</figure>
					</div>
				</div>
			</section>
			<section className="w-full py-20 border-b border-border-primary">
				<div className="w-11/12 max-w-7xl mx-auto">
					<figure className="w-full aspect-video relative border-2 border-border-primary">
						<Image
							className="object-cover"
							src="/skills.png"
							alt=""
							fill
						/>
					</figure>
				</div>
			</section>
			{/* <section className="w-full py-20 border-b border-border-primary">
				<div className="w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col space-y-4">
						<h2 className="font-plex-mono font-semibold text-text-primary text-2xl">
							How I got here...
						</h2>
						<p className="font-plex-sans text-text-secondary">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Architecto obcaecati necessitatibus, odit
							porro corrupti placeat! Culpa natus inventore
							adipisci. Facilis, voluptas! Inventore, illo? Libero
							sint dolorum alias. Exercitationem, nobis velit?
						</p>
					</div>
				</div>
			</section>
			<section className="w-full py-20 border-b border-border-primary">
				<div className="w-11/12 max-w-7xl mx-auto">
					<div className="w-full flex flex-col space-y-4">
						<h2 className="font-plex-sans font-semibold text-text-primary text-2xl">
							What I do outside of work...
						</h2>
						<p className="font-plex-mono text-text-secondary">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Architecto obcaecati necessitatibus, odit
							porro corrupti placeat! Culpa natus inventore
							adipisci. Facilis, voluptas! Inventore, illo? Libero
							sint dolorum alias. Exercitationem, nobis velit?
						</p>
					</div>
				</div>
			</section> */}
		</article>
	);
};

export default page;
