import Image from "next/image"

export default function Reflection(){
    return(
        <>
            <article
                className="h-[45vh]
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    <h2
                        className="mb-[12px] text-xl"
                    >
                        Retrospective
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        Lessons from a&nbsp;
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Multidisciplinary Journey
                        </span>
                    </h3>
                    <p
                        className="text-lg"
                    >
                        Looking back, we learned a lot about working together across different fields. Our project started as a software engineering challenge at a hackathon in March 2020. But as we got more into it, we kept working on it and improving it. This experience showed us how much you can achieve by mixing different skills and viewpoints. By having software engineers, experts in computer vision, and designers work together, we were able to make our solutions strong, easy to use, and full of new ideas. This journey proved how powerful it is to combine different kinds of knowledge to solve complicated problems, showing how working together across disciplines can lead to great discoveries.
                    </p>
                </section>
            </article>
        </>
    )
}