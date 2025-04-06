
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section className="py-20 bg-fitness-navy text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto mb-10">
              Join thousands of users already achieving their fitness goals with our AI-powered platform
            </p>
            <Link to="/profile">
              <Button className="bg-fitness-teal hover:bg-fitness-teal/90 text-white font-medium px-8 py-6 text-lg rounded-lg flex items-center gap-2">
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        <footer className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="text-lg font-bold text-fitness-navy">ShapeSmart</span>
                <span className="text-sm text-gray-500">© 2025 All rights reserved</span>
              </div>
              
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-fitness-teal">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-fitness-teal">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-fitness-teal">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
