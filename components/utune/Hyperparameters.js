import Image from "next/image";

import { FaQuoteLeft, FaCheck } from "react-icons/fa6";

const Hyperparameters = () => {
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
                    Key Feature #1
                </h3>

                <h4
                    className='section-subtitle'
                >
                    Simplifying Hyperparameters
                </h4>

                <p
                    className='text-lg'
                >
                    Adjusting hyperparameters can be hard for non-technical users because it requires understanding complex terms and how they affect the model&apos;s performance. Users often don&apos;t know how different settings work together, making it challenging to make the right choices. Without clear guidance, this can lead to confusion and poor results. Simplifying this process helps make fine-tuning more accessible.
                </p>
            </div>
        </section>

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
                    Iteration 1
                </h3>

                <h4
                    className='section-subtitle'
                >
                    Trying out&nbsp;
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Analogies
                    </span>
                </h4>

                <p
                    className='text-lg'
                >
                    We started by experimenting with analogies to explain the function of each hyperparameter.
                    This idea came from an observation during a class presentation. In the presentation, we used an analogy to explain pre-trained Gen AI models and fine-tuning, and it made these concepts much easier for everyone to understand.
                    Based on this, we decided to use analogies to help users understand hyperparameters more easily.
                </p>

                <Image
                    className="my-10
                    p-5
                    border border-text-primary rounded-3xl"
                    src="/utune/hyperparameters-iteration-1-analogies.svg"
                    alt="Iteration showing the analogies used to explain hyperparameters"
                    width={1920}
                    height={1080}
                    loading="lazy"
                />

                <p
                    className="pb-6
                    text-lg"
                >
                    However, user feedback indicated that the <span className="text-ibm">analogies were too abstract</span>, making it difficult for users to understand the connection to the actual parameters.
                </p>

                <div
                    className="pb-12
                    flex flex-col items-center gap-10
                    xl:flex-row xl:gap-0"
                >
                    <div
                        className="column column-left
                        p-4
                        flex items-start gap-4
                        bg-primary-100"
                    >
                        <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
                    
                        <q
                            className="text-xl italic"
                        >
                            The wording is a little weird…  why would it take forever to get to the destination
                        </q>
                    </div>

                    <div
                        className="column column-right
                        p-4
                        flex items-start gap-4
                        bg-primary-100"
                    >
                        <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
                    
                        <q
                            className="text-xl italic"
                        >
                            It does not convey the same definition as the textbook definition
                        </q>
                    </div>
                </div>

                <p
                    className="pb-6
                    text-lg"
                >
                    Users also highlighted that the <span className="text-ibm">layout and amount of text</span> on the screen were <span className="text-ibm">overwhelming</span>.
                </p>

                <div
                    className="flex flex-col items-center gap-10
                    xl:flex-row xl:gap-0"
                >
                    <div
                        className="column column-left
                        p-4
                        flex items-start gap-4
                        bg-primary-100"
                    >
                        <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
                    
                        <q
                            className="text-xl italic"
                        >
                            I wasnt expecting that so much information pops out on me
                        </q>
                    </div>

                    <div
                        className="column column-right
                        p-4
                        flex items-start gap-4
                        bg-primary-100"
                    >
                        <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
                    
                        <q
                            className="text-xl italic"
                        >
                            I want the definitions but not all together
                        </q>
                    </div>
                </div>
            </div>
        </section>

        <section
            className='case-study-section'
        >
            <div
                className='w-11/12
                max-w-7xl
                mx-auto'
            >
                <h3
                    className='section-title'
                >
                    Iteration 2
                </h3>

                <h4
                    className='section-subtitle'
                >
                    Using&nbsp;
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Simplified technical definitions
                    </span>
                    &nbsp;and an&nbsp;
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Accordion style layout
                    </span>
                    &nbsp;to explain hyperparameter functions
                </h4>

                <p
                    className='pb-4
                    text-lg'
                >
                    To tackle abstract analogies and overwhelming layout, the design was revised by:
                </p>

                <ul
                    className="
                    text-lg
                    flex flex-col gap-4"
                >
                    <li
                        className="flex items-start gap-4"
                    >
                        <FaCheck
                            size={20}
                            className="mt-1.5 flex-shrink-0"
                        />
                        <p>
                            <span className="text-ibm">Replacing analogies with simplified technical definitions</span> that clearly describe each hyperparameter and its role in the fine-tuning process.
                        </p>
                    </li>

                    <li
                        className="flex items-start gap-4"
                    >
                        <FaCheck
                            size={20}
                            className="mt-1.5 flex-shrink-0 text-text-primary"
                        />
                        <p>
                            <span className="text-ibm">Simplifying the layout</span> and <span className="text-ibm">reducing the on-screen text</span> to improve clarity and reduce cognitive load.
                        </p>
                    </li>

                    <li>
                        
                    </li>
                </ul>

                <Image
                    className="my-10
                        p-5
                        border border-text-primary rounded-3xl"
                    src="/utune/hyperparameters-iteration-2-accordions.svg"
                    alt="Final iteration for hyperparameters screen with simplified technical definitions and accordion like layout"
                    width={1920}
                    height={1080}
                    loading="lazy"
                />
            </div>
        </section>
    </>
  )
}

export default Hyperparameters