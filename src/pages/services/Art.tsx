
import React from "react";
import { Palette, Star, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Art = () => (
  <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] flex items-center">
    <div className="container px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <Palette size={64} className="mx-auto text-[#9b87f5] mb-6" />
        <h1 className="text-4xl font-bold mb-4">Art Adventures</h1>
        <p className="text-lg text-gray-700 mb-2">
          Ignite imagination and self-expression through joyful art sessions.
        </p>
      </div>
      <div className="bg-white/70 rounded-xl shadow p-6 mb-6">
        <p className="mb-4 text-xl">
          At Rainbow Spark, Art is more than paint and brushes—it's a gateway to confidence, curiosity, and creativity. Children explore techniques in painting, drawing, and sculpture, collaborating on playful, project-based masterpieces.
        </p>
        <ul className="text-base mb-4 space-y-2">
          <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Confidence soars as children proudly share their creations.</li>
          <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Cross-curricular projects build teamwork, literacy & numeracy.</li>
          <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Creative problem-solving skills inspire a lifelong love of learning.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Enrol in Art</Button>
          <Button variant="outline" asChild>
            <a href="#contact">Book a free taster</a>
          </Button>
        </div>
      </div>
      <p className="text-center text-gray-600">Every session includes gentle literacy & numeracy activities through art, developing vital life skills in a nurturing, inclusive space.</p>
    </div>
  </section>
);

export default Art;
