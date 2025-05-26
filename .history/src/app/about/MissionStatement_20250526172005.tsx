"use client";

import React from "react";
import { motion } from "framer-motion";

const MissionStatement: React.FC = () => {
  return (
    <section className="py-15 bg-gray-200 text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground font-medium">
            &ldquo;To empower businesses, students, and startups in Laos through
            innovative IT consulting, development, and education—simplifying
            technology, enhancing digital capabilities, and building sustainable
            growth in the local tech ecosystem.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;
