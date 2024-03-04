"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Step2(){
    return(
        <>
            <article
                className="h-[55vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-dark-primary"
                >
                    {/* <h2
                        className="mb-[12px] text-xl"
                    >
                        User Insights and Ideation
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
                            A Structured Approach
                        </span>
                        &nbsp;to Data Labeling
                    </h3>
                    <p>
                        Accuracy in labeling is crucial for the success of a computer vision model. Our platform facilitates a structured approach to creating and applying labels, ensuring consistency and precision. By providing users with intuitive UI elements for the labeling process, we minimize errors and improve the quality of the training data, laying a solid foundation for a more effective model.
                    </p>
                </section>

                <section
                    className="w-1/2 h-full
                    flex flex-row items-center justify-center"
                >
                    <RevealWrapper
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%] -z-10"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/data_labeling.webp"}
                            width={1416}
                            height={900}
                            alt="Fine Tuning Step 2 - Data Labeling"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

            </article>
        </>
    )
}