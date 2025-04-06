
import React from 'react';
import { 
  Dumbbell, 
  Salad, 
  MessageSquare, 
  LineChart, 
  Clock,
  Heart
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="h-8 w-8 text-fitness-teal" />,
      title: "Personalized Workouts",
      description: "Get custom workout plans tailored to your body, goals, and available equipment."
    },
    {
      icon: <Salad className="h-8 w-8 text-fitness-teal" />,
      title: "Nutrition Guidance",
      description: "Receive dietary recommendations that complement your fitness routine and goals."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-fitness-teal" />,
      title: "AI Chat Assistant",
      description: "Ask questions and get real-time advice about supplements, exercises, and more."
    },
    {
      icon: <LineChart className="h-8 w-8 text-fitness-teal" />,
      title: "Progress Tracking",
      description: "Monitor your improvements over time with detailed analytics and insights."
    },
    {
      icon: <Clock className="h-8 w-8 text-fitness-teal" />,
      title: "Time-Efficient",
      description: "Optimize your workout time with scientifically-backed exercise recommendations."
    },
    {
      icon: <Heart className="h-8 w-8 text-fitness-teal" />,
      title: "Holistic Wellness",
      description: "Focus on overall health including recovery, sleep quality, and stress management."
    }
  ];
  
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="fitness-heading mb-4">Unlock Your Fitness Potential</h2>
          <p className="fitness-subheading max-w-2xl mx-auto">
            Our AI-powered platform offers all the tools you need to transform your fitness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-blue-50 p-3 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-fitness-navy">
                {feature.title}
              </h3>
              <p className="text-fitness-slate">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
