import Image from "next/image";

const FeatureRequests = () => {
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
                Finding #2
            </h4>

            <h5
                className="section-subtitle
                text-light"
            >
                Feature Requests Matrix
            </h5>

            <p
                className="nunito text-xl text-gray"
            >
                To better understand the features that would resonate most with users, we created a Feature Requests Matrix.
                This matrix included both features generated based on user pain points and desires, as well as specific features directly requested by users during interviews and usability sessions.
                Each feature was ranked by user likeability, which allowed us to visualize which functionalities would have the greatest impact on improving the user experience.
                This helped prioritize the most valuable features for both current users and potential adopters, ensuring that design efforts were focused on what mattered most.
            </p>

            <div
                className="w-full self-stretch
                p-2 lg:p-6
                mt-10
                flex items-center
                bg-dark-gray
                rounded"
            >
                <Image
                    src="/mosi/feature-request-matrix.svg"
                    width={1920}
                    height={1080}
                    alt="Feature Request Matrix"
                />
            </div>
        </div>
    </section>
  )
}

export default FeatureRequests