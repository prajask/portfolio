import Image from "next/image";
import { FaBullseye, FaCircleExclamation } from "react-icons/fa6";

const UserPersonas = () => {
  return (
    <section
        className='case-study-section'
    >
        <div
            className='w-11/12
            max-w-7xl
            mx-auto
            flex flex-col items-start gap-10
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
                    The Producer
                </h5>

                <Image
                    className="w-full h-auto
                    py-10"
                    src="/mosi/persona-producer.svg"
                    width={1500}
                    height={1125}
                    alt="User Persona; Producer"
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
                        Push creative boundaries and experiment with unconventional sounds in their productions.
                    </li>

                    <li>
                        Integrate the Nova seamlessly into their existing DAW workflow for both composition and sound design.
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
                        Finds traditional MIDI controllers limiting in their expressiveness or feel overwhelmed by their complexity.
                    </li>

                    <li>
                        Seek an instrument that bridges the gap between intuitive playability and deep sound design control.
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
                    The Performer
                </h5>

                <Image
                    className="w-full h-auto
                    py-10"
                    src="/mosi/persona-performer.svg"
                    width={1500}
                    height={1125}
                    alt="User Persona; Producer"
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
                        Elevate their live performances with an instrument that offers unique sounds, visual impact and dynamic control.
                    </li>

                    <li>
                        Captivate audience with a visually engaging performance and a distinct musical style.
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
                        Finds traditional instrument setups limiting in terms of sonic possibilites and visual impact.
                    </li>

                    <li>
                        Seek an instrument that can act as a stand-alone performance tool or integrate seamlessly with their existing gear.
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default UserPersonas