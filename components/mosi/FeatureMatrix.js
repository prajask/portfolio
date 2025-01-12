import Image from "next/image";

const FeatureMatrix = () => {
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
                Finding #2
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
                    Feature Requests
                </span>
                &nbsp;Matrix
            </h4>

            <p
                className="text-lg"
            >
                To better understand the features that would resonate most with users, we created a Feature Requests Matrix. This matrix included both features generated based on user pain points and desires, as well as specific features directly requested by users during interviews and usability sessions. Each feature was ranked by user likeability, which allowed us to visualize which functionalities would have the greatest impact on improving the user experience. This helped prioritize the most valuable features for both current users and potential adopters, ensuring that design efforts were focused on what mattered most.
            </p>

            <Image
                className="p-10 my-10
                border border-text-primary rounded-3xl"
                src="/mosi/feature-request-matrix.svg"
                alt="Final iteration for hyperparameters screen with simplified technical definitions and accordion like layout"
                width={1920}
                height={1080}
                loading="lazy"
            />
        </div>
    </section>
  )
}

export default FeatureMatrix