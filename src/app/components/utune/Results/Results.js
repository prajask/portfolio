import Image from "next/image";

import { FaQuestion, FaQuoteLeft } from "react-icons/fa6";

const Results = () => {
  return (
    <section
      className="section-container
      bg-dark"
    >
      <div
        className="content-container"
      >
        <h3
          className="section-title
          text-gray"
        >
          Results
        </h3>

        <h4
          className="section-subtitle
          text-light"
        >
          A definite step towards simplyfying fine-tuning
        </h4>

        <p
          className="nunito text-xl text-gray"
        >
          The implementation of U-Tune&apos;s key features - <span className="font-semibold text-ibm-highlight">simplified technical information</span> through easy hyperparameter settings, and <span className="font-semibold text-ibm-highlight">informed decision making</span> through Nutritional Labels - resulted in significant improvements in user experience and learning outcomes, addressing the core challenges of simplifying fine-tuning and fostering trust in AI systems.
        </p>

        <div
          className="mt-10
          flex flex-col xl:flex-row items-start gap-10"
        >
          <div
              className="w-full self-stretch
              p-4
              flex items-start gap-4
              bg-light
              rounded"
          >
              <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
          
              <q
                  className="nunito text-dark text-xl italic"
              >
                  at the end of the day i feel like I learned a new skill, better understanding of ai as a whole
              </q>
          </div>

          <div
              className="w-full self-stretch
              p-4
              flex items-start gap-4
              bg-light
              rounded"
          >
              <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
          
              <q
                  className="nunito text-dark text-xl italic"
              >
                  love the ability to actually play around and use your own imagination
              </q>
          </div>
        </div>

        <h4
          className="mt-24
          section-title
          text-gray"
        >
          Impact on success metrics
        </h4>

        <div
            className="w-full self-stretch
            p-2 lg:p-6
            my-10
            flex items-center
            bg-dark-gray
            rounded"
        >
            <Image
                src="/utune/impact-assessment.svg"
                width={1920}
                height={1080}
                alt="How the impact was assessed for U-Tune"
            />
        </div>

        <p
          className="nunito text-xl text-gray"
        >
            To evaluate the impact of the designed solution, we conducted <span className="font-semibold text-ibm-highlight">pre- and post-usability assessments</span> with users.
            These assessments focused on understanding changes in their comprehension of fine-tuning and their trust in AI systems.
            Users were asked questions like:
        </p>

        <ul
            className="pt-4
            nunito text-xl text-light
            flex flex-col gap-4"
        >
            <li
                className="flex items-start gap-4"
            >
                <FaQuestion
                    size={20}
                    className="mt-1 flex-shrink-0"
                />
                <p
                  className="font-semibold text-ibm-highlight"
                >
                  &quot;On a scale from 1 to 5, how would you rate your understanding of fine-tuning?&quot;
                </p>
            </li>

            <li
                className="flex items-start gap-4"
            >
                <FaQuestion
                    size={20}
                    className="mt-1 flex-shrink-0"
                />
                <p
                  className="font-semibold text-ibm-highlight"
                >
                  &quot;How would you rate your understanding of how your data is used by AI systems?&quot;
                </p>
            </li>
        </ul>

        <div
          className="mt-10
          flex flex-col xl:flex-row items-start gap-10"
        >
          <div
              className="w-full
              p-5
              flex flex-col gap-2
              text-xl
              bg-light
              rounded"
          >
            <span
                className="ptsans font-bold text-5xl"
            >
                92%
            </span> 

            <span className="nunito text-xl">increase in <span className="font-semibold text-ibm">fine-tuning comprehension</span> per user</span>
          </div>

          <div
              className="w-full
              p-5
              flex flex-col gap-2
              text-xl
              bg-light
              rounded"
          >
            <span
                className="ptsans font-bold text-5xl"
            >
                70%
            </span> 

            <span className="nunito text-xl">increase in <span className="font-semibold text-ibm">user trust</span> in AI systems</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results