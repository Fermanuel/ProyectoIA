import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from 'lucide-react';

interface MessageInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: (e: React.FormEvent) => void;
}

export const MessageInput = ({ input, setInput, handleSend }: MessageInputProps) => {
  return (
    <form onSubmit={handleSend} className="p-4 border-t flex">
      <Input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
        className="flex-grow mr-2"
      />
      <Button type="submit">
        <Send className="h-4 w-4" />
        <span className="sr-only">Enviar mensaje</span>
      </Button>
    </form>
  );
};
