
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Palette, Music, Drama, BookOpen } from 'lucide-react';

const AfterSchool = () => {
  const benefits = [
    "Safe and supervised creative environment",
    "Arts-integrated activities aligned with our programs",
    "Project-based learning that builds leadership skills",
    "Healthy snacks and outdoor play time included",
    "Trained staff with arts and education backgrounds",
    "Flexible pickup times for working parents"
  ];

  const thematicActivities = [
    {
      name: "Artistic Explorers",
      description: "Children explore different artistic styles and create their own masterpieces inspired by artists from around the world.",
      icon: Palette
    },
    {
      name: "Music Makers",
      description: "Using instruments, voice, and everyday objects, children compose music and explore rhythm, melody, and harmony.",
      icon: Music
    },
    {
      name: "Drama Adventures",
      description: "Young performers develop and act out original stories, building confidence through creative self-expression.",
      icon: Drama
    },
    {
      name: "Literature & Storytelling",
      description: "Children discover the power of words through writing, reading, and oral storytelling activities.",
      icon: BookOpen
    }
  ];

  return (
    <section id="after-school" className="py-20">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576087071781-abc42c112f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Children in after school club creating art together" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full -rotate-3 bg-rainbow-blue rounded-2xl -z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full rotate-3 bg-rainbow-purple rounded-2xl -z-20"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">After School Arts Clubs</h2>
            <p className="text-lg mb-8">
              Our vibrant after-school clubs provide a creative sanctuary where children continue their artistic journey beyond the classroom. 
              Each session integrates our arts programs to foster imagination, build leadership skills, and empower young minds through creative expression.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Club Benefits:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 text-rainbow-green flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Thematic Activities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {thematicActivities.map((activity, index) => (
                  <div key={index} className="p-3 bg-white/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <activity.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-bold">{activity.name}</h4>
                    </div>
                    <p className="text-sm">{activity.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center italic">All activities designed to build confidence, literacy, numeracy, and leadership skills</p>
            </div>
            
            <Button className="bg-rainbow-blue hover:bg-rainbow-blue/90" asChild>
              <a href="#contact">Register for After School Club</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSchool;
