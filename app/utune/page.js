import Approach from "@/components/utune/Approach";
import Community from "@/components/utune/Community";
import Hero from "@/components/utune/Hero";
import Hyperparameters from "@/components/utune/Hyperparameters";
import Impact from "@/components/utune/Impact";
import KeyGaps from "@/components/utune/KeyGaps";
import NutritionLabel from "@/components/utune/NutritionLabel";
import Problem from "@/components/utune/Problem";
import Results from "@/components/utune/Results";
import Retrospective from "@/components/utune/Retrospective";
import Solution from "@/components/utune/Solution";
import SuccessMetrics from "@/components/utune/SuccessMetrics";
import UserPersonas from "@/components/utune/UserPersonas";

const page = () => {
  return (
    <article
        className='mt-20'
    >
        <Hero/>
        
        <Problem/>

        <UserPersonas/>

        <SuccessMetrics/>

        <Approach/>

        <Solution/>

        <Hyperparameters/>

        <NutritionLabel/>

        <Results/>

        <Impact/>

        <Retrospective/>
    </article>
  )
}

export default page