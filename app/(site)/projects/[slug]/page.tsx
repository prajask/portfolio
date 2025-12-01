import ContentComponent from "@/app/components/ContentComponent/ContentComponent";
import ProjectHero from "@/app/components/ProjectHero/ProjectHero";
import UpNext from "@/app/components/UpNext/UpNext";
import { getProjectContent } from "@/sanity/sanity-utils";
import { CSSProperties } from "react";
import { LuTerminal } from "react-icons/lu";

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
					"--project-color-accent": projectContent.color + "0D",
					"--project-color-border": projectContent.color + "1A",
					"--project-color-gradient": projectContent.color + "1A",
					"--project-color-icon": "color-mix(in srgb, var(--project-color) 25%, var(--color-text-primary))"
				} as CSSProperties
			}
		>
			<ProjectHero project={projectContent} />
			{projectContent.content &&
				projectContent.content.map((section, index) => {
					return (
						<section key={index} className={`w-full py-12`}>
							<div className="w-11/12 max-w-6xl mx-auto">
								<h3
									className="mb-2 font-plex-mono font-bold tracking-wider text-base uppercase flex items-end space-x-2"
									style={{
										color: "color-mix(in srgb, var(--project-color) 80%, var(--color-text-primary))",
									}}
								>
									<LuTerminal
										size={20}
										color="color-mix(in srgb, var(--project-color) 80%, var(--color-text-primary))"
										aria-hidden
									/>
									{section.heading}
								</h3>
								<h4 className="w-full mb-8 font-montserrat font-bold tracking-wider text-xl text-text-primary">
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
																					className="w-full self-stretch flex flex-col space-y-4"
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
