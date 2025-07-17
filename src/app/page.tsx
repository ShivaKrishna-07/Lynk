"use client";
import Navbar from "@/components/LandingComponents/Navbar";
import Home from "@/components/LandingComponents/Home";
import Features from "@/components/LandingComponents/Features";
import About from "@/components/LandingComponents/About";

export default function Page() {
  return (
    <div className="h-full px-3 pt-20 overflow-hidden dark:bg-black bg-neutral-100">
      <Navbar/> 
      <Home/>
      <Features/>
      <About/>
    </div>
  );
}
 