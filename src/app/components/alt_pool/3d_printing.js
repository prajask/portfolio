"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function ThreeDPrinting(){
    return(
        <>
            <article
                className="border-b border-dark-primary
                lg:h-[40vh]"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    {/* <h2
                        className="mb-[12px] text-xl font-medium"
                    >
                        3D Modeling the Controller
                    </h2> */}
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            3D Modeling
                        </span>
                        &nbsp;the Controller
                    </h3>
                    <p
                        className="text-lg"
                    >
                        With the operational mechanism determined — incorporating a dowel-like cue stick and responsive switches — our focus shifted to creating a 3D model that would neatly encapsulate these elements. The objective was to craft a cohesive unit that would not only be functional but also offer a seamless and intuitive user experience. This step in our journey marked the point where the controller&apos;s physical form began to take shape, designed to comfortably fit the user&apos;s interaction and to aesthetically please the eye while staying true to the intended functionality.
                    </p>
                </section>
            </article>

            <article
                className="flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[60vh]
                lg:flex-row"
            >
                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col items-center justify-center
                    border-b border-dark-primary
                    lg:w-1/2 lg:h-full
                    lg:border-r lg:border-b-0"
                >
                    <RevealWrapper 
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[50%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/3d_model.jpeg"}
                            width={2653}
                            height={2366}
                            alt="3D Sketch of the final model"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col items-center justify-center
                    lg:w-1/2 lg:h-full"
                >
                    <RevealWrapper 
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[50%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/3d_printer.png"}
                            width={534}
                            height={672}
                            alt="3d Printer - Ender Pro 3"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}