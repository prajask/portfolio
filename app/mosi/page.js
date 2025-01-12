import Approach from "@/components/mosi/Approach";
import Background from "@/components/mosi/Background";
import DesignRecs from "@/components/mosi/DesignRecs";
import Findings from "@/components/mosi/Findings";
import Goals from "@/components/mosi/Goals";
import Hero from "@/components/mosi/Hero";
import Problem from "@/components/mosi/Problem";
import Results from "@/components/mosi/Results";
import Retrospective from "@/components/mosi/Retrospective";

const page = () => {
  return (
    <article
      className="mt-20"
    >
      <Hero/>
  
      <Background/>

      <Problem/>

      <Goals/>

      <Approach/>

      <Findings/>

      <DesignRecs/>

      <Results/>

      <Retrospective/>
    </article>
  )
}

export default page