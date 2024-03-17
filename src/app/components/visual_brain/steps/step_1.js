"use client"

import { RevealWrapper } from "next-reveal"

import Image from "next/image"

export default function Step1(){
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
                        To&nbsp;
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Create or Curate?
                        </span>
                    </h3>
                    <p
                        className="text-lg"
                    >
                        At the heart of any computer vision model is the dataset. We simplified the initial step by offering users a choice: to create a new dataset or to utilize a pre-existing one. This flexibility allows users to either start from scratch, offering a learning experience in dataset creation, or to leverage existing datasets, accelerating the path to model training.
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
                        className="w-[80%] -z-10"
                    >
                        <Image
                            className="w-full"
                            src={"/visual_brain/dataset_selection.webp"}
                            width={1421}
                            height={901}
                            alt="Fine Tuning Step 1 - Dataset Selection"
                            loading="lazy"
                        />
                    </RevealWrapper>
                </section>

            </article>

            <article
                className="flex flex-row items-center justify-center
                border-b border-b-dark-primary
                lg:h-[65vh]"
            >
                <RevealWrapper
                        origin='top' delay={200} duration={1000} distance='100px' reset={false}
                        className="py-[24px]
                        lg:w-[35%] lg:h-[80%]
                        lg:py-0"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/data_selection_lofi.webp"}
                        width={1481}
                        height={1278}
                        alt="Fine Tuning Step 1 - Dataset Selection - LoFi"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>

            <article
                className="flex items-center justify-evenly
                py-[24px]
                border-b border-b-dark-primary
                lg:h-[65vh]
                lg:py-0
                flex-col lg:flex-row"
            >
                <RevealWrapper
                        origin='left' delay={200} duration={1000} distance='100px' reset={false}
                        className="w-[80%] h-[70%]
                        lg:w-auto"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/dataset_selection_2.webp"}
                        width={2475}
                        height={1583}
                        alt="Fine Tuning Step 1 - Dataset Selection"
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
                        src={"/visual_brain/dataset_selection_3.webp"}
                        width={1415}
                        height={903}
                        alt="Fine Tuning Step 1 - Dataset Selection - Scrolled Page"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>
        </>
    )
}