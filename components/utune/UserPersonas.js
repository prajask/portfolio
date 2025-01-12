import Image from "next/image";

import { FaBullseye, FaCircleExclamation } from "react-icons/fa6";

const UserPersonas = () => {
  return (
    <>
        <section
            className='case-study-section subsection'
        >
            <div
                className='w-11/12
                max-w-7xl
                mx-auto'
            >
                <h3
                    className='section-title'
                >
                    Defining Non-Technical Users
                </h3>

                <h4
                    className='section-subtitle'
                >
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Who
                    </span>
                    &nbsp;can benifit from fine-tuning and&nbsp;
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        How
                    </span>
                    &nbsp;?
                </h4>

                <p
                    className="text-lg"
                >
                    Before going further, it&apos;s important to define non-technical users. These are people with little to no technical knowledge of generative AI and the fine-tuning process. They are often unaware of the risks associated with these systems and may also have a general mistrust of AI. However, they could still benefit greatly from using fine-tuning in their work or personal projects.
                </p>
            </div>
        </section>

        <section
            className='case-study-section'
        >
            <div
                className='w-11/12
                max-w-7xl
                mx-auto
                flex flex-col items-start justify-between gap-32
                xl:flex-row xl:gap-0'
            >
                <div
                    className='column column-left'
                >
                    <h3
                        className='section-title'
                    >
                        User Persona
                    </h3>

                    <h4
                        className='section-subtitle'
                    >
                        Rachel Thomas
                    </h4>

                    <h5
                        className="text-xl font-medium"
                    >
                        Owner of an online home décor business
                    </h5>

                    <Image
                        className="w-auto 
                        xl:h-96
                        mx-auto
                        py-10"
                        src="/utune/persona-woman.webp"
                        width={1034}
                        height={622}
                        alt="User Persona; Rachel -  Small Business Owner"
                    />

                    <h5
                        className='pb-4
                        text-xl font-semibold
                        flex flex-row items-center gap-2'
                    >
                        <FaBullseye size={24} />
                        Goals
                    </h5>

                    <ul 
                        className='pb-10 pl-4
                        list-disc
                        flex flex-col gap-4
                        text-lg'
                    >
                        <li>
                            Enhance customer support on her e-commerce site by creating a chatbot expert in her specific product line.
                        </li>

                        <li>
                            Increase efficiency by reducing the time spent personally answering customer queries.
                        </li>

                        <li>
                            Build trust with customers through accurate, reliable chatbot responses.
                        </li>
                    </ul>

                    <h5
                        className='pb-4
                        text-xl font-semibold
                        flex flex-row items-center gap-2'
                    >
                        <FaCircleExclamation size={24} />
                        Pain Points
                    </h5>

                    <ul
                        className='pl-4
                        list-disc
                        flex flex-col gap-4
                        text-lg'
                    >
                        <li>
                            General chatbot models lack the specialized knowledge required to answer detailed questions about her product line.
                        </li>

                        <li>
                            Feels overwhelmed by the technical complexity of fine-tuning AI models.
                        </li>

                        <li>
                            Concerned about customer data privacy and ensuring the chatbot doesn&apos;t provide incorrect information.
                        </li>
                    </ul>
                </div>

                <div
                    className='column column-right'
                >
                    <h3
                        className='section-title'
                    >
                        User Persona
                    </h3>

                    <h4
                        className='section-subtitle'
                    >
                        Alex Martinez
                    </h4>

                    <h5
                        className="text-xl font-medium"
                    >
                        Content Creator for a fitness brand
                    </h5>

                    <Image
                        className="w-auto
                        xl:h-96
                        mx-auto
                        py-10"
                        src="/utune/persona-man.webp"
                        width={1537}
                        height={1025}
                        alt="User Persona; Alex - Fiteness Brand Content Creator"
                    />

                    <h5
                        className='pb-4
                        text-xl font-semibold
                        flex flex-row items-center gap-2'
                    >
                        <FaBullseye size={24} />
                        Goals
                    </h5>

                    <ul 
                        className='pb-10 pl-4
                        list-disc
                        flex flex-col gap-4
                        text-lg'
                    >
                        <li>
                            Generate social media content that aligns perfectly with their brand&apos;s voice and guidelines.
                        </li>

                        <li>
                            Increase engagement on social media through high-quality, consistent posts.
                        </li>

                        <li>
                            Save time while maintaining creative control over the content creation process.
                        </li>
                    </ul>

                    <h5
                        className='pb-4
                        text-xl font-semibold
                        flex flex-row items-center gap-2'
                    >
                        <FaCircleExclamation size={24} />
                        Pain Points
                    </h5>

                    <ul
                        className='pl-4
                        list-disc
                        flex flex-col gap-4
                        text-lg'
                    >
                        <li>
                            General AI models generate content that doesn&apos;t match their brand&apos;s tone or aesthetics.
                        </li>

                        <li>
                            Struggles with understanding how to tweak AI models to reflect the nuances of their brand voice.
                        </li>

                        <li>
                            Needs a way to experiment with AI outputs quickly without diving into overly technical tools.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default UserPersonas