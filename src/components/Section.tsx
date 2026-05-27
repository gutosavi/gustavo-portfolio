import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ children, classe, delay, id }: SectionsCardProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay }}
      viewport={{ once: true }} 
      className={classe}
      id={id}>
        {children}
    </motion.section>
  )
}

export default Section