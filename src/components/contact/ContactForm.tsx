import React from 'react';
import { FormProvider } from 'react-hook-form';
import useContactForm from './useContactForm';
import Input from '../ui/Input';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';

const ContactForm = () => {
  const { methods, onSubmit } = useContactForm();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col w-full pt-15 pb-10"
      >
        <h2 className="text-primary-900 dark:text-primary-50 text-3xl font-bold font-display leading-8">
          Ou, se preferir, envie-me uma mensagem:
        </h2>
        <Input
          name="name"
          placeholder="Nome"
          validation={{
            required: 'Nome é obrigatório',
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
              message: 'Nome é inválido',
            },
          }}
        />
        <Input
          name="email"
          placeholder="Endereço de e-mail"
          validation={{
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: 'E-mail é inválido',
            },
          }}
        />
        <TextArea
          name="message"
          placeholder="Me fale um pouco sobre seu projeto"
          rows={10}
          cols={30}
        />
        <Button name="Enviar" />
      </form>
    </FormProvider>
  );
};

export default ContactForm;
