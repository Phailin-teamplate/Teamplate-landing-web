'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Zap, Heart } from 'lucide-react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Customer Focus',
    description:
      'We put our customers at the center of everything we do, creating solutions that address real needs.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Excellence',
    description:
      'We strive for excellence in all aspects of our work, from code quality to user experience.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Innovation',
    description:
      'We embrace creativity and forward-thinking to develop cutting-edge solutions.',
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Integrity',
    description:
      'We operate with transparency, honesty, and ethical principles in all our interactions.',
  },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const OurValues: React.FC = () => {
  return (
    <section className="md:pb-0 pt-10 bg-muted/50 dark:bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
