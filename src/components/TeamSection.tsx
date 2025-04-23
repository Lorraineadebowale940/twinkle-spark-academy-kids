
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";

interface TeamSectionProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ name, role, image, bio }) => {
  return (
    <section className="py-20 bg-muted relative">
      {/* Decorative Sparkles in BG */}
      <div className="absolute left-4 top-8 opacity-30 z-0">
        <Sparkles className="text-rainbow-pink w-12 h-12 animate-spin-slow" />
      </div>
      <div className="absolute right-8 bottom-10 opacity-20 z-0">
        <Sparkles className="text-rainbow-yellow w-14 h-14 animate-pulse" />
      </div>
      <div className="container px-4 relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="bg-gradient-to-br from-rainbow-pink/10 via-white to-rainbow-yellow/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-stretch">
              {/* Avatar with accent ring */}
              <div className="relative flex justify-center items-center md:w-1/3 p-8 bg-gradient-to-tr from-rainbow-pink/20 via-white via-60% to-rainbow-yellow/10">
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-rainbow-pink via-primary/20 to-rainbow-yellow blur-lg opacity-50"></span>
                  <Avatar className="w-40 h-40 md:w-36 md:h-36 ring-4 ring-primary shadow-lg z-10">
                    <AvatarImage 
                      src={image} 
                      alt={name} 
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              {/* Details */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div>
                  <span className="inline-block uppercase tracking-wide text-sm bg-primary/10 text-primary font-semibold mb-2 px-3 py-1 rounded-full">
                    {role}
                  </span>
                  <h3 className="mt-2 text-3xl font-extrabold text-primary drop-shadow-sm">{name}</h3>
                </div>
                <div className="mt-4 text-gray-700 whitespace-pre-line leading-relaxed font-medium text-base md:text-lg">
                  {/* Break bio into paragraphs for better readability */}
                  {bio.split("\n").map((paragraph, idx) => (
                    paragraph.trim().startsWith("Key Achievements:") ? (
                      <div key={idx} className="mt-6">
                        <div className="font-bold text-primary mb-2">Key Achievements:</div>
                        <ul className="list-disc ml-6 space-y-1 text-primary">
                          {bio
                            .split("\n")
                            .slice(idx + 1)
                            .filter(line => line.startsWith("- "))
                            .map((line, i) => (
                              <li key={`achv-${i}`} className="">{line.replace("- ", "")}</li>
                            ))
                          }
                        </ul>
                      </div>
                    ) : (
                      !paragraph.startsWith("- ") && paragraph.trim() ? 
                        <p key={idx} className="mb-3">{paragraph}</p> : null
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

