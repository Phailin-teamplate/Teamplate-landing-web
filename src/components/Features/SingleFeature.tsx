import React from "react";
import { Feature } from "../../types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top flex flex-col items-center text-center rounded-2xl hover:bg-gray-100 hover:scale-105 duration-200 dark:border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
    >
      {/* Icon Wrapper */}
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 mb-6">
        <Image src={icon} width={36} height={36} alt="title" />
      </div>
  
      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-black dark:text-white xl:text-xl">
        {title}
      </h3>
  
      {/* Description */}
      <p>{description}</p>
    </motion.div>
  </>
  
  );
};

export default SingleFeature;
