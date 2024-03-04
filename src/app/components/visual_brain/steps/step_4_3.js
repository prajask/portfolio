"use client"

import { RevealWrapper } from  'next-reveal'

import Image from "next/image"

export default function Step4_3(){
    return(
        <>
            <article
                className="h-[40vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
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
                        Sliding into&nbsp;
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Controlled Precision
                        </span>
                    </h3>
                    <p>
                        In designing the interface for our fine-tuning wizard, we chose to implement sliders for adjusting model parameters. This choice was driven by the dual goals of enhancing user experience and enforcing practical limits on parameter values. Sliders visually represent the range of possible adjustments, making it immediately clear to users how far they can tweak each setting. This method not only simplifies the interaction but also naturally prevents users from entering values that could destabilize the model training process. By incorporating sliders, we provide a guided yet flexible environment for experimentation, allowing users to easily explore the impact of different settings on their models while ensuring a level of safety and reliability in the fine-tuning process.
                    </p>
                </section>

            </article>

            <article
                className="h-[40vh]
                px-[5%]
                flex flex-row items-center justify-between
                border-b border-b-dark-primary"
            >
                <RevealWrapper
                    origin='top' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[25%] h-[50%] -z-10
                    p-[1%]
                    border-4 border-visual_brain-primary"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/learning_rate_slider.png"}
                        width={467}
                        height={223}
                        alt="Slider Input for Learning Rate"
                        loading="lazy"
                    />
                </RevealWrapper>
                
                <RevealWrapper
                    origin='bottom' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[25%] h-[50%] -z-10
                    p-[1%]
                    border-4 border-visual_brain-primary"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/number_of_epochs_slider.png"}
                        width={467}
                        height={223}
                        alt="Slider Input for Number of Epochs"
                        loading="lazy"
                    />
                </RevealWrapper>

                <RevealWrapper
                    origin='top' delay={200} duration={1000} distance='100px' reset={false}
                    className="w-[25%] h-[50%] -z-10
                    p-[1%]
                    border-4 border-visual_brain-primary"
                >
                    <Image
                        className="w-full h-full"
                        src={"/visual_brain/kernel_size_slider.png"}
                        width={467}
                        height={223}
                        alt="Slider Input for Kernel Size"
                        loading="lazy"
                    />
                </RevealWrapper>
            </article>
        </>
    )
}