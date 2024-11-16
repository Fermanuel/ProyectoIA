import { NextResponse } from 'next/server';
import { getChatGptResponse } from '../../../lib/openai'; // Importamos la función desde lib/openai

export async function POST(request: Request) {
  try {
    const { message } = await request.json(); // Obtenemos el mensaje desde el cuerpo de la solicitud

    // Llamamos a la función que interactúa con OpenAI
    const assistantMessage = await getChatGptResponse(message);

    // Devolvemos la respuesta de la IA
    return NextResponse.json({ content: assistantMessage });
  } catch (error) {
    console.error('Error al procesar la solicitud de OpenAI:', error);
    return NextResponse.json({ error: 'Hubo un error al procesar tu solicitud' }, { status: 500 });
  }
}
