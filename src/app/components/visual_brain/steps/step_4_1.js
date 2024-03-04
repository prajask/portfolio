"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Step4_1(){
    return(
        <>
            <article
                className="h-[55vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-dark-primary"
                >
                    {/* <h2
                        className="mb-[12px] text-xl"
                    >
                        Insight-Inspired Ideation
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
                            Text-Heavy Forms
                        </span>
                        &nbsp;for Clarity
                    </h3>
                    <p>
                        To make the complex task of fine-tuning models less daunting, we added clear descriptions for each parameter. These brief explanations help users understand what each adjustment does and how it affects their model. This method supports users, from beginners to those with some knowledge of computer vision, in making smarter choices about their models. By offering straightforward, easy-to-understand information, we help users connect more deeply with the technology and create a learning experience that feels more natural.
                    </p>
                </section>

                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-center"
                >
                    <RevealWrapper
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
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

            </article>
        </>
    )
}