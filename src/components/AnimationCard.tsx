import React from 'react'
import { motion } from 'framer-motion'

const AnimationCard = ({ children, classe, delay }: AnimationCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      className={classe}
      >
      {children}
    </motion.div>
  )
}

export default AnimationCard