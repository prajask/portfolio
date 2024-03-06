import Image from "next/image"

export default function Reflection(){
    return(
        <>
            <article
                className="h-[40vh]
                border-b border-b-dark-primary"
            >
                <section
                    className="w-full h-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center"
                >
                    <h2
                        className="mb-[12px] text-xl font-medium"
                    >
                        Retrospective
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        How&nbsp; 
                        <span
                            className="bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Secondary Research and Ideation
                        </span>
                        &nbsp;Sparked Our Design Journey
                    </h3>
                    <p
                        className="text-lg"
                    >
                        A key learning point for our team was the importance of blending direct user insights with secondary research. This strategy allowed us to go beyond the surface of immediate user feedback, leading to more holistic and far-reaching solutions for the users. This broader lens on the issue informed our design decisions, leading us to develop features that addressed a wide spectrum of user concerns. This experience highlighted the value of merging direct insights with in-depth research, a method crucial in crafting solutions that surpassed user expectations and significantly enhanced the overall user experience.
                    </p>
                </section>
            </article>
        </>
    )
}