
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Gamepad, Users, Award, Brain, Star, Clock } from 'lucide-react';

const Gaming = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-gradient-to-b from-purple-100 to-transparent">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Learning through Gaming</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Using interactive gaming platforms to develop creativity, critical thinking, and social skills in a highly engaging environment.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://res.cloudinary.com/dydlkejl0/image/upload/v1741882559/child_playing_with_dinosaur_gv7xpm.jpg" 
                    alt="Child engaged in learning through gaming" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full -z-10"></div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-violet-500 p-3 rounded-full text-white">
                    <Gamepad size={28} />
                  </div>
                  <h2 className="text-2xl font-bold">Creativity Through Play</h2>
                </div>

                <p className="mb-6">
                  Our Learning through Gaming program harnesses the power of digital play as a tool for education and creative expression. 
                  We use carefully selected gaming platforms, such as Minecraft Education, Roblox Studio, and game design tools, to create 
                  structured learning experiences that feel like play.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Creative Problem Solving</h3>
                      <p>Children tackle design challenges and create solutions within game environments.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Collaborative Building</h3>
                      <p>Team projects encourage communication and cooperative skills while creating virtual worlds.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Digital Storytelling</h3>
                      <p>Children develop narratives and characters, bringing their stories to life in interactive ways.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-purple-500 mb-4">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Minecraft Education</h3>
                <p className="mb-4">
                  Structured building challenges that teach spatial awareness, resource management, and architectural creativity while
                  connecting to curriculum topics like history, science, and literature.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-purple-500 mb-4">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Game Design Basics</h3>
                <p className="mb-4">
                  Introduction to simple game creation tools where children learn core concepts of game mechanics, level design, 
                  and user experience while developing their own playable games.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-purple-500 mb-4">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaborative World Building</h3>
                <p className="mb-4">
                  Team-based projects where children work together to design and build virtual environments, developing
                  communication skills, compromise, and shared creative vision.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Program Structure</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Session Format</h3>
                      <p>60-90 minute guided sessions with clear learning objectives and creative freedom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Class Size</h3>
                      <p>Small groups of 8-12 children to ensure personalized guidance</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Skill Development</h3>
                      <p>Digital literacy, creative design, problem-solving, and collaboration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4 text-primary">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Projects</h3>
                      <p>Each term culminates in completed game designs or virtual world creations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gaming;
