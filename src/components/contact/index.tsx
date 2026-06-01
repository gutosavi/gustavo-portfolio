import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';
import { useForm, FormProvider } from 'react-hook-form';

const index = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-8 w-full pt-15 pb-10">
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
          name="message-area"
          placeholder="Me fale um pouco sobre seu projeto"
          rows={10}
          cols={30}
        />
        <Button name="Enviar" className="" />
      </form>
    </FormProvider>
  );
};

export default index;
