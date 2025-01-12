import Image from "next/image";

const Community = () => {
  return (
    <>
        <section
            className='case-study-section subsection'
        >
            <div
                className='w-11/12
                mx-auto
                xl:container'
            >
                <h3
                    className='section-title'
                >
                    Key Feature #3
                </h3>

                <h4
                    className='section-subtitle'
                >
                    Fostering Collaboration through&nbsp;
                    <span
                        className="bg-gradient-to-r from-ibm via-text-primary to-ibm
                        text-transparent bg-clip-text
                        bg-[length:200%_auto]
                        animate-gradient"
                    >
                        Community
                    </span>
                </h4>

                <p
                    className='text-lg'
                >
                    Users often look at other people&apos;s work for inspiration or to gain clarity when navigating technical challenges.
                </p>
            </div>
        </section>

        <section
            className='case-study-section'
        >
            <div
                className='w-11/12
                mx-auto
                xl:container'
            >
                <h3
                    className='section-title'
                >
                    Iteration 1
                </h3>

                <h4
                    className='section-subtitle'
                >
                     Exploring a Community Page
                </h4>

                <p
                    className='text-lg'
                >
                    To foster collaboration and learning, we introduced a Community Page that serves as a platform for sharing and interacting with the work of others. Here, users can browse examples of outputs created by others using their fine-tuned models. This not only <span className="text-ibm">inspires creativity</span> but also <span className="text-ibm">helps users understand the possibilities</span> of fine-tuning.
                </p>

                <Image
                    className="py-10"
                    src="/utune/community.svg"
                    alt="The community tab showcasing a post"
                    width={1920}
                    height={1080}
                    loading="lazy"
                />
            </div>
        </section>
    </>
  )
}

export default Community