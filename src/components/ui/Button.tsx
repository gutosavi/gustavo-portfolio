import React from 'react';

interface ButtonProps {
  name: string;
  className?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
}

const Button = ({ name, className, disabled, isSubmitting }: ButtonProps) => {
  return (
    <button
      className={`
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
      disabled={disabled}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <div
            className="
        size-4
        rounded-full
        border-2
        border-current
        border-t-transparent
        animate-spin
      "
          />
          Enviando...
        </div>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
