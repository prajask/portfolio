import Image from "next/image";

import CaseStudyCover from "../CaseStudyCover/CaseStudyCover";

const Work = () => {
    const CASE_STUDIES = [
        {
          title: "U-Tune",
          description: "Learn to Fine-Tune the easy way",
          role: "UX Design and Engineering",
          affiliation: <Image src="/utune/ibm-logo.png" width={75} height={75} alt="IBM"/>,
          image: <Image src="/utune/playground-homepage.png" alt="U-Tune Homepage" width={1920} height={1213.19} />,
          color: "bg-ibm",
          link: "/utune"
        },
        {
            title: "Nova",
            description: "Optimizing the Nova experience",
            role: "UX Design",
            affiliation: <Image src="/mosi/mosi-logo.png" width={125} height={125} alt="Mosi Audio"/>,
            image: <Image src="/mosi/nova-hero.png" alt="Mosi Nova" width={1920} height={1080}/>,
            color: "bg-mosi",
            link: "/mosi"
        }
      ];

    return (
        <section
            className="w-full"
            id="work"
        >
            <ul
                className="w-full
                border-b border-text-primary"
            >
                {
                    CASE_STUDIES.map((caseStudy) => (
                    <CaseStudyCover
                        key={caseStudy.title}
                        info={caseStudy}
                    />
                    ))
                }
            </ul>
        </section>
    )
}

export default Work