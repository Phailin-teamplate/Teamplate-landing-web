"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Features from "../components/Features";
import Partners from "../components/Partners";
import Stacks from "../components/Stacks";
import Contacts from "../components/Contacts/contactus";
import { fetchAboutImage } from "../lib/fetchAboutImage";

export default function Home() {
  const [images, setImages] = useState({
    hero: "",
    start: "",
    animatedIT: "",
    animatedService: "",
  });

  const [loadCount, setLoadCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const onLoadOnce = () => {
    setLoadCount((prev) => {
      const updated = prev + 1;
      if (updated >= 4) setLoaded(true);
      return updated;
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 6000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const [hero, start, animatedIT, animatedService] = await Promise.all([
        fetchAboutImage("Mockup bg.jpg"),
        fetchAboutImage("Start.gif"),
        fetchAboutImage("Animated IT.gif"),
        fetchAboutImage("Animated IT Service.gif"),
      ]);
      setImages({ hero, start, animatedIT, animatedService });
    };

    loadImages();
  }, []);

  if (!loaded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="flex justify-center" id="homepage">
        <div className="relative w-full h-[500px] xs:h-[600px] md:h-screen lg:h-screen">
          {images.hero && (
            <Image
              src={images.hero}
              alt="Startup Background"
              fill
              unoptimized
              onLoad={onLoadOnce}
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/50 to-blue-700/70 z-10" />
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

      {/* Reusable About Sections */}
      {[{
        title: "IT Specialized Company Based in Laos",
        heading: "We are a Laos-based IT startup aiming for the global market.",
        desc: "We are targeting not only the local market in Laos but also neighboring Southeast Asian countries and the Northeast Asian market, including South Korea.",
        image: images.start,
        reverse: false,
      }, {
        title: "Anything related to IT that our customers need and desire.",
        heading: "We can provide anything related to IT for our customers.",
        desc: "We provide comprehensive outsourcing development services in the IT sector as well as consulting on IT business.",
        image: images.animatedIT,
        reverse: true,
      }, {
        title: "Bringing various IT services to Lao society",
        heading: "We are also developing and operating our own IT services.",
        desc: "We develop and implement IT services utilizing various technologies and operate them within Lao society.",
        image: images.animatedService,
        reverse: false,
      }].map(({ title, heading, desc, image, reverse }, index) => (
        <section key={index} className="px-4 py-10">
          <div className={`max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10 ${reverse ? "md:flex-row-reverse" : ""}`}>
            <motion.div
              className="md:w-1/2 w-full text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 md:space-y-8">
                <p className="text-2xl font-semibold text-blue-700">{title}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">{heading}</h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            </motion.div>

            <div className="md:w-1/2 w-full">
              {image && (
                <>
                  <motion.div
                    className="relative aspect-[588/526.5] hidden md:block"
                    initial="hidden"
                    whileInView="visible"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={image}
                      alt="About Image"
                      fill
                      unoptimized
                      onLoad={onLoadOnce}
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="relative h-60 w-full md:hidden my-6">
                    <Image
                      src={image}
                      alt="About Mobile"
                      fill
                      unoptimized
                      onLoad={onLoadOnce}
                      className="object-contain"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Features */}
      <Features />
      <Partners />
      <Stacks />
      <Contacts />
    </div>
  );
}
