"use client"

import { RevealList } from "next-reveal"
import Link from "next/link"

import { FaRegEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6"

export default function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer
            className="flex flex-col-reverse items-center justify-start
            border-b border-dark-primary
            lg:h-[20vh]
            lg:flex-row"
        >
            <section
                className="w-full
                pl-[5%] py-[12px]
                flex flex-col items-start justify-start gap-5
                border-r border-r-dark-primary
                lg:w-1/2 lg:h-full
                lg:py-0
                lg:gap-0
                lg:justify-end"
            >
                <p
                    className="text-lg"
                >
                    &#169; {year}  Prajas Kadepurkar
                </p>
                <p
                    className="pb-[2%]"
                >
                    All Rights Reserved
                </p>
            </section>

            <RevealList
                interval={50} delay={200}
                className="w-full
                pl-[5%] py-[12px]
                flex flex-col justify-evenly gap-5
                list-none
                border-b border-dark-primary
                lg:w-1/2 lg:h-full
                lg:py-0
                lg:gap-0
                lg:border-b-0"
            >
                <li>
                        <a
                            href="mailto:someone@example.com"
                            target="_blank"
                            className="flex flex-row items-center gap-5
                            text-lg font-medium"
                        >
                            <FaRegEnvelope/>
                            <span>pkadepur@ucsc.edu</span>
                        </a>
                </li>

                <li>
                        <a
                            href="https://www.linkedin.com/in/prajask/"
                            target="_blank"
                            className="flex flex-row items-center gap-5
                            text-lg font-medium"
                        >
                            <FaLinkedinIn/>
                            <span>prajas_k</span>
                        </a>
                </li>

                <li>
                        <a
                            href="https://github.com/prajask"
                            target="_blank"
                            className="flex flex-row items-center gap-5
                            text-lg font-medium"
                        >
                            <FaGithub/>
                            <span>prajask</span>
                        </a>
                </li>

                <li>
                        <a
                            href="https://www.instagram.com/prajas_k/"
                            target="_blank"
                            className="flex flex-row items-center gap-5
                            text-lg font-medium"
                        >
                            <FaInstagram/>
                            <span>prajas_k</span>
                        </a>
                </li>
            </RevealList>
        </footer>
    )
}