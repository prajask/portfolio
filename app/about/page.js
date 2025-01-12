import Image from "next/image";

const page = () => {
  return (
    <>
      <section
          className="mt-20
          py-32
          w-full
          border-b border-b-text-primary"
      >
        <div
          className="w-11/12
          max-w-7xl
          mx-auto
          flex flex-col itmes-start justify-between gap-10
          lg:flex-row lg:gap-0"
        >
          <div
            className="column column-left mt-4"
          >
            <p
              className="text-3xl font-semibold pb-4"
            >
              <span className="block mb-[8px]">Hey, there! 👋</span> I&apos;m <span className="font-extrabold">Prajas...</span>
            </p>

            <p
              className="text-lg"
            >
              I&apos;m a M.S. Human-Computer Interaction Graduate from the University of California, Santa Cruz, Class of 2025.
              I have a bachelor&apos;s degree in Computer Engineering and close to 3 years of experience as a Software Engineer.
              As one of my professors once described, I&apos;m a &quot;Recovering Engineer&quot; in the design space.
              Over time, I realized that what felt intuitive to me as an engineer can seem overwhelming to others.
              This led me to shift my focus to design, where I work on simplifying technology and making it more accessible for everyone.
              I&apos;m passionate about creating user-friendly solutions that bridge the gap between complex systems and everyday users.
            </p>
          </div>

          <div
            className="w-full
            flex items-center justify-center
            lg:items-end lg:justify-end"
          >
            <Image
              className="h-[500px] w-auto
              border border-text-primary rounded"
              src="/about/me.jpg"
              alt="Prajas Kadepurkar - Portrait"
              width={3024}
              height={4032}
            />
          </div>
        </div>
      </section>

      <section
          className="py-32
          w-full
          border-b border-b-text-primary"
      >
        <div
          className="w-11/12
          max-w-7xl
          mx-auto
          flex flex-col itmes-start gap-10"
        >
          <div
            className="column column-left"
          >
            <p
              className="text-3xl font-semibold pb-4"
            >
              When I&apos;m not knee-deep in code or HCI theories, you can find me behind the lens!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image width={3231} height={2169} className="h-auto max-w-full rounded-lg" src="/photography/20150714.jpg" alt=""/>
                </div>
                <div>
                    <Image width={4744} height={3163} className="h-auto max-w-full rounded-lg" src="/photography/20151004.jpg" alt=""/>
                </div>
                <div>
                    <Image width={3024} height={4032} className="h-auto max-w-full rounded-lg" src="/photography/IMG_0469.jpg" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                <Image width={3024} height={4032} className="h-auto max-w-full rounded-lg" src="/photography/IMG_0562.jpg" alt=""/>
                </div>
                <div>
                    <Image width={6000} height={4000} className="h-auto max-w-full rounded-lg" src="/photography/DSC_0139.jpg" alt=""/>
                </div>
                <div>
                    <Image width={2048} height={1971} className="h-auto max-w-full rounded-lg" src="/photography/IMG_3472.jpg" alt=""/>
                </div>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default page