"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Finance(){
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
                        User Insights and Ideation
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        <span
                            className="bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Tracking Savings and Setting Goals
                        </span>
                        &nbsp;as you quit
                    </h3>
                    <p>
                        We discovered that financial incentives are a powerful motivator for quitting smoking. Our Finance Tracking feature illustrates the savings as users progress on their smoke-free journey. Additionally, the goal-setting feature transforms these savings into tangible goals, allowing users to visualize and plan for rewarding experiences. This approach elevates the quitting experience, gratifying the journey of watching savings grow.
                    </p>
                </section>

                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-center"
                >
                    <Image
                        className="w-[80%]"
                        src={"/lung_love/finance_interview_quotes.png"}
                        width={1512}
                        height={982}
                        alt="User Interview Insights - Finance Tracking"
                        loading="lazy"
                    />
                </section>

            </article>

            <article
                className="h-[65vh]
                flex flex-row items-center justify-center
                border-b border-b-dark-primary"
            >
                <RevealWrapper
                    origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[15%] -z-10"
                >
                    <Image
                        className="w-full"
                        src={"/lung_love/finance-dashboard.png"}
                        width={1491}
                        height={2889}
                        alt="Lung Love - Finance Tracking Page"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>
        </>
    )
}