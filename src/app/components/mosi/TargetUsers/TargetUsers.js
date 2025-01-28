import UserPersonas from "../UserPersonas/UserPersonas"

const TargetUsers = () => {
  return (
    <section
        className="section-container
        relative
        bg-light"
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
                    text-dark-gray"
                >
                    Finding #1
                </h3>

                <h4
                    className="section-subtitle
                    text-dark"
                >
                    Target Audience Identification
                </h4>

                <p
                    className="nunito text-xl text-dark-gray"
                >
                    Identifying Nova&apos;s target audience was the first step in shaping its design.
                    By collecting feedback from a wide range of users at Open Sauce, we were able to pinpoint the main user types who would benefit the most from Nova.
                    These insights led to the creation of user personas, helping us better understand the needs, goals, and challenges of our target audience.
                </p>
            </div>

            <UserPersonas/>
        </div>
    </section>
  )
}

export default TargetUsers