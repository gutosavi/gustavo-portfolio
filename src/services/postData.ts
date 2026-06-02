interface UserResponse {
  name: string;
  email: string;
  message: string;
}

const serviceId = import.meta.env.EMAILJS_SERVICE_ID;
const templateId = import.meta.env.EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.EMAILJS_USER_ID;

export const postData = async (data: UserResponse): Promise<UserResponse> => {
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
    const result = await response.json();
    console.log('Mensagem enviada com sucesso!');
    return result;
  } catch (error) {
    console.error('ERRO:', error);
    throw error;
  }
};
