"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function SecondaryHealthResearch(){
    return(
        <>
            <article
                className="h-[40vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-dark-primary"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Secondary Research Insight
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold
                        bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Beyond &apos;Lung&apos; Love
                    </h3>
                    <p>
                        We delved into secondary research to gain a comprehensive understanding of the wider health impacts of smoking. The exploratory research revealed significant correlations between smoking and deteriorating oral and cardiovascular health. It became evident that smoking&apos;s impact goes beyond lung health, affecting gum disease, tooth decay, blood pressure, and heart health. Motivated by these findings, we decided it was crucial not only to track these specific health aspects within the app but also to educate users about them. Alongside the tracking features, informative screens were incorporated to shed light on how smoking affects these aspects of health.
                    </p>
                </section>
            </article>

            <article
            className="h-[65vh]
            flex flex-row items-center justify-evenly
            border-b border-b-dark-primary"
            >

                <RevealWrapper
                    origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[15%] -z-10"
                >
                    <Image
                        className="w-full"
                        src={"/lung_love/health-lungs.png"}
                        width={1490}
                        height={2879}
                        alt="Smoking health effects on lungs"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='top' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[15%] -z-10"
                >
                    <Image
                        className="w-full"
                        src={"/lung_love/health-heart.png"}
                        width={1487}
                        height={2881}
                        alt="Smoking health effects on heart"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[15%] -z-10"
                >
                    <Image
                        className="w-full"
                        src={"/lung_love/health-oral.png"}
                        width={1490}
                        height={2878}
                        alt="Smoking - effects on oral health"
                        loading="lazy"
                    />
                </RevealWrapper>

            </article>
        </>
    )
}