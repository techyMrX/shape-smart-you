
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

interface MealProps {
  title: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description: string;
}

const Meal: React.FC<MealProps> = ({ title, calories, protein, carbs, fat, description }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between text-sm border-t pt-2">
          <div className="text-center">
            <p className="font-medium text-fitness-navy">{calories}</p>
            <p className="text-xs text-gray-500">calories</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-fitness-navy">{protein}g</p>
            <p className="text-xs text-gray-500">protein</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-fitness-navy">{carbs}g</p>
            <p className="text-xs text-gray-500">carbs</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-fitness-navy">{fat}g</p>
            <p className="text-xs text-gray-500">fat</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const NutritionPlan = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const dailyMeals = [
    {
      title: "Breakfast",
      calories: 450,
      protein: 30,
      carbs: 45,
      fat: 15,
      description: "Greek yogurt with berries, honey, and a scoop of protein powder. Whole grain toast with avocado."
    },
    {
      title: "Lunch",
      calories: 650,
      protein: 40,
      carbs: 60,
      fat: 20,
      description: "Grilled chicken breast with quinoa salad, mixed vegetables, and olive oil dressing."
    },
    {
      title: "Pre-Workout Snack",
      calories: 200,
      protein: 10,
      carbs: 25,
      fat: 5,
      description: "Banana with a tablespoon of almond butter."
    },
    {
      title: "Dinner",
      calories: 550,
      protein: 35,
      carbs: 45,
      fat: 18,
      description: "Baked salmon with sweet potato and steamed broccoli."
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-fitness-navy">Daily Nutrition Goals</h3>
            <p className="text-sm text-gray-500">Based on your profile and fitness goal</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500">TOTAL CALORIES</p>
            <p className="text-2xl font-bold text-fitness-teal">2,100</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg text-center">
            <p className="text-lg font-bold text-fitness-navy">145g</p>
            <p className="text-xs text-gray-500">PROTEIN</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center">
            <p className="text-lg font-bold text-fitness-navy">210g</p>
            <p className="text-xs text-gray-500">CARBS</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center">
            <p className="text-lg font-bold text-fitness-navy">60g</p>
            <p className="text-xs text-gray-500">FAT</p>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="monday">
        <TabsList className="mb-4 w-full overflow-auto">
          {days.map(day => (
            <TabsTrigger key={day.toLowerCase()} value={day.toLowerCase()}>
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {days.map(day => (
          <TabsContent key={day.toLowerCase()} value={day.toLowerCase()}>
            <h3 className="text-xl font-semibold mb-4">{day}'s Meal Plan</h3>
            
            {dailyMeals.map((meal, index) => (
              <Meal key={index} {...meal} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NutritionPlan;
