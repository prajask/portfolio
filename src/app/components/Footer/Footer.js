"use client"

import { RevealList } from "next-reveal";
import { FaRegEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer
            className="section-container
            bg-dark
            nunito text-light"
        >
            <div
                className="content-container
                flex items-center justify-between"
            >
                <p>&#169; {year}  Prajas Kadepurkar</p>

                <RevealList
                    className="flex flex-row justify-between gap-16
                    list-none"
                    delay={0}
                    interval={100}
                    origin="bottom"
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

export default Footer