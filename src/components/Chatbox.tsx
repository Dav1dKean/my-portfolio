'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbox() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      }
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Error: could not get response.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-4 right-4 z-50 w-[95%] sm:w-full sm:max-w-sm bg-white/90 dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-3 backdrop-blur-md"

    >
      <div className="h-48 overflow-y-auto p-2 space-y-2 text-sm">
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
              transition={{ duration: 0.3 }}
              className={`p-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-100 text-blue-900'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
              }`}
            >
              <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
            </motion.div>
          ))}
        </AnimatePresence>
        {loading && <div className="italic text-gray-500">Assistant is typing...</div>}
      </div>

      <div className="mt-2 flex gap-2 items-center">
        <textarea
          className="flex-1 resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything about David's resume, skills, or experience..."
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
}
