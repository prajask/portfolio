const KeyGaps = () => {
  return (
    <section
        className='case-study-section'
    >
        <div
            className='w-11/12
            mx-auto
            xl:container
            flex flex-row items-center justify-between'
        >
            <div
                className='column column-left'
            >
                <h3
                    className='section-title'
                >
                    Gap #1
                </h3>

                <h4
                    className='section-subtitle'
                >
                    Lack of Accessible Learning Tools
                </h4>

                <p
                    className='text-lg'
                >
                    Existing resources for fine-tuning AI models are highly technical, assuming prior knowledge of machine learning concepts. This creates a barrier for non-technical users who want to leverage AI tools.
                </p>

            </div>

            <div
                className='column column-right'
            >
                <h3
                    className='section-title'
                >
                    Gap #2
                </h3>

                <h4
                    className='section-subtitle'
                >
                    Limited Understanding of AI Risks
                </h4>

                <p
                    className='text-lg'
                >
                    While fine-tuning offers customization, users are often unaware of the risks involved, such as bias, hallucinations, or ethical implications, leading to unreliable outcomes and mistrust in AI systems.
                </p>

            </div>
        </div>
    </section>
  )
}

export default KeyGaps