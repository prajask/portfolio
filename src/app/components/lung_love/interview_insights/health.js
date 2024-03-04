"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Health(){
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
                        Insight-Inspired Ideation
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        Tracking Wellness with a&nbsp;
                        <span
                            className="bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Trauma-Informed Touch
                        </span>
                    </h3>
                    <p>
                        We&apos;ve tailored the Health Tracking feature in Lung Love with a sprinkle of care and positivity. This feature isn&apos;t about scaring users with grim health warnings. Instead, it&apos;s like a friendly nudge showing how they&apos;re moving forward, health-wise. We&apos;re using a trauma-informed approach here – if a user&apos;s health indicators aren&apos;t improving, we don&apos;t bombard them with alarming messages. Rather, we consider that the stagnant progress is an indicator enough and encourage them to keep going. It&apos;s all about celebrating each small step towards better health. This way, we&apos;re not just tracking health; we&apos;re building a nurturing environment that cheers on every user, no matter where they are in their quitting journey. It&apos;s like having a supportive buddy who&apos;s always rooting for you, without the doom and gloom.
                    </p>
                </section>

                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-center"
                >
                    <Image
                        className="w-[80%]"
                        src={"/lung_love/health_interview_insights.png"}
                        width={1512}
                        height={982}
                        alt="User Interview Insights - Health Tracking"
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
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[47%] -z-10
                        flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[80%]"
                            src={"/lung_love/health-dashboard-lofi.png"}
                            width={1801}
                            height={869}
                            alt="Lung Love - Health Tracking Page - LoFi"
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
                            width={193}
                            height={40}
                            alt="Arrow pointing right"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper 
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[47%] -z-10
                        flex flex-row items-center justify-center"
                    >
                        <Image
                            className="w-[30%]"
                            src={"/lung_love/health-dashboard.png"}
                            width={1487}
                            height={2881}
                            alt="Lung Love - Health Tracking Page"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}