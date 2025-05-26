"use client";

import React, { useEffect, useState } from "react";
import { fetchFeatures } from "./featuresData";
import SingleFeature from "./SingleFeature";
import { Feature } from "../../types/feature";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { fetchAboutImage } from "../../lib/fetchAboutImage";

// ===== Motion Variants =====

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerTitle = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  },
};

// ===== Component =====

const FeaturesSection: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
 const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const url = await fetchAboutImage("company.jpeg");
      setImageUrl(url);
    };

    loadImage();
  }, []);
  useEffect(() => {
    const load = async () => {
      const data = await fetchFeatures();
      setFeatures(data);
    };
    load();
  }, []);

  if (!features || features.length === 0) return null;

  return (
    <>
      {/* Features Section */}
      <section
        id="services"
        className="md:py-20 py-10 bg-whitesection dark:bg-blacksection overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          {/* Section Header */}
          <motion.div
            variants={staggerTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-xl text-gray-700 font-medium dark:text-gray-300"
            >
              SOLID FEATURES
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-2 text-2xl md:text-3xl font-bold text-primary dark:text-white"
            >
              What kind of business do we do?
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-black dark:text-gray-400 max-w-2xl mx-auto"
            >
              We operate a highly diverse and extensive range of businesses in the IT sector.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.id} variants={itemVariants} className="h-full">
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section (merged in) */}
      <section className="md:pb-20 pb-10 bg-gray-50 dark:bg-blacksection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="bg-white dark:bg-black rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl text-center md:text-left font-bold mb-4 text-black dark:text-white">
                  Ready to get started?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
                  Join us today and discover how our platform can transform your experience.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link href="/about">
                    <Button size="lg" className="text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="gradient-bg p-5 md:p-5 flex items-center justify-center">
                {imageUrl && (
        <Image
          alt="Illustration of people working with technology"
          src={imageUrl}
          width={640}
          height={400}
          className="rounded-lg object-cover"
          unoptimized
        />
      )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
