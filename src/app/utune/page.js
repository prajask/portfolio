import Approach from "../components/utune/Approach/Approach";
import Goals from "../components/utune/Goals/Goals";
import Hero from "../components/utune/Hero/Hero";
import Hyperparameters from "../components/utune/Hyperparameters/Hyperparameters";
import NutritionFacts from "../components/utune/NutritionFacts/NutritionFacts";
import Problem from "../components/utune/Problem/Problem";
import Results from "../components/utune/Results/Results";
import Retrospective from "../components/utune/Retrospective/Retrospective";
import Solution from "../components/utune/Solution/Solution";
import TargetUsers from "../components/utune/TargetUsers/TargetUsers";

const page = () => {
  return (
    <article
        className="w-full"
    >
        <Hero/>
        <Problem/>
        <TargetUsers/>
        <Goals/>
        <Approach/>
        <Solution/>
        <Hyperparameters/>
        <NutritionFacts/>
        <Results/>
        <Retrospective/>
    </article>
  )
}

export default page