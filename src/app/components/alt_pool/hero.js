"use client"

import Image from "next/image"
import { RevealWrapper, RevealList } from "next-reveal"

export default function Hero(){
    return(
        <main 
                className="mt-[70px]
                flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[60vh]
                lg:flex-row"
            >
                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-b border-dark-primary
                    lg:w-1/2 lg:h-full
                    lg:border-r lg:border-b-0"
                >
                    <h1
                        className="
                        mb-[12px]
                        flex flex-col
                        text-3xl font-bold"
                    >
                        Cue Craft
                    </h1>

                    <h2
                        className="mb-[24px]
                        text-2xl"
                    >
                        Reinventing the Virtual Cues
                    </h2>

                    <RevealList
                        interval={50} delay={200}
                        className="mb-[12px]
                        flex flex-col items-start justify-start"
                    >
                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-t border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-bold"
                            >
                                Duration
                            </p>
                            <p>January 2024 to March 2024</p>
                        </li>

                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-bold"
                            >
                                Team Size
                            </p>
                            <p>5</p>
                        </li>

                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-bold"
                            >
                                Area
                            </p>
                            <p>Alt. Controller</p>
                        </li>
                        
                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-bold"
                            >
                                My Role
                            </p>
                            <p>UX Design &amp; Engineering</p>
                        </li>
                    </RevealList>
                </section>
                
                <section
                    className="flex flex-row items-center justify-center
                    py-[24px]
                    lg:w-1/2 lg:h-full
                    lg:py-0"
                >
                    <RevealWrapper 
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%]"
                    >
                        <Image
                            className="w-full
                            mx-auto"
                            src={"/alt_pool/hero.jpg"}
                            width={5712}
                            height={2603}
                            alt="Alt Pool Controller Iterations"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
                
            </main>
    )
}