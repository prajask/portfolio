"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function SurveyInsight(){
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
                        Survey Insight
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
                            Non-Tech Professionals
                        </span>
                        &nbsp;Eyeing Computer Vision
                    </h3>
                    <p
                        className="text-lg"
                    >
                        Through our survey, we&apos;ve gained valuable insights into the demographics, knowledge levels, and motivations of potential users interested in exploring computer vision. Our findings reveal a diverse age range with a core group aged 25-44, predominantly non-technical professionals, indicating a strong interest across various professional fields. This diversity highlights the need for a platform that bridges technical concepts with practical application in an intuitive manner.
                    </p>
                </section>
            </article>

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
                    <RevealWrapper 
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[90%]"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/user_age_distribution.png"}
                            width={600}
                            height={371}
                            alt="Survey Insights - User Age Distribution"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    lg:w-1/2 lg:h-full"
                >
                    <RevealWrapper 
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[90%]"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/user_knowledge_distribution.png"}
                            width={600}
                            height={371}
                            alt="Survey Insights - User Knowledge Distribution"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>

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
                    <RevealWrapper 
                        origin='left' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[90%]"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/user_occupation_distribution.png"}
                            width={600}
                            height={371}
                            alt="Survey Insights - User Occupation Distribution"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    lg:w-1/2 lg:h-full"
                >
                    <RevealWrapper 
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[90%]"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/user_interest_distribution.png"}
                            width={600}
                            height={371}
                            alt="Survey Insights - User Interest Distribution"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}