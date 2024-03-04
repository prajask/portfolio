"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function SurveyInsight(){
    return(
        <>
            <article
                className="h-[40vh]
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Survey Insight
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
                            25-30:
                        </span>
                        &nbsp;The Prime Time for Change
                    </h3>
                    <p>
                        Our survey aimed to gather demographic details and understand the smoking habits of potential app users. The results revealed a significant trend: the majority of smokers were in the 18-24 age group. However, the primary target audience for our smoking cessation app – those actively seeking to quit – predominantly fell in the 25-30 age range, often with about five years of smoking history. In 2023, this group is notably tech-savvy, making them more inclined to try out digital solutions like a dedicated cessation app.
                        <br/>
                        To maximize reach, we strategically placed surveys around the school campus and leveraged online channels through peer networks, ensuring diverse and comprehensive participation.
                    </p>
                </section>
            </article>

            <article
                className="h-[50vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <secion
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-r-dark-primary"
                >
                    <RevealWrapper
                        origin='left' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%] -z-10"
                    >
                        <Image
                            className="w-full"
                            src={"/lung_love/survey_insight_1.png"}
                            width={600}
                            height={371}
                            alt="Lung Love - Survey Insights - Smokers Age Distribution"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </secion>

                <section
                    origin='right' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-row items-center justify-center"
                >
                    <RevealWrapper
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%] -z-10"
                    >
                        <Image
                            className="w-full"
                            src={"/lung_love/survey_insight_2.png"}
                            width={600}
                            height={371}
                            alt="Lung Love - Survey Insights - Quitters Age Distribution"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}