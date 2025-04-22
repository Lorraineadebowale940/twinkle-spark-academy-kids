
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const BigBangDays = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Dinosaur Discovery Day",
      date: "May 15, 2025",
      description: "Explore the prehistoric world through art, science, and play!"
    },
    {
      id: 2,
      title: "Space Explorers",
      date: "June 20, 2025",
      description: "Blast off into a day of cosmic creativity and stellar science!"
    },
    {
      id: 3,
      title: "Ocean Adventure",
      date: "July 8, 2025",
      description: "Dive into marine art and underwater wonders!"
    }
  ];

  return (
    <section id="big-bang" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Big Bang Days</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Special themed days filled with explosive creativity, exciting workshops, and memorable experiences!
          </p>
        </div>
        
        <div className="relative mb-16">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-rainbow-yellow rounded-full hidden md:block"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:pr-12 md:text-right">
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="md:absolute md:top-1/2 md:-right-16 md:-translate-y-1/2 bg-rainbow-red text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Immersive Themes</h3>
                <p>Each Big Bang Day features a unique theme that transforms our space into an immersive world of discovery.</p>
              </div>
            </div>
            
            <div className="md:pl-12">
              <div className="bg-white rounded-xl p-6 shadow-md relative mt-8 md:mt-24">
                <div className="md:absolute md:top-1/2 md:-left-16 md:-translate-y-1/2 bg-rainbow-blue text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Hands-on Workshops</h3>
                <p>Children participate in a variety of workshops led by artists, scientists, and other specialists.</p>
              </div>
            </div>
            
            <div className="md:pr-12 md:text-right">
              <div className="bg-white rounded-xl p-6 shadow-md relative mt-8 md:mt-24">
                <div className="md:absolute md:top-1/2 md:-right-16 md:-translate-y-1/2 bg-rainbow-green text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative Projects</h3>
                <p>Children work together on large-scale creative projects that promote teamwork and shared achievement.</p>
              </div>
            </div>
            
            <div className="md:pl-12">
              <div className="bg-white rounded-xl p-6 shadow-md relative mt-8 md:mt-24">
                <div className="md:absolute md:top-1/2 md:-left-16 md:-translate-y-1/2 bg-rainbow-purple text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Take-Home Treasures</h3>
                <p>Every child leaves with something special they've created during the day as a lasting memory.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Upcoming Big Bang Days</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                <p className="mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">Book Now</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBangDays;
