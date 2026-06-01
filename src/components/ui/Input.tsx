import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
  name: string;
  placeholder: string;
  className?: string;
  validation: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}

const Input = ({ name, className, placeholder, validation }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        className={`w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-primary-900 placeholder:text-neutral-400 outline-none focus:border-primary-500 transition-colors ${className ?? ''}`}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && (
        <span className="text-xs text-primary-400">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </>
  );
};

export default Input;
