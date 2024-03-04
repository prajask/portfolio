"use client"
import { RevealWrapper, RevealList } from "next-reveal"

import Image from "next/image"
import { Comic_Neue } from "next/font/google"

export default function Hero(){
    return(
        <main 
                className="h-[60vh] mt-[70px]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-r-dark-primary"
                >
                    <h1
                        className="
                        mb-[12px]
                        flex flex-col
                        text-3xl font-bold"
                    >
                        Lung Love
                    </h1>

                    <h2
                        className="mb-[24px]
                        text-2xl"
                    >
                        Navigating the smoke-free path
                    </h2>

                    <RevealList
                        interval={50} delay={200}
                        className="mb-[12px]
                        flex flex-col items-start justify-start"
                    >
                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-t border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                Duration
                            </p>
                            <p>September 2023 to December 2023</p>
                        </li>

                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                Team Size
                            </p>
                            <p>5</p>
                        </li>

                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                Area
                            </p>
                            <p>Community Design</p>
                        </li>
                        
                        <li
                            className="w-full py-[12px]
                            flex flex-row items-center justify-start
                            border-b border-dark-primary"
                        >
                            <p
                                className="w-[20%]
                                font-extrabold"
                            >
                                My Role
                            </p>
                            <p>UX Research</p>
                        </li>
                    </RevealList>
                </section>
                
                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-evenly"
                >
                    <RevealWrapper
                        className="w-[25%] -z-10"
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                    >
                        <Image
                            className="w-full"
                            src={"/lung_love/dashboard.png"}
                            width={1495}
                            height={2890}
                            alt="Lung Love Dashboard"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper
                        className="w-[25%] -z-10"
                        origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                    >
                        <Image
                            className="w-full"
                            src={"/lung_love/health-dashboard.png"}
                            width={1487}
                            height={2881}
                            alt="Lung Love Health Tracking"
                            loading="lazy"
                        />
                    </RevealWrapper>

                    <RevealWrapper
                        className="w-[25%] -z-10"
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                    >
                        <Image
                            className="w-full"
                            src={"/lung_love/community.png"}
                            width={1486}
                            height={2881}
                            alt="Lung Love Community Page"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </main>
    )
}