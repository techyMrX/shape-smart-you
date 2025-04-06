
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const ProfileForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    goal: '',
    experienceLevel: '',
    daysPerWeek: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would save this data to your backend
    console.log("Profile data:", formData);
    
    toast({
      title: "Profile Created!",
      description: "Your fitness profile has been successfully created.",
    });
    
    navigate('/workouts');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-fitness-navy">Create Your Fitness Profile</CardTitle>
        <CardDescription>
          We'll use this information to generate personalized workout and nutrition recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                name="age"
                type="number" 
                value={formData.age}
                onChange={handleChange}
                placeholder="25" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select 
                onValueChange={(value) => handleSelectChange('gender', value)}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input 
                id="weight" 
                name="weight"
                type="number" 
                value={formData.weight}
                onChange={handleChange}
                placeholder="70" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input 
                id="height" 
                name="height"
                type="number" 
                value={formData.height}
                onChange={handleChange}
                placeholder="175" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="days-per-week">Days per Week</Label>
              <Select 
                onValueChange={(value) => handleSelectChange('daysPerWeek', value)}
              >
                <SelectTrigger id="days-per-week">
                  <SelectValue placeholder="Training days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 days</SelectItem>
                  <SelectItem value="3">3 days</SelectItem>
                  <SelectItem value="4">4 days</SelectItem>
                  <SelectItem value="5">5 days</SelectItem>
                  <SelectItem value="6">6 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <Label>Fitness Goal</Label>
            <RadioGroup defaultValue="maintain" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="build-muscle" id="build-muscle" onClick={() => handleSelectChange('goal', 'build-muscle')} />
                <Label htmlFor="build-muscle" className="cursor-pointer">Build Muscle</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lose-weight" id="lose-weight" onClick={() => handleSelectChange('goal', 'lose-weight')} />
                <Label htmlFor="lose-weight" className="cursor-pointer">Lose Weight</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintain" id="maintain" onClick={() => handleSelectChange('goal', 'maintain')} />
                <Label htmlFor="maintain" className="cursor-pointer">Maintain Fitness</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-4">
            <Label>Experience Level</Label>
            <RadioGroup defaultValue="intermediate" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" onClick={() => handleSelectChange('experienceLevel', 'beginner')} />
                <Label htmlFor="beginner" className="cursor-pointer">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" onClick={() => handleSelectChange('experienceLevel', 'intermediate')} />
                <Label htmlFor="intermediate" className="cursor-pointer">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" onClick={() => handleSelectChange('experienceLevel', 'advanced')} />
                <Label htmlFor="advanced" className="cursor-pointer">Advanced</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="btn-primary w-full" onClick={handleSubmit}>
          Create Profile & Get Recommendations
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileForm;
