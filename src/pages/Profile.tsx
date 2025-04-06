
import React from 'react';
import Navbar from "@/components/Navbar";
import ProfileForm from "@/components/ProfileForm";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-fitness-navy mb-4">Create Your Fitness Profile</h1>
            <p className="text-lg text-fitness-slate max-w-2xl mx-auto">
              Tell us about yourself so we can create personalized workout and nutrition plans that align with your unique goals and body type.
            </p>
          </div>
          
          <ProfileForm />
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

export default Profile;
