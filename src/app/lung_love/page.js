import Image from "next/image"

import Hero from "../components/lung_love/hero"
import Overview from "../components/lung_love/overview"
import SurveyInsight from "../components/lung_love/survey_insight"
import Community from "../components/lung_love/interview_insights/community"
import Health from "../components/lung_love/interview_insights/health"
import SecondaryHealthResearch from "../components/lung_love/secondary_health_research"
import Finance from "../components/lung_love/interview_insights/finance"
import Reflection from "../components/lung_love/reflection"

export default function LungLove(){
    return(
        <>
            <Hero/>
            <Overview/>
            <SurveyInsight/>
            <Community/>
            <Health/>
            <SecondaryHealthResearch/>
            <Finance/>
            <Reflection/>
        </>
    )
}