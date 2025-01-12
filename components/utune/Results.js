import { FaQuoteLeft } from "react-icons/fa6";

const Results = () => {
  return (
    <section
        className="case-study-section subsection"
    >
        <div
            className="w-11/12
            max-w-7xl
            mx-auto"
        >
            <h3
                className="section-title"
            >
                Results
            </h3>

            <h4
                className="section-subtitle"
            >
                A definite step towards simplifying fine-tuning
            </h4>

            <p
                className="text-lg"
            >
                The implementation of U-Tune&apos;s key features - <span className="text-ibm">simplified technical information</span>, <span className="text-ibm">informed decision making</span> through Nutritional Labels, and <span className="text-ibm">collaboration</span> through Community Page - resulted in significant improvements in user experience and learning outcomes, addressing the core challenges of simplifying fine-tuning and fostering trust in AI systems.
            </p>
        </div>

        <div
            className="w-11/12
            max-w-7xl
            mx-auto
            pt-8
            flex flex-col items-center gap-10
            xl:flex-row xl:gap-0"
        >
            <div
                className="column column-left
                p-4
                flex items-start gap-4
                bg-primary-100"
            >
                <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
            
                <q
                    className="text-xl italic"
                >
                    at the end of the day i feel like I learned a new skill, better understanding of ai as a whole
                </q>
            </div>

            <div
                className="column column-right
                p-4
                flex items-start gap-4
                bg-primary-100"
            >
                <FaQuoteLeft className="flex-shrink-0" size={32} color="var(--ibm)"/>
            
                <q
                    className="text-xl italic"
                >
                    love the ability to actually play around and use your own imagination
                </q>
            </div>
        </div>
    </section>
  )
}

export default Results