import { useTranslation } from "react-i18next";
import Hero from "../components/home/Hero";
import Problem from "../components/home/Problem";
import HowItWorks from "../components/home/HowItWorks";
import Features from "../components/home/Features";
import WhoBenefits from "../components/home/WhoBenefits";
import Impact from "../components/home/Impact";
import CallToAction from "../components/home/CallToAction";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhoBenefits />
      <Impact />
      <CallToAction />
    </div>
  );
}