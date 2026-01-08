'use client';

import { Dialog, ScrollArea } from 'radix-ui';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon, PaperPlaneIcon } from '@radix-ui/react-icons';

interface Message {
  type: 'bot' | 'user';
  text: string;
}

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatOverlay({ isOpen, onClose }: ChatOverlayProps) {
  const { language, text } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: text.chat.welcome }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const suggestedQuestions = [
    language === 'en' ? 'What are the pros and cons of this loan?' : '¿Cuáles son las ventajas y desventajas de este préstamo?',
    language === 'en' ? 'What happens if I miss a payment?' : '¿Qué pasa si pierdo un pago?',
    language === 'en' ? 'Should I choose federal or private loans?' : '¿Debo elegir préstamos federales o privados?',
  ];
  
  const handleSend = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;
    
    setMessages(prev => [...prev, { type: 'user', text: messageText }]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          language,
        }),
      });
      
      const data = await response.json();
      
      if (data.success && data.response) {
        setMessages(prev => [...prev, { type: 'bot', text: data.response }]);
      } else {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: language === 'en' 
            ? 'Sorry, I had trouble processing that. Please try again.'
            : 'Lo siento, tuve problemas procesando eso. Por favor intenta de nuevo.'
        }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: language === 'en' 
          ? 'Sorry, something went wrong. Please try again.'
          : 'Lo siento, algo salió mal. Por favor intenta de nuevo.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Content className="fixed inset-0 bg-white z-50 flex flex-col focus:outline-none data-[state=open]:animate-fade-in">
          {/* Header */}
          <div className="bg-capital-blue text-white px-6 py-4 flex items-center gap-4">
            <Dialog.Close className="hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
              <ArrowLeftIcon className="w-6 h-6" />
            </Dialog.Close>
            <Dialog.Title className="text-xl font-semibold">{text.chat.title}</Dialog.Title>
          </div>
          
          {/* Messages */}
          <ScrollArea.Root className="flex-1 overflow-hidden">
            <ScrollArea.Viewport className="h-full w-full">
              <div className="px-6 py-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-capital-blue text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-2 bg-gray-100">
              <ScrollArea.Thumb className="bg-gray-400 rounded-full" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
          
          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-3 space-y-2 border-t border-gray-200">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(question)}
                  className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl text-sm text-capital-blue font-medium transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          )}
          
          {/* Input */}
          <div className="px-6 py-4 border-t border-gray-200 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={text.chat.placeholder}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-capital-blue focus:ring-2 focus:ring-capital-blue/20"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-capital-blue text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-capital-blue-dark transition-colors focus:outline-none focus:ring-4 focus:ring-capital-blue/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperPlaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
