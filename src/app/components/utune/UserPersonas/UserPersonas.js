import Image from "next/image";

import { FaBullseye, FaCircleExclamation } from "react-icons/fa6";

const UserPersonas = () => {
  return (
    <div
        className="h-full
        flex flex-col items-start gap-12
        overflow-y-scroll
        no-scrollbar
        pointer-events-auto"
    >
            <div
                className="w-full self-stretch
                p-6
                bg-light
                rounded"
            >
                <h5
                    className="ptsans text-2xl font-bold text-dark"
                >
                    Rachel Thomas
                </h5>

                <h6
                    className="ptsans text-2xl text-dark-gray"
                >
                    Owner of an online home decor business
                </h6>

                <div
                    className="w-full"
                >
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
                </div>

                <h6
                    className='pb-4
                    ptsans text-xl font-bold
                    flex flex-row items-center gap-2'
                >
                    <FaBullseye size={24} />
                    Goals
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-dark-gray'
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

                <h6
                    className='pb-4
                    ptsans text-xl font-bold
                    flex flex-row items-center gap-2'
                >
                    <FaCircleExclamation size={24} />
                    Pain Points
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-dark-gray'
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
                className="w-full self-stretch
                p-6
                bg-light
                rounded"
            >
                <h5
                    className="ptsans text-2xl font-bold text-dark"
                >
                    Alex Martinez
                </h5>

                <h6
                    className="ptsans text-2xl text-dark-gray"
                >
                    Content Creator for a fitness brand
                </h6>

                <div
                    className="w-full"
                >
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
                </div>

                <h6
                    className='pb-4
                    ptsans text-xl font-bold
                    flex flex-row items-center gap-2'
                >
                    <FaBullseye size={24} />
                    Goals
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-dark-gray'
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

                <h6
                    className='pb-4
                    ptsans text-xl font-bold
                    flex flex-row items-center gap-2'
                >
                    <FaCircleExclamation size={24} />
                    Pain Points
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-dark-gray'
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
  )
}

export default UserPersonas