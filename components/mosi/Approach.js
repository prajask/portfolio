import Link from "next/link";
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
                className="section-title"
            >
                Approach
            </h3>

            <h4
                className="section-subtitle"
            >
                <span
                    className="bg-gradient-to-r from-mosi-secondary via-text-primary to-mosi-secondary
                    text-transparent bg-clip-text
                    bg-[length:200%_auto]
                    animate-gradient"
                >
                    Engaging Users
                </span>
                &nbsp;to Shape Nova&apos;s Future
            </h4>

            <Image
                className="pt-10 pb-20"
                src="/mosi/approach.svg"
                alt="The process followed to measure the design solution impact, which used pre and post usability test measurements to gauge user comprehension of fine tuning and ai risks."
                width={1920}
                height={1080}
            />

            <div
                className="flex flex-col gap-10"
            >
                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Showcasing Nova at Open Sauce
                    </h5>

                    <p
                        className="text-lg"
                    >
                        At the <Link className="text-mosi-secondary underline" href="https://opensauce.com/" target="_blank">Open Sauce</Link> 2024 hardware convention, we conducted short usability sessions (10-20 minutes) and surveyed interested participants. This allowed us to gather first impressions, and feedback. By engaging a diverse audience, we began identifying Nova&apos;s target audience and understanding what features potential users are looking for in an instrument like Nova.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Synchronous Usability Sessions
                    </h5>

                    <p
                        className="text-lg"
                    >
                        With the identified target user types, we conducted hour-long, in-person usability sessions to explore deeper questions, such as how users validate their interest in the instrument.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Interviews with Current Nova Users
                    </h5>

                    <p
                        className="text-lg"
                    >
                        Simultaneously, we interviewed current users to uncover challenges they face in utilizing Nova&apos;s full potential, as well as the features they most value and those they hope to see in future versions.
                    </p>
                </div>

                <div>
                    <h5
                        className="section-title font-semibold"
                    >
                        Data Analysis and Design Recommendations
                    </h5>

                    <p
                        className="text-lg"
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