import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

import hero_image from "../../images/hero/1.jpg";

export default function Hero() {
    return (
        <main
            className="relative w-screen h-[75vh] mb-16
            flex flex-col gap-6 justify-center items-center
            z-20
            lg:h-[100vh] lg:mb-20"
        >

            <img
                className="h-44 w-44
                lg:h-72 lg:w-72
                object-cover object-center
                border-8 border-primary rounded-full
                z-20"
                src={hero_image}
                alt="Hero"
            />

            <section
                className="flex flex-col justify-between items-center gap-6 z-20"
            >
                <h1
                    className="text-3xl lg:text-5xl font-bold"
                >
                    Prajas Kadepurkar
                </h1>

                <h2
                    className="text-xl lg:text-2xl font-semibold opacity-90"
                >
                    &#8203; { /* Blank Character to prevent height changes */}

                    <Typewriter
                        className="text-xl lg:text-2xl font-semibold opacity-90"
                        words={
                            [
                                "SOFTWARE DEVELOPER",
                                "PHOTOGRAPHER",
                            ]
                        }
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                        loop={true}
                        cursor={true}
                        cursorColor="#0a7fad"
                    />
                </h2>
            </section>

            <div
                className="absolute
                w-full h-[280px] top-[40%] left-0
                bg-secondary-light/40
                -skew-y-12
                transition-all duration-150
                z-10
                lg:h-[375px] lg:top-[40%]
                dark:bg-secondary-light/10"
            />

        </main>
    )
}
