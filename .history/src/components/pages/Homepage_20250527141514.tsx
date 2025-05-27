"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg py-20 md:py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible" // ensures it plays first without scroll trigger
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="md:text-2xl text-xs md:text-white/80 text-white mx-auto pb-3"
            >
              From IT outsourcing development to IT business consulting
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-bold text-white mb-6 text-center"
            >
              TEAMPLATE
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button size="lg" className="group text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
