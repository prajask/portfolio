"use client"
import Image from "next/image"

import { RevealWrapper } from "next-reveal"

export default function Hero(){
    return(
        <main 
            className="mt-[70px]
            flex flex-col items-center justify-start
            border-b border-b-dark-primary
            lg:h-[80vh]
            lg:flex-row"
        >
            <section
                className="w-full
                px-[5%] py-[24px]
                flex flex-col justify-evenly gap-10
                lg:w-1/2 lg:h-full
                lg:gap-0
                lg:border-r lg:border-r-dark-primary"
            >
                <h1
                    className=" 
                    flex flex-col gap-2
                    text-3xl font-bold"
                >
                    <span>User Experience</span>
                    <span>Engineer and Designer</span>
                </h1>

                <h2
                    className="text-lg"
                >
                    <span className="block text-2xl mb-[8px]">Hey, there! 👋</span> I&apos;m <span className="font-extrabold">Prajas</span>, a HCI graduate student at UC, Santa Cruz, with a background in computer science and software engineering. With careful research and thoughtful engineering, my aim is to bridge the gap between technology and user-friendly interfaces!
                </h2>
            </section>
            
            <RevealWrapper
                origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                className="hidden w-1/2 h-full -z-10
                lg:flex lg:flex-row lg:items-center lg:justify-center"
            >
                <Image
                    className="h-[55%] w-auto"
                    src={"/AVATAR.gif"}
                    width={1920}
                    height={1080}
                    alt="sketch avatar"
                    loading="lazy"
                />
            </RevealWrapper>
        </main>
    )
}