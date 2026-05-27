import React from 'react'
import { motion } from 'framer-motion'
import { cardAnimation } from '../animations/animations';

type ContactIconProp = {
  name: string;
  contact: string;
  icon: string;
  href?: string;
  delay?: number;
}

const ContactIcon = ({ name, contact, icon, href, delay = 0 }: ContactIconProp) => {
  return (
    <div className='flex flex-row gap-5'>
      <img
        src={icon}
        alt={name}
      />
      <div>
        <h3 className='text-primary-900 text-xl font-bold font-display uppercase'>{name}</h3>
        <p className='text-primary-500 text-xl font-normal font-display'>
          <motion.a 
          variants={cardAnimation}
          custom={delay}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
          href={href}
          target="_blank" 
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            gap-4
          "
          >{contact}
          </motion.a>
        </p>
      </div>
    </div>
  )
}

export default ContactIcon