const Goals = () => {
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
                Defining Success Metrics
            </h3>

            <h4
                className="section-subtitle
                text-dark"
            >
                Simplify Fine-Tuning and Build trust in Gen-AI
            </h4>

            <p
                className="nunito text-xl text-dark-gray"
            >
                A successful product would make learning about fine-tuning accessible for non-technical users while also educating them about the risks involved at every step of the process.
                To measure this, we defined clear success metrics that align with these goals, ensuring the solution addresses both accessibility and responsible use.
            </p>

            <div
                className="mt-10
                flex flex-col lg:flex-row items-start gap-10"
            >
                <div
                    className="w-full self-stretch
                    p-6
                    bg-dark rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-light"
                    >
                        User Comprehension of Fine-Tuning
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-gray"
                    >
                        Users demonstrate an improved understanding of fine-tuning concepts and generative AI.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-6
                    bg-dark rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-light"
                    >
                        User Comprehension of AI Risks
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-gray"
                    >
                        Users accurately identify key AI risks, including bias, hallucinations, and ethical considerations.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Goals