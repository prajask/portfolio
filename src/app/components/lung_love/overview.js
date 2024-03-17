import Image from "next/image"

export default function Overview(){
    return(
        <>
            <article
                    className="flex flex-col items-center justify-start
                    border-b border-dark-primary
                    lg:h-[45vh]
                    lg:flex-row"
                >
                    <section
                        className="w-full
                        px-[5%] py-[24px]
                        flex flex-col justify-center
                        border-b border-dark-primary
                        lg:w-1/2 lg:h-full
                        lg:border-r lg:border-b-0"
                    >
                        <h2
                            className="mb-[12px] text-xl font-medium"
                        >
                            Problem 
                        </h2>
                        <h3
                            className="mb-[24px]
                            text-2xl font-semibold"
                        >
                            The Trio of Trials:&nbsp;
                            <span
                                className="bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                                text-transparent bg-clip-text
                                bg-[length:200%_auto]
                                animate-gradient"
                            >
                                Community, Health and Financial Tracking
                            </span>
                            &nbsp;in Smoking Cessaation
                        </h3>
                        <p
                            className="text-lg"
                        >
                            Quitting smoking isn&apos;t just about saying no to cigarettes. The users need a friendly nudge in building a supportive community, keeping an eye on their health, and watching those savings grow as they ditch the smokes. Finding this perfect mix is a real head-scratcher for many!
                        </p>
                    </section>

                    <section
                        className="w-full
                        px-[5%] py-[24px]
                        flex flex-col justify-center
                        lg:w-1/2 lg:h-full"
                    >
                        <h2
                            className="mb-[12px] text-xl font-medium"
                        >
                            Solution
                        </h2>
                        <h3
                            className="mb-[24px]
                            text-2xl font-semibold"
                        >
                            <span
                                className="bg-gradient-to-r from-lung_love-primary via-dark-primary to-lung_love-primary
                                text-transparent bg-clip-text
                                bg-[length:200%_auto]
                                animate-gradient"
                            >
                                Offering a Blend
                            </span>
                            &nbsp;of Friendly Community Cheer and Handy Progress Tracking.
                        </h3>
                        <p
                            className="text-lg"
                        >
                            With Lung Love, we&apos;ve developed a solution that&apos;s both fun and functional: an app that merges community engagement, health tracking, and financial monitoring. This trio offers a comprehensive approach to make the journey of quitting smoking more manageable and enjoyable.
                        </p>
                    </section>
                </article>

                <article
                    className="flex flex-row items-center justify-center
                    border-b border-dark-primary
                    lg:h-[75vh]"
                >
                    <Image
                            className="w-[90%]
                            py-[24px]
                            lg:w-[50%]
                            lg:py-0"
                            src={"/lung_love/overview.webp"}
                            width={2492}
                            height={1667}
                            alt="Lung Love - Early Ideatiton"
                            loading="lazy"
                        />
                </article>
            </>
    )
}