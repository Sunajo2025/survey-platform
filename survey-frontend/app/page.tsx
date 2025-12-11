import Image from "next/image";
import Navbar from "@/component/NavBar";
import HeroSection from "@/component/HeroSection";
import IntroEpicAura from "@/component/IntroEpicAura";
import LeanAnimatedTextSection from "@/component/LeanAnimatedTextSection";
import SurveySection from "@/component/SurveySection";
import EpicAuraFooter from "@/component/EpicAuraFooter";

export default function Home() {
  return (
  <>
  <Navbar />
  <HeroSection/>
  <IntroEpicAura/>
    <LeanAnimatedTextSection/>
    <SurveySection/>
    <EpicAuraFooter/>
  </>
  );
}
