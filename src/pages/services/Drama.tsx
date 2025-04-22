
import React from "react";
import { Drama, Star, Users, Lightbulb, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DramaPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FFDEE2] to-[#FEF7CD] flex items-center">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Drama size={64} className="mx-auto text-[#F97316] mb-6" />
          <h1 className="text-4xl font-bold mb-4">Drama & Storytelling</h1>
          <p className="text-lg text-gray-700 mb-2">
            Step into a world of imagination—build confidence and joy!
          </p>
        </div>
        <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
          <p className="mb-6 text-xl">
            From playful improvisation to stagecraft, children develop empathy, public speaking, and creativity as they bring stories to life. Every performance is a celebration of expression and teamwork!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">The Rainbow Spark Approach</h2>
              <p>Our drama programs create safe spaces for creative risk-taking, where children can explore characters, emotions, and storytelling while developing vital communication skills.</p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="text-red-400" size={20}/>
                Learning Outcomes
              </h3>
              <ul className="text-base mb-4 space-y-2">
                <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Leap in confidence—shine on stage and in life.</li>
                <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Strengthen social skills, teamwork, and leadership in every rehearsal.</li>
                <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Cross-curricular scripts develop literacy, numeracy and problem-solving.</li>
                <li className="flex items-center gap-2"><BookOpen className="text-blue-400" size={20}/> Empathy and emotional intelligence grow through character exploration.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Drama Programs</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Story Play (Ages 3-6)</h3>
                  <p className="text-sm">Imaginative drama games and simple storytelling to build foundation skills.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Young Performers (Ages 7-11)</h3>
                  <p className="text-sm">Script work, character development, and performance opportunities in a supportive environment.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Teen Theatre Company (Ages 12-16)</h3>
                  <p className="text-sm">Advanced acting techniques, directing, scriptwriting, and full productions.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Inclusive Drama Workshop (All Ages)</h3>
                  <p className="text-sm">Sensory-friendly drama activities designed for children with diverse needs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rainbow-orange/10 to-rainbow-yellow/10 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">From Classroom to Stage</h3>
            <p className="mb-3">Our drama journey includes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-rainbow-orange mb-1">1</span>
                <span className="block font-medium">Skills Building</span>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-rainbow-orange mb-1">2</span>
                <span className="block font-medium">Creative Development</span>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-rainbow-orange mb-1">3</span>
                <span className="block font-medium">Rehearsal Process</span>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-2xl font-bold text-rainbow-orange mb-1">4</span>
                <span className="block font-medium">Performance</span>
              </div>
            </div>
            <p className="text-sm italic text-center">Each stage carefully builds confidence while developing drama techniques.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Sign Up for Drama</Button>
            <Button variant="outline" asChild>
              <a href="/#contact">Book a free taster</a>
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-600">Drama at Rainbow Spark gives every child a voice—communication, comprehension and friendships grow on and off stage.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default DramaPage;
