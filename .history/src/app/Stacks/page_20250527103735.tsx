"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { techCategories, TechCategory } from "../../types/stackData";
import PageHero from "../../components/PageHero";
import { Layers, Shield, Zap } from "lucide-react";
// image
import Nextjs from "@/public/images/stack/nextjs.svg";
import Vuejs from "@/public/images/stack/vuejs.png";
import Expressjs from "@/public/images/stack/express.svg";
import Flask from "@/public/images/stack/Flask.svg";
import Swift from "@/public/images/stack/Swift.png";
import PostgreSQL from "@/public/images/stack/PostgreSQL.png";
import MongoDB from "@/public/images/stack/MongoDB_Logo.svg";
import AWS from "@/public/images/stack/AWS.svg";
import EKS from "@/public/images/stack/EKS.svg";
import Kotlin from "@/public/images/stack/Kotlin.svg";
import ReactJs from "@/public/images/stack/Reactjs.svg";
import NestJS from "@/public/images/stack/NestJS.svg";
import Springboot from "@/public/images/stack/Springboot.svg";
import Django from "@/public/images/stack/django.png";
import Flutter from "@/public/images/stack/flutter.svg";
import Redis from "@/public/images/stack/Redis.svg";
import Firebase from "@/public/images/stack/vFirebase2-min.png";
import Supabase from "@/public/images/stack/supabase.png";
import GCP from "@/public/images/stack/GCP.svg";
import Azure from "@/public/images/stack/Azure.svg";
import Kubernetes from "@/public/images/stack/Kubernetes.svg";
import Docker2 from "@/public/images/stack/docker-logo-blue.svg";
import TensorFlow from "@/public/images/stack/tensorflow.svg";
import Pytorch from "@/public/images/stack/Pytorch_logo.png";
// Map display names to actual filenames (no extensions)
const categories = [
  {
    title: "Front-End",
    technologies: [
      { name: "ReactJs", image: ReactJs },
      { name: "NextJS", image: Nextjs },
      { name: "VueJS", image: Vuejs },
    ],
  },
  {
    title: "Back-End",
    technologies: [
      { name: "ExpressJS", image: Expressjs },
      { name: "NestJS", image: NestJS },
      { name: "Springboot", image: Springboot },
      { name: "Flask", image: Flask },
      { name: "Django", image: Django },
    ],
  },
  {
    title: "Mobile App",
    technologies: [
      { name: "React Native", image: ReactJs },
      { name: "Flutter", image: Flutter },
      { name: "Swift", image: Swift },
      { name: "Kotlin", image: Kotlin },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "MongoDB", image: MongoDB },
      { name: "Redis", image: Redis },
    ],
  },
  {
    title: "Serverless DB",
    technologies: [
      { name: "Firebase", image: Firebase },
      { name: "Supabase", image: Supabase },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "AWS", image: AWS },
      { name: "GCP", image: GCP },
      { name: "Azure", image: Azure },
    ],
  },
  {
    title: "Infrastructure",
    technologies: [
      { name: "Docker", image: Docker2 },
      { name: "Kubernetes", image: Kubernetes },
      { name: "EKS", image: EKS },
    ],
  },
  {
    title: "AI",
    technologies: [
      { name: "TensorFlow", image: TensorFlow },
      { name: "PyTorch", image: Pytorch },
    ],
  },
];

export default function Stacks() {
  const [categories, setCategories] = useState<TechCategory[]>([]);

  useEffect(() => {
    // Build local file paths
    const enriched = techCategories.map((category) => ({
      ...category,
      technologies: category.technologies.map((tech) => {
        const key = nameToFileKeyMap[tech.name] || "default";
        return {
          ...tech,
          imageBasePath: `/images/stack/${key}`,
        };
      }),
    }));

    setCategories(enriched);
  }, []);

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      <PageHero
        title="Our Technology Stack"
        subtitle="The tools and technologies we use to build exceptional digital experiences"
      />

      <section className="py-10 md:py-16 lg:py-20 bg-white dark:bg-blacksection overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
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
              DEVELOPMENT
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-2 text-2xl md:text-3xl font-bold text-primary dark:text-white"
            >
              Technology Stack
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-black dark:text-gray-400 max-w-2xl mx-auto"
            >
              We utilize a diverse and modern stack of technologies across
              front-end, back-end, mobile, AI, and cloud infrastructure.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-gray-100 dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-md hover:bg-whitesection dark:hover:bg-hoverdark transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white text-center">
                  {category.title}
                </h3>
                <hr className="mb-5 border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, idx) => {
                    const isNextJS = tech.name === "NextJS";

                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center"
                      >
                        <Image
                          src={`${tech.imageBasePath}.svg`}
                          alt={tech.name}
                          width={50}
                          height={50}
                          className={`mb-2 h-14 w-auto object-contain transition duration-300 ${
                            isNextJS ? "dark:invert" : ""
                          }`}
                          onError={(e) => {
                            // fallback to .png if .svg fails
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = `${tech.imageBasePath}.png`;
                          }}
                          unoptimized
                        />
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why This Stack?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology choices are driven by a commitment to performance,
              scalability, security, and developer experience, ensuring we
              deliver robust and innovative solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "Performance",
                description:
                  "Leveraging modern tools for fast load times and smooth interactions.",
              },
              {
                icon: <Layers className="h-8 w-8 text-blue-500" />,
                title: "Scalability",
                description:
                  "Building on flexible architectures that grow with your needs.",
              },
              {
                icon: <Shield className="h-8 w-8 text-green-500" />,
                title: "Security",
                description:
                  "Prioritizing data protection and robust security measures.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
