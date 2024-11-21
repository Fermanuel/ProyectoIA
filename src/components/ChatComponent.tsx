'use client';

import { useState } from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { Message } from "../types/types"; // Asegúrate de importar el tipo Message

export default function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy tu asistente nutricional. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Realizamos la solicitud al API route que llamará a la función de OpenAI
      const response = await fetch('api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener la respuesta de la IA');
      }

      const data = await response.json();
      const assistantMessage: Message = { role: 'assistant', content: data.content };

      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error al obtener la respuesta de la IA:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'assistant', content: "Lo siento, hubo un error al obtener la respuesta." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-md mx-auto border rounded-lg overflow-hidden">
      <MessageList messages={messages} />
      <MessageInput input={input} setInput={setInput} handleSend={handleSend} />
      {loading && <div className="p-4 text-center">Cargando...</div>}
    </div>
  );
}
