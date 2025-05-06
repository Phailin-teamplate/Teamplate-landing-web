// SingleFeature.tsx
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
      className="flex flex-col items-center text-center rounded-2xl bg-white dark:bg-blacksection p-6 shadow-md hover:shadow-lg transition duration-200 border dark:border-strokedark"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
        <Image
          src={icon}
          alt={title}
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default SingleFeature;
