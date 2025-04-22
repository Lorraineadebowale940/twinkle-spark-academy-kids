import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="relative group">
            <a
              href="/#programs"
              className="font-medium hover:text-primary transition-colors"
            >
              Programs
            </a>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-1">
                <Link
                  to="/services/art"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Art
                </Link>
                <Link
                  to="/services/music"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Music
                </Link>
                <Link
                  to="/services/drama"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Drama
                </Link>
                <Link
                  to="/services/dance"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Dance
                </Link>
                <Link
                  to="/services/film"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Film
                </Link>
                <Link
                  to="/services/nlp"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  NLP for Kids
                </Link>
                <Link
                  to="/services/gaming"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Learning through Gaming
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/#after-school"
            className="font-medium hover:text-primary transition-colors"
          >
            After School
          </Link>
          <a
            href="#big-bang"
            className="font-medium hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            Big Bang Days
          </a>
          <Link
            to="/#special-needs"
            className="font-medium hover:text-primary transition-colors"
          >
            Special Needs
          </Link>
          <Link
            to="/case-studies"
            className="font-medium hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            className="font-medium hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
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
            <div className="py-2 px-4">
              <div className="font-medium mb-2">Programs</div>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  to="/services/art"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Art
                </Link>
                <Link
                  to="/services/music"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Music
                </Link>
                <Link
                  to="/services/drama"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Drama
                </Link>
                <Link
                  to="/services/dance"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Dance
                </Link>
                <Link
                  to="/services/film"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Film
                </Link>
                <Link
                  to="/services/nlp"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  NLP for Kids
                </Link>
                <Link
                  to="/services/gaming"
                  className="py-1 hover:text-primary"
                  onClick={toggleMenu}
                >
                  Learning through Gaming
                </Link>
              </div>
            </div>
            <Link
              to="/#after-school"
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              After School
            </Link>
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
            <Link
              href="/about"
              className="py-2 px-4 hover:bg-muted rounded-md transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
