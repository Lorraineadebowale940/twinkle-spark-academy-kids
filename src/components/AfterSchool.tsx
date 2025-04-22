
import React from 'react';
import { Star, Calendar, Clock, Users, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AfterSchool = () => {
  return (
    <section id="after-school" className="py-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">After School Clubs</h2>
            <p className="text-lg mb-6">
              Our vibrant after-school clubs offer a safe, nurturing environment where children can explore creativity, 
              develop new skills and build confidence through themed arts activities that complement our main programs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Creative Expression</h3>
                  <p>Themed art projects, drama games, music making, and storytelling sessions to encourage imagination and self-expression.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Consistent Schedule</h3>
                  <p>Weekly sessions during term time provide structure and continuity for children's creative development.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Extended Hours</h3>
                  <p>Available from school end until 5:30pm, providing valuable childcare solution for working parents.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Small Groups</h3>
                  <p>Limited to 15 children per session to ensure quality attention and support for each child.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Skill Development</h3>
                  <p>Activities designed to build both creative skills and important life skills like teamwork, communication, and problem-solving.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Children in after school club" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rainbow-yellow/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-rainbow-blue/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSchool;
