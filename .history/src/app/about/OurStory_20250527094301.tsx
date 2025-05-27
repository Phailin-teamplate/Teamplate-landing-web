'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fetchAboutImage } from "../../lib/fetchAboutImage";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OurStory: React.FC = () => {
  const [images, setImages] = useState({
    start: "",
    animatedIT: "",
    animatedITService: "",
  });

  useEffect(() => {
    const loadImages = async () => {
      const [start, animatedIT, animatedITService] = await Promise.all([
        fetchAboutImage("start.gif"),
        fetchAboutImage("animatedIT.gif"),
        fetchAboutImage("animatedITService.gif"),
      ]);
      setImages({ start, animatedIT, animatedITService });
    };

    loadImages();
  }, []);

  return (
    <section className="md:py-20 py-10">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Block 1 */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch text-center md:text-left">
          <motion.div variants={fadeInUp} className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary ">
              IT Specialized Company Based in Laos
            </h2>
            <div className="mb-6 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              <p>We are a Laos-based IT startup aiming for the global market.</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300"> 
              We are targeting not only the local market in Laos but also neighboring Southeast Asian countries and the Northeast Asian market, including South Korea.
            </p>
          </motion.div>

          <motion.div variants={zoomIn} className="relative h-[300px] md:h-[400px] w-full">
            <div className="relative w-full h-full rounded-2xl border overflow-hidden shadow-xl">
              {images.start && (
                <>
                  <Image
                    src={images.start}
                    alt="Animated team launch illustration"
                    fill
                    className="object-contain dark:hidden"
                    unoptimized
                    priority
                  />
                  <Image
                    src={images.start}
                    alt="Animated team launch illustration"
                    fill
                    className="object-contain hidden dark:block"
                    unoptimized
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Block 2 */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch text-center md:text-left">
          <motion.div variants={zoomIn} className="relative order-last lg:order-first h-[300px] md:h-[400px] w-full">
            <div className="relative w-full h-full rounded-2xl border overflow-hidden shadow-xl">
              {images.animatedIT && (
                <>
                  <Image
                    src={images.animatedIT}
                    alt="Team coding interface animation"
                    fill
                    className="object-contain dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={images.animatedIT}
                    alt="Team coding interface animation"
                    fill
                    className="object-contain hidden dark:block"
                    unoptimized
                  />
                </>
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary ">
              Anything related to IT that our customers need and desire.
            </h2>
            <div className="mb-6 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              <p>We can provide anything related to IT for our customers.</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We provide comprehensive outsourcing development services in the IT sector as well as consulting on IT business.
            </p>
          </motion.div>
        </motion.div>

        {/* Block 3 */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch text-center md:text-left">
          <motion.div variants={fadeInUp} className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">
              Bringing various IT services to Lao society
            </h2>
            <div className="mb-6 text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              <p>We are also developing and operating our own IT services.</p>
            </div>
            <p>
              We develop and implement IT services utilizing various technologies and operate them within Lao society.
            </p>
          </motion.div>

          <motion.div variants={zoomIn} className="relative h-[300px] md:h-[400px] w-full">
            <div className="relative w-full h-full rounded-2xl border overflow-hidden shadow-xl">
              {images.animatedITService && (
                <>
                  <Image
                    src={images.animatedITService}
                    alt="IT service platform animation"
                    fill
                    className="object-contain dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={images.animatedITService}
                    alt="IT service platform animation"
                    fill
                    className="object-contain hidden dark:block"
                    unoptimized
                  />
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
