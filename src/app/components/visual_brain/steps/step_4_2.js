"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Step4_2(){
    return(
        <>
            <article
                className="flex flex-col items-center justify-start
                border-b border-dark-primary
                lg:h-[45vh]
                lg:flex-row"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    <h2
                        className="mb-[12px] text-xl font-medium"
                    >
                        Expert-Backed Secondary Research
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
                            Grouped Parameters
                        </span>
                        &nbsp;&nbsp;for Smoother Tuning
                    </h3>
                    <p
                        className="text-lg"
                    >
                        To improve how users learn and interact with fine-tuning computer vision models, we carefully organized similar parameters together. This decision was based on secondary research and advice from technical experts. We talked to experts and looked into the best ways to group parameters, making the interface easier to use and helping users naturally understand how different settings affect their model. By organizing these options, we create a clear path for users, making complicated adjustments easier to manage. This setup promotes trying out new things and learning, giving users more confidence and insight as they adjust their models.
                    </p>
                </section>

            </article>

            <article
                className="flex flex-row items-center justify-evenly
                py-[24px]
                border-b border-dark-primary
                lg:h-[65vh]
                lg:py-0"
            >
                <RevealWrapper
                    origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[35%] h-[80%]
                    lg:w-[25%]"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/model_tuning_lofi1.webp"}
                        width={1403}
                        height={2294}
                        alt="Fine Tuning Step 4.1 - Fine Tuning Parameters - LoFi"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='left' delay={400} duration={1000} distance='100px' reset={false}
                    className="w-[4%]"
                >
                    <Image
                        className="w-full"
                        src={"/arrow.png"}
                        width={193}
                        height={40}
                        alt="Arrow Pointing Right"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='top' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[35%] h-[80%]
                    lg:w-[25%]"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/model_tuning_lofi2.webp"}
                        width={1398}
                        height={1880}
                        alt="Fine Tuning Step 4.1 - Fine Tuning Parameters - Grouping - LoFi"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>

            <article
                className="flex flex-col items-center justify-evenly
                py-[24px]
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
                        src={"/visual_brain/model_tuning.webp"}
                        width={1413}
                        height={898}
                        alt="Visual Brain - Fine Tuning Screen"
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
                        src={"/visual_brain/model_tuning_advanced.webp"}
                        width={2477}
                        height={1590}
                        alt="Visual Brain - Advanced Fine Tuning Screen"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>
        </>
    )
}