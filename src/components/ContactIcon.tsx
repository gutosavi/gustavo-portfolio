import React from 'react';
import { motion } from 'framer-motion';
import { cardAnimation } from '../animations/animations';
import { RiArrowRightUpLine } from 'react-icons/ri';

type ContactIconProp = {
  name: string;
  contact: string;
  icon: string;
  href?: string;
  delay?: number;
};

const ContactIcon = ({
  name,
  contact,
  icon,
  href,
  delay = 0,
}: ContactIconProp) => {
  return (
    <div className="flex flex-row gap-5">
      <img
        src={icon}
        alt={name}
        className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-110"
      />
      <div>
        <h3 className="text-primary-900 text-xl font-bold font-display uppercase transition-colors duration-200 group-hover:text-primary-500">
          {name}
        </h3>
        <p className="text-primary-500 text-sm laptop:text-xl font-display tracking-wider">
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
            gap-1
          "
          >
            {contact}
            <RiArrowRightUpLine />
          </motion.a>
        </p>
      </div>
    </div>
  );
};

export default ContactIcon;
