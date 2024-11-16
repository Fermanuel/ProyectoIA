import { OpenAI } from 'openai';

// Crear una instancia de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '', // La clave debe estar en .env.local
});

// Función para obtener la respuesta de OpenAI
export const getChatGptResponse = async (message: string) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // o el modelo que prefieras
      messages: [{ role: 'user', content: message }],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al interactuar con OpenAI:', error);
    throw new Error('Hubo un error al procesar tu solicitud');
  }
};
