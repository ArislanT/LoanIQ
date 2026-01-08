'use client';

import { PaperPlaneIcon } from '@radix-ui/react-icons';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder: string;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  placeholder,
  disabled = false,
}: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !disabled) {
      onSend();
    }
  };

  return (
    <div className="px-4 py-3 border-t border-gray-200 bg-white">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-capital-blue"
        />
        <button
          onClick={onSend}
          disabled={disabled}
          className="bg-capital-blue text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-capital-blue-dark disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PaperPlaneIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

