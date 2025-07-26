"use client";
import Navbar from "@/components/LandingComponents/Navbar";
import Home from "@/components/LandingComponents/Home";
import Features from "@/components/LandingComponents/Features";
import About from "@/components/LandingComponents/About";
import { WhoIsItFor } from "@/components/LandingComponents/WhoIsItForSection";
import PricingSection from "@/components/LandingComponents/PricingSection";
import LandingFooter from "@/components/LandingComponents/LandingFooter";

export default function Page() {
  return (
    <div className="h-full px-3 pt-20 overflow-hidden dark:bg-black bg-neutral-100">
      <Navbar/> 
      <Home/>
      <Features/>
      <About/>
      <WhoIsItFor/>
      <PricingSection/>
      <LandingFooter/>
    </div>
  );
}
 