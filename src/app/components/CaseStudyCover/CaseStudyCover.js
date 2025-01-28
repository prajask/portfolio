"use client"

import { RevealWrapper } from "next-reveal";
import Link from "next/link";

const CaseStudyCover = ({
    title,
    description,
    role,
    affiliation,
    coverImage,
    link,
    gradient_class
}) => {
  return (
    <RevealWrapper
        className={`w-full
            rounded
            border-2 border-dark-gray
            gradient
            ${gradient_class}
            text-light
            self-stretch`
        }
        duration={1000}
        distance="128px"
        origin="bottom"
        reset={false}
        viewFactor={0.5}
    >
        <Link
            href={link}
        >
            <div
                className="px-8 pt-8 pb-12"
            >
                <p
                    className="pb-2
                    nunito text-sm font-bold text-gray"
                >
                    {role}
                </p>
                
                <div
                    className="pb-4
                    flex items-center justify-between"
                >
                    <h2
                        className="text-3xl"
                    >
                        {title}
                    </h2>

                    {affiliation}
                </div>

                <p
                    className="pb-4
                    text-xl"
                >
                    {description}
                </p>
            </div>

            <div
                className="w-full
                rounded"
            >
                {coverImage}
            </div>
        </Link>
    </RevealWrapper>
  )
}

export default CaseStudyCover