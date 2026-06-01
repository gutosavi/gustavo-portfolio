import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, style }: SectionTitleProp) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-4 h-1 mb-2.5 laptop:w-14 laptop:h-1.5 bg-linear-to-r from-primary-300 to-primary-500"
      />
      <div
        className={`text-primary-600 dark:text-primary-300 text-3xl font-display font-bold leading-[0.85] wrap-break-word laptop:text-9xl`}
        style={style}
      >
        {title}
      </div>
    </>
  );
};

export default SectionTitle;
