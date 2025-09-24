import ContentComponent from "@/app/components/ContentComponent/ContentComponent";
import ProjectHero from "@/app/components/ProjectHero/ProjectHero";
import UpNext from "@/app/components/UpNext/UpNext";
import { getProjectContent } from "@/sanity/sanity-utils";
import { CSSProperties } from "react";

type Params = Promise<{ slug: string }>;

const page = async (props: { params: Params }) => {
	const { slug } = await props.params;

	const projectContent = await getProjectContent(slug);

	return (
		<article
			className="w-full"
			style={
				{
					"--project-color": projectContent.color,
					"--project-color-accent": projectContent.color + "14",
					"--project-color-border": projectContent.color + "4a",
				} as CSSProperties
			}
		>
			<ProjectHero project={projectContent} />
			{projectContent.content &&
				projectContent.content.map((section, index) => {
					return (
						<section
							key={index}
							className={`w-full py-12`}
						>
							<div className="w-11/12 max-w-6xl mx-auto">
								<h3
									className="mb-2 font-nunito font-bold tracking-wide text-xl text-text-secondary"
									style={{
										color: "var(--project-color)",
									}}
								>
									{section.heading}
								</h3>
								<h4 className="w-full mb-8 font-montserrat font-semibold tracking-wide text-xl text-text-primary">
									{section.subHeading}
								</h4>
								<div className="w-full flex flex-col space-y-12">
									{section.subSections.map(
										(subSection, index) => {
											return (
												<div
													key={index}
													className="w-full flex flex-col space-y-8"
												>
													{subSection.projectRows.map(
														(row, index) => {
															return (
																<div
																	key={index}
																	className="w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8"
																>
																	{row.columns.map(
																		(
																			column,
																			index
																		) => {
																			return (
																				<div
																					key={
																						index
																					}
																					className="w-full flex flex-col space-y-4"
																				>
																					{column.contentComponents.map(
																						(
																							component,
																							index
																						) => {
																							return (
																								<ContentComponent
																									key={
																										index
																									}
																									content={
																										component
																									}
																								/>
																							);
																						}
																					)}
																				</div>
																			);
																		}
																	)}
																</div>
															);
														}
													)}
												</div>
											);
										}
									)}
								</div>
							</div>
						</section>
					);
				})}
			<UpNext currentProjectOrder={projectContent.order} />
		</article>
	);
};

export default page;
