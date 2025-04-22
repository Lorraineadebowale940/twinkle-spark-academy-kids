
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="font-display text-3xl font-bold text-transparent bg-clip-text rainbow-gradient">
            Rainbow Spark
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#programs" className="font-medium hover:text-primary transition-colors">Programs</a>
          <a href="#after-school" className="font-medium hover:text-primary transition-colors">After School</a>
          <a href="#big-bang" className="font-medium hover:text-primary transition-colors">Big Bang Days</a>
          <a href="#special-needs" className="font-medium hover:text-primary transition-colors">Special Needs</a>
          <Button asChild className="bg-primary hover:bg-primary/80">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-accordion-down">
          <div className="container py-4 flex flex-col gap-4">
            <a 
              href="#programs" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Programs
            </a>
            <a 
              href="#after-school" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              After School
            </a>
            <a 
              href="#big-bang" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Big Bang Days
            </a>
            <a 
              href="#special-needs" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Special Needs
            </a>
            <Button asChild className="w-full bg-primary hover:bg-primary/80 mt-2">
              <a href="#contact" onClick={toggleMenu}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
