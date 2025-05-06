"use client";

import React from "react";
import { fetchFeatures } from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { useEffect, useState } from "react";
import { Feature } from "../../types/feature";


const FeaturesSection = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    const load = async () => {
      const data = await fetchFeatures();
      setFeatures(data);
    };
    load();
  }, []);

  return (
    <section id="services" className="scroll-mt-20">
    <div className="py-10 md:py-16 lg:py-20 bg-whitesection dark:bg-blacksection overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Title */}
        <SectionHeader
          headerInfo={{
            title: "SOLID FEATURES",
            subtitle: "What kind of business do we do?",
            description:
              "We operate a highly diverse and extensive range of businesses in the IT sector.",
          }}
        />
  
        {/* Features Grid */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
  
      </div>
    </div>
  </section>
  
  );
};

export default FeaturesSection;
