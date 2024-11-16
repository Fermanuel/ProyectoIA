import React from 'react';
import { Message } from '../types/types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-grow p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[80%] rounded-lg p-2 ${
              message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};
