import UserPersonas from "../UserPersonas/UserPersonas"

const TargetUsers = () => {
  return (
    <section
        className="section-container
        relative
        bg-dark"
    >
        <div
            className="content-container
            sticky top-0 h-screen
            flex flex-col lg:flex-row items-start gap-12"
        >
            <div
                className="w-full"
            >
                <h3
                    className="section-title
                    text-gray"
                >
                    Defining Non-technical Users
                </h3>

                <h4
                    className="section-subtitle
                    text-light"
                >
                    Who benifits from fine-tuning and How?
                </h4>

                <p
                    className="nunito text-xl text-gray"
                >
                    Before going further, it&apos;s important to define non-technical users.
                    These are people with <span className="font-semibold text-ibm-highlight">little to no technical knowledge</span> of generative AI and the fine-tuning process.
                    They are often <span className="font-semibold text-ibm-highlight">unaware of the risks</span> associated with these systems and may also have a general mistrust of AI.
                    However, they could still benefit greatly from using fine-tuning in their work or personal projects.
                </p>
            </div>

            <UserPersonas/>
        </div>
    </section>
  )
}

export default TargetUsers