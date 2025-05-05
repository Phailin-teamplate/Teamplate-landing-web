"use client";

import React from "react";
import Image from "next/image";
import { Partner } from "../../types/partner";
import { motion } from "framer-motion";

const SinglePartner = ({ partner }: { partner: Partner }) => {
  const { image, imageLight, href, name, id } = partner;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: id * 0.1 }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="relative block w-24 h-10 sm:w-32 sm:h-12 md:w-40 md:h-14 lg:w-48 lg:h-16 xl:w-56 xl:h-20"
    >
      {/* Light Mode Image */}
      <Image
        className="object-contain dark:hidden"
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 200px"
        priority
      />

      {/* Dark Mode Image */}
      <Image
        className="hidden dark:block object-contain"
        src={imageLight}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 200px"
        priority
      />
    </motion.a>
  );
};

export default SinglePartner;
