import { NextResponse } from "next/server";
import { getChatGptResponse } from "../../../lib/openai";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "No se proporcionó un mensaje" },
        { status: 400 }
      );
    }

    const assistantMessage = await getChatGptResponse(message);

    return NextResponse.json({ content: assistantMessage });
  } catch (error: any) {
    console.error("Error al procesar la solicitud de OpenAI:", error);
    return NextResponse.json(
      { error: "Hubo un error al procesar tu solicitud" },
      { status: 500 }
    );
  }
}