import Image from "next/image";

const Approach = () => {
  return (
    <section
        className="section-container
        bg-dark"
    >
        <div
            className="content-container"
        >
            <h4
                className="section-title
                text-gray"
            >
                Approach
            </h4>

            <h5
                className="section-subtitle
                text-light"
            >
                Learning from Experts, Competitors, and Users
            </h5>

            <div
                className="w-full self-stretch
                p-6
                my-10
                flex items-center
                bg-dark-gray
                rounded"
            >
                <Image
                    src="/utune/approach.svg"
                    width={1920}
                    height={1080}
                    alt="Design approach followed to develop U-Tune"
                />
            </div>

            <div
                className="w-full
                flex flex-col items-start gap-10"
            >
                <div
                    className="w-full
                    flex flex-col lg:flex-row items-start gap-10"
                >
                    <div
                        className="w-full self-stretch
                        p-6
                        bg-light rounded"
                    >
                        <h5
                            className="flex items-center justify-between
                            ptsans font-bold text-xl text-dark"
                        >
                            <span>Expert Interviews</span>
                            <span className="text-lg text-ibm">N = 12 Experts</span>
                        </h5>
                        
                        <p
                            className="pt-4
                            nunito text-xl text-dark-gray"
                        >
                            We began by conducting semi-structured interviews with experts in the fine-tuning space to <span className="font-semibold text-ibm">learn about the details and challenges</span> of fine-tuning Generative AI models.
                        </p>
                    </div>

                    <div
                        className="w-full self-stretch
                        p-6
                        bg-light rounded"
                    >
                        <h5
                            className="flex items-center justify-between
                            ptsans font-bold text-xl text-dark"
                        >
                            <span>Competitive Analysis</span>
                            <span className="text-lg text-ibm">N = 6 Competitors</span>
                        </h5>

                        <p
                            className="pt-4
                            nunito text-xl text-dark-gray"
                        >
                            We analyzed existing tools to understand user pain points, challenges, and goals with fine-tuning and Generative AI.
                            This helped us <span className="font-semibold text-ibm">spot opportunities</span> to design a better solution.
                        </p>
                    </div>
                </div>

                <div
                    className="w-full self-stretch
                    p-6
                    bg-light rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-dark"
                    >
                        Thematic Analysis
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-dark-gray"
                    >
                        Using thematic analysis, we combined insights from the interviews and competitive analysis to <span className="font-semibold text-ibm">uncover key patterns and themes</span>.
                        We identified two key themes covering why fine-tuning is challenging for non-technical users and the core reason behind mistrust in AI.
                    </p>

                    <div
                        className="w-full
                        mt-12
                        flex flex-col lg:flex-row items-start gap-10"
                    >
                        <div
                            className="w-full self-stretch
                            p-4
                            bg-gradient-to-br from-dark from-70% to-ibm
                            rounded"
                        >
                            <span
                                className="ptsans font-bold text-xl text-light"
                            >
                                Overwhelming Technicalities
                            </span>

                            <p
                                className="pt-2
                                nunito text-xl text-gray"
                            >
                                The technical knowledge required, including vocabulary and basic concepts, for fine-tuning is intimidating for most users.
                            </p>
                        </div>

                        <div
                            className="w-full self-stretch
                            p-4
                            bg-gradient-to-br from-dark from-65% to-ibm
                            rounded"
                        >
                            <span
                                className="ptsans font-bold text-xl text-light"
                            >
                                Data Opacity
                            </span>

                            <p
                                className="pt-2
                                nunito text-xl text-gray"
                            >
                                Users hesitate to interact with AI interfaces due to the lack of transparency regarding their data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Approach