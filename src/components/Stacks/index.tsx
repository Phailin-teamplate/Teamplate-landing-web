// components/Stacks.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { techCategories, TechCategory } from "../../types/stackData";
import { fetchStackLogos } from "../../lib/fetchStackLogos";
import SectionHeader from "../Common/SectionHeader";

// Optional: if names and filenames differ
const nameToFileKeyMap: Record<string, string> = {
  "ReactJS": "reactjs",
  "NextJS": "nextjs",
  "VueJS": "vuejs",
  "ExpressJS": "express",
  "NestJS": "nestjs",
  "Spring Boot": "springboot",
  "Flask": "flask",
  "Django": "django",
  "React Native": "reactjs",
  "Flutter": "flutter",
  "Swift": "swift",
  "Kotlin": "kotlin",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb_logo",
  "Redis": "redis",
  "Firebase": "firebase2-min",
  "Supabase": "supabase",
  "AWS": "aws",
  "GCP": "gcp",
  "Azure": "azure",
  "Docker": "docker-logo-blue",
  "Kubernetes": "kubernetes",
  "EKS": "eks",
  "TensorFlow": "tensorflow",
  "PyTorch": "pytorch_logo",
};

export default function Stacks() {
  const [categories, setCategories] = useState<TechCategory[]>([]);

  useEffect(() => {
    const load = async () => {
      const logos = await fetchStackLogos();

      const enriched = techCategories.map((category) => ({
        ...category,
        technologies: category.technologies.map((tech) => {
          const key = nameToFileKeyMap[tech.name] || tech.name.toLowerCase();
          return {
            ...tech,
            imageUrl: logos[key],
          };
        }),
      }));

      setCategories(enriched);
    };

    load();
  }, []);

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-whitesection dark:bg-blacksection overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-white dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-md hover:bg-whitesection dark:hover:bg-hoverdark transition-shadow"
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
                    {tech.imageUrl ? (
                      <Image
                        src={tech.imageUrl}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="mb-2 h-14 w-auto object-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="mb-2 h-14 w-14 bg-gray-200 rounded-full" />
                    )}
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
