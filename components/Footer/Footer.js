"use client"

import { RevealList } from "next-reveal"
import Link from "next/link"

import { FaRegEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6"

export default function Footer(){

    const date = new Date();
    const year = date.getFullYear();

    return(
        <footer
            className="case-study-section"
        >
            <div
                className="w-11/12
                max-w-7xl
                mx-auto
                flex flex-col-reverse items-center gap-10
                xl:flex-row xl:gap-0"
            >
                <div
                    className="column column-left"
                >
                    <p
                        className="text-lg"
                    >
                        &#169; {year}  Prajas Kadepurkar
                    </p>
                </div>

                <RevealList
                    interval={50} delay={200}
                    className="column column-right
                    flex flex-row justify-between
                    list-none"
                >
                    <li>
                            <a
                                href="mailto:kadepurkarprajas@gmail.com"
                                target="_blank"
                                className="text-2xl font-medium"
                            >
                                <FaRegEnvelope/>
                            </a>
                    </li>

                    <li>
                            <a
                                href="https://www.linkedin.com/in/prajask/"
                                target="_blank"
                                className="text-2xl font-medium"
                            >
                                <FaLinkedinIn/>
                            </a>
                    </li>

                    <li>
                            <a
                                href="https://github.com/prajask"
                                target="_blank"
                                className="text-2xl font-medium"
                            >
                                <FaGithub/>
                            </a>
                    </li>

                    <li>
                            <a
                                href="https://www.instagram.com/prajas_k/"
                                target="_blank"
                                className="text-2xl font-medium"
                            >
                                <FaInstagram/>
                            </a>
                    </li>
                </RevealList>
            </div>
        </footer>
    )
}