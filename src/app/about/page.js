"use client"

import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";

const page = () => {
  return (
    <article>
        <section
            className="section-container
            bg-dark"
        >
            <div
                className="content-container"
            >
                <div
                    className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24"
                >
                    <RevealWrapper
                        duration={750}
                        origin="left"
                        reset={false}
                        className="w-full"
                    >
                        <h3
                            className="section-title
                            text-gray"
                        >
                            Hey, there!
                        </h3>

                        <h4
                            className="section-subtitle
                            text-light"
                        >
                            I&apos;m Prajas...
                        </h4>

                        <p
                            className="nunito text-lg text-gray"
                        >
                            I&apos;m a M.S. Human-Computer Interaction Graduate from the University of California, Santa Cruz, Class of 2025.
                            I have a bachelor&apos;s degree in Computer Engineering and close to 3 years of experience as a Software Engineer.
                            As one of my professors once described, I&apos;m a &quot;Recovering Engineer&quot; in the design space.
                            Over time, I realized that what felt intuitive to me as an engineer can seem overwhelming to others.
                            This led me to shift my focus to design, where I work on simplifying technology and making it more accessible for everyone.
                            I&apos;m passionate about creating user-friendly solutions that bridge the gap between complex systems and everyday users.
                        </p>
                    </RevealWrapper>

                    <RevealWrapper
                        duration={750}
                        scale={0.5}
                        reset={false}
                        className="w-full lg:w-2/4
                        flex items-center justify-center
                        lg:items-end lg:justify-end"
                    >
                        <Image
                        className="rounded -rotate-90 lg:rotate-0"
                        src="/about/me.jpg"
                        alt="Prajas Kadepurkar - Portrait"
                        width={3024}
                        height={4032}
                        />
                    </RevealWrapper>
                </div>
            </div>
        </section>

        <section
            className="section-container
            bg-light"
        >
            <div
                className="content-container"
            >
                <div
                    className="flex flex-col items-center justify-center"
                >
                    <h3
                        className="section-subtitle
                        text-dark"
                    >
                        Photography
                    </h3>

                    <p
                        className="nunito text-xl text-dark-gray text-center"
                    >
                        When I&apos;m not knee-deep in code or HCI theories, you can find me behind the lens!
                    </p>
                </div>

                <div
                    className="mt-24
                    grid grid-cols-2 gap-4"
                >
                    <div
                        className="grid gap-4"
                    >
                        <RevealWrapper
                            duration={500}
                            origin="bottom"
                            reset={false}
                        >
                            <Image width={3231} height={2169} className="h-auto max-w-full rounded-lg" src="/photography/20150714.jpg" alt=""/>
                        </RevealWrapper>
                        <div>
                            <Image width={4744} height={3163} className="h-auto max-w-full rounded-lg" src="/photography/20151004.jpg" alt=""/>
                        </div>
                        <div>
                            <Image width={3024} height={4032} className="h-auto max-w-full rounded-lg -rotate-90 lg:rotate-0" src="/photography/IMG_0469.jpg" alt=""/>
                        </div>
                    </div>

                    <RevealList
                        interval={250}
                        origin="bottom"
                        reset={false}
                        className="grid gap-4"
                    >
                        <div>
                            <Image width={3024} height={4032} className="h-auto max-w-full rounded-lg -rotate-90 lg:rotate-0" src="/photography/IMG_0562.jpg" alt=""/>
                        </div>
                        <div>
                            <Image width={6000} height={4000} className="h-auto max-w-full rounded-lg" src="/photography/DSC_0139.jpg" alt=""/>
                        </div>
                        <div>
                            <Image width={2048} height={1971} className="h-auto max-w-full rounded-lg" src="/photography/IMG_3472.jpg" alt=""/>
                        </div>
                    </RevealList>
                </div>
            </div>
        </section>
    </article>
  )
}

export default page