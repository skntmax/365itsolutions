import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import SaaSPricing from "@/components/SaaSPricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "365 IT Solutions — Production-Ready IT Products & Software Development",
  description:
    "We build scalable web apps, mobile platforms, EdTech solutions, and government eOffice systems. View our live portfolio including 365 Exam Portal, SwiftCab, CodeXCave, and more.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Projects />
      <SaaSPricing />
      <Leadership />
      <AboutSectionOne />
      <Contact />
    </>
  );
}
