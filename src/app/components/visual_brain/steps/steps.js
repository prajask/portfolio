"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Steps(){
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
                            Simplifying the Steps
                        </span>
                        &nbsp;to Computer Vision
                    </h3>
                    <p
                        className="text-lg"
                    >
                        In our journey to make computer vsion more accessible, we recognized the importance of simplifying the model training process. Our aim was to design a platform that invites users from various backgrounds, especially those without a technical foundation, to not only engage with but also excel in the field of computer vision. This led to the creation of a four-step model training process, meticulously designed to be both comprehensive and accessible.
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
                        className="w-[80%]"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/steps.png"}
                            width={7324}
                            height={1640}
                            alt="Fine Tuning Steps Breakdown"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

            </article>
        </>
    )
}