
import React from "react";
import { Users, Star, Heart, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DancePage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FEC6A1] to-[#F2FCE2] flex items-center">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <svg width="64" height="64" className="mx-auto mb-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FEC6A1" strokeWidth="2"/><path d="M11 9v3a1 1 0 001 1h1m-5-3 3-1m0 0-.5 2.5m.5-2.5 2 6a1 1 0 001.9-.4l-.4-2.1m1.7-1.7c0 .8.7 1.5 1.5 1.5s1.4-.7 1.4-1.5-.6-1.4-1.4-1.4-1.5.6-1.5 1.4Z" stroke="#F97316" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <h1 className="text-4xl font-bold mb-4">Dance & Movement</h1>
          <p className="text-lg text-gray-700 mb-2">
            Move, groove, and grow—inclusive dance for every child!
          </p>
        </div>
        <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
          <p className="mb-6 text-xl">
            From ballet to hip-hop and cultural dance, children leap into rhythm while enhancing coordination, memory, and body confidence. Sessions are inclusive, joyful, and welcoming to all abilities!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">The Rainbow Spark Approach</h2>
              <p>Our dance programs focus on self-expression, physical awareness, and cultural exploration, creating a foundation for lifelong movement confidence and creativity.</p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="text-red-400" size={20}/>
                Learning Outcomes
              </h3>
              <ul className="text-base mb-4 space-y-2">
                <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Inspires self-confidence and a love of movement.</li>
                <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Develops teamwork and leadership through group routines and games.</li>
                <li className="flex items-center gap-2"><Heart className="text-red-400" size={20}/> Cross-curricular projects link dance, numeracy, and literacy for holistic learning.</li>
                <li className="flex items-center gap-2"><BookOpen className="text-blue-400" size={20}/> Physical coordination, spatial awareness, and rhythm improve with every step.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Dance Programs</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Creative Movement (Ages 3-6)</h3>
                  <p className="text-sm">Exploratory dance games, basic coordination, and imaginative movement stories.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Dance Discovery (Ages 7-11)</h3>
                  <p className="text-sm">Introduction to various dance styles, choreography basics, and performance skills.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Dance Collective (Ages 12-16)</h3>
                  <p className="text-sm">Advanced technique, choreography creation, and performance opportunities.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Adaptive Dance (All Ages)</h3>
                  <p className="text-sm">Movement exploration for children of all physical abilities and mobility levels.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rainbow-orange/10 to-rainbow-green/10 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">Dance Styles We Explore</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-3">
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Ballet</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Hip Hop</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Contemporary</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">African</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Bollywood</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Folk</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Street</span>
              </div>
              <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                <span className="font-medium">Creative</span>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <Lightbulb className="text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Each style is adapted to be accessible for all bodies and abilities, with a focus on cultural appreciation and historical context.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Join Dance Now</Button>
            <Button variant="outline" asChild>
              <a href="/#contact">Book a free taster</a>
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-600">Let your child twirl, jump, and create—every step unlocks new skills for learning and life!</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default DancePage;
