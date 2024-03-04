"use client"

import Image from "next/image"
import { RevealWrapper, RevealList } from "next-reveal"

export default function Hero(){
    return(
        <main 
                className="h-[60vh] mt-[70px]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-r-dark-primary"
                >
                    <h1
                        className="
                        mb-[12px]
                        flex flex-col
                        text-3xl font-bold"
                    >
                        Visual Brain
                    </h1>

                    <h2
                        className="mb-[24px]
                        text-2xl"
                    >
                        See the world through AI
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
                                font-extrabold"
                            >
                                Duration
                            </p>
                            <p>March 2020 to Present</p>
                        </li>

                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                Team Size
                            </p>
                            <p>4</p>
                        </li>

                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                Area
                            </p>
                            <p>Ed Tech</p>
                        </li>
                        
                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                My Role
                            </p>
                            <p>UX Design</p>
                        </li>
                    </RevealList>
                </section>
                
                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-center"
                >
                    <RevealWrapper 
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%] -z-10"
                    >
                        <Image
                            className="w-full
                            mx-auto"
                            src={"/visual_brain/model_tuning.webp"}
                            width={1413}
                            height={898}
                            alt="Visual Brain - Fine Tuning Screen"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
                
            </main>
    )
}