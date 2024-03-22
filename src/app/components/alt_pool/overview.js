import Image from "next/image"

export default function Overview(){
    return(
        <article
                className="flex flex-col items-center justify-start
                border-b border-b-dark-primary
                lg:h-[60vh]
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
                    <h2
                        className="mb-[12px] text-xl font-medium"
                    >
                        Goal 
                    </h2>
                    <h3
                        className="mb-[24px]
                        text-2xl font-semibold"
                    >
                        Breaking Cues
                        <span
                            className="bg-gradient-to-r from-visual_brain-primary via-dark-primary to-visual_brain-primary
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            &nbsp;Beyond the Gamepad
                        </span>
                    </h3>
                    <p
                        className="text-lg"
                    >
                        The primary aim of this project is to develop an alternate controller specifically designed for playing snooker pool in a digital environment. The objective is to transcend traditional gamepad interfaces to offer players a more embodied and intuitive gaming experience. This involves creating a controller that mimics the physical cues and intricacies of real-world snooker, enabling players to engage with the game in a manner that feels natural and immersive.
                    </p>
                </section>

                <section
                    className="w-full
                    px-[5%] py-[24px]
                    flex flex-col justify-center
                    lg:w-1/2 lg:h-full"
                >
                    <h2
                        className="mb-[12px] text-xl font-medium"
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
                            Crafting the Future
                        </span>
                        &nbsp;of Digital Snooker
                    </h3>
                    <p
                        className="text-lg"
                    >
                        Leveraging Arduino and Processing, the project transforms physical player movements into immersive digital gameplay, creating an intuitive snooker pool experience. Combined with Creo&apos;s 3D modeling and rapid prototyping via 3D printing, the design ensures ergonomic comfort and adaptability. This approach aims to revolutionize digital snooker by closely mirroring the physical game, enhancing engagement and accessibility.
                    </p>
                </section>
            </article>
    )
}