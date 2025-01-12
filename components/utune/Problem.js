const Problem = () => {
  return (
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
                Problem
            </h3>

            <h4
                className='section-subtitle'
            >
                Fine-Tuning is&nbsp;
                <span
                    className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                    text-transparent bg-clip-text
                    bg-[length:200%_auto]
                    animate-gradient"
                >
                    Inaccessible
                </span>
                &nbsp;and&nbsp;
                <span
                    className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                    text-transparent bg-clip-text
                    bg-[length:200%_auto]
                    animate-gradient"
                >
                    Comes with Risks
                </span>
            </h4>

            <p
                className='text-lg'
            >
                Fine-tuning Generative AI models has immense potential to help users <span className="text-ibm">leverage these systems for personalized applications</span>.
                However, it also <span className="text-ibm">introduces risks</span> such as data privacy issues, inaccuracies, and ethical concerns.
                <span className="text-ibm"> Non-technical users</span> often struggle to understand these risks,<span className="text-ibm"> making it difficult for them to fine-tune models safely and effectively</span>.
                Without clear tools to guide users in understanding these challenges and making informed decisions, <span className="text-ibm">fine-tuning could lead to misuse or unintended consequences</span>.
            </p>
            <p
                className="text-lg text-ibm"
            >
                The challenge is to design a solution that enables users to explore the possibilities of fine-tuning while educating them about the risks and promoting responsible use.
            </p>
        </div>
    </section>
  )
}

export default Problem