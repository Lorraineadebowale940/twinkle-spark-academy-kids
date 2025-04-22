
import React from "react";
import { Drama, Star, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const DramaPage = () => (
  <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FFDEE2] to-[#FEF7CD] flex items-center">
    <div className="container px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <Drama size={64} className="mx-auto text-[#F97316] mb-6" />
        <h1 className="text-4xl font-bold mb-4">Drama & Storytelling</h1>
        <p className="text-lg text-gray-700 mb-2">
          Step into a world of imagination—build confidence and joy!
        </p>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
        <p className="mb-4 text-xl">
          From playful improvisation to stagecraft, children develop empathy, public speaking, and creativity as they bring stories to life. Every performance is a celebration of expression and teamwork!
        </p>
        <ul className="text-base mb-4 space-y-2">
          <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Leap in confidence—shine on stage and in life.</li>
          <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Strengthen social skills, teamwork, and leadership in every rehearsal.</li>
          <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Cross-curricular scripts develop literacy, numeracy and problem-solving.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Sign Up for Drama</Button>
          <Button variant="outline" asChild>
            <a href="#contact">Book a free taster</a>
          </Button>
        </div>
      </div>
      <p className="text-center text-gray-600">Drama at Rainbow Spark gives every child a voice—communication, comprehension and friendships grow on and off stage.</p>
    </div>
  </section>
);

export default DramaPage;
