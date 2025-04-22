
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';

const SpecialNeeds = () => {
  const specialists = [
    {
      name: "Sarah Johnson",
      role: "Special Education Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Over 15 years of experience working with children with diverse learning needs."
    },
    {
      name: "Michael Chen",
      role: "Art Therapist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Certified art therapist specializing in creative expression for children with special needs."
    },
    {
      name: "Amara Okafor",
      role: "Sensory Integration Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Expert in creating inclusive sensory-friendly activities and environments."
    }
  ];

  return (
    <section id="special-needs" className="py-20">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Needs Provision</h2>
            <p className="text-lg mb-8">
              At Rainbow Spark, we believe that every child deserves access to high-quality creative education. 
              Our specialized programs and trained staff ensure that children with special needs can fully 
              participate and thrive in our inclusive environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                <Heart className="h-10 w-10 text-rainbow-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Inclusive Environment</h3>
                <p>Thoughtfully designed spaces that accommodate various needs and abilities.</p>
              </div>
              
              <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                <BookOpen className="h-10 w-10 text-rainbow-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Tailored Learning</h3>
                <p>Personalized approaches that adapt to each child's unique strengths and challenges.</p>
              </div>
              
              <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-rainbow-green mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Staff</h3>
                <p>Specialists trained in various special education approaches and therapies.</p>
              </div>
              
              <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                <Sparkles className="h-10 w-10 text-rainbow-purple mb-4" />
                <h3 className="text-xl font-bold mb-2">Creative Expression</h3>
                <p>Programs that encourage self-expression and build confidence through the arts.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90">Schedule a Consultation</Button>
              <Button variant="outline">Learn About Our Approach</Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Meet Our Specialists</h3>
            
            <div className="space-y-6">
              {specialists.map((specialist, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl shadow-md">
                  <img 
                    src={specialist.image} 
                    alt={specialist.name} 
                    className="w-24 h-24 rounded-full object-cover mx-auto sm:mx-0"
                  />
                  <div>
                    <h4 className="text-xl font-bold">{specialist.name}</h4>
                    <p className="text-primary font-medium mb-2">{specialist.role}</p>
                    <p>{specialist.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialNeeds;
