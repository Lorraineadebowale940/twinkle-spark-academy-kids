
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
              <Button className="text-lg py-6 px-8 bg-primary hover:bg-primary/90" asChild>
                <a href="#programs">Explore Programs</a>
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8 border-2" asChild>
                <a href="#special-needs">Special Needs Support</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative z-0">
            {/* Rainbow Graphic Animation inspired by the reference images */}
            <div className="relative w-full aspect-square max-w-md mx-auto mt-8 md:mt-0">
              {/* Rainbow Arc */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute left-0 top-1/4 w-3/4 h-3/4 rounded-t-full border-t-[24px] border-l-[24px] border-r-[24px] border-rainbow-red rotate-[135deg] transform-origin-bottom-right"></div>
                <div className="absolute left-[5%] top-[29%] w-[70%] h-[70%] rounded-t-full border-t-[20px] border-l-[20px] border-r-[20px] border-rainbow-orange rotate-[135deg] transform-origin-bottom-right"></div>
                <div className="absolute left-[10%] top-[33%] w-[65%] h-[65%] rounded-t-full border-t-[16px] border-l-[16px] border-r-[16px] border-rainbow-yellow rotate-[135deg] transform-origin-bottom-right"></div>
                <div className="absolute left-[15%] top-[37%] w-[60%] h-[60%] rounded-t-full border-t-[12px] border-l-[12px] border-r-[12px] border-rainbow-green rotate-[135deg] transform-origin-bottom-right"></div>
                <div className="absolute left-[20%] top-[41%] w-[55%] h-[55%] rounded-t-full border-t-[8px] border-l-[8px] border-r-[8px] border-rainbow-blue rotate-[135deg] transform-origin-bottom-right"></div>
                <div className="absolute left-[25%] top-[45%] w-[50%] h-[50%] rounded-t-full border-t-[4px] border-l-[4px] border-r-[4px] border-rainbow-purple rotate-[135deg] transform-origin-bottom-right"></div>
              </div>
              
              {/* Shooting Stars */}
              <div className="absolute w-12 h-2 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full top-[10%] right-[20%] animate-shooting-star"></div>
              <div className="absolute w-8 h-2 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full top-[30%] right-[30%] animate-shooting-star-alt"></div>
              <div className="absolute w-6 h-1 bg-gradient-to-r from-white via-yellow-300 to-transparent rounded-full top-[50%] right-[10%] animate-shooting-star-slow"></div>
              
              {/* Sparkles */}
              <div className="absolute w-6 h-6 bg-rainbow-yellow rounded-full opacity-70 top-[5%] right-[15%] blur-[1px] animate-pulse"></div>
              <div className="absolute w-4 h-4 bg-rainbow-blue rounded-full opacity-70 top-[15%] right-[25%] blur-[1px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-5 h-5 bg-rainbow-pink rounded-full opacity-70 top-[25%] right-[10%] blur-[1px] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute w-3 h-3 bg-rainbow-green rounded-full opacity-70 top-[20%] right-[35%] blur-[1px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-4 w-16 h-16 bg-rainbow-red rounded-2xl rotate-12 animate-float z-10"></div>
            <div className="absolute -bottom-4 -left-8 w-20 h-20 bg-rainbow-yellow rounded-full animate-bounce-soft z-10"></div>
            <div className="absolute top-1/3 -left-10 w-14 h-14 bg-rainbow-green rounded-lg -rotate-12 animate-float z-10" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
