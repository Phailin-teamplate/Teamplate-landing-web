"use client";

import { Feature } from "../../types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <div
      role="article"
      aria-label={`Feature: ${title}`}
      className="h-full flex flex-col items-center text-center rounded-2xl bg-white dark:bg-blacksection p-7.5 xl:p-10 transition-all duration-300 border border-white dark:border-strokedark shadow-solid-3 hover:shadow-xl dark:hover:bg-hoverdark hover:bg-gray-100 "
    >
      {/* Icon */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/20">
        <Image
          src={icon}
          alt={title}
          width={36}
          height={36}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-blue-700 ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SingleFeature;
