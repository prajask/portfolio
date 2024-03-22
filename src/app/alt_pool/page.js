import Image from "next/image"

import Hero from "../components/alt_pool/hero"
import Overview from "../components/alt_pool/overview"
import SensorsOverview from "../components/alt_pool/sensors_overview"
import Processing from "../components/alt_pool/processing"
import Iteration1 from "../components/alt_pool/iteration_1"
import ThreeDPrinting from "../components/alt_pool/3d_printing"
import PlayTest from "../components/alt_pool/playtest"
import FinalDesign from "../components/alt_pool/final_design"

export default function LungLove(){
    return(
        <>
            <Hero/>
            <Overview/>
            <SensorsOverview/>
            <Processing/>
            <Iteration1/>
            <ThreeDPrinting/>
            <PlayTest/>
            <FinalDesign/>
        </>
    )
}