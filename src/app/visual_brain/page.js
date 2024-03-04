import Image from "next/image"

import Hero from "../components/visual_brain/hero"
import Overview from "../components/visual_brain/overview"
import SurveyInsight from "../components/visual_brain/survey_insight"
import Steps from "../components/visual_brain/steps/steps"
import Step1 from "../components/visual_brain/steps/step_1"
import Step2 from "../components/visual_brain/steps/step_2"
import Step3 from "../components/visual_brain/steps/step_3"
import Step4_1 from "../components/visual_brain/steps/step_4_1"
import Step4_2 from "../components/visual_brain/steps/step_4_2"
import Step4_3 from "../components/visual_brain/steps/step_4_3"
import Reflection from "../components/visual_brain/reflection"

export default function LungLove(){
    return(
        <>
            <Hero/>
            <Overview/>
            <SurveyInsight/>
            <Steps/>
            <Step1/>
            <Step2/>
            <Step3/>
            <Step4_1/>
            <Step4_2/>
            <Step4_3/>
            <Reflection/>
        </>
    )
}