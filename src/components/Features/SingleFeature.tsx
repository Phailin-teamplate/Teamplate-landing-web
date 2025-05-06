"use client";

import { Feature } from "../../types/feature";
import { motion } from "framer-motion";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center rounded-2xl bg-white dark:bg-blacksection p-7.5 xl:p-10 shadow-solid-3 hover:shadow-solid-4 transition-shadow duration-300 border border-white dark:border-strokedark dark:hover:bg-hoverdark hover:bg-gray-100"
    >
      {/* Icon Box */}
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
        <Image
          src={icon}
          alt={title}
          width={36}
          height={36}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default SingleFeature;
