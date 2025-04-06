
import React from 'react';
import Navbar from "@/components/Navbar";
import NutritionPlan from "@/components/NutritionPlan";
import { Button } from "@/components/ui/button";
import { DownloadCloud, Salad } from 'lucide-react';

const Nutrition = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Salad className="h-5 w-5 text-fitness-teal" />
                  </div>
                  <h2 className="text-2xl font-bold text-fitness-navy">Your Nutrition Plan</h2>
                </div>
                <p className="text-fitness-slate">
                  Personalized meal plans tailored to your body composition and fitness goals
                </p>
              </div>
              
              <Button className="flex items-center gap-2">
                <DownloadCloud className="h-4 w-4" />
                Download Plan
              </Button>
            </div>
          </div>
          
          <NutritionPlan />
          
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-fitness-navy mb-4">Nutrition Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-fitness-teal font-bold">•</span>
                <span>Aim to drink at least 8 glasses of water per day to stay properly hydrated.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fitness-teal font-bold">•</span>
                <span>Consuming protein within 30 minutes after a workout helps maximize muscle recovery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fitness-teal font-bold">•</span>
                <span>Include a variety of colorful vegetables in your meals to ensure you get a wide range of nutrients.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fitness-teal font-bold">•</span>
                <span>Slow-digesting carbs like oats and sweet potatoes are great for sustained energy throughout the day.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-fitness-teal font-bold">•</span>
                <span>Healthy fats from sources like avocados, nuts, and olive oil are essential for hormone production.</span>
              </li>
            </ul>
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

export default Nutrition;
