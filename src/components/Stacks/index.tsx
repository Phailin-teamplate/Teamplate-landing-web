
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import Nextjs from "@/public/nextjs.svg";
import Vuejs from "@/public/vuejs.png";
import Expressjs from "@/public/express.svg";
import Flask from "@/public/Flask.svg";
import Swift from "@/public/Swift.png";
import PostgreSQL from "@/public/PostgreSQL.png";
import MongoDB from "@/public/MongoDB_Logo.svg";
import AWS from "@/public/AWS.svg";
import EKS from "@/public/EKS.svg";
import Kotlin from "@/public/Kotlin.svg";
import ReactJs from "@/public/Reactjs.svg";
import NestJS from "@/public/NestJS.svg";
import Springboot from "@/public/Springboot.svg";
import Django from "@/public/django.png";
import Flutter from "@/public/flutter.svg";
import Redis from "@/public/Redis.svg";
import Firebase from "@/public/Firebase2-min.png";
import Supabase from "@/public/supabase.png";
import GCP from "@/public/GCP.svg";
import Azure from "@/public/Azure.svg";
import Kubernetes from "@/public/Kubernetes.svg";
import Docker2 from "@/public/docker-logo-blue.svg";
import TensorFlow from "@/public/tensorflow.svg";
import Pytorch from "@/public/Pytorch_logo.png";
 // Optional: organize imports for cleanliness

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
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-whitesection dark:bg-blacksection overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center">
          <SectionHeader
            headerInfo={{
              title: "DEVELOPMENT",
              subtitle: "Technology Stack",
              description:
                "We utilize a diverse and modern stack of technologies across front-end, back-end, mobile, AI, and cloud infrastructure.",
            }}
          />
        </div>

        {/* Tech Categories Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-white dark:border-strokedark  dark:hover:bg-hoverdark  bg-white dark:bg-blacksection p-6 shadow-md hover:bg-whitesection transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>
              <hr className="mb-5 border-t border-gray-200 dark:border-gray-700" />
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={50}
                      height={50}
                      className="mb-2 h-14 w-auto object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
