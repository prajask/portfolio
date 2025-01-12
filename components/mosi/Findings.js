import FeatureMatrix from "./FeatureMatrix"
import UserPersonas from "./UserPersonas"

const Findings = () => {
  return (
    <>
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
                    Findings
                </h3>

                <h4
                    className="section-subtitle"
                >
                    Overview
                </h4>

                <p
                    className="text-lg"
                >
                    Through a combination of user research, usability sessions, and direct feedback, we gathered valuable insights into Nova&apos;s target audience, user needs, and potential areas for improvement. These findings highlight the key challenges and opportunities for enhancing the user experience and guiding future design iterations.
                </p>
            </div>
        </section>

        <section
            className="case-study-section subsection"
        >
            <div
                className="w-11/12
                max-w-7xl
                mx-auto"
            >
                <h3
                    className="section-title"
                >
                    Finding #1
                </h3>

                <h4
                    className="section-subtitle"
                >
                    Target Audience Identification
                </h4>

                <p
                    className="text-lg"
                >
                    Identifying Nova&apos;s target audience was the first step in shaping its design. By collecting feedback from a wide range of users at Open Sauce, we were able to pinpoint the main user types who would benefit the most from Nova. These insights led to the creation of detailed user personas, helping us better understand the needs, goals, and challenges of our target audience.
                </p>
            </div>
        </section>

        <UserPersonas/>

        <FeatureMatrix/>
    </>
  )
}

export default Findings