const Goals = () => {
  return (
    <section
        className="section-container
        bg-light"
    >
        <div
            className="content-container"
        >
            <h3
                className="section-title
                text-dark-gray"
            >
                Goals
            </h3>

            <h4
                className="section-subtitle
                text-dark"
            >
                To define target users and to drive further innovation
            </h4>

            <p
                className="nunito text-xl text-dark-gray"
            >
                The main goals of this project were to better understand Nova&apos;s audience and their needs.
                By focusing on these goals, we aimed to gather useful insights to guide the design recommendations for both the current and future versions of Nova.
            </p>

            <div
                className="mt-10
                flex flex-col md:flex-row items-start gap-10"
            >
                <div
                    className="w-full self-stretch
                    p-6
                    bg-dark rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-light"
                    >
                        Identify Nova&apos;s Target Audience
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-gray"
                    >
                        Determine the core user groups most likely to benefit from and engage with Nova.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-6
                    bg-dark rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-light"
                    >
                        Understand Desired Features
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-gray"
                    >
                        Uncover the functionalities potential users want in an instrument like Nova.
                    </p>
                </div>
            </div>

            <div
                className="mt-10
                flex flex-col md:flex-row items-start gap-10"
            >
                <div
                    className="w-full self-stretch
                    p-6
                    bg-dark rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-light"
                    >
                        Address User Challenges
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-gray"
                    >
                        Explore the pain points current users face in fully utilizing Nova&apos;s capabilities.
                    </p>
                </div>

                <div
                    className="w-full self-stretch
                    p-6
                    bg-dark rounded"
                >
                    <h5
                        className="ptsans font-bold text-xl text-light"
                    >
                        Enhance User Experience
                    </h5>

                    <p
                        className="pt-4
                        nunito text-xl text-gray"
                    >
                        Explore opportunities to expand Nova&apos;s functionality to better meet user needs.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Goals