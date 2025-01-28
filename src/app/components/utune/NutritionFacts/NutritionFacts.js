import Image from "next/image";

const NutritionFacts = () => {
  return (
    <section
        className="section-container
        bg-light"
    >
        <div
            className="content-container"
        >
            <h3
                className="section-title
                text-dark-gray"
            >
                Key Feature #2
            </h3>

            <h4
                className="section-subtitle
                text-dark"
            >
                AI Nutrition Facts
            </h4>

            <div
                className="mt-10
                flex flex-col lg:flex-row items-start gap-7 lg:gap-14"
            >
                <div
                    className="w-full lg:w-2/4"
                >
                    <p
                        className="nunito text-xl text-dark-gray"
                    >
                        Users don&apos;t trust AI due to a lack of transparency and understanding of how AI systems handle data and make decisions.
                        To promote trust and transparency, we introduced AI Nutrition Facts, a feature <span className="font-semibold text-twilio">inspired by Twilio</span>.
                        The label provides users with key information such as: How data is collected or How long it is stored.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-2 lg:p-6
                    flex items-center
                    bg-gray
                    rounded"
                >
                    <Image
                        className="rounded"
                        src="/utune/model-nutrition.png"
                        width={1312}
                        height={800}
                        alt="Model Details screen showcasing Model Nutrition Facts"
                    />
                </div>
            </div>

            <div
                className="mt-24
                flex flex-col lg:flex-row items-start gap-7 lg:gap-14"
            >
                <div
                    className="w-full lg:w-2/4"
                >
                    <h3
                        className="section-title
                        font-bold text-dark-gray"
                    >
                        Decision 1 - How to Read the Label
                    </h3>

                    <p
                        className="mt-4
                        nunito text-lg text-dark-gray"
                    >
                        To make the nutrition information more accessible, the design includes a dedicated &quot;How to Read the Label&quot; section.
                        This section provides clear descriptions for each parameter on the label, along with explanations of what different values mean.
                        By breaking down the details in an easy-to-understand way, the feature empowers users to interpret the information effectively and make informed decisions about the models they use.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-2 lg:p-6
                    flex items-center
                    bg-gray
                    rounded"
                >
                    <Image
                        className="rounded"
                        src="/utune/model-nutrition-decision-1.gif"
                        width={800}
                        height={347}
                        alt="How to Read Model Nutrition Facts"
                        unoptimized
                    />
                </div>
            </div>

            <div
                className="mt-24
                flex flex-col lg:flex-row items-start gap-7 lg:gap-14"
            >
                <div
                    className="w-full lg:w-2/4"
                >
                    <h3
                        className="section-title
                        font-bold text-dark-gray"
                    >
                        Decision 2 - Easy Access
                    </h3>

                    <p
                        className="mt-4
                        nunito text-lg text-dark-gray"
                    >
                        The AI Nutrition Facts are placed within the Model Details Page to provide better visibility and context.
                        This ensures that users can easily access and understand important information about the model while exploring its details, making the feature more intuitive.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-2 lg:p-6
                    flex items-center
                    bg-gray
                    rounded"
                >
                    <Image
                        className="rounded"
                        src="/utune/model-nutrition-decision-2.gif"
                        width={800}
                        height={487}
                        alt="Model Nutrition - Decision 2 - Label Placement"
                        unoptimized
                    />
                </div>
            </div>

            <div
                className="mt-24
                flex flex-col lg:flex-row items-start gap-7 lg:gap-14"
            >
                <div
                    className="w-full lg:w-2/4"
                >
                    <h3
                        className="section-title
                        font-bold text-dark-gray"
                    >
                        Past Iterations
                    </h3>

                    <p
                        className="mt-4
                        nunito text-lg text-dark-gray"
                    >
                        The initial iteration of this feature allowed users to <span className="font-semibold text-ibm">hover over a model card</span>, revealing a pop-out nutritional info card.
                        This provided <span className="font-semibold text-ibm">quick and easy access</span> to important details, allowing users to view the nutritional information without leaving the main interface.
                        <br/>
                        However, usability sessions revealed that users <span className="font-semibold text-ibm">struggled to understand</span> how to interpret the information on the label.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-2 lg:p-6
                    flex items-center
                    bg-gray
                    rounded"
                >
                    <Image
                        className="shadow-lg rounded"
                        src="/utune/model-nutrition-past-iteration.png"
                        width={1440}
                        height={1024}
                        alt="Model Nutrition past iteration with hover reveal"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default NutritionFacts