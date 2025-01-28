import Image from "next/image";
import Link from "next/link";

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
                Engaging Users to Shape Nova&apos;s Future
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
                    src="/mosi/approach.svg"
                    width={1920}
                    height={1080}
                    alt="Design approach followed for the Nova"
                />
            </div>

            <div
                className="w-full
                flex flex-col items-start gap-10"
            >
                <div
                    className="w-full
                    flex flex-col xl:flex-row items-start gap-10"
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
                            <span>Open Sauce Showcase</span>
                            <span className="text-lg text-ibm">N = 80+ sessions</span>
                        </h5>
                        
                        <p
                            className="pt-4
                            nunito text-xl text-dark-gray"
                        >
                            At the <Link className="text-mosi-secondary underline" href="https://opensauce.com/" target="_blank">Open Sauce</Link> 2024 hardware convention, we conducted short usability sessions lasting 10-20 minutes.
                            These sessions allowed participants to interact with Nova, providing valuable first impressions of the instrument.
                            This hands-on engagement helped us gather immediate feedback on the design and functionality, as well as observe how users navigated the interface and interacted with the current features.
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
                            <span>Open Sauce Participant Surveys</span>
                            <span className="text-lg text-ibm">N = 72 Responses</span>
                        </h5>

                        <p
                            className="pt-4
                            nunito text-xl text-dark-gray"
                        >
                            We also asked participants to fill out surveys to learn more about their needs and expectations.
                            The surveys helped us understand what features people want in an instrument like Nova and gave us more detailed feedback.
                            This information was key to figuring out who Nova&apos;s target audience might be and how to make it better for them.
                        </p>
                    </div>
                </div>

                <div
                    className="w-full
                    flex flex-col xl:flex-row items-start gap-10"
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
                            <span>Synchronous Usability Sessions</span>
                            <span className="text-lg text-ibm">N = 5 Users</span>
                        </h5>
                        
                        <p
                            className="pt-4
                            nunito text-xl text-dark-gray"
                        >
                            With the identified target user types, we conducted hour-long, in-person usability sessions to explore deeper questions, such as how users validate their interest in the instrument.
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
                            <span>Interviews with Current Nova Users</span>
                            <span className="text-lg text-ibm">N = 3 Users</span>
                        </h5>

                        <p
                            className="pt-4
                            nunito text-xl text-dark-gray"
                        >
                           Simultaneously, we interviewed current users to uncover challenges they face in utilizing Nova&apos;s full potential, as well as the features they most value and those they hope to see in future versions.
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
                        Data Analysis and Design Recommendations
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-dark-gray"
                    >
                        Insights from all these methods were analyzed and synthesized into actionable design recommendations for both the current and upcoming versions of Nova.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Approach