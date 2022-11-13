import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import sanityClient from "../../sanityClient";
import BlockContent from "@sanity/block-content-to-react";

export default function Project() {
    const [projectCotent, setProjectContent] = useState(null);
    const slug = useParams().id;

    useEffect(() => {
        sanityClient.fetch(
            `*[ slug.current == "${slug}" ]{
                body
            }`
        ).then(
            data => setProjectContent(data[0])
        ).catch(
            console.error
        );
    }, [slug]);

    return (
        projectCotent &&
        <article className="w-4/5 mx-auto mt-28
        lg:w-[90%]
        2xl:w-4/5

        prose-xl

        prose-h1:text-4xl prose-h1:font-bold lg:prose-h1:text-6xl
        prose-h1:text-primary
        dark:prose-h1:text-primary

        prose-h2:text-3xl lg:prose-h2:text-5xl prose-h2:font-semibold prose-h2:opacity-90
        prose-h2:text-secondary 
        dark:prose-h2:text-secondary

        prose-h3:font-semibold

        prose-img:mx-auto prose-img:rounded-sm prose-img:drop-shadow-xl"
        >
            <BlockContent
                blocks={projectCotent.body}
                projectId="0b5t5jfz"
                dataset="production"
            />
        </article>
    );
}