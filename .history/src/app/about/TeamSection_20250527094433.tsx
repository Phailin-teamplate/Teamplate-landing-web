"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  imageAlt: string;
  imageUrl: string;
};
const teamMembers: TeamMember[] = [
  {
    name: "SANGHWAN HYUN",
    role: "Founder & CEO",
    imageAlt: "Headshot of SANGHWAN HYUN",
    imageUrl: "/images/profile/Meedam.jpg", // Local path
  },
  {
    name: "SOKAMNOUI OUDOMSOUK",
    role: "IT Developer",
    imageAlt: "Portrait of SOKAMNOUI OUDOMSOUK",
    imageUrl: "/images/profile/Aiy.JPG",
  },
  {
    name: "PHAILIN KHODYOTHA",
    role: "IT Developer",
    imageAlt: "Creative portrait of PHAILIN KHODYOTHA",
    imageUrl: "/images/profile/Ninee.jpeg",
  },
  {
    name: "NAMFON SENGMANY",
    role: "Customer Service",
    imageAlt: "Photo of NAMFON SENGMANY",
    imageUrl: "/images/profile/Lick.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamSection: React.FC = () => {
  return (
    <section className="md:py-20 py-10 bg-muted/50 dark:bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black dark:text-gray-300">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind our success
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group border border-border"
            >
              <div className="relative h-75 w-full">
                <Image
                  src={member.imageUrl}
                  alt={member.imageAlt}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-center space-y-1">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {member.name}
                </h3>
                <p className="text-2sx text-primary font-medium">
                  {member.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
