import React from 'react';
import type { IconType } from 'react-icons';

interface LinkProps {
  href: string;
  text: string;
  icon: IconType;
}

const LinkCard = ({ href, text, icon: Icon }: LinkProps) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          gap-1
          text-sm
          font-medium
          text-primary-900
          dark:text-primary-50
          transition-all
          duration-300
          hover:translate-x-1
        "
      >
        <Icon />
        {text}
      </a>
    </>
  );
};

export default LinkCard;
