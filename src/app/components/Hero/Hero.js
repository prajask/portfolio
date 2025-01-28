"use client"

import Image from "next/image"

import { RevealList, RevealWrapper } from "next-reveal";

const Hero = () => {
  return (
    <section
        className="section-container
        bg-dark"
    >
        <div
            className="content-container"
        >
            <div
                className="flex flex-col lg:flex-row items-start gap-10"
            >
                <RevealWrapper
                    className="w-3/4"
                    duration={750}
                    distance="128px"
                    origin="left"
                    reset={false}
                >
                    <h2
                        className="pb-5
                        ptsans text-6xl text-light"
                    >
                        Prajas Kadepurkar.
                    </h2>
                    <h3
                        className="pb-7
                        ptsans text-6xl font-bold text-light"
                    >
                        UX Designer.
                    </h3>
                    <p
                        className="nunito text-xl text-gray"
                    >
                        A software engineer turned design practitioner, making the experiences we rely on seamless - one interface at a time.
                    </p>
                </RevealWrapper>

                <RevealWrapper
                    className="hidden
                    lg:block
                    w-2/5"
                    duration={750}
                    scale={0.5}
                    reset={false}
                >
                    <Image
                        src="/hero.png"
                        alt="Prajas Kadepurkar. UX Designer"
                        width={1480}
                        height={1482}
                        loading="lazy"
                    />
                </RevealWrapper>
            </div>

            <RevealList
                className="mt-24
                flex flex-col xl:flex-row gap-8"
                delay={750}
                interval={250}
                duration={750}
                origin="bottom"
                reset={false}
            >
                <div
                    className="w-full self-stretch
                    p-4
                    flex flex-col items-start gap-2
                    border-[3px] border-light rounded"
                >
                    <h4
                        className="ptsans text-xl font-bold text-light"
                    >
                        Current
                    </h4>

                    <h5
                        className="nunito text-md text-gray"
                    >
                        Actively looking for full time UX Design opportunities.
                    </h5>
                </div>

                <div
                    className="w-full self-stretch
                    p-4
                    flex flex-col items-start gap-2
                    border-[3px] border-light rounded"
                >
                    <h4
                        className="ptsans text-xl font-bold text-light"
                    >
                        Past
                    </h4>

                    <h5
                        className="nunito text-md text-gray"
                    >
                        UX Design Intern @Mosi Audio, Software Development Consultant @Capgemini
                    </h5>
                </div>

                <div
                    className="w-full self-stretch
                    p-4
                    flex flex-col items-start gap-2
                    border-[3px] border-light rounded"
                >
                    <h4
                        className="ptsans text-xl font-bold text-light"
                    >
                        Education
                    </h4>

                    <h5
                        className="nunito text-md text-gray"
                    >
                        M.S. Human-Computer Interaction @UCSC, B.E. Computer Engineering @UoMumbai
                    </h5>
                </div>
            </RevealList>
        </div>

    </section>
  )
}

export default Hero