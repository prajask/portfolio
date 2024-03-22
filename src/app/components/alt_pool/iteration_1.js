"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"
import Link from "next/link"

import { FaLink } from "react-icons/fa6";

export default function Iteration1(){
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
                    <h2
                        className="mb-[12px] text-xl font-medium"
                    >
                        Iteration One
                    </h2>
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
                            Crafting Control
                        </span>
                        &nbsp;from Concept
                    </h3>
                    <p
                        className="text-lg"
                    >
                        The first prototype of our controller ventured into the realm of the tangible, where initial concepts underwent practical examination. This phase was characterized by a trial-and-error approach, as we worked to accommodate two distinct functionalities: the free movement of the joystick and the direct pressing action on crash sensor, which mimics the cue&apos;s impact. These functions were deliberately segregated on the controller to enable simultaneous actions while maintaining a design that utilized minimal materials.
                    </p>

                    <Link
                        href={"https://drive.google.com/file/d/1y2waXi9JPJt2uRweHrIw273jwRpMmlnN/view"}
                        target="_blank"
                        className="mt-5
                        flex flex-row gap-5 items-center justify-start
                        font-bold
                        duration-100
                        hover:text-primary"
                    >
                        <FaLink/>
                        <p>First prototype in action</p>
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
                        className="w-[50%]"
                    >
                        <Image
                            className="w-full"
                            src={"/alt_pool/iteration_1_prog.jpg"}
                            width={4284}
                            height={5712}
                            alt="Iteration 1 - Build Progress"
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
                            src={"/alt_pool/iteration_1_proto.jpg"}
                            width={4284}
                            height={5712}
                            alt="1st Prototype Iteration"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>
            </article>
        </>
    )
}