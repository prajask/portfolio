import React from 'react';

export default function PhotoCard(props) {
    return (
        <div
            className="bg-gray
            shadow-lg 
            overflow-hidden
            dark:bg-dark-gray/90"
        >

            <img
                className="w-full h-auto
                lg:h-full"
                src={props.photo.photo.asset.url}
                alt="Photograph"
            />

        </div>
    )
}
