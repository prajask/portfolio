"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function AboutMe(){
    return(
        <main 
            className="h-[80vh] mt-[70px]
            flex flex-row items-center justify-start
            border-b border-b-dark-primary"
        >
            <section
                className="w-1/2 h-full
                px-[5%] py-[24px]
                flex flex-col justify-evenly
                border-r border-r-dark-primary"
            >
                <h1
                    className="text-3xl font-bold"
                >
                    <span className="block mb-[8px]">Hey, there! 👋</span> I&apos;m <span className="font-extrabold">Prajas</span>
                </h1>

                <h2
                    className="text-lg"
                >
                    A Graduate Student in Human-Computer Interaction at the University of California, Santa Cruz. With a foundation in computer science and software engineering, I&apos;ve spent two years in the industry as a Software Engineer. However, as one of our professors aptly described, I consider myself a &apos;Recovering Engineer&apos; My journey has led me to recognize the immense potential of technology juxtaposed with our struggles in fully harnessing its power for user-centric development. However, I&apos;ve come to realize that what seems like second nature to us techies can feel like rocket science to the layperson. This realization drives me to research and streamline engineering practices to close this gap, making technology more accessible and unlocking its complete potential for all. When I&apos;m not knee-deep in code or HCI theories, you can find me behind the lens, enjoying photography. Cheers to a world where technology meets simplicity – let&apos;s make it happen!
                </h2>
            </section>
            
            <RevealWrapper
                origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                className="w-1/2 h-full -z-10
                flex flex-row items-center justify-center"
            >
                <Image
                    className="w-auto h-[80%]"
                    src={"/about_me.jpg"}
                    width={2950}
                    height={2757}
                    alt="sketch avatar"
                    loading="lazy"
                />
            </RevealWrapper>
        </main>
    )
}