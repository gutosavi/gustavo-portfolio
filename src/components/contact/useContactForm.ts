import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../../services/postData';

const useContactForm = () => {
  const methods = useForm<ContactFormData>();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const dataForm = await postData(data);
      methods.reset();
      return dataForm;
    } catch (error) {
      console.error('Erro ao enviar mensagem', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    methods,
    isLoading,
    onSubmit,
  };
};

export default useContactForm;
