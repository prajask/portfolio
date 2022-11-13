import React from 'react'

export default function ProjectCard(props) {
    return (
        <div
            className="bg-gray/80 shadow-lg
            dark:bg-dark-gray/90"
        >

            <img
                className="w-full object-cover object-center"
                src={props.project.main_image.asset.url}
                alt={props.project.title}
            />

            <div
                className="w-[90%] h-64 mx-auto my-5
                flex flex-col justify-between items-start
                md:h-44
                lg:h-64 
                xl:h-52"
            >
                <h3
                    className="text-lg font-bold
                    xl:text-xl"
                >
                    {props.project.title}
                </h3>

                <p
                    className="text-left text-dark-gray/80
                    dark:text-gray/80"
                >
                    {props.project.description}
                </p>


                <a
                    className="text-md text-secondary font-semibold
                    xl:text-lg
                    dark:text-secondary"
                    href={`/project/${props.project.slug.current}`}
                    rel="noopener noreferrer"
                >
                    View Project
                </a>

            </div>

        </div >
    )
}

