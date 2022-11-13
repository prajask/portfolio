import React, { useState, useEffect } from "react";

import sanityClient from "../../sanityClient";

import PhotoCard from "../PhotoCard/PhotoCard";

export default function Photography() {

    const [allPhotos, setAllPhotos] = useState(null);

    useEffect(() => {

        sanityClient.fetch(
            `*[_type == "photography"]{
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
                setAllPhotos(data);
            }
        ).catch(console.error);

    }, []);

    return (
        <section
            className="w-4/5 mx-auto my-24
            columns-1 gap-6 space-y-6
            lg:w-[90%]
            2xl:w-4/5
            lg:columns-3"
        >
            {
                allPhotos && allPhotos.map(
                    photo => {
                        return <PhotoCard key={photo.photo.asset._id} photo={photo} />
                    }
                )
            }
        </section>
    );
}