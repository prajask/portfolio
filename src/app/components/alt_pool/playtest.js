"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function PlayTest(){
    return(
        <>
            <article
                className="border-b border-dark-primary
                lg:h-[40vh]"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    <h2
                        className="mb-[12px] text-xl font-medium"
                    >
                        Playtest Perspectives
                    </h2>
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
                            Testing the Break
                        </span>
                    </h3>
                    <p
                        className="text-lg"
                    >
                        During the final showcase of our project, the controller was put through its paces in a critical playtesting session. This was not just a demonstration of what we had achieved, but also a pivotal moment to gather feedback directly from users. It was revealed that the pressure sensor&apos;s responsiveness was around 40%, highlighting a need for improvement. Users discovered that a successful interaction with the sensor required a firm and steady push, as opposed to a quick jab, pointing us towards further calibration and optimization. Additionally, the feedback underscored the importance of accompanying the controller with a detailed tutorial or instructional guide, to enhance user understanding and interaction with the device. This playtest was a vital step in our ongoing journey to refine and perfect the digital snooker experience.
                    </p>
                </section>
            </article>

            <article
                className="flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[60vh]
                lg:flex-row"
            >
                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col items-center justify-center
                    border-b border-dark-primary
                    lg:w-1/2 lg:h-full
                    lg:border-r lg:border-b-0"
                >
                    <RevealWrapper 
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/playtest_1.png"}
                            width={679}
                            height={509}
                            alt="Final Playtest Session - 1"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col items-center justify-center
                    lg:w-1/2 lg:h-full"
                >
                    <RevealWrapper 
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/playtest_2.png"}
                            width={679}
                            height={509}
                            alt="Final Playtest Session - 2"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}