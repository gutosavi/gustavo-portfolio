import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextAreaProps {
  name: string;
  className?: string;
  placeholder: string;
  rows: number;
  cols: number;
}

const TextArea = ({
  name,
  className,
  placeholder,
  rows,
  cols,
}: TextAreaProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <textarea
        id={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        {...register(name, {
          required: false,
          maxLength: {
            value: 500,
            message: 'A mensagem deve conter no máximo 500 caracteres',
          },
        })}
        className={`w-full mt-7 px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 text-primary-900 placeholder:text-neutral-400 outline-none focus:border-primary-500 transition-colors ${className ?? ''}`}
      ></textarea>
      {errors[name] && (
        <span className="text-xs text-primary-400 dark:text-primary-50 px-1 py-1">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </>
  );
};

export default TextArea;
