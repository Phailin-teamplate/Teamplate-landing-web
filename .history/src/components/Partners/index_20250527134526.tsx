"use client";

import React from "react";
import SingleBrand from "./SinglePartner";
import brandData from "./partnerData";

const Partners = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20">
      {/* Section Header */}
      <div className="text-center mb-6 md:mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
          Partners
        </h3>
      </div>

      {/* Brand Grid Section */}
      <div className="border-y border-stroke dark:border-strokedark bg-alabaster dark:bg-black py-6 md:py-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
            {brandData.map((partner, index) => (
              <SingleBrand key={index} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
