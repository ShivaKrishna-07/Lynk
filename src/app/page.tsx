"use client";
import Navbar from "@/components/LandingComponents/Navbar";
import { useIsClient } from "@/hooks/useIsClient";
// import Home from "@/components/LandingComponents/Home";

export default function Home() {
  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <div className="h-full px-3 pt-20 overflow-hidden dark:bg-black bg-neutral-100">
      <Navbar/> 
      {/* <Home/> */}
    </div>
  );
}
 