import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../../services/postData';

const useContactForm = () => {
  const methods = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const dataForm = await postData(data);
      methods.reset();
      return dataForm;
    } catch (error) {
      console.error('Erro ao enviar mensagem', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    methods,
    isSubmitting,
    onSubmit,
  };
};

export default useContactForm;
