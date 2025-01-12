import Image from "next/image";

const Hero = () => {
  return (
    <section
        className='w-full
        border-b border-b-text-primary'
    >
        <div
            className='w-11/12
            max-w-7xl
            mx-auto
            flex flex-col items-start
            lg:flex-row'
        >
          <div
            className="w-full
            py-10
            self-stretch
            border-x border-text-primary
            flex flex-col justify-center"
          >
              <h2
                className="pl-10 pb-3
                text-3xl font-semibold"
              >
                Mosi Audio
              </h2>

              <h3
                className="pl-10 pb-8
                text-2xl 
                border-b border-text-primary"
              >
                Optimizing the Nova Experience
              </h3>

              <ul
                className="flex flex-col items-start justify-center"
              >
                <li
                  className="w-full
                  py-6 pl-10 flex flex-col gap-2
                  border-b border-text-primary border-dashed"
                >
                  <h4
                    className="uppercase font-medium"
                  >
                    Team
                  </h4>
                  <ul>
                    <li>Carolina Araujo</li>
                    <li>Hebah Haque</li>
                    <li>Rocio Perez</li>
                    <li>Prajas Kadepurkar (me)</li>
                  </ul>
                </li>

                <li
                  className="w-full
                  py-6 pl-10
                  flex flex-col gap-2
                  border-b border-text-primary border-dashed"
                >
                  <h4
                    className="uppercase font-medium"
                  >
                    Duration
                  </h4>
                  <span>
                    June 2024 - September 2024 (9 months)
                  </span>
                </li>

                <li
                  className="w-full
                  pt-6 pb-6 pl-10
                  flex flex-col gap-2
                  border-b border-text-primary
                  lg:pb-0 lg:border-none"
                >
                  <h4
                    className="uppercase font-medium"
                  >
                    My Role
                  </h4>
                  <span>
                    UX Design
                  </span>
                </li>
            </ul>
          </div>

          <div
            className="w-full
            self-stretch
            p-10
            flex items-center justify-center
            border-r border-l border-text-primary
            lg:border-l-0"
          >  
            <Image
              src="/mosi/nova-cover.jpg"
              alt="Homepage of the application"
              width={1920}
              height={1080}
            />
          </div>
            
          </div>
    </section>
  )
}

export default Hero