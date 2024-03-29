"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"
import Link from "next/link"

export default function CaseStudy1(){
    return(
        <article
            className="flex flex-col items-center justify-start
            border-b border-b-dark-primary
            lg:h-[60vh]
            lg:flex-row"
        >
            <section
                className="w-full
                px-[5%] py-[24px]
                flex flex-col items-start justify-center
                border-b border-dark-primary
                lg:w-1/2 lg:h-full
                lg:border-r lg:border-b-0"
            >
                <h2
                    className="mb-[8px]
                    text-xl font-semibold"
                >
                    Visual Brain
                </h2>
                
                <h2
                    className="mb-[28px]
                    text-3xl font-bold"
                >
                    A Platform to Learn Computer Vision
                </h2>

                <div
                    className="mb-[28px]
                    flex flex-row gap-10
                    font-medium"
                >
                    <p>2020</p>
                    <p>UX Design</p>
                </div>

                <Link href="/visual_brain" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-dark-primary rounded-full group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-visual_brain-primary group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">View Work</span>
                    <span className="relative invisible">View Work</span>
                </Link>
            </section>

            <RevealWrapper
                origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                className="py-[24px]
                lg:w-1/2
                lg:py-0"
            >
                <Image
                    className="w-[90%]
                    mx-auto
                    md:w-full
                    lg:w-[80%]"
                    src={"/visual_brain/model_tuning.webp"}
                    width={1413}
                    height={898}
                    alt="Visual Brain - Fine Tuning Screen"
                    loading="lazy"
                />
            </RevealWrapper>

        </article>
    )
}