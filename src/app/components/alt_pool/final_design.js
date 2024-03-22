"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"
import Link from "next/link"

import { FaLink } from "react-icons/fa6";

export default function FinalDesign(){
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
                        Playtest Perspectives
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
                            Final Frame
                        </span>
                    </h3>
                    <p
                        className="text-lg"
                    >
                        The culmination of this project is a controller that doesn’t just operate within the parameters of digital snooker; it redefines them, offering players a tactile journey through a game that has traditionally been bounded by the two-dimensional confines of a screen. This final design is a gateway to a new dimension of digital snooker.
                    </p>

                    <Link
                        href={"https://drive.google.com/file/d/1RRoyiV4AXaBIkvNfEDuKL0Rf3jsQEA0e/view?usp=sharing"}
                        target="_blank"
                        className="mt-5
                        flex flex-row gap-5 items-center justify-start
                        font-bold
                        duration-100
                        hover:text-primary"
                    >
                        <FaLink/>
                        <p>Final prototype in action</p>
                    </Link>
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
                        className="w-[45%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/final_design_1.jpeg"}
                            width={2547}
                            height={3396}
                            alt="Build Progress"
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
                        className="w-[80%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/final_design_2.jpeg"}
                            width={4032}
                            height={3024}
                            alt="Build Progress"
                            loading="lazy"
                        />
                    </RevealWrapper>
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
                        className="w-[45%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/build_1.jpg"}
                            width={1980}
                            height={2832}
                            alt="Build Progress"
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
                            src={"/alt_pool/build_2.jpeg"}
                            width={3024}
                            height={4032}
                            alt="Build Progress"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}