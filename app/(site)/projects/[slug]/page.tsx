import ContentComponent from "@/app/components/ContentComponent/ContentComponent";
import ProjectHero from "@/app/components/ProjectHero/ProjectHero";
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
					"--project-color-accent": projectContent.color + "0d",
				} as CSSProperties
			}
		>
			<ProjectHero project={projectContent} />
			{projectContent.content &&
				projectContent.content.map((section, index) => {
					return (
						<section
							key={index}
							className="w-full py-20 border-b border-border-primary"
						>
							<div className="w-11/12 max-w-7xl mx-auto">
								<h2 className="mb-1 font-plex-mono uppercase tracking-wide text-text-secondary">
									{section.heading}
								</h2>
								<h3 className="mb-4 font-plex-sans font-medium text-xl text-text-primary">
									{section.subHeading}
								</h3>
								<div className="w-full flex flex-col space-y-12">
									{section.subSections.map(
										(subSection, index) => {
											return (
												<div
													key={index}
													className="w-full flex flex-col space-y-10"
												>
													{subSection.projectRows.map(
														(row, index) => {
															return (
																<div
																	key={index}
																	className="w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-10"
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
																					className="w-full flex flex-col space-y-6"
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
		</article>
	);
};

export default page;
