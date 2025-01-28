import Background from "../components/mosi/Background/Background"
import Hero from "../components/mosi/Hero/Hero"
import Problem from "../components/mosi/Problem/Problem"
import Goals from "../components/mosi/Goals/Goals"
import Approach from "../components/mosi/Approach/Approach"
import TargetUsers from "../components/mosi/TargetUsers/TargetUsers"
import FeatureRequests from "../components/mosi/FeatureRequests/FeatureRequests"
import Results from "../components/mosi/Results/Results"
import Retrospective from "../components/mosi/Retrospective/Retrospective"

const page = () => {
  return (
    <article>
        <Hero/>
        <Background/>
        <Problem/>
        <Goals/>
        <Approach/>
        <TargetUsers/>
        <FeatureRequests/>
        <Results/>
        <Retrospective/>
        <div className="p-2 bg-light"/>
    </article>
  )
}

export default page