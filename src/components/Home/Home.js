import React, { useEffect, useState } from "react";

import sanityClient from "../../sanityClient";

import Hero from "../Hero/Hero";
import Showcase from "../Showcase/Showcase";

export default function Home() {

    const [featuredProjects, setfeaturedProjects] = useState(null);
    const [featuredPhotos, setFeaturedPhotos] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"]{
                    slug,
                    title,
                    description,
                    main_image{
                        asset->{
                            _id,
                            url
                        },
                    },
                }`
        ).then(
            data => {
                setfeaturedProjects(data);
            }
        ).catch(console.error);

        sanityClient.fetch(
            `*[_type == "photography" && featured]{
                slug,
                photo{
                    asset->{
                        _id,
                        url
                    },
                },
                location
            }`
        ).then(
            data => {
                setFeaturedPhotos(data);
            }
        ).catch(console.error);

    }, []);

    return (
        <React.Fragment>
            <Hero />
            <Showcase type="Projects" projects={featuredProjects} />
            <Showcase type="Photography" photos={featuredPhotos} />
        </React.Fragment>
    );
}