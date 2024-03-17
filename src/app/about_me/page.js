"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function AboutMe(){
    return(
        <main 
            className="mt-[70px]
            flex flex-col-reverse items-center justify-start
            border-b border-dark-primary
            lg:h-[80vh]
            lg:flex-row"
        >
            <section
                className="px-[5%] py-[24px]
                flex flex-col justify-evenly gap-5
                 border-dark-primary
                lg:w-1/2 lg:h-full
                lg:gap-0
                lg:border-r"
            >
                <h1
                    className="text-3xl font-bold"
                >
                    <span className="block mb-[8px]">Hey, there! 👋</span> I&apos;m <span className="font-extrabold">Prajas...</span>
                </h1>

                <h2
                    className="text-lg"
                >
                    A Graduate Student in Human-Computer Interaction at the University of California, Santa Cruz. With a foundation in computer science, I&apos;ve spent two years in the industry as a Software Engineer. However, as one of our professors aptly described, I consider myself a &apos;Recovering Engineer&apos;. I&apos;ve come to realize that what seems like second nature to us techies can feel like rocket science to the layperson. This realization drives me to research and streamline engineering practices to close this gap, making technology more accessible and unlocking its complete potential for all. When I&apos;m not knee-deep in code or HCI theories, you can find me behind the lens, enjoying photography. Cheers to a world where technology meets simplicity – let&apos;s make it happen!
                </h2>
            </section>
            
            <RevealWrapper
                origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                className="py-[24px]
                flex flex-row items-center justify-center
                border-b border-dark-primary
                lg:w-1/2 lg:h-full
                lg:py-0
                lg:border-b-0"
            >
                <Image
                    className="w-[80%] h-auto"
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