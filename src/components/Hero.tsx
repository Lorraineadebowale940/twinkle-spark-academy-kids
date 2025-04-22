
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background shapes */}
      <div className="absolute top-20 -left-10 w-40 h-40 bg-rainbow-pink/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute top-40 -right-10 w-60 h-60 bg-rainbow-blue/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-rainbow-yellow/20 rounded-full blur-3xl animate-spin-slow"></div>
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text rainbow-gradient">
                Spark
              </span> Your Child's
              <span className="block mt-2">
                Creative Journey
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Inclusive arts education for every child. Discover our programs in art, music, drama, dance, film, and more. 
              Special needs specialists available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="text-lg py-6 px-8 bg-primary hover:bg-primary/90">
                Explore Programs
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8 border-2">
                Special Needs Support
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-rainbow-purple to-rainbow-blue opacity-80 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Children creating art together" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-rainbow-blue/30 to-rainbow-purple/30"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-0 -right-4 w-16 h-16 bg-rainbow-red rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute bottom-10 -left-8 w-20 h-20 bg-rainbow-yellow rounded-full animate-bounce-soft"></div>
            <div className="absolute top-1/3 -left-10 w-14 h-14 bg-rainbow-green rounded-lg -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
