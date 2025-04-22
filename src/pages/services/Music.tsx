
import React from "react";
import { Music, Users, Heart, Star, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MusicPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#D3E4FD] to-[#FEF7CD] flex items-center">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Music size={64} className="mx-auto text-[#1EAEDB] mb-6" />
          <h1 className="text-4xl font-bold mb-4">Music & Rhythm</h1>
          <p className="text-lg text-gray-700 mb-2">
            Discover the power of music to connect, inspire and grow.
          </p>
        </div>
        <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
          <p className="mb-6 text-xl">
            Our sessions invite every child to sing, play instruments, move and create—no experience needed! As we explore melodies and beats, children gain confidence, make new friends, and strengthen memory and listening skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">The Rainbow Spark Approach</h2>
              <p>We believe that music is for everyone! Our approach combines structured learning with joyful exploration, building musical skills while developing confidence and creativity.</p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="text-red-400" size={20}/>
                Learning Outcomes
              </h3>
              <ul className="text-base mb-4 space-y-2">
                <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Boost confidence with fun performances and creative sound stories.</li>
                <li className="flex items-center gap-2"><Heart className="text-red-400" size={20}/> Music builds self-regulation and leadership skills for life.</li>
                <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Literacy and numeracy reinforced through playful lyrics and rhythm games.</li>
                <li className="flex items-center gap-2"><BookOpen className="text-blue-400" size={20}/> Memory, coordination, and cognitive development enhanced through musical activities.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Music Programs</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Early Years Music (Ages 2-5)</h3>
                  <p className="text-sm">Playful musical exploration, singing games, and simple instruments.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Music Makers (Ages 6-11)</h3>
                  <p className="text-sm">Instrument exploration, vocal development, and basic music theory through games and performance.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Youth Music Collective (Ages 12-16)</h3>
                  <p className="text-sm">Band development, songwriting, and performance opportunities for budding musicians.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Sensory Music Sessions (All Ages)</h3>
                  <p className="text-sm">Adaptive music exploration for children with diverse sensory needs.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rainbow-blue/10 to-rainbow-yellow/10 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">Music & Academic Success</h3>
            <p className="mb-3">Research consistently shows that musical training enhances:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
              <li className="flex items-center gap-2">
                <Lightbulb className="text-yellow-500" size={18} />
                Mathematical reasoning
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="text-purple-500" size={18} />
                Language development
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="text-blue-500" size={18} />
                Memory function
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb className="text-green-500" size={18} />
                Spatial-temporal skills
              </li>
            </ul>
            <p className="text-sm italic">Our curriculum intentionally builds these connections through cross-curricular musical activities.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Join Music Sessions</Button>
            <Button variant="outline" asChild>
              <a href="/#contact">Book a free taster</a>
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-600">Songs and movement exercises boost memory, teamwork, and a love of learning in every session.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default MusicPage;
