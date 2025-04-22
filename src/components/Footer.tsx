
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl font-bold mb-4">Rainbow Spark</h2>
            <p className="mb-4">Inclusive creative education for every child.</p>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Rainbow Spark Academy.<br />All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/services/art" className="opacity-80 hover:opacity-100 transition-opacity">Art</Link></li>
              <li><Link to="/services/music" className="opacity-80 hover:opacity-100 transition-opacity">Music</Link></li>
              <li><Link to="/services/drama" className="opacity-80 hover:opacity-100 transition-opacity">Drama</Link></li>
              <li><Link to="/services/dance" className="opacity-80 hover:opacity-100 transition-opacity">Dance</Link></li>
              <li><Link to="/services/film" className="opacity-80 hover:opacity-100 transition-opacity">Film</Link></li>
              <li><Link to="/services/nlp" className="opacity-80 hover:opacity-100 transition-opacity">NLP for Kids</Link></li>
              <li><Link to="/services/gaming" className="opacity-80 hover:opacity-100 transition-opacity">Learning through Gaming</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#after-school" className="opacity-80 hover:opacity-100 transition-opacity">After School Clubs</Link></li>
              <li><Link to="/#big-bang" className="opacity-80 hover:opacity-100 transition-opacity">Big Bang Days</Link></li>
              <li><Link to="/#special-needs" className="opacity-80 hover:opacity-100 transition-opacity">Special Needs Support</Link></li>
              <li><Link to="/case-studies" className="opacity-80 hover:opacity-100 transition-opacity">Case Studies</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/team" className="opacity-80 hover:opacity-100 transition-opacity">Our Team</Link></li>
              <li><Link to="/testimonials" className="opacity-80 hover:opacity-100 transition-opacity">Testimonials</Link></li>
              <li><Link to="/faq" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>Rainbow Spark is committed to providing inclusive, accessible arts education for all children.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
