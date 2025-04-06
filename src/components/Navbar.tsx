
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    { name: 'Workouts', path: '/workouts' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'AI Chat', path: '/chat' },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-6 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-fitness-teal" />
          <span className="text-xl font-bold text-fitness-navy">ShapeSmart</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isOpen ? <X /> : <Menu />}
            </Button>

            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 z-50">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Button className="btn-primary w-full">Get Started</Button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-fitness-navy hover:text-fitness-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="btn-primary">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
