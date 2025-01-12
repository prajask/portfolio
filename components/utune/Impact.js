import Image from "next/image";
import { FaQuestion } from "react-icons/fa6";

const Impact = () => {
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
                className="section-title"
            >
                Impact on success metrics
            </h3>

            <h4
                className="section-subtitle"
            >
                <span
                    className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                    text-transparent bg-clip-text
                    bg-[length:200%_auto]
                    animate-gradient"
                >
                    The numbers
                </span>
                &nbsp;have good things to say
            </h4>

            <div
                className="text-lg"
            >
                <p>
                    To evaluate the impact of the designed solution, we conducted <span className="text-ibm">pre- and post-usability assessments</span> with users. These assessments focused on understanding changes in their comprehension of fine-tuning and their trust in AI systems. Users were asked questions like:
                </p>
                <ul
                    className="pt-4
                    text-lg
                    flex flex-col gap-4"
                >
                    <li
                        className="flex items-start gap-4"
                    >
                        <FaQuestion
                            size={20}
                            className="mt-1 flex-shrink-0"
                        />
                        <p>
                            <span className="text-ibm">&quot;On a scale from 1 to 5, how would you rate your understanding of fine-tuning?&quot;</span>
                        </p>
                    </li>

                    <li
                        className="flex items-start gap-4"
                    >
                        <FaQuestion
                            size={20}
                            className="mt-1 flex-shrink-0 text-text-primary"
                        />
                        <p>
                            <span className="text-ibm">&quot;How would you rate your understanding of how your data is used by AI systems?&quot;</span> <br/>
                        </p>
                    </li>

                    <li>
                        
                    </li>
                </ul>
                
                This allowed us to compare their responses before and after interacting with the solution, providing clear insights into its effectiveness.
            </div>

            <Image
                className="py-32"
                src="/utune/measuring-impact.svg"
                alt="The process followed to measure the design solution impact, which used pre and post usability test measurements to gauge user comprehension of fine tuning and ai risks."
                width={1920}
                height={1080}
            />

            <div
                className="w-full
                flex flex-col items-start gap-10
                xl:flex-row xl:gap-0"
            >
                <div
                    className="column column-left"
                >
                    <p
                        className="p-5
                        flex flex-col gap-2
                        text-lg
                        bg-primary-100"
                    >
                        <span
                            className="text-5xl font-medium"
                        >
                            92%
                        </span> 

                        <span>increase in <span className="text-ibm">fine-tuning comprehension</span> per user</span>
                    </p>
                </div>

                <div
                    className="column column-right"
                >
                    <p
                        className="text-lg"
                    >
                         
                    </p>

                    <p
                        className="p-5
                        flex flex-col gap-2
                        text-lg
                        bg-primary-100"
                    >
                        <span
                            className="text-5xl font-medium"
                        >
                            70%
                        </span> 

                        <span>increase in <span className="text-ibm">user trust</span> in AI systems</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Impact