"use client"

import { RevealList } from "next-reveal"
import Link from "next/link"

import { FaRegEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6"

export default function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer
            className="h-[20vh]
            flex flex-row items-center justify-start
            border-b border-b-dark-primary"
        >
            <section
                className="w-1/2 h-full
                pl-[5%]
                flex flex-col items-start justify-end
                border-r border-r-dark-primary"
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
                className="w-1/2 h-full
                pl-[5%]
                flex flex-col justify-evenly
                list-none"
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