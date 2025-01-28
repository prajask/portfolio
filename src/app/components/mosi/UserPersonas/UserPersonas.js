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
                bg-dark
                rounded"
            >
                <h5
                    className="ptsans text-2xl font-bold text-light"
                >
                    Sam P. Ler
                </h5>

                <h6
                    className="ptsans text-2xl text-gray"
                >
                    The Producer
                </h6>

                <div
                    className="w-full
                    bg-light rounded-2xl"
                >
                    <Image
                        className="w-full h-auto
                        my-6"
                        src="/mosi/persona-producer.svg"
                        width={1500}
                        height={1125}
                        alt="User Persona; Producer"
                    />
                </div>

                <h6
                    className='pb-4
                    ptsans text-xl text-light font-bold
                    flex flex-row items-center gap-2'
                >
                    <FaBullseye size={24} />
                    Goals
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-gray'
                >
                    <li>
                        Push creative boundaries and experiment with unconventional sounds in their productions.
                    </li>

                    <li>
                        Integrate the Nova seamlessly into their existing DAW workflow for both composition and sound design.
                    </li>
                </ul>

                <h6
                    className='pb-4
                    ptsans text-xl font-bold text-light
                    flex flex-row items-center gap-2'
                >
                    <FaCircleExclamation size={24} />
                    Pain Points
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-gray'
                >
                    <li>
                        Finds traditional MIDI controllers limiting in their expressiveness or feel overwhelmed by their complexity.
                    </li>

                    <li>
                        Seek an instrument that bridges the gap between intuitive playability and deep sound design control.
                    </li>
                </ul>
            </div>

            <div
                className="w-full self-stretch
                p-6
                bg-dark
                rounded"
            >
                <h5
                    className="ptsans text-2xl font-bold text-light"
                >
                    Liv Keys
                </h5>

                <h6
                    className="ptsans text-2xl text-gray"
                >
                    The Performer
                </h6>

                <div
                    className="w-full
                    bg-light rounded-2xl"
                >
                    <Image
                        className="w-full h-auto
                        my-6"
                        src="/mosi/persona-performer.svg"
                        width={1500}
                        height={1125}
                        alt="User Persona; Producer"
                    />
                </div>

                <h6
                    className='pb-4
                    ptsans text-xl font-bold text-light
                    flex flex-row items-center gap-2'
                >
                    <FaBullseye size={24} />
                    Goals
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-gray'
                >
                    <li>
                        Elevate their live performances with an instrument that offers unique sounds, visual impact and dynamic control.
                    </li>

                    <li>
                        Captivate audience with a visually engaging performance and a distinct musical style.
                    </li>
                </ul>

                <h6
                    className='pb-4
                    ptsans text-xl font-bold text-light
                    flex flex-row items-center gap-2'
                >
                    <FaCircleExclamation size={24} />
                    Pain Points
                </h6>

                <ul 
                    className='pb-10 pl-6
                    list-disc
                    flex flex-col gap-4
                    text-xl text-gray'
                >
                    <li>
                        Finds traditional instrument setups limiting in terms of sonic possibilites and visual impact.
                    </li>

                    <li>
                        Seek an instrument that can act as a stand-alone performance tool or integrate seamlessly with their existing gear.
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default UserPersonas