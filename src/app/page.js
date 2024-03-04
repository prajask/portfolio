import Image from "next/image";

import Hero from "./components/hero";
import CaseStudy1 from "./components/case_study_1";
import CaseStudy2 from "./components/case_study_2";

export default function Home() {
  return (
    <>
      <Hero/>
      <CaseStudy1/>
      <CaseStudy2/>
    </>
  );
}
