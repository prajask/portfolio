"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Community(){
    return(
        <>
            <article
                className="h-[50vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-dark-primary"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Interview Insight
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        A&nbsp;
                        <span
                            className="bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Spotlight
                        </span>
                        &nbsp;for Every Quit Story
                    </h3>
                    <p>
                        In Lung Love, we&apos;ve artfully woven together elements of community sharing and gamification, based on insights from our interviews. This feature is akin to a supportive gathering – a place where users can narrate their own quitting stories, each one a unique journey. At the same time, they get to showcase their earned badges and achievements, adding a dash of excitement to the mix. This fusion creates an environment where personal progress is not only acknowledged but celebrated as a collective achievement. It&apos;s a blend of support and celebration, transforming the journey to a smoke-free life into an engaging and communal experience. This approach strikes a balance between fostering a sense of belonging and injecting a playful, motivating spirit into the app.
                    </p>
                </section>

                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-center"
                >
                    <Image
                        className="w-[80%]"
                        src={"/lung_love/community_interview_insights.png"}
                        width={1512}
                        height={982}
                        alt="User Interview Insights - Community Page"
                        loading="lazy"
                    />
                </section>

            </article>

            <article
                className="h-[65vh]
                flex flex-row items-center justify-center
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    flex flex-row items-center justify-evenly"
                >
                    <RevealWrapper 
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[47%] -z-10
                            flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[80%]"
                            src={"/lung_love/community-lofi.png"}
                            width={1815}
                            height={852}
                            alt="Lung Love - Community Page - LoFi"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper 
                        origin='left' delay={400} duration={1000} distance='100px' reset={false}
                        className="w-[6%] -z-10
                            flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[100%]"
                            src={"/arrow.png"}
                            width={1815}
                            height={852}
                            alt="Arrow pointing right"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper 
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[47%] -z-10
                            flex flex-row items-center justify-center">
                        <Image
                            className="w-[30%]"
                            src={"/lung_love/community.png"}
                            width={1490}
                            height={2878}
                            alt="Lung Love - Community Page"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>

            <article
                className="h-[65vh]
                flex flex-row items-center justify-center
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    flex flex-row items-center justify-evenly"
                >
                    <RevealWrapper 
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[47%] -z-10
                        flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[95%]"
                            src={"/lung_love/achievements-lofi.png"}
                            width={1916}
                            height={854}
                            alt="Lung Love - Achievements Page - LoFi"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper 
                        origin='left' delay={400} duration={1000} distance='100px' reset={false}
                        className="w-[6%] flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[100%]"
                            src={"/arrow.png"}
                            width={193}
                            height={40}
                            alt="Arrow pointing right"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper 
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[47%] flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[30%]"
                            src={"/lung_love/achievements.png"}
                            width={1490}
                            height={2889}
                            alt="Lung Love - Achievements Page"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}