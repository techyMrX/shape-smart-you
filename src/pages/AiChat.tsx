
import React from 'react';
import Navbar from "@/components/Navbar";
import ChatInterface from "@/components/ChatInterface";
import { ArrowRight } from 'lucide-react';

const AiChat = () => {
  // Sample FAQs
  const faqs = [
    "What supplements should I take for muscle growth?",
    "How many rest days do I need per week?",
    "What's the best diet for losing fat while maintaining muscle?",
    "How do I break through a strength plateau?",
    "When should I take protein powder for best results?",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-fitness-navy mb-4">AI Fitness Assistant</h1>
            <p className="text-lg text-fitness-slate max-w-2xl mx-auto">
              Get instant answers to your fitness, nutrition, and supplement questions from our AI assistant.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ChatInterface />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-fitness-navy mb-4">Popular Questions</h2>
                <ul className="space-y-3">
                  {faqs.map((faq, index) => (
                    <li key={index} className="flex items-center group">
                      <button className="text-left text-fitness-slate group-hover:text-fitness-teal transition-colors flex items-center w-full">
                        <span>{faq}</span>
                        <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-fitness-navy mb-4">How Can Our AI Help?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-fitness-teal font-bold">•</span>
                    <span>Get supplement recommendations based on your goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fitness-teal font-bold">•</span>
                    <span>Advice on workout form and technique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fitness-teal font-bold">•</span>
                    <span>Nutrition guidance for your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fitness-teal font-bold">•</span>
                    <span>Help with workout scheduling and planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fitness-teal font-bold">•</span>
                    <span>Exercise alternatives based on equipment access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500">
            © 2025 ShapeSmart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AiChat;
