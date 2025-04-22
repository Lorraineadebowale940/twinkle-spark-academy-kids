
import React from "react";
import { Music, Users, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPage = () => (
  <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#D3E4FD] to-[#FEF7CD] flex items-center">
    <div className="container px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <Music size={64} className="mx-auto text-[#1EAEDB] mb-6" />
        <h1 className="text-4xl font-bold mb-4">Music & Rhythm</h1>
        <p className="text-lg text-gray-700 mb-2">
          Discover the power of music to connect, inspire and grow.
        </p>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
        <p className="mb-4 text-xl">
          Our sessions invite every child to sing, play instruments, move and create—no experience needed! As we explore melodies and beats, children gain confidence, make new friends, and strengthen memory and listening skills.
        </p>
        <ul className="text-base mb-4 space-y-2">
          <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Boost confidence with fun performances and creative sound stories.</li>
          <li className="flex items-center gap-2"><Heart className="text-red-400" size={20}/> Music builds self-regulation and leadership skills for life.</li>
          <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Literacy and numeracy reinforced through playful lyrics and rhythm games.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Join Music Sessions</Button>
          <Button variant="outline" asChild>
            <a href="#contact">Book a free taster</a>
          </Button>
        </div>
      </div>
      <p className="text-center text-gray-600">Songs and movement exercises boost memory, teamwork, and a love of learning in every session.</p>
    </div>
  </section>
);

export default MusicPage;
