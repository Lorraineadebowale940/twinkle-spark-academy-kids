
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamSectionProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ name, role, image, bio }) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover" 
                  />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">{role}</div>
                <h3 className="mt-1 text-2xl font-bold">{name}</h3>
                <div className="mt-2 text-gray-600 whitespace-pre-line">{bio}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
