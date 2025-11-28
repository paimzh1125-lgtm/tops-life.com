import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    { sender: 'ai', text: '您好！我是 NovaMaterial 的智能助手。请问有什么可以帮您？关于我们的医疗包装、注塑技术或大豆蛋白材料，尽管问我。' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white font-medium text-sm">Nova AI 助手</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-cyan-100 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-neutral-900/90 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none'
                      : 'bg-neutral-800 text-gray-200 rounded-bl-none border border-neutral-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-neutral-800 rounded-2xl px-4 py-3 border border-neutral-700 rounded-bl-none flex items-center gap-2">
                   <Loader2 size={16} className="animate-spin text-cyan-400" />
                   <span className="text-xs text-gray-400">正在思考...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-neutral-900 border-t border-neutral-800 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="请输入您的问题..."
              className="flex-1 bg-neutral-800 text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-neutral-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full p-2 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle size={24} className="group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default ChatWidget;
