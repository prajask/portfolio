"use client"

import { RevealWrapper } from "next-reveal"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudy2(){
    return(
        <article
            className="h-[60vh]
            flex flex-row items-center justify-start
            border-b border-b-dark-primary"
        >
            <section
                className="w-1/2 h-full
                flex flex-row items-center justify-evenly
                border-r border-dark-primary"
            >
                <RevealWrapper
                    className="w-[25%]"
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
                    className="w-[25%]"
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
                    className="w-[25%]"
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

            <section
                className="w-1/2
                px-[5%] py-[24px]
                flex flex-col items-start justify-center"
            >
                <h2
                    className="mb-[8px]
                    text-xl font-semibold"
                >
                    Lung Love
                </h2>
                
                <h2
                    className="mb-[28px]
                    text-3xl font-bold"
                >
                    An App to Help you Quit Smoking
                </h2>

                <div
                    className="mb-[28px]
                    flex flex-row gap-10
                    font-medium"
                >
                    <p>2023</p>
                    <p>UX Research</p>
                </div>

                <Link href="/lung_love" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-dark-primary rounded-full group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lung_love-primary group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">View Work</span>
                    <span className="relative invisible">View Work</span>
                </Link>

            </section>
            
        </article>
    )
}