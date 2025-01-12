import Link from "next/link";

const CaseStudyCover = (props) => {
  return (
    <li
        className="w-full
        case-study-cover-item
        border-b border-text-primary
        xl:border-none
        py-20
        xl:py-0"
    >
        <div
            className="w-11/12
            max-w-7xl
            mx-auto
            flex flex-col-reverse items-start
            xl:flex-row xl:items-center"
        >
            <div
                className="w-full
                self-stretch
                flex xl:items-center xl:justify-around
                xl:border-x xl:border-b border-text-primary"
            >
                <div
                    className="
                    flex flex-col items-start justify-center gap-5"
                >
                    {props.info.affiliation}

                    <h3
                        className="text-2xl xl:text-2xl font-bold"
                    >
                        {props.info.description}
                    </h3>

                    <h4
                    >
                        {props.info.role}
                    </h4>

                    <Link href={props.info.link} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border-2 border-text-primary rounded group z-8">
                        <span className={`w-48 h-48 rounded rotate-[-40deg] ${props.info.color} absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 z-8`}></span>
                        <span className="relative w-full text-left text-text-primary transition-colors duration-300 ease-in-out group-hover:text-background z-8">View Work</span>
                    </Link>
                </div>
            </div>

            <div
                className="w-full
                mb-10
                xl:p-16 xl:mb-0
                xl:border-r xl:border-b border-text-primary"
            >
                {props.info.image}
            </div>
        </div>
    </li>
  )
}

export default CaseStudyCover