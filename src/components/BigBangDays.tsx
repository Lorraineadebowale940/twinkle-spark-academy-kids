
import React from 'react';
import { CalendarDays, Clock, MapPin, Activity, Brush, Music, Drama } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BigBangDays = () => {
  return (
    <section id="big-bang" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Big Bang Days</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explosive one-day creative workshops that transform the school environment into a hub of artistic exploration and discovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Immersive Creative Experiences</h3>
            <p className="mb-6">
              Our Big Bang Days inject excitement and creative energy into the school calendar. 
              These immersive one-day events transform the learning environment, breaking routine and inspiring children through hands-on creative exploration.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Interactive & Engaging</h4>
                  <p>Dynamic activities that capture attention and spark enthusiasm for creative learning.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Brush className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Cross-Curricular Connections</h4>
                  <p>Creative activities that reinforce and enhance standard curriculum topics.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Music className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Multi-Arts Approach</h4>
                  <p>Combining different creative disciplines for a holistic artistic experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Drama className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">Confidence Building</h4>
                  <p>Safe spaces for self-expression that build self-esteem and creative confidence.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Examples of Big Bang Days</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-rainbow-blue mb-3">Storyworld Explorers</h4>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1 text-gray-500" />
                    <span>Full school day</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span>9am - 3pm</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    <span>At your school</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  An immersive day where children create their own fantasy world through art, drama, and storytelling. 
                  Includes character development, world-building, and interactive performance.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-rainbow-green mb-3">Eco-Art Spectacular</h4>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1 text-gray-500" />
                    <span>Full school day</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span>9am - 3pm</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    <span>At your school</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Creative exploration of environmental themes through recycled materials sculpture, nature-inspired music making, 
                  and collaborative eco-themed murals.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-rainbow-purple mb-3">Cultural Carnival</h4>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1 text-gray-500" />
                    <span>Full school day</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span>9am - 3pm</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                    <span>At your school</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  A vibrant celebration of global cultures through music, dance, art, and food. 
                  Children rotate through world-themed zones creating artwork, learning dance moves, and exploring instruments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBangDays;
