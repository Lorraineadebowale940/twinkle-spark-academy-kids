
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background elements */}
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
              <Button className="text-lg py-6 px-8 bg-primary hover:bg-primary/90" asChild>
                <a href="#programs">Explore Programs</a>
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8 border-2" asChild>
                <a href="#special-needs">Special Needs Support</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            {/* Modern Rainbow Graphic */}
            <div className="relative w-full aspect-square max-w-md mx-auto mt-8 md:mt-0 z-10">
              
              {/* Main Rainbow Arcs */}
              <div className="rainbow-container relative w-full h-full">
                {/* Outer rainbow arc */}
                <div className="absolute w-[90%] h-[90%] left-[5%] top-[5%] rounded-full border-[18px] border-rainbow-red opacity-80"></div>
                <div className="absolute w-[80%] h-[80%] left-[10%] top-[10%] rounded-full border-[16px] border-rainbow-orange opacity-80"></div>
                <div className="absolute w-[70%] h-[70%] left-[15%] top-[15%] rounded-full border-[14px] border-rainbow-yellow opacity-80"></div>
                <div className="absolute w-[60%] h-[60%] left-[20%] top-[20%] rounded-full border-[12px] border-rainbow-green opacity-80"></div>
                <div className="absolute w-[50%] h-[50%] left-[25%] top-[25%] rounded-full border-[10px] border-rainbow-blue opacity-80"></div>
                <div className="absolute w-[40%] h-[40%] left-[30%] top-[30%] rounded-full border-[8px] border-rainbow-purple opacity-80"></div>
              </div>
              
              {/* Shooting Stars */}
              <div className="absolute w-20 h-1.5 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full top-[20%] right-[20%] animate-shooting-star z-20"></div>
              <div className="absolute w-14 h-1.5 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full top-[15%] right-[35%] animate-shooting-star-alt z-20" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute w-10 h-1 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full top-[30%] right-[25%] animate-shooting-star-slow z-20" style={{animationDelay: '3s'}}></div>
              
              {/* Sparkles */}
              <div className="absolute">
                <Star className="absolute text-yellow-300 w-8 h-8 top-[10%] right-[15%] animate-pulse" />
                <Star className="absolute text-pink-400 w-6 h-6 top-[20%] right-[30%] animate-bounce-slow" style={{animationDelay: '0.7s'}} />
                <Star className="absolute text-purple-400 w-5 h-5 bottom-[20%] right-[20%] animate-pulse" style={{animationDelay: '1.3s'}} />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-8 w-20 h-20 bg-rainbow-pink rounded-2xl rotate-12 animate-float-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-rainbow-yellow rounded-full animate-bounce-slow"></div>
              <div className="absolute bottom-1/4 -right-12 w-16 h-16 bg-rainbow-green rounded-lg -rotate-12 animate-float-slow" style={{animationDelay: '1.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
