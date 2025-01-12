import Image from "next/image";

import { FaCheck, FaQuoteLeft, FaChevronRight } from "react-icons/fa6";

const NutritionLabel = () => {
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
                        Key Feature #2
                    </h3>

                    <h4
                        className='section-subtitle'
                    >
                        Model&nbsp;
                        <span
                            className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Nutrition Facts
                        </span>
                    </h4>

                    <p
                        className='text-lg'
                    >
                        Users don&apos;t trust AI due to a lack of transparency and understanding of how AI systems handle data and make decisions. To promote trust and transparency, we introduced AI Nutrition Facts, a feature inspired by Twilio. The label provides users with key information such as: How data is collected or How long it is stored.
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
                        <span
                            className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                            text-transparent bg-clip-text
                            bg-[length:200%_auto]
                            animate-gradient"
                        >
                            Quick Access
                        </span>
                        &nbsp;to Model Nutrition
                    </h4>

                    <p
                        className='text-lg'
                    >
                        The initial iteration of this feature allowed users to hover over a model card, revealing a <span className="text-ibm">pop-out nutritional info card</span>. This provided quick and easy access to important details, allowing users to view the nutritional information without leaving the main interface.
                    </p>

                    <Image
                        className="my-10
                        p-5
                        border border-text-primary rounded-3xl"
                        src="/utune/nutrition-iteration-1.svg"
                        alt="First iteration for model nutrition where nutrition facts pop up on hovering over a model in the models list."
                        width={1920}
                        height={1080}
                        loading="lazy"
                    />

                    <p
                        className="pb-4
                        text-lg"
                    >
                        During usability sessions, we found that <span className="text-ibm">users struggled to understand how to interpret the information</span> on the label.
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
                                Could use an explanation for what the values mean, what does yes or no mean for data deletion?
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
                                how do i tell what privacy ladder level is good?
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
                        Moving the label and Explaining the parameters
                    </h4>

                    <p
                        className='pb-4
                        text-lg'
                    >
                        To address the struggle to interpret label informatiton, the following improvements were made in the high-fidelity designs:
                    </p>

                    <ul
                        className="text-lg
                        flex flex-col gap-4"
                    >
                        <li
                            className="flex items-start gap-4"
                        >
                            <FaCheck
                                className="mt-1.5
                                flex-shrink-0"
                            />
                            <p>
                                Moved the AI Nutrition Facts into the Model Details Page for better visibility and context.
                            </p>
                        </li>

                        <li
                            className="flex items-start gap-4"
                        >
                            <FaCheck
                                className="mt-1.5
                                flex-shrink-0"
                            />
                            <div>
                                Added a <span className="text-ibm">How to Read the Label</span> section, which includes:

                                <ul
                                    className="pt-4 text-lg
                                    flex flex-col gap-4"
                                >
                                    <li
                                        className="flex items-start gap-4"
                                    >
                                        <FaChevronRight
                                            className="mt-1.5
                                            flex-shrink-0"
                                        />

                                        <p>
                                            Clear descriptions for each parameter on the label.
                                        </p>
                                    </li>

                                    <li
                                        className="flex items-start gap-4"
                                    >
                                        <FaChevronRight
                                            className="mt-1.5
                                            flex-shrink-0"
                                        />
                                        
                                        <p>
                                            Explanations of what different values mean, enabling users to interpret the information effectively.
                                        </p>
                                    </li>
                                </ul>                            
                            </div>
                        </li>
                    </ul>

                    <Image
                        className="my-10
                        p-5
                        border border-text-primary rounded-3xl"
                        src="/utune/nutrition-iteration-2.svg"
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

export default NutritionLabel