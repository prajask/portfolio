import React from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import PhotoCard from "../PhotoCard/PhotoCard";

export default function Showcase(props) {
    return (
        <section
            className="w-4/5 mx-auto mb-20
                lg:w-[90%]
                2xl:w-4/5"
        >

            <h3
                className="text-3xl text-primary font-bold
                    dark:text-primary
                    md:text-4xl"
            >
                {props.type}
            </h3>

            <div
                className="mt-10
                    grid grid-cols-1 gap-8
                    lg:grid-cols-3"
            >
                {
                    props.type === "Projects"
                        ? props.projects !== null && props.projects.map(project => <ProjectCard key={project.slug.currnet} project={project} />)
                        : props.photos !== null && props.photos.map(photo => <PhotoCard key={photo.slug.current} photo={photo} />)
                }
            </div>

        </section>
    );
}