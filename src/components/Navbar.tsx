
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-display text-3xl font-bold text-transparent bg-clip-text rainbow-gradient">
            Rainbow Spark
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/#programs" className="font-medium hover:text-primary transition-colors">Programs</Link>
          <Link to="/#after-school" className="font-medium hover:text-primary transition-colors">After School</Link>
          <Link to="/#big-bang" className="font-medium hover:text-primary transition-colors">Big Bang Days</Link>
          <Link to="/#special-needs" className="font-medium hover:text-primary transition-colors">Special Needs</Link>
          <Link to="/case-studies" className="font-medium hover:text-primary transition-colors">Case Studies</Link>
          <Link to="/blog" className="font-medium hover:text-primary transition-colors">Blog</Link>
          <Button asChild className="bg-primary hover:bg-primary/80">
            <Link to="/#contact">Contact Us</Link>
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
            <Link 
              to="/#programs" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link 
              to="/#after-school" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              After School
            </Link>
            <Link 
              to="/#big-bang" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Big Bang Days
            </Link>
            <Link 
              to="/#special-needs" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Special Needs
            </Link>
            <Link 
              to="/case-studies" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link 
              to="/blog" 
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/80 mt-2">
              <Link to="/#contact" onClick={toggleMenu}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
