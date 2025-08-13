import HeroLinks from "@/app/components/HeroLinks/HeroLinks";
import Image from "next/image";
import { BiBriefcase, BiSolidGraduation } from "react-icons/bi";

const WORK_EXPERIENCE = [
	{
		position: "UX Designer & Engineer",
		company: "Mosi Audio",
		duration: "Mar 2025 - Present",
	},
	{
		position: "UX Engineer",
		company: "IBM",
		duration: "Apr 2024 - Dec 2024",
	},
	{
		position: "Software Development Consultant",
		company: "Capgemini",
		duration: "Nov 2020 - Jul 2023",
	},
];

const EDUCATION = [
	{
		school: "University of California, Santa Cruz",
		degree: "M.S. Human-Computer Interaction",
		duration: "Sep 2023 - Dec 2024",
	},
	{
		school: "University of Mumbai",
		degree: "B.E. Computer Engineering",
		duration: "Aug 2016 - Oct 2020",
	},
];

const page = () => {
	return (
		<article className="w-full">
			<section className="w-full py-20">
				<div className="w-11/12 max-w-7xl mx-auto flex space-x-12">
					<div className="w-full flex flex-col border-[1.5px] border-border-secondary rounded-2xl">
						<h2 className="p-4 font-plex-mono font-medium uppercase border-b-1 border-border-secondary">
							Experience
						</h2>
						<ul className="list-none">
							{WORK_EXPERIENCE.map(
								(experience, index, { length }) => {
									return (
										<li
											key={experience.duration}
											className={`w-full ${index === length - 1 ? "border-b-0" : "border-b-[1.5px]"} border-border-secondary bg-background-secondary`}
										>
											<div className="p-4 flex items-start space-x-4">
												<BiBriefcase
													size={40}
													className="shrink-0 p-1 mt-1 border-[1.5px] border-border-secondary rounded-xl"
												/>
												<div className="w-full flex flex-col">
													<h3 className="font-plex-sans font-medium">
														{experience.position}
													</h3>
													<h4>
														{experience.company}
													</h4>
													<p>{experience.duration}</p>
												</div>
											</div>
										</li>
									);
								}
							)}
						</ul>
					</div>

					<div className="w-full flex flex-col border-[1.5px] border-border-secondary rounded-2xl">
						<h2 className="p-4 font-plex-mono font-medium uppercase border-b-[1.5px] border-border-secondary">
							Education
						</h2>
						<ul className="list-none">
							{EDUCATION.map((education, index, {length}) => {
								return (
									<li
										key={education.duration}
										className={`w-full ${index === length - 1 ? "border-b-0" : "border-b-[1.5px]"} border-border-secondary bg-background-secondary`}
									>
										<div className="p-4 flex items-start space-x-4">
											<BiSolidGraduation
												size={40}
												className="shrink-0 p-1 mt-1 border-[1.5px] border-border-secondary rounded-xl"
											/>
											<div className="w-full flex flex-col">
												<h3 className="font-plex-sans font-medium">
													{education.school}
												</h3>
												<h4>{education.degree}</h4>
												<p>{education.duration}</p>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
		</article>
	);
};

export default page;
