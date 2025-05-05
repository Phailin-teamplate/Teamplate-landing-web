"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Stacks from "../components/Stacks";
import Contacts from "../components/Contacts/contactus";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="flex justify-center" id="homepage">
        <div className="relative w-full h-[500px] xs:h-[600px] md:h-screen lg:h-screen">
          {/* Background Image */}
          <Image
            src="/Mockup bg.jpg"
            alt="Startup Background"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/50 to-blue-700/70 z-10"></div>

          {/* Animated Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-xs xs:text-3xl md:text-2xl mb-2 xs:mb-12 md:mb-2 text-white"
            >
              From IT outsourcing development to IT business consulting
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-white text-4xl xs:text-6xl md:text-9xl font-bold"
            >
              TEAMPLATE
            </motion.div>
          </div>
        </div>
      </div>

      {/* === About Section 1 === */}
      <section id="about" className="px-4 py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 w-full text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-2xl text-center md:text-left space-y-6 md:space-y-8">
              <p className="text-2xl font-semibold text-blue-700">
                IT Specialized Company Based in Laos
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-wide">
                We are a Laos-based IT startup aiming for the global market.
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                We are targeting not only the local market in Laos but also
                neighboring Southeast Asian countries and the Northeast Asian
                market, including South Korea.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            {/* Desktop */}
            <motion.div
              className="relative aspect-[588/526.5] hidden md:block"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/Start.gif"
                alt="About"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/Start.gif"
                alt="About"
                fill
                className="object-contain hidden dark:block"
              />
            </motion.div>
            {/* Mobile */}
            <div className="relative h-60 w-full md:hidden my-6">
              <Image
                src="/Start.gif"
                alt="About Mobile"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === About Section 2 === */}
      <section className="px-4 py-10 md:py-0">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Image Block */}
          <div className="md:w-1/2 w-full">
            {/* Desktop Image */}
            <motion.div
              className="relative aspect-[588/526.5] hidden md:block"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/Animated IT.gif"
                alt="IT Service"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/Animated IT.gif"
                alt="IT Service Dark"
                fill
                className="object-contain hidden dark:block"
              />
            </motion.div>

            {/* Mobile Image */}
            <div className="relative h-60 w-full md:hidden my-6">
              <Image
                src="/Animated IT.gif"
                alt="IT Service Mobile"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            className="md:w-1/2 w-full text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-2xl text-center md:text-left space-y-6 md:space-y-8">
              <p className="text-2xl md:text-2xl font-semibold text-blue-700 mb-4 md:mb-6">
                Anything related to IT that our customers need and desire.
              </p>
              <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                We can provide anything related to IT for our customers.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
                We provide comprehensive outsourcing development services in the
                IT sector as well as consulting on IT business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === About Section 3 === */}
      <section className="px-4 py-10 ">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 w-full text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-2xl text-center md:text-left space-y-6 md:space-y-8">
              <p className="text-2xl md:text-2xl text-blue-700 mb-2 font-semibold">
                Bringing various IT services to Lao society
              </p>
              <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                We are also developing and operating our own IT services.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
                We develop and implement IT services utilizing various
                technologies and operate them within Lao society.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            {/* Desktop */}
            <motion.div
              className="relative aspect-[588/526.5] hidden md:block"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/Animated IT Service.gif"
                alt="Service"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/Animated IT Service.gif"
                alt="Service"
                fill
                className="object-contain hidden dark:block"
              />
            </motion.div>
            {/* Mobile */}
            <div className="relative h-60 w-full md:hidden my-6">
              <Image
                src="/Animated IT Service.gif"
                alt="Service Mobile"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Partners */}
      <Partners />

      {/* Tech Stack */}
      <Stacks />

      {/* Contact */}
      <Contacts />
    </div>
  );
}
