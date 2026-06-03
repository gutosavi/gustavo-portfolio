const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const postData = async (data: ContactFormData): Promise<string> => {
  const apiURL = 'https://api.emailjs.com/api/v1.0/email/send';
  const formData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: `${data.name}`,
      reply_to: `${data.email}`,
      message: `${data.message}`,
    },
  };

  try {
    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('A mensagem não pôde ser enviada!');
    }

    const result = await response.text();
    return result;
  } catch (error) {
    console.error('ERRO:', error);
    throw error;
  }
};
