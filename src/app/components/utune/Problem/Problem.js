const Problem = () => {
  return (
    <section
        className="section-container"
    >
        <div
            className="content-container"
        >
            <h3
                className="section-title
                text-dark-gray"
            >
                Problem
            </h3>

            <h4
                className="section-subtitle
                text-dark"
            >
                Fine-Tuning is inaccessible and comes with risks
            </h4>

            <p
                className="nunito text-xl text-dark-gray"
            >
                Fine-tuning Generative AI models has immense potential to help users <span className="font-semibold text-ibm">leverage these systems for personalized applications</span>.
                However, it also <span className="font-semibold text-ibm">introduces risks</span> such as data privacy issues, inaccuracies, and ethical concerns.
                <span className="font-semibold text-ibm"> Non-technical users</span> often struggle to understand these risks,<span className="font-semibold text-ibm"> making it difficult for them to fine-tune models safely and effectively</span>.
                Without clear tools to guide users in understanding these challenges and making informed decisions, fine-tuning could <span className="font-semibold text-ibm">lead to misuse or unintended consequences</span>.
                The challenge is to design a solution that enables users to explore the possibilities of fine-tuning while educating them about the risks and promoting responsible use.
            </p>
        </div>
    </section>
  )
}

export default Problem