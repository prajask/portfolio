import Image from "next/image"

export default function Overview(){
    return(
        <>
            <article
                    className="h-[40vh]
                    flex flex-row items-center justify-start
                    border-b border-b-dark-primary"
                >
                    <section
                        className="w-1/2 h-full
                        px-[5%] py-[24px]
                        flex flex-col justify-center
                        border-r border-r-dark-primary"
                    >
                        <h2
                            className="mb-[12px] text-xl"
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
                        <p>
                            Quitting smoking isn&apos;t just about saying no to cigarettes. It&apos;s a juggling act! The users need a friendly nudge in building a supportive community, keeping an eye on their health, and watching those savings grow as they ditch the smokes. Finding the perfect mix to tackle all these aspects while quitting smoking is a real head-scratcher for many!
                        </p>
                    </section>

                    <section
                        className="w-1/2 h-full
                        px-[5%] py-[24px]
                        flex flex-col justify-center"
                    >
                        <h2
                            className="mb-[12px] text-xl"
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
                        <p>
                            With Lung Love, we&apos;ve developed a solution that&apos;s both fun and functional: an app that merges community engagement, health tracking, and financial monitoring. This trio offers a comprehensive approach to make the journey of quitting smoking more manageable and enjoyable.
                        </p>
                    </section>
                </article>

                <article
                    className="h-[75vh]
                    flex flex-row items-center justify-center
                    border-b border-b-dark-primary"
                >
                    <Image
                            className="w-[50%]"
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