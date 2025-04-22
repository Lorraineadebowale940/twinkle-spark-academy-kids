
import React from 'react';

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
              <li><a href="#art" className="opacity-80 hover:opacity-100 transition-opacity">Art</a></li>
              <li><a href="#music" className="opacity-80 hover:opacity-100 transition-opacity">Music</a></li>
              <li><a href="#drama" className="opacity-80 hover:opacity-100 transition-opacity">Drama</a></li>
              <li><a href="#dance" className="opacity-80 hover:opacity-100 transition-opacity">Dance</a></li>
              <li><a href="#film" className="opacity-80 hover:opacity-100 transition-opacity">Film</a></li>
              <li><a href="#nlp" className="opacity-80 hover:opacity-100 transition-opacity">NLP for Kids</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#after-school" className="opacity-80 hover:opacity-100 transition-opacity">After School Clubs</a></li>
              <li><a href="#big-bang" className="opacity-80 hover:opacity-100 transition-opacity">Big Bang Days</a></li>
              <li><a href="#special-needs" className="opacity-80 hover:opacity-100 transition-opacity">Special Needs Support</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Holiday Camps</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">School Partnerships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Our Team</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Testimonials</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms & Conditions</a></li>
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
