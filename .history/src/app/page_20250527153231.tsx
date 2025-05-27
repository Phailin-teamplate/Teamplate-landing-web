"use client";

import Homepage from "../components/pages/Homepage";
import FeaturesSection from "../components/Features";
import LayoutWrapper from "../components/LayoutWrapper";

export default function Home() {
  return (
      <LayoutWrapper>

     
    <div className="flex flex-col" id="homepage">
      <Homepage />
      <FeaturesSection />
      
    </div>
     </LayoutWrapper>
  );
}
