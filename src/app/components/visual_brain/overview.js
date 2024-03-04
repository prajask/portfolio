import Image from "next/image"

export default function Overview(){
    return(
        <article
                className="h-[60vh]
                flex flex-row items-center justify-start
                border-b border-b-dark-primary"
            >
                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    border-r border-r-dark-primary"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Problem 
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        The&nbsp;
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Complexity of Fine-Tuning
                        </span>
                    </h3>
                    <p>
                        Computer vision represents an exciting technological domain that enables computers to interpret and analyze images and videos in a manner akin to human perception. However, one of the major hurdles in leveraging this technology is fine-tuning the models to achieve accurate results, especially for those without a deep technical background. The complexity involved in adjusting model parameters, and the overwhelming amount of technical jargon make the fine-tuning process daunting. This situation discourages many interested learners from exploring Computer vision.
                    </p>
                </section>

                <section
                    className="w-1/2 h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Solution
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
                            Fine-Tuning the Complexity Out
                        </span>
                    </h3>
                    <p>
                        We&apos;ve tried to simplify the fine-tuning process of computer vision models, making it accessible and engaging for everyone. For newcomers, our fine-tuning wizard simplifies the process with straightforward explanations allowing you to learn by directly interacting with model parameters—no jargon allowed. For those with a technical background, this feature offers the flexibility to experiment and optimize with advanced settings, ensuring your projects reach their full potential. With this approach, we aim to harness the power of computer vision, opening up a world of creative and practical applications.
                    </p>
                </section>
            </article>
    )
}