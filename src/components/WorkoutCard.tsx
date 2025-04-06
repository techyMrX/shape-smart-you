
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CalendarDays, BarChart, ChevronRight } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  description: string;
  duration: string;
  frequency: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: string;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  description,
  duration,
  frequency,
  difficulty,
  type
}) => {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700',
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <CardDescription className="text-sm">{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-fitness-slate">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-fitness-slate">
            <CalendarDays className="h-4 w-4" />
            <span>{frequency}</span>
          </div>
          <div className="flex items-center gap-1 text-fitness-slate">
            <BarChart className="h-4 w-4" />
            <span>Muscle Focus</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full flex items-center justify-between">
          View Workout Plan
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
