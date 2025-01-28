import Image from "next/image";

const Hyperparameters = () => {
  return (
    <section
        className="section-container
        bg-dark"
    >
        <div
            className="content-container"
        >
            <h3
                className="section-title
                text-gray"
            >
                Key Feature #1
            </h3>

            <h4
                className="section-subtitle
                text-light"
            >
                Simplyfying Hyperparameters
            </h4>

            <div
                className="mt-10
                flex flex-col lg:flex-row items-start gap-7 lg:gap-14"
            >
                <div
                    className="w-full lg:w-2/4"
                >
                    <p
                        className="nunito text-xl text-gray"
                    >
                        Adjusting hyperparameters can be hard for non-technical users because it requires understanding complex terms and how they affect the model&apos;s performance.
                        Users often don&apos;t know how different settings work together, making it challenging to make the right choices.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-6
                    flex items-center
                    bg-dark-gray
                    rounded"
                >
                    <Image
                        className="rounded"
                        src="/utune/hyperparameters.png"
                        width={1312}
                        height={800}
                        alt="Hyperparameters screen design"
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
                        font-bold text-gray"
                    >
                        Decision 1 - Using Simplified Technical Definitions
                    </h3>

                    <p
                        className="mt-4
                        nunito text-lg text-gray"
                    >
                        The design includes simplified technical definitions that clearly explain each hyperparameter and its role in the fine-tuning process.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-6
                    flex items-center
                    bg-dark-gray
                    rounded"
                >
                    <Image
                        className="rounded"
                        src="/utune/hyperparameters-decision-1.png"
                        width={992}
                        height={232}
                        alt="Hyperparameters Decision 1 - Simplified Technical Definitions"
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
                        font-bold text-gray"
                    >
                        Decision 2 - Accordion Style Layout
                    </h3>

                    <p
                        className="mt-4
                        nunito text-lg text-gray"
                    >
                        The layout is streamlined, with minimal, on-demand text presented in an accordion-style format to improve clarity and reduce cognitive load.
                        This makes it easier for users to navigate the interface and understand the settings without feeling overwhelmed.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-2 md:p-6
                    flex items-center
                    bg-dark-gray
                    rounded"
                >
                    <Image
                        className="rounded"
                        src="/utune/hyperparameters-decision-2.gif"
                        width={800}
                        height={181}
                        alt="Hyperparameters Decision 2 - Acoordion style layout"
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
                        font-bold text-gray"
                    >
                        Past Iterations
                    </h3>

                    <p
                        className="mt-4
                        nunito text-lg text-gray"
                    >
                        We started by <span className="font-semibold text-ibm-highlight">experimenting with analogies</span> to explain the function of each hyperparameter.
                        This idea came from an observation during a presentation. In the presentation, we used an analogy to explain pre-trained Gen AI models and fine-tuning, and it made these concepts much easier for everyone to understand.
                        Based on this, we decided to use analogies to help users understand hyperparameters more easily.
                        <br/>
                        However, user feedback indicated that the <span className="font-semibold text-ibm-highlight">analogies were too abstract</span>, making it difficult for users to understand the connection to the actual parameters.
                        Users also highlighted that the layout and <span className="font-semibold text-ibm-highlight">amount of text on the screen were overwhelming</span>.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-2 lg:p-6
                    flex items-center
                    bg-dark-gray
                    rounded"
                >
                    <Image
                        className="shadow-lg rounded"
                        src="/utune/hyperparameters-iteration-1.png"
                        width={1312}
                        height={800}
                        alt="Hyperparameters Past Itertions with Analogies and all text layout"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hyperparameters