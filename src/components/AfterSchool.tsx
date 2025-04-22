
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AfterSchool = () => {
  const benefits = [
    "Safe and supervised environment",
    "Structured creative activities",
    "Homework help available",
    "Snacks provided",
    "Trained and caring staff",
    "Flexible pickup times"
  ];

  return (
    <section id="after-school" className="py-20">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1564429097439-efe2a5d46236?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Children in after school club" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full -rotate-3 bg-rainbow-blue rounded-2xl -z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full rotate-3 bg-rainbow-purple rounded-2xl -z-20"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">After School Clubs</h2>
            <p className="text-lg mb-8">
              Our after-school clubs provide a safe, creative environment for your child to explore their interests, 
              make new friends, and continue their learning journey beyond the classroom.
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
              <h3 className="text-xl font-bold mb-2">Hours & Availability</h3>
              <p className="mb-4">Monday - Friday: 3:00 PM - 6:00 PM</p>
              <p>Available at all our locations with flexible pickup times to accommodate working parents.</p>
            </div>
            
            <Button className="bg-rainbow-blue hover:bg-rainbow-blue/90">
              Register for After School Club
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSchool;
