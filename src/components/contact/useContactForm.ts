import React from 'react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const useContactForm = () => {
  const methods = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return {
    methods,
    onSubmit,
  };
};

export default useContactForm;
