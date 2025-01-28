import Image from "next/image";

import CaseStudyCover from "../CaseStudyCover/CaseStudyCover";

const Work = () => {
    const CASE_STUDIES = [
        {
            title: "U-Tune",
            description: "Learn to Fine-Tune the easy way",
            role: "UX Design and Engineering",
            affiliation: <Image src="/utune/ibm-logo.png" width={50} height={50} alt="IBM"/>,
            image: <Image className="rounded" src="/utune/cover.png" alt="U-Tune" width={1920} height={1080} />,
            gradient_class: "gradient-ibm",
            link: "/utune"
        },
        {
            title: "Nova",
            description: "Optimizing the Nova experience",
            role: "UX Design",
            affiliation: <Image src="/mosi/mosi-logo.png" width={75} height={75} alt="Mosi Audio"/>,
            image: <Image src="/mosi/cover.png" alt="Mosi Nova" width={1920} height={1080}/>,
            gradient_class: "gradient-mosi",
            link: "/mosi"
        }
        ];

    return (
    <section
        id="work"
        className="section-container"
    >
        <div
            className="content-container"
        >
            <div
                className="flex flex-col items-center justify-center"
            >
                <h2
                    className="pb-2
                    ptsans text-4xl font-bold text-dark"
                >
                    Featured Work
                </h2>
            </div>

            <div
                className="mt-10
                flex flex-col xl:flex-row gap-8"
            >
                {
                    CASE_STUDIES.map((caseStudy) => (
                    <CaseStudyCover
                        key={caseStudy.title}
                        title={caseStudy.title}
                        description={caseStudy.description}
                        role={caseStudy.role}
                        affiliation={caseStudy.affiliation}
                        coverImage={caseStudy.image}
                        link={caseStudy.link}
                        gradient_class={caseStudy.gradient_class}
                    />
                    ))
                }
            </div>
        </div>
    </section>
    )
}

export default Work