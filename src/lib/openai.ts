import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const getChatGptResponse = async (message: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    if (!completion.choices || !completion.choices[0].message) {
      throw new Error("La respuesta de OpenAI no contiene mensajes válidos.");
    }

    const content = completion.choices[0].message.content;
    if (content === null) {
      throw new Error("La respuesta de OpenAI contiene un mensaje nulo.");
    }
    return content;
  } catch (error: any) {
    if (error.code === "insufficient_quota") {
      console.error("Error: Límite de uso de OpenAI alcanzado.");
      throw new Error(
        "Has alcanzado el límite de uso permitido. Verifica tu plan o espera hasta que se reinicien los límites."
      );
    }

    console.error("Error al interactuar con OpenAI:", error);
    throw new Error("Hubo un error al procesar tu solicitud.");
  }
};
