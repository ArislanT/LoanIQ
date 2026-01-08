'use client';

export interface Message {
  type: 'bot' | 'user';
  text: string;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
          message.type === 'user' ? 'bg-capital-blue text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
}

