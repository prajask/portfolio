import Image from "next/image";

const Approach = () => {
  return (
    <section
        className="case-study-section"
    >
        <div
            className="w-11/12
            max-w-7xl
            mx-auto"
        >
            <h3
                className='section-title'
            >
                Approach
            </h3>

            <h4
                className='section-subtitle'
            >
                Learning from&nbsp;
                <span
                    className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                    text-transparent bg-clip-text
                    bg-[length:200%_auto]
                    animate-gradient"
                >
                    Experts, Competitors, and Users
                </span>
            </h4>

            <p
                className="text-lg"
            >
                To arrive at an effective solution, we followed a structured approach that combined research, design, and testing.
            </p>

            <Image
                className="py-32"
                src="/utune/approach.svg"
                width={1920}
                height={1080}
                alt="Research approach to address the solution"
            />

            <div
                className="flex flex-col gap-10"
            >
                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Expert Interviews
                    </h5>

                    <p
                        className="text-lg"
                    >
                        We began by conducting semi-structured interviews with experts in the fine-tuning space to learn about the details and challenges of fine-tuning Generative AI models.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Competitive Analysis
                    </h5>

                    <p
                        className="text-lg"
                    >
                        We examined existing tools and solutions to uncover user pain points, challenges, and goals when learning about fine-tuning and Generative AI. This analysis helped us identify opportunities to design a new solution that better meets user needs.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Thematic Analysis
                    </h5>

                    <p
                        className="text-lg"
                    >
                        Using thematic analysis, we synthesized insights from both the interviews and competitive analysis to uncover key patterns and themes.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Designing the solution
                    </h5>

                    <p
                        className="text-lg"
                    >
                        The identified themes shaped our design process, ensuring the solution addressed the key challenges and needs of users.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        User testing with the RITE method
                    </h5>

                    <p
                        className="text-lg"
                    >
                        Finally, we tested and refined the solution through iterative usability sessions using the RITE (Rapid Iterative Testing and Evaluation) method, making continuous improvements based on user feedback.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Approach