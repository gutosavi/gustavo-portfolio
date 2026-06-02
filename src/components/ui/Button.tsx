import React from 'react';

type ButtonProps = {
  name: string;
  className?: string;
};

const Button = ({ name, className }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer
    w-full mt-8 px-6 py-3
    font-bold font-display text-sm tracking-widest uppercase
    rounded-lg
    bg-primary-900 text-primary-50
    dark:bg-primary-50 dark:text-primary-900
    hover:bg-primary-700 dark:hover:bg-primary-200
    transition-colors duration-200
    disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ''}`}
      name={name}
      aria-label={name}
      type="submit"
    >
      {name}
    </button>
  );
};

export default Button;
