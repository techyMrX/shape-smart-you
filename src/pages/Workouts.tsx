
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import WorkoutCard from "@/components/WorkoutCard";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Dumbbell } from 'lucide-react';

const Workouts = () => {
  // Mock workout data
  const workouts = [
    {
      id: 1,
      title: "Muscle Building Program",
      description: "A comprehensive program designed to build muscle mass and strength through progressive overload.",
      duration: "45-60 min",
      frequency: "4 days/week",
      difficulty: "Medium" as const,
      type: "Strength & Hypertrophy",
      category: "build-muscle"
    },
    {
      id: 2,
      title: "Fat Loss Circuit",
      description: "High-intensity circuit training to maximize calorie burn and improve cardiovascular health.",
      duration: "30-45 min",
      frequency: "3-5 days/week",
      difficulty: "Hard" as const,
      type: "HIIT & Cardio",
      category: "lose-weight"
    },
    {
      id: 3,
      title: "Full Body Strength",
      description: "Balanced full-body workout focusing on all major muscle groups for overall strength development.",
      duration: "50-65 min",
      frequency: "3 days/week",
      difficulty: "Medium" as const,
      type: "Strength Training",
      category: "build-muscle"
    },
    {
      id: 4,
      title: "Beginner's Fitness Plan",
      description: "Introduction to fitness fundamentals with proper technique focus and gradual progression.",
      duration: "30-40 min",
      frequency: "3 days/week",
      difficulty: "Easy" as const,
      type: "General Fitness",
      category: "maintain"
    },
    {
      id: 5,
      title: "Functional Fitness",
      description: "Exercise program enhancing everyday movement patterns and preventing injury through functional training.",
      duration: "40-50 min",
      frequency: "3-4 days/week",
      difficulty: "Medium" as const,
      type: "Functional Training",
      category: "maintain"
    },
    {
      id: 6,
      title: "Cardio Fat Burner",
      description: "High-energy cardio sessions optimized for maximum fat loss and improved endurance.",
      duration: "25-35 min",
      frequency: "4-5 days/week",
      difficulty: "Hard" as const,
      type: "Cardio",
      category: "lose-weight"
    },
  ];

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
                    <Dumbbell className="h-5 w-5 text-fitness-teal" />
                  </div>
                  <h2 className="text-2xl font-bold text-fitness-navy">Your Recommended Workouts</h2>
                </div>
                <p className="text-fitness-slate">
                  Personalized workout plans based on your fitness profile and goals
                </p>
              </div>
              
              <Button className="btn-primary">
                Refresh Recommendations
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Workouts</TabsTrigger>
              <TabsTrigger value="build-muscle">Build Muscle</TabsTrigger>
              <TabsTrigger value="lose-weight">Lose Weight</TabsTrigger>
              <TabsTrigger value="maintain">Maintain Fitness</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.map(workout => (
                <WorkoutCard 
                  key={workout.id}
                  {...workout}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="build-muscle" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.filter(w => w.category === "build-muscle").map(workout => (
                <WorkoutCard 
                  key={workout.id}
                  {...workout}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="lose-weight" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.filter(w => w.category === "lose-weight").map(workout => (
                <WorkoutCard 
                  key={workout.id}
                  {...workout}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="maintain" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.filter(w => w.category === "maintain").map(workout => (
                <WorkoutCard 
                  key={workout.id}
                  {...workout}
                />
              ))}
            </TabsContent>
          </Tabs>
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

export default Workouts;
