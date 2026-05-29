import React from 'react';
import { motion } from 'framer-motion';
import { cardAnimation } from '../animations/animations';

const Card = ({ children, classe, delay = 0 }: CardProps) => {
  return (
    <motion.div
      variants={cardAnimation}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      className={classe}
    >
      {children}
    </motion.div>
  );
};

export default Card;
