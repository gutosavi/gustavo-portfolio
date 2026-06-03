import React from 'react';
import { motion } from 'framer-motion';
import { tagAnimation } from '../../animations/animations';

type TagTextProp = {
  text: string;
};

const Tags = ({ text }: TagTextProp) => {
  return (
    <motion.div
      variants={tagAnimation}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="inline-flex items-center px-3 py-1.5 bg-primary-600 dark:bg-primary-300 text-neutral-100 dark:text-primary-950 rounded-xl"
    >
      {text}
    </motion.div>
  );
};

export default Tags;
