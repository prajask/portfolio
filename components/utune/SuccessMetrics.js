const SuccessMetrics = () => {
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
                    Goals
                </h3>

                <h4
                    className='section-subtitle pb-0'
                >
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Simplify learning
                    </span>
                    &nbsp;and&nbsp;
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Build trust
                    </span>
                    &nbsp;in fine tuning
                </h4>

                <p
                    className="text-lg"
                >
                    A successful product would make learning about fine-tuning accessible for non-technical users while also educating them about the risks involved at every step of the process.
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
                flex flex-col items-start gap-20
                xl:flex-row xl:gap-0'
            >
                <div
                    className='column column-left'
                >
                    <h3
                        className='section-title'
                    >
                        Success Metric
                    </h3>

                    <h4
                        className='section-subtitle'
                    >
                        User Comprehension of Fine-Tuning
                    </h4>

                    <p
                        className='text-lg'
                    >
                        Users demonstrate an improved understanding of fine-tuning concepts and generative AI.
                    </p>
                </div>

                <div
                    className='column column-right'
                >
                    <h3
                        className='section-title'
                    >
                        Success Metric
                    </h3>

                    <h4
                        className='section-subtitle'
                    >
                        User Comprehension of AI Risks
                    </h4>

                    <p
                        className='text-lg'
                    >
                        Users accurately identify key AI risks, including bias, hallucinations, and ethical considerations.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default SuccessMetrics