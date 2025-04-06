
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI fitness assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  
  // Simulated responses from the AI
  const aiResponses = [
    "Based on your fitness goals, I'd recommend focusing on compound exercises like squats, deadlifts, and bench presses for maximum muscle growth.",
    "For your current weight and height, a protein intake of 1.6-2.0g per kg of body weight daily would be optimal for muscle recovery.",
    "If you're looking to build muscle while staying lean, creatine monohydrate is one of the most researched and effective supplements.",
    "Remember that consistency is key for any fitness program. Try to maintain your workout routine for at least 8-12 weeks to see significant results.",
    "For post-workout nutrition, aim to consume a mix of protein and carbohydrates within 30-60 minutes after training to maximize recovery."
  ];
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    
    // Simulate AI response with a random selection
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-fitness-navy">AI Fitness Assistant</h2>
        <p className="text-sm text-gray-500">Ask me anything about fitness, nutrition, or supplements!</p>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex gap-3 max-w-[80%]",
              message.sender === 'user' ? "ml-auto" : "mr-auto"
            )}
          >
            {message.sender === 'ai' && (
              <div className="bg-blue-100 p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 text-fitness-teal" />
              </div>
            )}
            
            <div 
              className={cn(
                "rounded-lg p-3",
                message.sender === 'user' 
                  ? "bg-fitness-teal text-white rounded-tr-none" 
                  : "bg-gray-100 text-gray-800 rounded-tl-none"
              )}
            >
              <p>{message.text}</p>
              <p className="text-[10px] opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            
            {message.sender === 'user' && (
              <div className="bg-fitness-teal p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                <User className="h-5 w-5 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
        <Input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask about workouts, nutrition, supplements..."
          className="flex-grow"
        />
        <Button type="submit" variant="default" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInterface;
