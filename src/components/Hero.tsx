
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto fade-in">
        <h1 className="fitness-heading mb-6">
          <span className="text-fitness-teal">AI-Powered</span> Fitness <br />For Your Unique Body
        </h1>
        
        <p className="fitness-subheading max-w-2xl mx-auto mb-10">
          Personalized workouts, nutrition plans, and expert guidance - all driven by AI to help you achieve your fitness goals faster and smarter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/profile">
            <Button className="btn-primary flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/workouts">
            <Button className="btn-secondary">Explore Workouts</Button>
          </Link>
        </div>
        
        <div className="mt-20">
          <p className="text-sm text-fitness-slate mb-4">Trusted by fitness enthusiasts worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="w-24 h-8 bg-gray-300 rounded animate-pulse-subtle"></div>
            <div className="w-24 h-8 bg-gray-300 rounded animate-pulse-subtle"></div>
            <div className="w-24 h-8 bg-gray-300 rounded animate-pulse-subtle"></div>
            <div className="w-24 h-8 bg-gray-300 rounded animate-pulse-subtle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
