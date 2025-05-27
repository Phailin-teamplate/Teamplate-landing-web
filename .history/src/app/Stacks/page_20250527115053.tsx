// components/Stacks.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { techCategories, TechCategory } from "../../types/stackData";
import { fetchStackLogos } from "../../lib/fetchStackLogos";
import PageHero from "../../components/PageHero";
import { Layers, Shield, Zap } from "lucide-react";

// Optional: if names and filenames differ
const nameToFileKeyMap: Record<string, string> = {
  ReactJS: "reactjs",
  NextJS: "nextjs",
  VueJS: "vuejs",
  ExpressJS: "express",
  NestJS: "nestjs",
  "Spring Boot": "springboot",
  Flask: "flask",
  Django: "django",
  "React Native": "reactjs",
  Flutter: "flutter",
  Swift: "swift",
  Kotlin: "kotlin",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb_logo",
  Redis: "redis",
  Firebase: "firebase2-min",
  Supabase: "supabase",
  AWS: "aws",
  GCP: "gcp",
  Azure: "azure",
  Docker: "docker-logo-blue",
  Kubernetes: "kubernetes",
  EKS: "eks",
  TensorFlow: "tensorflow",
  PyTorch: "pytorch_logo",
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
  const darkKey = `${key}-dark`;

  return {
    ...tech,
    imageUrl: logos[key] || "/logos/default.png",
    darkImageUrl: logos[darkKey] || null,
    hasDarkFile: !!logos[darkKey],
  };
}),

      }));

      setCategories(enriched);
    };

    load();
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
          <div className="text-center">
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
          </div>

          <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
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
                    const imageSrc = tech.imageUrl || "/images/default.png";
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center"
                      >
                        {tech.imageUrl ? (
                          <div className="relative mb-2 h-14 w-auto">
  {tech.hasDarkFile ? (
    <>
      {/* Light mode image */}
      <Image
        src={tech.imageUrl || "/logos/default.png"}
        alt={tech.name}
        width={50}
        height={50}
        className="h-14 w-auto object-contain block dark:hidden"
        onError={(e) => (e.currentTarget.src = "/logos/default.png")}
        unoptimized
      />

      {/* Dark mode image */}
      <Image
        src={tech.darkImageUrl || tech.imageUrl || "/logos/default.png"}
        alt={tech.name}
        width={50}
        height={50}
        className="h-14 w-auto object-contain hidden dark:block"
        onError={(e) => (e.currentTarget.src = "/logos/default.png")}
        unoptimized
      />
    </>
  ) : (
    <Image
      src={tech.imageUrl || "/logos/default.png"}
      alt={tech.name}
      width={50}
      height={50}
      className={`h-14 w-auto object-contain ${
        [
          "NextJS",
          "ExpressJS",
          "Flask",
          "Django",
          "Kotlin",
          "MongoDB",
          "Redis",
          "Firebase",
          "Supabase",
          "AWS",
          "EKS",
          "PyTorch",
        ].includes(tech.name)
          ? "dark:invert dark:brightness-150"
          : ""
      }`}
      onError={(e) => (e.currentTarget.src = "/logos/default.png")}
      unoptimized
    />
  )}
</div>

                        ) : (
                          <div className="mb-2 h-14 w-14 bg-gray-200 rounded-full" />
                        )}
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
