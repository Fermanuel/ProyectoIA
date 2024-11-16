interface MessageItemProps {
    message: { role: 'user' | 'assistant'; content: string };
  }
  
  export const MessageItem = ({ message }: MessageItemProps) => {
    return (
      <div
        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        <div
          className={`max-w-[80%] rounded-lg p-2 ${
            message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {message.content}
        </div>
      </div>
    );
  };
  