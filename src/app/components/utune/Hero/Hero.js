"use client"

import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";

const Hero = () => {
  return (
    <section
        className="section-container
        bg-dark"
    >
        <div
            className="content-container"
        >
            <RevealWrapper
                duration={750}
                reset={false}
                className="w-full
                mb-4
                flex items-center justify-between"
            >
                <h2
                    className="ptsans text-light font-bold text-4xl"
                >
                    U-Tune
                </h2>

                <Image src="/utune/ibm-logo.png" width={75} height={75} alt="IBM"/>
            </RevealWrapper>

            <h3
                className="mb-12
                nunito text-2xl font-semibold text-gray"
            >
                Learn to Fine-Tune the easy way
            </h3>

            <RevealWrapper
                duration={750}
                scale={0.5}
                reset={false}
                className="w-full self-stretch
                p-2 lg:p-6
                bg-dark-gray
                rounded"
            >
                <Image className="rounded" src="/utune/hero.png" alt="U-Tune" width={1920} height={1080} />
            </RevealWrapper>

            <RevealList
                delay={750}
                interval={250}
                origin="bottom"
                reset={false}
                className="mt-24
                flex flex-col xl:flex-row items-start gap-8"
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
                        Team
                    </h4>

                    <ul
                        className="text-xl text-gray"
                    >
                        <li>Hebah Haque</li>
                        <li>Rocio Perez</li>
                        <li>Prajas Kadepurkar (me)</li>
                    </ul>
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
                        Duration
                    </h4>

                    <h5
                        className="nunito text-xl text-gray"
                    >
                       9 months (Apr 2024 - Dec 2024)
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
                        My Role
                    </h4>

                    <ul
                        className="text-xl text-gray"
                    >
                        <li>UX Design Lead</li>
                        <li>Frontend Development</li>
                    </ul>
                </div>
            </RevealList>
        </div>
    </section>
  )
}

export default Hero