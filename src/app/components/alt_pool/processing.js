"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Processing(){
    return(
        <>
            <article
                className="flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[50vh]
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
                    {/* <h2
                        className="mb-[12px] text-xl"
                    >
                        User Insights and Ideation
                    </h2> */}
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Visualizing
                        </span>
                        &nbsp;Intuition in Play
                    </h3>
                    <p
                        className="text-lg"
                    >
                        These commands are then integrated into the Processing environment, where they are mapped onto a game-like interface. This visualization of user inputs provides immediate and intuitive feedback to the player, closing the loop between physical action and digital reaction.
                    </p>
                </section>

                <section
                    className="w-full
                    py-[24px]
                    flex flex-row items-center justify-center
                    lg:w-1/2 lg:h-full
                    lg:py-0 "
                >
                    <RevealWrapper
                        origin='left' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[30%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/processing.png"}
                            width={792}
                            height={1038}
                            alt="Processing Interface"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

            </article>
        </>
    )
}