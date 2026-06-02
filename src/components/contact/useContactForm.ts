import React from 'react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const useContactForm = () => {
  const methods = useForm<ContactFormData>();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    const formData = {
      service_id: 'service_5mgfw1j',
      template_id: 'template_dgdobn4',
      user_id: 'MHm2pKKkCn2lMjZAN',
      template_params: {
        from_name: `${data.name}`,
        reply_to: `${data.email}`,
        message: `${data.message}`,
      },
    };

    try {
      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error('A mensagem não pôde ser enviada!');
      }
      console.log('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Ooops:', error);
    }
  };

  return {
    methods,
    onSubmit,
  };
};

export default useContactForm;
