import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY || ""); // Configura tu token de Hugging Face

export const getHuggingFaceResponse = async (message: string): Promise<string> => {
  try {
    const response = await hf.textGeneration({
      model: "gpt2", // Modelo de Hugging Face
      inputs: message,
    });

    if (!response.generated_text) {
      throw new Error("La respuesta del modelo no contiene texto válido.");
    }

    return response.generated_text.trim(); // Devuelve la respuesta generada
  } catch (error: any) {
    console.error("Error al interactuar con Hugging Face:", error);
    throw new Error("Hubo un error al procesar tu solicitud.");
  }
};
