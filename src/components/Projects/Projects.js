import React, { useState, useEffect } from "react";

import sanityClient from "../../sanityClient";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
    const [allProjects, setAllProjects] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"]{
                    title,
                    slug,
                    description,
                    main_image{
                        asset->{
                            _id,
                            url
                        },
                    },
                    body
                }`
        ).then(
            data => {
                setAllProjects(data);
            }
        ).catch(console.error);
    }, []);

    return (
        <React.Fragment>
            <section
                className="w-4/5 mx-auto my-24
            grid grid-cols-1 gap-10
            md:w-[90%]
            lg:w-[90%]
            2xl:w-4/5
            lg:grid-cols-3"
            >
                {
                    allProjects && allProjects.map(
                        project => {
                            return (
                                <ProjectCard
                                    key={project.slug.current}
                                    project={project}
                                />
                            )
                        }
                    )
                }
            </section>
        </React.Fragment>
    );
}