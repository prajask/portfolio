"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Step3(){
    return(
        <>
            <article
                className="flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[55vh]
                lg:flex-row"
            >
                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-b border-dark-primary
                    lg:w-1/2 lg:h-full
                    lg:border-r lg:border-b-0"
                >
                    {/* <h2
                        className="mb-[12px] text-xl"
                    >
                        Insight-Inspired Ideation
                    </h2> */}
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        Addressing the&nbsp;
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Crafting-Curating Dilemma
                        </span>
                        &nbsp;Again
                    </h3>
                    <p
                        className="text-lg"
                    >
                        Continuing the theme of flexibility and accessibility, the next step involves choosing between creating a new model from scratch or selecting a pre-trained model for fine-tuning. This decision is pivotal, as it allows users to tailor the complexity of their project to their skill level. The platform&apos;s design mirrors the dataset creation/selection process, providing a consistent user experience that reduces cognitive load and streamlines the workflow.
                    </p>
                </section>

                <section
                    className="w-full
                    py-[24px]
                    flex flex-row items-center justify-center
                    lg:w-1/2 lg:h-full
                    lg:py-0"
                >
                    <RevealWrapper
                        origin='right' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%]"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/model_selection.webp"}
                            width={1419}
                            height={910}
                            alt="Fine Tuning Step 3 - Model Selection"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

            </article>

            <article
                className="py-[24px]
                flex flex-col items-center justify-center
                border-b border-dark-primary
                lg:h-[65vh]
                lg:py-0
                lg:flex-row"
            >
                <RevealWrapper
                    origin='left' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[90%]
                    lg:w-[45%] lg:h-[65%]"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/model_selection_lofi1.webp"}
                        width={1685}
                        height={622}
                        alt="Fine Tuning Step 3 - Model Selection - LoFi1"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='right' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[90%]
                    lg:w-[45%] lg:h-[75%]"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/model_selection_lofi2.webp"}
                        width={2017}
                        height={1222}
                        alt="Fine Tuning Step 3 - Model Selection - LoFi2"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>

            <article
                className="py-[24px]
                flex flex-col items-center justify-evenly
                border-b border-dark-primary
                lg:h-[65vh]
                lg:py-0
                lg:flex-row"
            >
                <RevealWrapper
                    origin='left' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[80%] h-[70%]
                    lg:w-auto"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/model_selection.webp"}
                        width={1419}
                        height={910}
                        alt="Fine Tuning Step 3 - Model Selection"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='right' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[80%] h-[70%]
                    lg:w-auto"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/model_selection_2.webp"}
                        width={2474}
                        height={1574}
                        alt="Fine Tuning Step 3 - Model Selection - Scrolled Page"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>
        </>
    )
}