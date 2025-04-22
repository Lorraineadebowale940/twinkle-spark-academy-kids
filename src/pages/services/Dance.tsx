
import React from "react";
import { Users, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const DancePage = () => (
  <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FEC6A1] to-[#F2FCE2] flex items-center">
    <div className="container px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <svg width="64" height="64" className="mx-auto mb-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FEC6A1" strokeWidth="2"/><path d="M11 9v3a1 1 0 001 1h1m-5-3 3-1m0 0-.5 2.5m.5-2.5 2 6a1 1 0 001.9-.4l-.4-2.1m1.7-1.7c0 .8.7 1.5 1.5 1.5s1.4-.7 1.4-1.5-.6-1.4-1.4-1.4-1.5.6-1.5 1.4Z" stroke="#F97316" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <h1 className="text-4xl font-bold mb-4">Dance & Movement</h1>
        <p className="text-lg text-gray-700 mb-2">
          Move, groove, and grow—inclusive dance for every child!
        </p>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
        <p className="mb-4 text-xl">
          From ballet to hip-hop and cultural dance, children leap into rhythm while enhancing coordination, memory, and body confidence. Sessions are inclusive, joyful, and welcoming to all abilities!
        </p>
        <ul className="text-base mb-4 space-y-2">
          <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Inspires self-confidence and a love of movement.</li>
          <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Develops teamwork and leadership through group routines and games.</li>
          <li className="flex items-center gap-2"><Heart className="text-red-400" size={20}/> Cross-curricular projects link dance, numeracy, and literacy for holistic learning.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Join Dance Now</Button>
          <Button variant="outline" asChild>
            <a href="#contact">Book a free taster</a>
          </Button>
        </div>
      </div>
      <p className="text-center text-gray-600">Let your child twirl, jump, and create—every step unlocks new skills for learning and life!</p>
    </div>
  </section>
);

export default DancePage;
