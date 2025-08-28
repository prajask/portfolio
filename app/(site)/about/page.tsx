import { FiBookOpen, FiBriefcase } from "react-icons/fi";

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
		position: "UX Intern - Research & Strategy",
		company: "Mosi Audio",
		duration: "Jul 2024 - Sep 2024",
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
			<section className="w-full py-16">
				<div className="w-11/12 max-w-7xl mx-auto space-y-8">
					<div className="w-full flex flex-col border-[1.5px] border-highlight-primary-accent rounded-2xl">
						<h2 className="p-4 font-montserrat font-semibold text-lg text-highlight-primary tracking-wide border-b-[1.5px] border-highlight-primary-accent">
							Experience
						</h2>
						<ul className="list-none">
							{WORK_EXPERIENCE.map(
								(experience, index, { length }) => {
									return (
										<li
											key={experience.duration}
											className={`w-full ${index === length - 1 ? "border-b-0 rounded-b-2xl" : "border-b-[1.5px] rounded-b-0"} border-highlight-primary-accent`}
										>
											<div className="p-4 flex items-center space-x-4">
												<FiBriefcase
													size={24}
													className="shrink-0"
												/>
												<div className="w-full flex flex-col">
													<h3 className="font-nunito font-semibold text-text-primary">
														{experience.position}
													</h3>
													<h4 className="font-nunito text-text-secondary">
														{experience.company}
													</h4>
													<p className="font-nunito text-text-secondary">
														{experience.duration}
													</p>
												</div>
											</div>
										</li>
									);
								}
							)}
						</ul>
					</div>

					<div className="w-full flex flex-col border-[1.5px] border-highlight-secondary-accent rounded-2xl">
						<h2 className="p-4 font-montserrat font-semibold text-lg text-highlight-secondary tracking-wide border-b-1 border-highlight-secondary-accent">
							Education
						</h2>
						<ul className="list-none">
							{EDUCATION.map((education, index, { length }) => {
								return (
									<li
										key={education.duration}
										className={`w-full ${index === length - 1 ? "border-b-0 rounded-b-2xl" : "border-b-[1.5px] rounded-b-0"} border-highlight-secondary-accent`}
									>
										<div className="p-4 flex items-center space-x-4">
											<FiBookOpen
												size={24}
												className="shrink-0"
											/>
											<div className="w-full flex flex-col">
												<h3 className="font-nunito font-semibold text-text-primary">
													{education.school}
												</h3>
												<h4 className="font-nunito text-text-secondary">
													{education.degree}
												</h4>
												<p className="font-nunito text-text-secondary">
													{education.duration}
												</p>
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
